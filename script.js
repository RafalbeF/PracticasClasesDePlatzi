//Primero, le indicamos al navegador que vamos a escribir una variable "VAR"
//Segundo, le indicamos el nombre de la variable "NOMBRE"
//Tercero, le indicamos el valor de esa variable "OSCAR"
var nombre = "oscar"
nombre

//A esto se le llama, declarar una variable
var edad;
//A esto se le llama inicializar una variable
edad = 30

// Variables de arrays. es un conjunto de elementos
var elementos = ["Computadora", "Celular"]
// Para mandar a llamar uno de los elementos de la variable, se pone asi:
elementos [1]

// Variables tipo objeto
var persona = {
    nombre : "Diego",
    edad : 30  
}
//___________________________________________________________________________________________________
//FUNCIONES:

//__________Declarativas___________
function miFuncion() {
    return 3;
}

//__________De expresion___________
//Dentro del parentesis, los parametros 
var miFuncion = function(a,b){
    return a + b;
}
//Como mandar a llamar una funcion:
miFuncion();

//__________Trabajando algunos ejemplos de funciones_________________
//La funcion se llama "saludarEstudiantes". El parametro es "(estudiante)" 
//"console.log" para imprimir en la consola y ver en tiempo real
function saludarEstudiantes (estudiante) {    
    console.log (estudiante);
}
//Mando a llamar la funcion poniendo "saludarEstudiantes" y le doy un valor ("Rafa")
saludarEstudiantes("Rafa");

//_______________Para generar un TEMPLETE STRING (plantilla de cadena de texto)_____________________
//Alt Gr + llave de cierre para el acento invertido 
//Luego del simbolo $, dentro de las llaves traigo lo que quiero que me traiga de variable. ${estudiante}, en este caso "estudiante" 
function saludarEstudiantes (estudiante) {    
    console.log (`Hola ${estudiante}`);
}
//Mando a llamar la funcion poniendo "saludarEstudiantes" y le doy un valor ("Rafa") y esto terminaria imprimiendo un "Hola Rafa"
saludarEstudiantes("Rafa")

//_____________Otro ejemplo______________
//Se genera una funcion que se llama "sumar" y tiene dos parametros "(a,b)"
//Adentro de la funcion se genera una variable que se va a llamar "resultado" y decimos que "resultado" es igual a una operacion entre a + b 
//"return" es la palabra reservada para regeresar informacion 
function sumar (a,b){
    var resultado = a + b;
    return resultado;
}
//Mando a llamar la funcion 
sumar (1,2);

//__________________________________________________________________________________________________________
//SCOPE:

var miNombre = "Rafa";
function nombre(){
    var miApellido = "Flores";
    console.log(miNombre + " " + miApellido);
}
nombre ();
//Desde el Scope global puedo mandar a llamar la variable "miNombre"
//Pero, desde el Scope global no puedo mandar a llamar la variable "miApellido" porque esta se encuentra en un Scope local

//____________________________________________________________________________________________________________
//COERCION:
//Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
//Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
//Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

//_________Primer ejemplo: Coercion implicita
//El typeof de la variable "a" nos dice que es de tipo String.
var a = 4 + "7";
typeof a
// El operador "+" en variables o valores genera la concatenacion

//_________Segundo ejemplo: Coercion implicita
//El typeof de la variable "b" nos dice que es de tipo Numero.
var b = 4 * "7";
typeof b
//El operador "*" es de numero, y convierte al "7" en un numero.


//_________Ejemplo de coercion explicita
//En la variable "a" el valor es un 20 numero
//En la variable "c" convertimos ese 20 numero en un string
//Pedimos el typeof de "c" para comprobar el tipo
var a = 20;
var c = String(a);
typeof c
//En la variable "d" volvemos a cambiar el tipo para que sea numero
//Pedimos el typeof de "d" para comprobar el tipo
var d = Number(c);
typeof d

//_______________________________________________________________________________________________________
//Valores: Truthy and Falsy

//Ejemplos en los que Boolean devuelve Falso:
Boolean (0);
Boolean (null);
Boolean (NaN);
Boolean (undefined);
Boolean (false);
Boolean ("");

