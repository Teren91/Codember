import { stdin } from "process";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function desbloquearCodigo(combinacion: number[], codigo: string, index: number) {
    var comando: String;
    var intro: String = `introduce un comando:
            R (Right) - movernos al siguiente digito 
            L (Left) - movernos al digito anterior
            U (Up) - incremenar dígito
            D (Down) - decrementar dígito
            E (Exit) - salir del programa
        `;

    //comando = String(stdin.read());
    readline.question(intro, (comando: string) => {
        if (comando.toUpperCase() === "R") { 
            index = desplazarDerecha(index);
        }
        else if (comando.toUpperCase() === "L") {
            index = desplazarIzquierda(index);
        }
        else if (comando.toUpperCase() === "U") {
            aumentarDigito(index);
        }
        else if (comando.toUpperCase() === "D") {
            decrementarDigito(index);
        }
        else if (comando.toUpperCase() === "E") {
            console.log("Exit");
        }
        else {
            console.log("Invalid command");
            readline.close();
        }
        console.log(combinacion.toString());
        
        codigo += comando.toUpperCase();
        console.log(codigo);
        desbloquearCodigo(combinacion, codigo, index);
    });
 
    function aumentarDigito(index: number)
    {
        var numero: number = combinacion[index];

        if(numero === 9)
        {
            combinacion[index] = 0;
        }else{
            combinacion[index]++;
        }
    }

    function decrementarDigito(index: number)
    {
        var numero: number = combinacion[index];

        if(numero === 0)
        {
            combinacion[index] = 9;
        }else{
            combinacion[index]--;
        }
    }

    function desplazarDerecha(index: number)
    {
        if(index === combinacion.length - 1)
        {
            return 0;
        }
        else{
            return index + 1;
        }
    }

    function desplazarIzquierda(index: number)
    {
        if(index === 0)
        {
            return combinacion.length - 1;
        }
        else{
            return index - 1;
        }
    }

    // switch(comando){
    //     case "R":
    //         console.log("Right");
    //         break;
    //     case "L":
    //         console.log("Left");
    //         break;
    //     case "U":
    //         console.log("Up");
    //         break;
    //     case "D":1
    //         console.log("Down");
    //         break;
    //     case "E":
    //         console.log("Exit");
    //         break;
    //     default:
    //         console.log("Invalid command");
    
    // }
}


//desbloquearCodigo([5, 2, 8, 9, 3, 4, 7, 1, 2, 8, 3, 4], "",0);
desbloquearCodigo([0, 0, 0], "", 0);

// class Persona {
//   private nombre: string;
//   private edad: number;
//   constructor(nombre: string, edad: number) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }
//   public obtenerNombre(): string {
//     return this.nombre;
//   }
//   public obtenerEdad(): number {
//     return this.edad;
//   }
//   public cumplirAños(): void {
//     this.edad += 1;
//   }
// }
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const personas: Persona[] = [];
// function pedirDatosPersona() {
//   readline.question(
//     'Introduce el nombre de la persona (o "s" para salir): ',
//     (nombre: string) => {
//       if (nombre.toLowerCase() === "s") {
//         console.log("Datos de las personas introducidas:");
//         personas.forEach((persona) => {
//           console.log(
//             `Nombre: ${persona.obtenerNombre()}, Edad: ${persona.obtenerEdad()}`
//           );
//         });
//         readline.close();
//       } else {
//         readline.question(
//           "Introduce la edad de la persona: ",
//           (edad: string) => {
//             const persona = new Persona(nombre, parseInt(edad));
//             personas.push(persona);
//             pedirDatosPersona();
//           }
//         );
//       }
//     }
//   );
// }
// pedirDatosPersona();

