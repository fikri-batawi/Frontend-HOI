module.exports = app => {
    const user_game = require("../controllers/user_game.controller");

    var router = require("express").Router();

    // Retrieve all Users
    router.get("/", user_game.getUserGames);

    app.use('/api/user-game', router);
};