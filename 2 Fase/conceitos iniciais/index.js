const express = require("express");

const server = express();
server.use(express.json())
// Query params = ?teste=1
// route params user/1
const users = ["ismael", "denilson", "max"];
server.get('/users', (req, res)=>{
  return res.json(users)
})

server.get("/users/:index", (req, res) => {  
  const index = req.params.index;
  return res.send(`hello ${users[index]} com id: ${index}`);
});

server.post('/users', (req, res)=>{
  const {name}= req.body
  
  users.push(name)

  return res.json(users)
})

server.put('/users/:id', (req, res)=>{
  const {id}= req.params 
  const {name}= req.body
  users[id] = name 
  return res.json(users)
})
server.listen(3000, () => {
  console.log("Serve running");
});
