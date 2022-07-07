const fs = require("fs");

class Contenedor{
  constructor(ProductName) {
    this.productName = ProductName;
  }

  //save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
  save = async (obj) => {
    try {
      let info = await fs.promises.readFile(`./resources/${this.productName}`,"utf-8");

      if (info.length == 0) {
        obj.id = 1;

        await fs.promises.writeFile(`./resources/${this.productName}`,JSON.stringify(new Array(obj)));
        
        return obj.id;} 

      else {
        let fileContent = JSON.parse(info);

        let maxId = fileContent.reduce((prev, curr) =>
          prev.id > curr.id ? prev : curr);

        // Le asigno un id al nuevo objeto.
        obj.id = Number(maxId.id) + 1;
        fileContent.push(obj);

        await fs.promises.writeFile( `./resources/${this.productName}`, JSON.stringify(fileContent));
        return obj.id;}} 

    catch (err) {
      console.log("error",err);
    }
  };


 //getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
  getById = async (id) => {
    try {
      let info = await fs.promises.readFile(`./resources/${this.productName}`,"utf-8");
      let content = JSON.parse(info);

      // Filtro el array de objetos para encontrar el id.
      let value = content.filter((item) => item.id == id);

      // Si el id no existe retorno null.
      return value.length ? value : null;} 

    catch (err) {
        console.log("error",err);
    }
  };


//getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
  getAll = async () => {
    try {
      let info = await fs.promises.readFile( `./resources/${this.ProductName}`,"utf-8");
      return JSON.parse(info);}

    catch (err) {
        console.log("error",err);
    }
  };


//deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
  deleteById = async (id) => {
    try {
      let info = await fs.promises.readFile(`./resources/${this.ProductName}`,"utf-8"
      );
      let content = JSON.parse(info);

      // filtrar los productos.
      let contentEdited = content.filter((item) => item.id !== id);

      await fs.promises.writeFile(`./resources/${this.ProductName}`,JSON.stringify(contentEdited));

      console.log(`El producto con el id ${id} fue removido.`);} 

    catch (err) {
        console.log("error",err);
    }
  };


//deleteAll(): void - Elimina todos los objetos presentes en el archivo.
  deleteAll = async () => {
    try {
      await fs.promises.writeFile(`./resources/${this.ProductName}`, "");
      console.log("El archivo esta vacio.");} 
    catch (err) {
        console.log("error",err);
    }
  };
}

module.exports = Contenedor;
