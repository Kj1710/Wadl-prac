const http=require("http")

const server = http.createServer((req,res) =>{
    res.end("Server Created Successfully")
})

server.listen(8000, "127.0.0.1" ,()=>{
    console.log("Server Listening on port 8080")
} )