//Ejemplos en los que Boolean devuelve Verdadero:
Boolean(1);
//true para 1 o cualquier número diferente de cero (0)
Boolean("a"); 
//true para cualquier caracter o espacio en blanco en el string
Boolean([]); 
//true aunque el array esté vacío
Boolean({}); 
//true aunque el objeto esté vacío
Boolean(function(){}); 
//Cualquier función es verdadera también

//____________________________________________________________________________________________________________
//OPERADORES

//Operadores arimeticos______________________
//Tambien se los conoce como operadores binarios porque toman dos valores y generan un resultado.
//+ Suma de dos valores, tambien sirve para concatenar dos strings
//- Resta
//* operador de multiplicacion
// / operador de division
//% operador de modulo
//** operador de potenciacion

//Operadores logicos__________________________
//!  para negar un valor 
//&& And
//|| or

//Operador de asignacion______________________
//= 

//Operadores de comparacion___________________
//== igual que
//=== estrictamente igual que
//>or>=or>== mayor o mayor igual que
//<or<=or<== menor o menor igual que 
//!=or!== diferente que

//Caracteres que se utilizan con variables ++ , +=_______________
var edad = 40
edad++ //Incrementa el valor en 1. Mando a llamar la variable por su nombre y le asigno ++. 
//Otro caso es, si quisiera incrementar la edad por dos. Mando a llamar la variable edad y le asigno += 2
edad += 2

//___________________________________________________________________________________________________________
//CONDICIONALES

//Esta es la estructura del if_________________
//1)Colocamos "if". 
//2)Los parentesis "()". Dentro del los parentesis colocamos la condicion. Si algo es verdad o no. Si se cumple o no la condicion.
//3)Colocamos corchetes. Dentro de los corchetes, la tarea, LO QUE VA A PASAR si la condicion colocada en los parentesis se cumple o no
if ( ) {

}

//El "if" solo se ocupa de comprobar que lo esta adentro de los parentesis sea verdadero. Si no es verdadero, no hace nada.
//Cuando "if" no se cumple. No es verdadero. Y queremos que suceda algo. Utilizamos "Else".

//Variante falso. Se cumple else:
if (false) {
    console.log("Hola. Soy Verdadero");
} else {
    console.log("Hola. Soy falso");
}
//Variante verdadero: Se cumple if:
if (true) {
    console.log("Hola. Soy Verdadero");
} else {
    console.log("Hola. Soy falso");
}
//Con "if", o "else" Estamos pidiendo que nos devuelva un resultado cuando algo es verdadero o, cuando algo es falso.
//SE PUEDE VER ESTE EJEMPLO CON SUS DIFERENTES RESULTADOS EN: IMAGEN Ejemplo if and else. Clickeando en la esquina superior izquierda. 

//Entre medio de "if" and "else" existe:
//else if_______________________________
//Para dar un ejemplo de "else if" cree una variable llamada edad
var edad = 18;
if(edad===18) {
    console.log("Puedes votar, sera tu primera votacion");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}
//1)"if"_________ Si se cumple el if (es decir, var edad=18). console.log va a mostrar en pantalla "Puedes votar, sera tu primera vez"
//2)"else if"____ Si no se cumple el if (es decir, var edad= no es 18). else if comprueba si es mayor de 18, si lo es, va a mostrar "Puedes votar de nuevo"
//3)"else" _______Si no se cumple el if, y tampoco se cumple else if (es decir var edad= no es 18, y tampoco es mayor que 18). console.log va a mostrar "Aun no puedes votar" 
//SE PUEDE VER ESTE EJEMPLO CON SUS DIFERENTES RESULTADOS EN: IMAGEN Ejemplo if and else if, and else, clickeando en la esquina superior izquierda.

//Operador ternario. Es como utilizar if and else, pero en una sola linea._____________
condition ? true: false;
//Ejemplo:
//1)Tengo una variable llamada numero que es igual a uno.
//2)Creo una variable que se llama resultado, y va a comprobar que la variable numero sea estrictamente uno. Si es verdad, va a mostrar "Soy uno". Si no es verdad, "No soy uno"
var numero = 1;
var resultado = numero === 1 ? "Soy uno" : "No soy uno";
console.log (resultado);
//SE PUEDE VER ESTE EJEMPLO CON SUS DIFERENTES RESULTADOS EN: IMAGEN Operador ternario, clickeando en la esquina superior izquierda.

