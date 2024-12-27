import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userroutes.js";
 import Auth from "./routes/Auth.js"
const app = express();
dotenv.config();
const port = process.env.PORT || 8000;  // Change to a different port, like 5001




 connectDB();


app.use(express.json());
app.use(cors());
app.use(cookieParser())

// Import routes


// Use routes

 app.use("/auth", Auth)
  app.use("/users", userRoutes);
// Routes
// app.get("/", (req, res) => {
//   res.send("Hellotyhgryjhgfdfg, world!");
// });

app.get("*", (req, res) => {
  res.redirect("/");
}
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
