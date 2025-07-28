import express from "express"
import cookieParser from "cookie-parser"
const app = express()


app.use(express.json())
app.use(cookieParser())


// impored routes
 import userRouter from "./routes/user.routes.js"
import noteRoutes from "./routes/blog.routes.js"

import cors from "cors";

app.use(cors({
  origin: "http://localhost:5173", // Vite default port
  credentials: true
}));

// routes
app.use("/api/v1/users", userRouter)
 app.use("/api/v1/note", noteRoutes)


export default app