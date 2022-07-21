const express = require("express");
const productsRoutes = require("./routes/products");
const HttpError = require("./models/http-error");
const app = express();

const PORT = process.env.PORT || 8080;

// Aceptar la data en formato JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para el cuestionario(index)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/api/productos", productsRoutes);

app.use((req, res, next) => {
  const error = new HttpError("No se encontro la ruta", 404);
  throw error;
});

app.listen(PORT, () => {
  console.log(`Escuchando el puerto ${PORT}`);
});

app.on("error", (error) => console.log(`Error: ${error}`));
