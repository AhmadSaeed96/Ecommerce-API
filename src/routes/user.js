import { Router } from "express";
import User from "../modles/user.model.js";
import { isAdmin } from "../Middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/users", (req, res) => {
  res.send("hello user");
});
userRouter.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "USercarated" });
});

export default userRouter;
