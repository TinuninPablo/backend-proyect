const Contenedor = require('./class')

let item = new Contenedor("products.txt");

// 1-Para guardar un nuevo objeto
item.save({
  title: "Monitores",
  price: 300.97,
  thumbnail:"https://http2.mlstatic.com/D_NQ_NP_2X_859975-MLA48689271995_122021-F.webp",
 })
.then((res) => console.log(res));

// 2- Para retornar el objeto segun id.
//item.getById(3).then((res) => console.log(res));

// 3- Para retornar todos los objtos.
// item.getAll().then(res => console.log(res))

// 4- Para eliminar por id.
// item.deleteById(1);

// 5- Para eliminar todo.
// item.deleteAll();