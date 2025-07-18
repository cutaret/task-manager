const express= require('express');
const app = express();
require('dotenv').config();
require('./conn/conn');
const cors =require('cors');
const TaskAPI=require('./routes/task');

app.use(cors());
app.use(express.json());
const UserAPI=require('./routes/user');

app.use("/api/v1",UserAPI);
app.use("/api/v2",TaskAPI);

// localhost:1000/api/v1/sign-in
app.use("/",(req,res)=>{
       res.send("Hello from the backend!");
   });
const PORT=1000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
