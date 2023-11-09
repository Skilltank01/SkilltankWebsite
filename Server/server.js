import app from "./app.js";
import { connectDB } from "./config/Database.js";

connectDB()

app.listen(process.env.PORT, ()=>{
console.log(`skilltank server is working on port : ${process.env.PORT}`)
})