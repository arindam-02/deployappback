import { connectToDatabase } from "../lib/db.js";

const home = (req, res) => {
  try {
    res.status(200).json("success! this is homepage ");
  } catch (error) {
    console.log(error);
  }
};

const users = async (req, res) => {
  try {
    const db = await connectToDatabase();
    let [userData] = await db.query("SELECT * from users");
    res.status(200).send({ status: true, userData });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { home, users };
