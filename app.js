import express from "express";
import cors from "cors";
import APIRoutes from "./routes/APIRoutes.js";

const app = express();

// const URI =
//   "mysql://u1gobrjjf49detfd:32FbYp1ckFiMC4E6NvfG@bddckkdnjivfs6dkkxcg-mysql.services.clever-cloud.com:3306/bddckkdnjivfs6dkkxcg";

app.use(cors());
app.use(express.json());

app.use("/api", APIRoutes);
app.use("/", (req, res) => {
  res.status(200).send({ status: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
