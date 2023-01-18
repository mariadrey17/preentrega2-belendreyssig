//ingreso de datos

for (let i = 1; i <= 4; i++) {
    let nombre = prompt("ingresa tu nombre").toLocaleUpperCase();
    let curso = prompt("ingresa tu curso").toLocaleLowerCase();


    alert("mi nombre  es " + nombre);
    alert("mi curso  es " + curso);
    console.log(nombre, curso);


    //acá empieza funcion sumarpromedio

    function sumarPromedio(nota1, nota2, nota3) {
        let notafinal = nota1 + nota2 + nota3;
        alert(notafinal)
        return notafinal;

    }
    let nota1, nota2, nota3;
    nota1 = Number(prompt("Ingresa tu primera nota"));
    nota2 = Number(prompt("Ingresa tu segunda nota"));
    nota3 = Number(prompt("Ingresa tu tercera nota"));


    let promedioFinal = sumarPromedio(nota1, nota2, nota3);
    console.log(promedioFinal);


    promedioFinal = 21

    let notaFinal = Number(prompt("Ingresa tu Nota final"));


    if (notaFinal >= 21) {
        alert("Felicitaciones pasastes de año !!!Estás aprobado");

    } else if (notaFinal >= 12) { alert("Estás aprobado segui trabajando así") }
    else {
        alert("Está desaprobado debes dar recuperatorio");
    }



}
//muestra por consola nombre curso y promedio final

//implementando lo pedido en la segunda pre - entrega 

//objetos, constructor
//ver si estos es contructor 

class Alumno {
    constructor(nombre, apellido, edad, curso, nota1, nota2, nota3, notaFinal) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.notaFinal = notaFinal;
    }
}

const escolar1 = new Alumno("Maria", "Rodriguez", 13, "tercero", 7, 7, 8, 22);
const escolar2 = new Alumno("Gabriel", "Lopez", 14, "tercero", 6, 7, 6, 19);
const escolar3 = new Alumno("Cintia", "Ibarra", 14, "tercero", 6, 8, 8, 22);
const escolar4 = new Alumno("Fabian", "Castro", 13, "tercero", 4, 7, 4, 15);

console.log (" El alumno se llama " + escolar1.nombre + " y su apellido es " + escolar1.apellido + " su edad es  " + escolar1.edad + " curso al que pertenece es " + escolar1.curso + " su nota final es 22  " + " El alumno se llama " + escolar2.nombre + " y su apellido es " + escolar2.apellido + " su edad es  " + escolar2.edad + " curso al que pertenece es " + escolar2.curso + " su nota final es 19  " + " El alumno se llama " + escolar3.nombre + " y su apellido es " + escolar3.apellido + " su edad es  " + escolar3.edad + " curso al que pertenece es " + escolar3.curso + " su nota final es 22  " + " El alumno se llama " + escolar4.nombre + " y su apellido es " + escolar4.apellido + " su edad es  " + escolar4.edad + " curso al que pertenece es " + escolar4.curso + " su nota final es 15  " )



// se empieza a trabajar con materiaspara poder aplicar metodos , arrays.


const actuacionMaterias = ["teorias del teatro ", "analisis de texto 1", "actuacion teatral", "actuacion cinetv", "educacion vocal"]
console.log(actuacionMaterias)

//aplicando for con index
for (let index = 0; index < actuacionMaterias.length; index++) {
    const materia = actuacionMaterias[index];
    console.log(materia)


}

//dos arrays uno de carreras y otro cursos a rendir examen 

const carrerasExamen = ["actuacion", "profesorado de actuacion", "direccion", "danza", "canto", "plastica"]
const cursosAevaluar = ["primero", "segundo"]


const examenesFinales = carrerasExamen.concat(cursosAevaluar)

console.log(examenesFinales)


// array vacio cantidad de alumnos aprobados 

const estudiantesAprobadosEnElFinal = []
const cantidadDeAlumnos = 8
do {
    let estudiantesPass = prompt("Ingresar la lista de estudiantes aprobados ")
    estudiantesAprobadosEnElFinal.push(estudiantesPass)
    console.log(estudiantesAprobadosEnElFinal)
} while (estudiantesAprobadosEnElFinal.length != cantidadDeAlumnos)

//  usando método filter 



const calificacionAprobados = [
    {
        nombre: "Ignacio",
        elemento: "estudiante",
        calificacionFinal: 22,
    },
    {
        nombre: "Gabriel",
        elemento: "estudiante",
        calificacionFinal: 15,

    },
    {
        nombre: "Sofia",
        elemento: "estudiante",
        calificacionFinal: "12",
    },
    {
        nombre: "Belen",
        elemento: "estudiante",
        calificacionFinal: 19,

    },
    {
        nombre: "Agustin",
        elemento: "estudiante",
        calificacionFinal: 13,
    },
    {
        nombre: "maria",
        elemento: "estudiante",
        calificacionFinal: 30,

    },
    {
        nommbre: "Fernando",
        elemento: "estudiante",
        calificacionFinal: 22,
    },
    {
        nombre: "Soledad",
        elemento: "estudiante",
        calificacionFinal: 18,

    }
]
const alumnosConLaMayorNota = calificacionAprobados.filter((element) => element.calificacionFinal >= 21)
const nombre = alumnosConLaMayorNota
console.log(alumnosConLaMayorNota)



