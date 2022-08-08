const fs = require("fs");

class Container {
  constructor(products, fileName) {
    this.fileName = fileName;
    this.products = [];
  }
  save = async (obj) => {

    try {

      obj.id = this.getId(); 

      this.products.push(obj);

      return obj.id;

    } catch (err) {
      console.log(err);
    }
  
      if (data.length == 0) {
        obj.id = 1;

        // creo un array primero para crear un json en products.txt.
        await fs.promises.writeFile(
          `./resources/${this.fileName}`,
          JSON.stringify(new Array(obj))
        );

        return obj;
      } else {
        let fileContent = JSON.parse(data);

        // traigo el maximo id del array de objetos.
        let maxId = fileContent.reduce((prev, curr) =>
          prev.id > curr.id ? prev : curr
        );

        // le asigno un nuevo id al nuevo objeto.
        obj.id = Number(maxId.id) + 1;
        // pusheo el nuevo objeto al array de objetos, ahora este con el nuevo maximo id.
        fileContent.push(obj);

        await fs.promises.writeFile(
          `./resources/${this.fileName}`,
          JSON.stringify(fileContent)
        );

        return obj;
      }
  };

      //creo la funcion para traer todos los productos
  getAll = async () => {
    try {
      return Promise.resolve(this.products)
    } catch (err) {
       console.log(err);
    }
  };
  
}

module.exports = Container;
