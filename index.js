/*
    Map Building

    Persistent Storage of map info?!?! Back-end?
    If so then we can traverse the map as a team, saving data.

    Api Keys?

    Walking:
        setTimeout(() => {
            
        }, timeout = room.cooldown?);
        Random int 0-4
        If 
*/

const dotenv = require("dotenv");
dotenv.config();

const server = require("./api/server.js");

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`**** Server listening on port ${PORT}. ****`);
});