//___________________________________________________________________________________________________________________
//SWITCH

//1)Se crea una variable llamada "numero", se le pone un valor a la variable.
//2)Se escribe la palabra clave "switch" y entre parentesis se manda a llamar la variable numero. 
//3)Entre las llaves se escriben los casos. En el primer caso se validara si el valor de la variable "numero" es 1. 
//4)El "breack" ya no va a dejar que pase a los siguientes casos cuando un caso ya es validado.
//5)En el segundo caso se validara si el valor de la variable "numero" es 10.
//6)"default" Si ninguno de los casos sucede.
var numero = 1;
switch (numero) {
    case 1: 
        console.log("Soy uno");
        break;
    case 10:
        console.log("Soy diez");
        break;
    case 33:
        console.log("Soy treinta y tres");
        break;
    default:
        console.log("No soy ninguno de los casos");
}

//________________________________________________________________________________________________________________________
//ARRAYS

//1) Se crea una variable llamada "frutas" y su valor va a ser un arrays [] que contiene varias frutas.
//2) En el console.log se manda a llamar la variable frutas para imprimir su valor 
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);

//Con esto podemos ver cuantos elementos que tiene este array
console.log(frutas.length);

//Con esto puedo acceder a uno de los elementos de un array. En este caso, [0] es manzana.
console.log(frutas[0]);

//Para agregar un elemento mas a este array. Se crea una variable llamada "masFrutas". 
//El valor de la variable "masFrutas" es igual a, mandar a llamar la variable "frutas" y agregar(push) "Uvas"
var masFrutas = frutas.push("Uvas");

//Para restar un elemento.
var restarFrutas = frutas.pop("Uvas");

//Para agregar un elemneto al inicio de la lista. push agrega al final.
var agregarFrutas = frutas.unshift("Uvas");

//Para eliminar el elemento que este al inicio
var borrarFruta = frutas.shift("Uvas");

//Para encontrar la posicion de un array
var posicion = frutas.indexOf("Cereza");

//__________________________________________________________________________________________________________________
//LOOPS

//Se crea la variable llamada estudiantes que va a ser igual a un array con elementos, nombres de estudiantes:
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
//Se crea la tarea: Una funcion que va a recibir un parametro que se llama (estudiante)
//Se utilizan comillas invertidas(Alt+96) en: console.log(`Hola, ${estudiante}`); 
function saludarEstudiantes (estudiante){
    console.log(`Hola, ${estudiante}`);
}
//for, siempre ocupa una variable "i". "i" va a ser igual a 0. Ademas, separado con punto y coma, le decimos que, mientras "i" sea menor(<) a estudiantes.lengt (es decir, menor que la longitud del array) "i" se va a aumentar un numero(i++)
//En la linea de abajo, se manda a llamr la funcion hecha anteriormente "saludarEstudiantes" luego, adentro de los parentesis, se manda a llamar el array "estudiantes" en la posicion de "i". Recordemos que la posicion de "i" es 0(var i= 0)
for(var i= 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);  
}
//Otra manera de utilizar el for:
//Se crea una variable llamada estudiante en la cual se manda a llamar cada de estudiante de(of) estudiantes(el array)
//En la linea de abajo se manda a traer la funcion "saludarEstudiante" y en la funcion, entre los parentesis, se pone como parametro "estudiante"
for(var estudiante of estudiantes){
    saludarEstudiantes (estudiante);
}
//________________________________________________________
//Ejemplo 1: for en longitud del array
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i= 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);  
}

//Ejemplo 2: for of. Traer un elemento de manera singular, de un array que esta en plural.
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes (estudiante);
}

//Loops While_________________________________________________________________________________

var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

//___________________________________________________________________________________________________________________________________________________
//OBJECTS
//Ejemplos de como se crea un objeto:

