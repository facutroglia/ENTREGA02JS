const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*-------------- EJERCICIO A --------------------*/
const pizzasIdImpar = () =>{
  pizzas.forEach((pizza) => {
    if (pizza.id % 2 === 1){
      console.log("la" + " " + [pizza.nombre] +" "+ "tiene id impar" );
      
    }
  })
}
pizzasIdImpar

/*------------- EJERCICIO B -------------------*/

const pizzasMenosD600 = () => {
  pizzas.forEach((pizza) => {
    if (pizza.precio < 600) {
      console.log("la"+" "+[pizza.nombre]+" "+ "vale menos de $600" );
      
    }
  })
}
pizzasMenosD600

/*---------------- EJERCICIO C ---------------*/
const NombreYPrecio = () =>{
  pizzas.forEach((pizza) => {
    console.log( "la"+ " "+[pizza.nombre]+" "+"tiene un valor de"+ " "+"$" + [pizza.precio]);
    
  })
}
NombreYPrecio 

/*-------------- EJERCICIO D ---------------*/
const ingredientesPizzas =() => {
  pizzas.forEach ((pizza) => {
    console.log( "la"+" "+ [pizza.nombre]+ " tiene los siguientes ingredientes"+ " "+ [pizza.ingredientes])
  })
}
ingredientesPizzas