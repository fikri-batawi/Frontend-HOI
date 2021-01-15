const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'hoi-toy.c51a1p5uvmmq.ap-southeast-1.rds.amazonaws.com',
  database: 'hoitest',
  password: 'postgres123',
  port: 5432,
})
exports.getUserGames =  (request, response) => {
    const sql = 'SELECT "users"."id", "users"."name", "users"."about", "users"."created_at" AS "createdAt", "users"."updated_at" AS "updatedAt", "games"."id" AS "games_id", "games"."game_name", "games->user_game"."type" AS "type" FROM "users" AS "users" INNER JOIN ( "user_game" AS "games->user_game" INNER JOIN "games" AS "games" ON "games"."id" = "games->user_game"."game_id") ON "users"."id" = "games->user_game"."user_id" ORDER BY games_id ASC'

    pool.query(sql,(error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}