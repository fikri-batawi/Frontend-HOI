module.exports = app => {
    const user = require("../controllers/user.controller");

    var router = require("express").Router();

    // Create a new User
    router.post("/", user.create);

    // Retrieve all Users
    router.get("/", user.findAll);

    // Update a User with id
    router.put("/:id", user.update);

    // Delete a User with id
    router.delete("/:id", user.delete);

    app.use('/api/users', router);
};