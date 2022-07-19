const express = rquire("express");
const app = express();

const personas =[];
const mascotas =[];
//utilizar JSON en las request(cuerpo)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routerPersona = Router();
const routerMascotas = Router();

//Rutas para personas
//GET
routerPersona.get("/",(req,res) =>{
    res.json(personas);
});
routerPersona.post("/", (req,res) =>{
    //hay 3 formas de hacerlo
    //1-
    //const nombre = req.body.nombre;
    //const apellido = req.body.apellido;
    //const edad = req.body.edad
    //2-
    //const {nombre,apellido,edad}=req.body
    //personas.push({nombre,apellido,edad})
    //3-
    const persona = req.body;
    personas.push(persona)
});

app.use("/personas",routerPersona)
//Rutas para mascotas
routerMascotas.get("/", (req,res)=>{
    res.json(mascotas)
});
routerMascotas.post("/",(req,res)=>{
    //hay 3 formas de hacerlo
    //1-
    //const nombre = req.body.nombre;
    //const raza = req.body.raza;
    //const edad = req.body.edad
    //2-
    //const {nombre,raza,edad}=req.body
    //personas.push({nombre,raza,edad})
    //3-
    const persona = req.body;
    personas.push(persona)
});

app.use("/mascotas", routerMascotas)

const PORT =3000;
const server = app.listen(PORT,() =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
} )
server.on("error",error=>console.log(`Error en servidor ${error}`))
