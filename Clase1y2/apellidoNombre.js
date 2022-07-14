//1-Declarar clase usuario
class Usuario{
    //2-Asignarle los atributos nombre,apellido,libros,mascotas
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    //3-Metodo que retorna el nombre completo del usuario
    getFullName(){
        console.log(`Bienvenido ${this.nombre} ${this.apellido}`)
    }
    //3-Metodo que retorna la cantidad de mascotas(valor numerico).
    countMascotas(){
        console.log(`Tu cantidad de mascotas es: ${this.mascotas} `);
    }
    //3-Metodo que agrega objetos al array de libros
    addBook(titulo, autor) {
        this.libros.push({nombre: titulo, autor: autor});
        console.log(`Se añadio el libro ${titulo} del autor ${autor} a tu coleccion de libros.`);
    }
    //3-Metodo que retorna el array del libros con solo los nombres
    getBookNames(){
        console.log(`Los libros que leiste son ${this.libros.map( (libro) => libro.nombre)}`);
    }
}
const persona1 = new Usuario("Pablo","Tinunin",[{nombre:"El psicoanalista", autor:"John Katzenbach"},{nombre:"Don quijote de la mancha",autor:"Miguel de Cervantes"},{nombre:"El secreto del cuarto amarillo",autor:"Gastón Leroux"},{nombre:"El alquimista",autor:"Paulo Coelho"}],1);

persona1.getFullName();
console.log("--------------------------------------------------");
persona1.countMascotas();
console.log("--------------------------------------------------");
persona1.addBook("La plaza de los chicos rubios","Osvaldo Aguirre y Eduardo González")
console.log("--------------------------------------------------");
persona1.getBookNames();
console.log("--------------------------------------------------");

