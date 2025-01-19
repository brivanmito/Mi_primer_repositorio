// class Pelicula {

//     constructor(nombre, id) {
//         this.nombre = nombre;
//         this.id = id;
//     }

//     reproducir() {
       
//     }

// }


// const peliculaUno = new Pelicula('Harry', 1);
// const peliculaDos = new Pelicula('Araña', 2);
// console.log(peliculaUno);

let calculator = {

    read() {
        this.a = +prompt('Type a value for a: ', 0);
        this.b = +prompt('Type a value for b: ', 0)

    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());