const operacion = prompt(" Para el promedio 1 para el sueldo 2 ")

console.log(operacion)
switch (operacion) {
    case "1":
        primedio()
        break;
        case "2":
            tuSueldo()
            break;

    default:
        alert("El numero no es correcto")
        break;
}

function tuSueldo () { 
    const precioHora = prompt("Ingresa el precios de tus horas ⌚⌚")
    const horasTrabajadas = prompt("Ingresa las horas trabajadas")
    
    const sueldo = precioHora * horasTrabajadas    
    alert("Tu sueldo este mes de: " + sueldo +"DOP")
} 


function primedio () {
    // Declarar la variable 
    const nu1 = prompt("Ingresa el numero  1")
    const nu2 = prompt("Ingresa el primer 2")
    const nu3 = prompt("Ingresa el primer 3")
    // convertir a enterp
    const nu1Int = Number(nu1)
    const nu2Int = Number(nu2)
    const nu3Int = Number(nu3)
    
    // sumar los numero 
    const resultado = nu1Int + nu2Int + nu3Int
    
    // calcular primedio
    const promedio = resultado / 3
    
    //mostar el resultado
    alert(" Promedio de los tres nuemro es: " + promedio )
    }