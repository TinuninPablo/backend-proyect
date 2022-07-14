const Contenedor = require("../Clase3y4/class.js")
const express = require('express')
const app = express();
const PORT = 8080;

app.get("/",(req,res)=>{
    res.send("<h1 style='color:lightblue,'>Bienvenidos al tercer ejercicio, ponga '/productos' para ver todos los productos y '/productoRamdom' para traer un producto aleatorio</h1>")
});

//traigo la clase contenedor del anterior ejercicio
let contenedor = new Contenedor("products.txt");
console.log("lo que hay en el contenedor es:",contenedor)

app.get("/productos",async (req,res)=>{
    let info;
    try{
        info = await contenedor.getAll();
    }catch(err){
        console.log("error",err)
    }
    res.send(info)
    console.log("la info es",info)
});

app.get("/productoRandom", async (req,res) =>{
    let info;
    try{
        info = await contenedor.getAll();
        
        info = info[Math.floor(Math.random() * info.length)];
    }catch(err){
        console.log("error",err);
    }
    res.send(info);
});



const server = app.listen(PORT,() =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
} )
server.on("error",error=>console.log(`Error en servidor ${error}`))

