import express from "express";
import userRouter from "./src/routes/user.js"; 
const app = express();
app.use(userRouter);


app.listen(5000, () => {
  console.log("done");
});