var miAuto = {
    marca:"Toyota",
    modelo: "Corola",
    año: 2020
};
//Se manda a llamar de la siguiente manera:
miAuto.marca
//__________________________________________________

//Segundo ejemplo:
//This hace referencia a la variable miAuto, el objeto
var miAuto = {
    marca:"Toyota",
    modelo: "Corola",
    año: 2020,
    detallesDelAuto: function(){
        console.log (`Auto ${this.marca} ${this.modelo} ${this.año}`)
    } 
};
//Se manda a llamar de la siguiente manera:
miAuto.detallesDelAuto();

//Objects. Funcion constructora_________________________
//Se crea una funcion llamada auto
//Como parametro(). Las propiedades que va a tener el objeto

function auto (marca, modelo, año){
    this.marca= marca;
    this.modelo= modelo;
    this.año= año;
}
//Asi quedaria armada la funcion constructora. Ahora hay que crear variables para agregar un nuevos autos.

var autoNuevo= new auto("Tesla", "Model 3", 2020);
var autoNuevo= new auto("Toyota", "Corola", 2023);
var autoNuevo= new auto("Toyota", "86 GT", 2022);

//___________________________________________________________________________________________________________________________________________________
//METODOS DE ARRAYS

var articulos =[
    {nombre: "Bicicleta", costo:3000},
    {nombre: "Television", costo:2500},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo:1000},
    {nombre: "Laptop", costo:20000},
    {nombre: "Teclado", costo:500},
    {nombre: "Auriculares", costo:1500},
]

//_________________Primer ejemplo de metodo para recorrer el contenido del array: filter

//1)Como primer paso se crea una variable "articulosFiltrados" que va a ser igual a mandar a llamar la variable "articulos" creada anteriormente(arriba), punto filter() 
var articulosFiltrados = articulos.filter()

//2)Adentro de los parentesis, parametros de filter se crea una funcion:
var articulosFiltrados = articulos.filter(function(){
});

//3)Como parametro, adentro de la funcion se pone el articulo que se va a filtrar. Y la tarea de la funcion, va a ser, que nos traiga los articulos cuyo costo es menor o igual a 500
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//__________________Segundo ejemplo de metodo para recorrer el contenido del array: map

//1)Se crea una variable que va a ser un nuevo array "nombreArticulos" y va a ser igual al array principal "articulos" punto map.
var nombreArticulos = articulos.map();

//2)En los parametros de map() se crea una funcion:
var nombreArticulos = articulos.map(function(){
});

//3)En los parametros de la funcion se pone el articulo para mapear:
var nombreArticulos = articulos.map(function(articulo){
});

//4)En la tarea de la funcion se va a pedir que regrese(return) el (articulo.nombre) nombre de los articulos. 
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//____________________tercer ejemplo de metodo para recorrer el contenido del array: find:

//1)
var encuentraArticulo = articulos.find();

//2)Se crea una funcion adentro de find. La funcion va a llevar como parametro el articulo que estamos buscando.
var encuentraArticulo = articulos.find(function(articulo){

});

//
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

//____________________Cuarto ejemplo de metodo para recorrer el contenido del array: forEach();
//Con forEach no se crea un nuevo array. Por lo tanto, no se crea una variabla
articulos.forEach();

//Adentro del forEach se crea una funcion y como parametro, dentro de la funcion se pone el articulo que queremos que nos traiga:
articulos.forEach(function(articulo){
    
});

//En la funcion se pide que se imprima el nombre de cada uno de los articulos que tiene el array "articulos"
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//____________________Quinto ejemplo de metodo para recorrer el contenido del array: some();
//Se crea un nuevo array, que va a ser una variable llamada "articulosBaratos" y va a ser igual al array "articulos"  
var articulosBaratos = articulos.some();

//Adentro del some() se crea una funcion y como parametro, dentro de la funcion se trae el articulo
var articulosBaratos = articulos.some(function(articulo){

});

//En la funcion se pide que retorne el articulo que tiene un costo menor o igual a 700
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
//_______________________________________________________________________________________________________________________________________________
//________________________Con esto termina el curso de javascript basico
//_______________________________________________________________________________________________________________________________________________

























