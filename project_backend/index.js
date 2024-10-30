const express = require("express");
const app = express();

app.get("/", (request, response)=>{
    response.send("<div>ppppppsdssssssppppppp</div>");
});

app.get("/abc", (request, response)=>{
    response.statusCode = 500;
    response.send("<div>abc</div>");
});

app.post("/abc", (request, response)=>{
    response.statusCode = 500;
    response.send("<div>abc</div>");
});

app.put("/abc", (request, response)=>{
    response.statusCode = 500;
    response.send("<div>abc</div>");
});

app.delete("/abc", (request, response)=>{
    response.statusCode = 500;
    response.send("<div>abc</div>");
});

//sci/4c/abc

const sci_router = express.Router();
sci_router.get("/", (request, response)=>{
    response.send("<div>sci</div>");
});

sci_router.get("/json", (request, response)=> {
    const data = {
        key1: "text",
        key2: "text",
        key3: 12,
    }
    response.json(data);
});

app.use("/sci/4c/abc", sci_router);

app.listen(8000, ()=>{
    console.log("serwer starten");
});