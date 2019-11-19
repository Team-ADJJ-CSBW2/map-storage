exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("rooms").insert([
    {
      room_id: 0,
      title: "A brightly lit room",
      description:
        "You are standing in the center of a brightly lit room. You notice a shop to the west and exits to the north, south and east.",
      coordinates: "(60,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 1,
      title: "Shop",
      description:
        "You are standing in a small shop. A sign behind the mechanical shopkeeper says 'WILL PAY FOR TREASURE'.",
      coordinates: "(59,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e"]
    },
    {
      room_id: 2,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 4,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 6,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,58)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 7,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,58)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 8,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "w"]
    },
    {
      room_id: 10,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 16,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 19,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 20,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 23,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "e"]
    },
    {
      room_id: 27,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 28,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n"]
    },
    {
      room_id: 30,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 31,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 32,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 33,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e", "w"]
    },
    {
      room_id: 38,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 39,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 40,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 41,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 43,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e", "w"]
    },
    {
      room_id: 46,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 47,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 51,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure", "tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 53,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 54,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["w"]
    },
    {
      room_id: 56,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,58)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 57,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 58,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "w"]
    },
    {
      room_id: 59,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 61,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,58)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e", "w"]
    },
    {
      room_id: 62,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 63,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 64,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "w"]
    },
    {
      room_id: 65,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 66,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 67,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 69,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 71,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 72,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "w"]
    },
    {
      room_id: 73,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 74,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 76,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 77,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure", "tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 82,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 83,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 84,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 87,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 88,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 91,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 92,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 94,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s"]
    },
    {
      room_id: 95,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 99,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(55,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 101,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 103,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 104,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure", "tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 107,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 110,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 113,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(55,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "e"]
    },
    {
      room_id: 114,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(55,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 115,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 116,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure", "tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 119,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s"]
    },
    {
      room_id: 120,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e"]
    },
    {
      room_id: 121,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 122,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 123,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["w"]
    },
    {
      room_id: 124,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 125,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 127,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 128,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "e"]
    },
    {
      room_id: 130,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["w"]
    },
    {
      room_id: 132,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 134,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 139,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 143,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 144,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 145,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 146,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(54,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 147,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 151,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 152,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 153,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e", "w"]
    },
    {
      room_id: 155,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 157,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 160,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 161,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e"]
    },
    {
      room_id: 162,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e"]
    },
    {
      room_id: 165,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 169,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e"]
    },
    {
      room_id: 171,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,58)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e"]
    },
    {
      room_id: 172,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 174,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 176,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(54,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 177,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(54,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 180,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s"]
    },
    {
      room_id: 182,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 184,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 186,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 187,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n"]
    },
    {
      room_id: 188,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(55,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e", "w"]
    },
    {
      room_id: 189,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e", "w"]
    },
    {
      room_id: 190,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(55,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 191,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s"]
    },
    {
      room_id: 192,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 200,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 201,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 203,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 204,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 205,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 206,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 207,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 208,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e"]
    },
    {
      room_id: 210,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s"]
    },
    {
      room_id: 212,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(68,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure", "tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 215,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(54,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 216,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(56,67)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 218,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(55,67)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 219,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 220,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["w"]
    },
    {
      room_id: 221,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(68,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 223,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "w"]
    },
    {
      room_id: 224,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["w"]
    },
    {
      room_id: 227,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s"]
    },
    {
      room_id: 231,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "w"]
    },
    {
      room_id: 234,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(56,68)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 237,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 240,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(69,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 241,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e"]
    },
    {
      room_id: 242,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(54,67)",
      elevation: 0,
      terrain: "TRAP",
      items: ["tiny treasure"],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 245,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,66)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e"]
    },
    {
      room_id: 246,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(54,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 248,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 249,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(69,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 252,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(55,68)",
      elevation: 0,
      terrain: "CAVE",
      items: [],
      exits: ["n", "e"]
    },
    {
      room_id: 253,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(68,58)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e"]
    },
    {
      room_id: 254,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 255,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(68,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["w"]
    },
    {
      room_id: 257,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(53,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 258,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(69,58)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 259,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(54,66)",
      elevation: 0,
      terrain: "CAVE",
      items: [],
      exits: ["n", "w"]
    },
    {
      room_id: 263,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(55,66)",
      elevation: 0,
      terrain: "CAVE",
      items: [],
      exits: ["n"]
    },
    {
      room_id: 265,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(69,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 266,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(68,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 267,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 268,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 269,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 270,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(70,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 271,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 275,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You notice a cave entrance to the east and cliffside landmark to the west.",
      coordinates: "(53,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure", "tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 279,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(69,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 280,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 282,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(70,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 283,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 284,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(55,69)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 285,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s"]
    },
    {
      room_id: 286,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,73)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 287,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(54,68)",
      elevation: 0,
      terrain: "CAVE",
      items: [],
      exits: ["s", "w"]
    },
    {
      room_id: 288,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 290,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e"]
    },
    {
      room_id: 291,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,73)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 296,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 299,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 302,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(55,70)",
      elevation: 0,
      terrain: "TRAP",
      items: ["tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 303,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(54,69)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n", "e", "w"]
    },
    {
      room_id: 306,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(70,58)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 310,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(53,66)",
      elevation: 0,
      terrain: "CAVE",
      items: [],
      exits: ["e", "w"]
    },
    {
      room_id: 311,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 312,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e"]
    },
    {
      room_id: 313,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(68,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 314,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(55,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 316,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 319,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,73)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 320,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(53,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 325,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 328,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 329,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 331,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e"]
    },
    {
      room_id: 332,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s"]
    },
    {
      room_id: 335,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(54,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 336,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(62,74)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 337,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 338,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(71,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "w"]
    },
    {
      room_id: 344,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 345,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,73)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "w"]
    },
    {
      room_id: 346,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(53,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 347,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,73)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 348,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(53,65)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 350,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 353,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 357,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["w"]
    },
    {
      room_id: 359,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(63,74)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 361,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(54,70)",
      elevation: 0,
      terrain: "TRAP",
      items: [],
      exits: ["n", "s"]
    },
    {
      room_id: 363,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e"]
    },
    {
      room_id: 364,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(52,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s", "e", "w"]
    },
    {
      room_id: 368,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(56,69)",
      elevation: 0,
      terrain: "CAVE",
      items: [],
      exits: ["s"]
    },
    {
      room_id: 372,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 374,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure", "tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 375,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(64,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 379,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(71,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n", "e"]
    },
    {
      room_id: 380,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 381,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(52,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 385,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 386,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(70,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 390,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 392,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e"]
    },
    {
      room_id: 394,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(51,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 395,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(72,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 397,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(71,58)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 402,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(53,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e", "w"]
    },
    {
      room_id: 403,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(72,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n"]
    },
    {
      room_id: 404,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 405,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(53,69)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 406,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(53,70)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["s", "w"]
    },
    {
      room_id: 408,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(54,71)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n", "s", "w"]
    },
    {
      room_id: 410,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(61,74)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s"]
    },
    {
      room_id: 411,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(59,69)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["w"]
    },
    {
      room_id: 412,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(52,66)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["s", "e"]
    },
    {
      room_id: 414,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(71,59)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 415,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(52,70)",
      elevation: 0,
      terrain: "TRAP",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 416,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(70,62)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s"]
    },
    {
      room_id: 418,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(51,70)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n", "s", "e"]
    },
    {
      room_id: 421,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(73,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n", "w"]
    },
    {
      room_id: 422,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(55,71)",
      elevation: 0,
      terrain: "TRAP",
      items: ["tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 423,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(53,71)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 424,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(65,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e"]
    },
    {
      room_id: 425,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(51,71)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["s", "w"]
    },
    {
      room_id: 426,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(55,72)",
      elevation: 0,
      terrain: "TRAP",
      items: ["tiny treasure"],
      exits: ["n", "s"]
    },
    {
      room_id: 429,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(52,64)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s"]
    },
    {
      room_id: 436,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(57,73)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s"]
    },
    {
      room_id: 440,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(73,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "w"]
    },
    {
      room_id: 441,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(56,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 442,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,72)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["n"]
    },
    {
      room_id: 446,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(68,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 448,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(51,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e"]
    },
    {
      room_id: 451,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(52,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 452,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(60,74)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 453,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(51,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e"]
    },
    {
      room_id: 454,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(52,71)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n", "e"]
    },
    {
      room_id: 456,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You notice a cave entrance to the east and cliffside landmark to the west.",
      coordinates: "(52,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["e", "w"]
    },
    {
      room_id: 457,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(55,73)",
      elevation: 0,
      terrain: "TRAP",
      items: [],
      exits: ["n", "s"]
    },
    {
      room_id: 458,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(54,72)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["s", "w"]
    },
    {
      room_id: 459,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(53,72)",
      elevation: 0,
      terrain: "CAVE",
      items: [],
      exits: ["e"]
    },
    {
      room_id: 461,
      title: "Linh's Shrine",
      description:
        "You are standing before a glowing shrine to a Linh, the Swift. She looks quite fast.",
      coordinates: "(55,74)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 462,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,70)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 464,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(51,60)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n"]
    },
    {
      room_id: 466,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(69,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["s", "e", "w"]
    },
    {
      room_id: 469,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(50,71)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 470,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(52,72)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["s"]
    },
    {
      room_id: 472,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(70,68)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 473,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(66,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e", "w"]
    },
    {
      room_id: 474,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(51,69)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n"]
    },
    {
      room_id: 476,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(72,61)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["e"]
    },
    {
      room_id: 479,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(68,63)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    },
    {
      room_id: 481,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(58,73)",
      elevation: 0,
      terrain: "NORMAL",
      items: [],
      exits: ["s"]
    },
    {
      room_id: 486,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(69,67)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["n"]
    },
    {
      room_id: 488,
      title: "A Dark Cave",
      description: "You are standing in a dark cave.",
      coordinates: "(52,65)",
      elevation: 0,
      terrain: "CAVE",
      items: ["tiny treasure"],
      exits: ["n"]
    },
    {
      room_id: 494,
      title: "A misty room",
      description:
        "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.",
      coordinates: "(67,71)",
      elevation: 0,
      terrain: "NORMAL",
      items: ["tiny treasure"],
      exits: ["w"]
    }
  ]);
};
