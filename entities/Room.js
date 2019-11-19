module.exports = {
  validateRoom,
  buildGraph
};

function validateRoom(room) {
  const {
    room_id,
    title,
    description,
    coordinates,
    elevation,
    terrain,
    items,
    exits
  } = room;
  let errors = [];
  if (room_id === undefined) {
    errors.push("Please provide the ID of the Room");
  }
  if (!title) {
    errors.push("Please provide the title of the Room");
  }
  if (!description) {
    errors.push("Please provide the description of the Room");
  }
  if (!coordinates) {
    errors.push("Please provide the coordinates of the Room");
  }
  if (elevation === undefined) {
    errors.push("Please provide the elevation of the Room");
  }
  if (!terrain) {
    errors.push("Please provide the terrain of the Room");
  }
  if (!items) {
    errors.push("Please provide the items of the Room");
  }
  if (!exits) {
    errors.push("Please provide the exits of the Room");
  }
  let success = errors.length === 0;
  let message = success
    ? ""
    : "There is missing information for the request. See errors for details";
  return {
    success,
    message,
    errors
  };
}

function buildGraph(rooms) {
  // build graph of rooms
  let graph = {};
  // loop through rooms, turn coordinates string to coordinate array [x, y]
  rooms.forEach(r => {
    graph[r.room_id] = {};
    let [x, y] = parseCoordinates(r.coordinates);
    // find rooms with coordinates matching destination
    let n = rooms.find(r => r.coordinates === `(${x},${y + 1})`);
    let s = rooms.find(r => r.coordinates === `(${x},${y - 1})`);
    let e = rooms.find(r => r.coordinates === `(${x + 1},${y})`);
    let w = rooms.find(r => r.coordinates === `(${x - 1},${y})`);
    // if room exists return room id, else return question mark
    r.exits.forEach(ex => {
      if (ex === "n" && n) graph[r.room_id][ex] = n.room_id;
      else if (ex === "s" && s) graph[r.room_id][ex] = s.room_id;
      else if (ex === "e" && e) graph[r.room_id][ex] = e.room_id;
      else if (ex === "w" && w) graph[r.room_id][ex] = w.room_id;
      else graph[r.room_id][ex] = "?";
    });
  });
  return graph;
}

function parseCoordinates(string) {
  let [x, y] = string.slice(1, string.length - 1).split(",");
  return [x, y].map(Number);
}
