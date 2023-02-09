alert("Bienvenido!!!")

let nombreUsuario = prompt("Introduzca su nombre:")

let edad = parseInt(prompt("Introduzca su edad"))

 while (edad < 18 ){
    alert("Para ingresar tiene que ser mayor a 18")

    edad = parseInt(prompt("Introduzca nuevamente la edad"))
 }
 console.log(edad)

 const genero = prompt("Introduzco su genero (Hombre/Mujer)")

//Formula para saber cuantas calorias consume el cuerpo en reposo
if (genero == "Mujer") {
    let peso = parseInt(prompt("Introduzca su peso(kg):")) 
    let altura = parseInt(prompt("Introduzca su altura(cm):")) 
    let formulaMujer = parseInt((655 + (9.6 * peso) + (1.8 * altura)) - (4.7 * edad)) 
    
    alert("Tu cuerpo consume en reposo "+ formulaMujer + " calorias diarias")

    const dias = prompt("Para conocer cuantas calorias quemas según tu actividad fisica, introduce cuantos dias a la semanas realizas ejercicios. (Nada, 1, 2, 3, 4 ,5 ,6 ,7 o Dos veces al dia")
    console.log (dias)

//Formulas para conocer cuantas calorias consume una mujer al dia dependiendo de la cantidad de ejercicio fisico que realices 
    switch (dias) {
        case "Nada":
        const pocoEjercicio = parseInt(1.2 * formulaMujer)
        alert( pocoEjercicio + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "1":
        case "2":
        case "3":
        const ejercicioLigero = parseInt(1.375 * formulaMujer)
        console.log(ejercicioLigero)
        alert(ejercicioLigero + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "4":
        case "5":
        const ejercicioModerado =parseInt(1.55 * formulaMujer)
        alert(ejercicioModerado + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;
    
        case "6":
        case "7":
        const deportista = parseInt (1.72 * formulaMujer)
        alert(deportista + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "Dos veces al dia":
        const atleta = parseInt (1.9 * formulaMujer)
        alert(atleta + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual.")
        break;
    }

    
} else if (genero == "Hombre") { 
    let peso2 = parseInt(prompt("Introduzca su peso (kg):"))
    let altura2 = parseInt(prompt("Introduzca su altura(cm):")) 
    let formulaHombre = parseInt((66 + (13.7 * peso2) + (5 * altura2)) - (6.75 * edad))
    alert("Tu cuerpo consume en reposo "+ formulaHombre+" calorias diarias" )

    const dias = prompt("Para conocer cuantas calorias quemas según tu actividad fisica, introduce cuantos dias a la semanas realizas ejercicios. (Nada, 1, 2, 3, 4 ,5 ,6 ,7 o Dos veces al dia")
    console.log (dias)

//Formulas para conocer cuantas calorias consume un hombre al dia dependiendo de la cantidad de ejercicio fisico que realices 

    switch (dias) {
        case "Nada":
        const pocoEjercicio = parseInt(1.2 * formulaHombre)
        alert( pocoEjercicio + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "1":
        case "2":
        case "3":
        const ejercicioLigero = parseInt(1.375 * formulaHombre)
        console.log(ejercicioLigero)
        alert(ejercicioLigero + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "4":
        case "5":
        const ejercicioModerado =parseInt(1.55 * formulaHombre)
        alert(ejercicioModerado + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;
    
        case "6":
        case "7":
        const deportista = parseInt (1.72 * formulaHombre)
        alert(deportista + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.")
        break;

        case "Dos veces al dia":
        const atleta = parseInt (1.9 * formulaHombre)
        alert(atleta + " es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual.")
        break;
    }

}

let objetivo = prompt("Ingrese su objetivo : Aumentar - Bajar")
 // array de planes existentes
class Plan {
    constructor (nombre, precio, descripción){
        this.nombre=nombre;
        this.precio=precio;
        this.descripción = descripción;
    }
  }

const planes = [ ];

planes.push(new Plan ("Aumento 2.0", 5000, "Plan de dieta para aumentar la masa muscular, este plan incluye solo dieta"))
planes.push(new Plan ("Aumento 2.1", 8000, "Plan de dieta para aumentar la masa muscular, este plan incluye la dieta y una rutina de ejercicios"))
planes.push(new Plan ("Bajar 2.0", 5000, "Plan de dieta para bajar la grasa corporal, este plan incluye solo dieta"))
planes.push(new Plan ("Bajar 2.1", 8000, "Plan de dieta para bajar la grasa corporal, este plan incluye la dieta y una rutina de ejercicios"))

// Array de los planes a agregar al carrito
let carrito = [ ];

//Validaciones dependiendo del tipo de objetivo
if (objetivo == "Aumentar"){

    const planesDeAumento = planes.filter((plan) => plan.nombre.includes("Aumento"))
    const mapsAumentar = planesDeAumento.map((plan) => (plan.nombre))
    const mensajeAumentar = `Tenemos los siguientes planes disponibles para ti:\n${mapsAumentar.join(" & ")}`
    alert(mensajeAumentar)
      
   const planAElegirAumento = prompt("Para conocer un poco mas sobre los planes ingrese el nombre del plan Aumento 2.0 o Aumento 2.1")

  
   const planFinalAumentar = planes.find((planFinal) => planFinal.nombre === planAElegirAumento)
   alert (`El plan: ${planFinalAumentar.nombre}\nTiene un precio de: ${planFinalAumentar.precio} PESOS +IVA\nDescripción: ${planFinalAumentar.descripción}`)

   //Agregar al carrito el plan seleccionado
   const agregarPlanAumentar = prompt("Desea agregar este plan al carrito? Si/ No")

   if(agregarPlanAumentar == "No") {
       alert("Gracias por venir, hasta pronto.")
   } else if (agregarPlanAumentar == "Si"){
        let unidades = parseInt(prompt("Cuantos planes desea comprar?"))
        carrito.push(planFinalAumentar)

        const productoFinalAumentar = carrito.map((carritoFinalAumentar) => {
        const totalCarritoAumentar = `Agregaste al carrito:\n\nProducto: ${carritoFinalAumentar.nombre}\nUnidades: ${unidades}\nPrecio con iva por producto: $${(carritoFinalAumentar.precio * 0.21) + carritoFinalAumentar.precio}\nTotal a Pagar: $${((carritoFinalAumentar.precio* 0.21)+ carritoFinalAumentar.precio) * unidades}`;
        return totalCarritoAumentar

          
      
    })
        alert(productoFinalAumentar)
        const mensajeFinal = `Gracias por tu compra ${nombreUsuario}!!` 
        alert(mensajeFinal) 
   }
} else if (objetivo == "Bajar"){

    const planesDeAdelgazo = planes.filter((plan) => plan.nombre.includes("Bajar"))
    const mapsBajar = planesDeAdelgazo.map((plan) => (plan.nombre))
    const mensajeBajar = `Tenemos los siguientes planes disponibles para ti:\n${mapsBajar.join(" & ")}`
    alert(mensajeBajar)

    const planAElegirBajar = prompt("Para conocer un poco mas sobre los planes ingrese el nombre del plan Bajar 2.0 o Bajar 2.1")
    const planFinalBajar = planes.find((planFinal2) => planFinal2.nombre === planAElegirBajar)
   alert (`El plan: ${planFinalBajar.nombre}\nTiene un precio de: ${planFinalBajar.precio} PESOS +IVA\nDescripción: ${planFinalBajar.descripción}`)

   //Agregar el plan seleccionado al carrito
   const agregarPlanBajar = prompt("Desea agregar este plan al carrito? Si/No")

   if(agregarPlanBajar == "No") {
       alert("Gracias por venir, hasta pronto.")
   } else if (agregarPlanBajar == "Si"){
        let unidadesBajar = parseInt(prompt("Cuantos planes desea comprar?"))
        carrito.push(planFinalBajar)

        const productoFinalBajar = carrito.map((carritoFinalBajar) => {
        const totalCarritoBajar = `Agregaste al carrito:\n\nProducto: ${carritoFinalBajar.nombre}\nUnidades: ${unidadesBajar}\nPrecio con iva por producto: $${(carritoFinalBajar.precio * 0.21) + carritoFinalBajar.precio}\nTotal a Pagar: $${((carritoFinalBajar.precio* 0.21)+ carritoFinalBajar.precio) * unidadesBajar}`;
        return totalCarritoBajar })
        alert(productoFinalBajar) 
        
        const mensajeFinal = `Gracias por tu compra ${nombreUsuario}!!` 
        alert(mensajeFinal)        
   }
   

}