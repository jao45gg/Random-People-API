import pg from "pg";
import { config } from "dotenv";

const { Pool } = pg;
config();

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.MODE === "prod",
};

console.log(process.env.DB_HOST);
const db = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE 
});

db.connect()
  .then(client => {
    console.log("Connected to PostgreSQL database");
    client.release();
  })
  .catch(err => {
    console.error(err);
  });

export default db;
