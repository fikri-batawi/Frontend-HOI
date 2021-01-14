module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("games", {
        game_name: {
            type: Sequelize.STRING
        },
        slug: {
            type: Sequelize.STRING
        },
        desc: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        image_thumb: {
            type: Sequelize.STRING
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('NOW()')
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('NOW()')
        },
    },{
        timestamps :false
    });
  
    return Game;
  };