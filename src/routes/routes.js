import { Router } from "express";
import { uploadFiles } from "../controllers/fileController.js";
import {
  createNewChat,
  fetchChat,
  fetchUserChats,
  saveChats,
} from "../controllers/chatControllers.js";
import { requireAuth } from "@clerk/express";

const appRouter = Router();

// appRouter.get("/test", requireAuth(), (req, res) => {
//   const userId = req.auth.userId;
//   console.log(userId);
//   res.send("it works");
// });

// Upload files to Imagekit Server
appRouter.get("/upload", uploadFiles);

//save conversations
appRouter.put("/chat/new/:id", saveChats);

//Create a new UserChat
appRouter.post("/chat/newChat", createNewChat);

//Fetch user chats
appRouter.get("/chat/userChats", fetchUserChats);

//Fetch chats of that particular id
appRouter.get("/chat/:id", fetchChat);

export default appRouter;
