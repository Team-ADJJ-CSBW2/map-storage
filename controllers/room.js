const express = require("express");

const Rooms = require("../models/rooms");

const router = express.Router();
const { validateRoom, buildGraph } = require("../entities/Room");

// GET
router
  .route("/")
  .get(async (req, res) => {
    try {
      // get all rooms and sort by room id
      const rooms = await Rooms.find();
      rooms.sort((a, b) => a.room_id - b.room_id);

      const graph = buildGraph(rooms);

      res.status(200).json({ rooms, graph });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "The listing of rooms could not be retrieved."
      });
    }
  })
  .post(async (req, res) => {
    const { message, errors, success } = validateRoom(req.body);
    if (success) {
      const { room_id } = req.body;
      try {
        const exist = await Rooms.find({ room_id: room_id }).first();
        if (exist) {
          return res.status(400).json({ message: "Room already exists!" });
        }
        const rooms = await Rooms.add(req.body);
        rooms.sort((a, b) => a.room_id - b.room_id);

        const graph = buildGraph(rooms);

        res.status(201).json({
          rooms,
          graph
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: "There was an error while adding the room to the rooms list"
        });
      }
    } else {
      res.status(400).json({
        message,
        errors
      });
    }
  })
  .delete(async (req, res) => {
    const deleted = await Rooms.remove({ id: req.body.id });
    if (deleted) {
      res.status(200).json({
        message: "Room successfully deleted."
      });
    } else {
      res.status(404).json({ message: "That room does not exist." });
    }
  });

module.exports = router;
