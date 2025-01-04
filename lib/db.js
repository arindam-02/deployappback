import mysql from "mysql2/promise.js";

export const connectToDatabase = async () => {
  const connection = await mysql.createConnection({
    host: "bddckkdnjivfs6dkkxcg-mysql.services.clever-cloud.com",
    user: "u1gobrjjf49detfd",
    password: "32FbYp1ckFiMC4E6NvfG",
    database: "bddckkdnjivfs6dkkxcg",
    port: 3306,
  });

  return connection;
};

// export const connectToDatabase = async () => {
//   const connection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   });

//   return connection;
// };

// # DB_HOST="bddckkdnjivfs6dkkxcg-mysql.services.clever-cloud.com"
// # DB_USER="u1gobrjjf49detfd"
// # DB_PASSWORD="32FbYp1ckFiMC4E6NvfG"
// # DB_NAME="bddckkdnjivfs6dkkxcg"
// # JWT_SECRET_KEY="mysecretkey"
// # PORT=3306
// # MASTER_PASSWORD="@admin"
