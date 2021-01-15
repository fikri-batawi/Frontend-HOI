module.exports = (sequelize, Sequelize) => {
    const User_game = sequelize.define("user_game", {
        user_id: {
            type: Sequelize.INTEGER
        },
        game_id: {
            type: Sequelize.INTEGER
        },
        type: {
            type: Sequelize.STRING
        },
    },{
        timestamps :false
    });
  
    return User_game;
  };