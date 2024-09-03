const morgan = require(`morgan`);
const express = require("express");
const app = express();
app.use(express.json());

app.use(morgan(`dev`));

menuRouter = require(`./routes/menuRoutes`);
userRouter = require(`./routes/userRoutes`);

const homePage = (req, res) => {
  console.log(req.params);
  // console.log(res);
  res.status(200).send("Hello from server side");
};

// app.post("/:id", homePage);
// app.get(`/api/v1/alluser`,getAllUser)
// app.post(`/api/v1/user`,createUser)
// app.patch(`/api/v1/user/:id`,updateUser)
// app.delete(`/api/v1/user/:id`,deleteUser)

app.use(`/api/v2/menu`, menuRouter);
app.use(`/api/v2/user`, userRouter);

app.all('*',(req,res,next)=>{ 
  res.status(404).json({
    status : "fail",
    message : `can't find ${req.originalUrl} on this server!`
  })

})

app.use((err,req,res,next)=>{
    err.status = err.status || 500
    err.message = err.message || `Error`
})

module.exports = app;
