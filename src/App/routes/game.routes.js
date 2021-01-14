module.exports = app => {
    const game = require("../controllers/game.controller");

    var router = require("express").Router();

    // Create a new Game
    router.post("/", game.create);

    // Retrieve all Games
    router.get("/", game.findAll);

    // Update a Game with id
    router.put("/:id", game.update);

    // Delete a Game with id
    router.delete("/:id", game.delete);

    app.use('/api/games', router);
};