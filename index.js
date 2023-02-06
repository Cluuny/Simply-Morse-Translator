//Existen 2 tipos de varialbes globales en JS
//Unas son las var las cuales no respetan el Global Scope y son en si mismas una mala practica
//Por otro lado tenemos las let las cuales sin respetan el Global Scope y ademas son unaexcelente pratica
//Ademas de estas tenemos las const las cuales unicamente sirven para las constantes pero esto solo es aplicalbe para los datos de tipo primitivo, si llegan a ser objetos la propiedad de constatncia se perdera debido a que como tal se toma una referencia del objeto mas no su contenido


//La declaracion de funciones es simple, nombre(parametros){codigo}, este tipo de funciones "normales" con capaces de invocarse antes de declararse debido a que JS las eleva en su ambito, por lo cual podemos invocarala y luego declararla y aun asi seguira funcionando
saludar("Sara") //invocando previo declaracion
//declaracion
function saludar(nombre = "Persona") {
    console.log('Hola, ' + nombre + ", como estás?")
}
saludar()//Invocando pos-declaracion
//Salta error pq no esta completamente definida como una funcion si no como una variable
// console.log(funcionTest("Sara", 17))

//Esta es otra forma de declarar funciones, guaradando el objeto en una variable, el problema con este tipo de declaracion es que solo se pueden invocar por debajo de su declaracion, no se puede invocar por encima como con la funcion saludar() dedido a que esta al ser tecnicamente una varaible, no se puede elevar en el ambito de JS, nisiquiera si se reconfigura como var.
//este tipo de funciones son conocidas como funciones anonimas pues realmente la funcion no tiene un nombre, en nuestro caso como se tiene el signo "=>" se convierte automaticamente en una arrow funciton.

//En cuestiones de buenas practicas es mejor usar este tipo de declaracion conocido como "funciones expresadas" el cual nos ayuda a ordenar nuestro codigo y nos previene de errores de compilacion por tener mal acomodado el mismo.
let funcionTest = (nombre = "Persona", edad = 18) => {
    return "Hola " + nombre + ", tu edad es: " + edad
}
console.log(funcionTest("Vicente", 17))
//Se pedimos el retorno del tipo de dato de la variable, tenemos que es una funcion
console.log(typeof (funcionTest))



//ARRAYS [LISTAS]

//Existen dos formas de declarar arreglos en JS, con let y const, al ser objetos, no importa el tipo de dato que contenga, al no especificar dicho tipo de dato, se pueden meter varios tipos sin que existan problemas de tipo
let numbersList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
]
//aqui podemos ver como el tipo de dato de la lista como tal es "object" por tanto se puede tambien declarar con const
console.log("La lista es: " + typeof (numbersList))

console.log(numbersList)
//esta es la forma de acceder a los valores de las listas
console.log(typeof (numbersList[0]))

//Metodos de los arreglos

const posts = [{
    name: "Vicente",
    id: 1050603834,
    job: "Programador"
}, {
    name: "Sara",
    id: 1049607140,
    job: "Psicologa"
}, {
    name: "Sofia",
    id: 1011213596,
    job: "Estudiante"
}, {
    name: "Mono",
    id: undefined,
    job: "Programador"
}]
//Metodo Find
//Busca la primera coincidencia con lo que le pedimos, Requiere de una funcion para especificar que es lo que necesitamos
console.log(posts.find(person => person.job == "Programador"))

//Some
//Devuelve un booleano en funcion de si se encuentra o no lo que le pedimo, tambien requiere de una funcion, ademas de esto, en caso de que en nuestra lista tengamos otra lista anidada podemos usar del metodo includes dentro de la funcion para buscar dentro de esa sublista
console.log(posts.some(posts => posts.id == 1050603834))

//Every
//Devuelve un booleano en funcion de si se encuentra en todos los elementos de la lista el argumento que le pidamos

console.log(posts.every(posts => posts.id == 1234))//No todos los id de los objetos son iguales a 1234, de hecho ninguno lo es xd

//Map
//Crea un nuevo array con los elementos que le pidamos

console.log(posts.map(posts => posts.name))

//Filter
//Devuelve un array con los elementos que cumplan cierta condicion

console.log(posts.filter(posts => posts.job == "Programador"))

//Reduce
//Sirve para juntar valores por medio de una funcion anonima, se recomienda añadir un valor inicial al final de la declaracion de la funcion para que esta itere a partir del primer elemento del arreglo, de lo contrario entonces la funcion tomará ese primer valor como valor inicial y pueden darse errores o inconsistencias
//Fun fact -> se puede averiguar el valor maximo entre los elementos con la funcion Math.max(val1, val2)

console.log(posts.reduce((acc, item) => {
    return acc += item.job + ", "
}, ""))


//OBJETOS
//Los objetos son tipos de datos muy importantes en el mundo del desarrollo debido a que pueden guardar informacion que se relaciona entre si, ya hemos trabajado con objetos mas arriba
console.log(`Hola, mi nombre es ${posts[1].name} y soy ${posts[1].job}`)

//TIPOS DE OPERADORES
//Aritmeticos -> sacados de la matematica
//Relacionales -> >, <, >=, <=, ==(de valor), ===(de tipo, es una buena practica), != !==
//Unarios, de incremento y decremento -> los que sirven para sumar o restar n veces un numero
//Operadores logicos -> !(not) / ||(or) / %%(And) 

//CONDICIONALES
let userAge = 2
//If normal
if (userAge === 1) {
    console.log("XD")
} else if (userAge === 2) {
    console.log("XDN´T")
} else {
    console.log("A")
}

//Switch case
switch (userAge) {
    case 1:
        console.log("No tienes la edad")
        break;
    case 2:
        console.log("Tienes la edad")
        break;
    default:
        console.log("WTF")
        break;
}

//Operador ternario
console.log((userAge === 2) ? "Si" : "No")

//BUCLES
//Como siempre, estan el bucle for, el bucle while y el bucle do while, de los cuales ya conocemos su funcionamiento, ademas de estos 3 existen 2 variaciones del bucle for:

//for in
//Dado un objeto, se puede recorrer de la siguiente manera
for (const key in (person = posts[0])) {
    console.log(`Propiedad: ${key} -> valor: ${person[key]}`)
    //En este caso, para acceder a los valores del objeto tenemis que acceder por medio de corchetes
}

//For of
//Dado un arreglo de cualquier tipo con n datos, se usa para iterar sobre ellos
let name = "Vicente"
for (const value of name) {
    console.log(value)
}



//MANEJO DE ERRORES
//Como es normal, existe la sentencia try-catch-finally la cual nos ayuda a manejar las excepciones de nuestro programa

let number = 2
try {
    console.log(test)
} catch (error) {
    console.log(`No existe la variable: ${error}`)
} finally {
    console.log("Vuelva a intentarlo")
}

try {
    let n = 10;
    if (n > 0) {
        //asi podemos generar nuestras propias excepciones en el programa para manipularlo de acuerdo a nuestras necesidades
        throw new Error
    }
    console.log(n * n)
} catch (error) {
    console.log("El numero es menor a 0")
}


//DESTRUCTURACION
//Forma de asignar valores a objeto o arreglos de manera dinamica

//sin destructurar
//Si queremos alamacenar cada uno de los datos de manera independiente lo mas logico seria hacer esto
let arreglo = [1, 2, 3]
let uno = arreglo[0], dos = arreglo[1], tres = arreglo[2]
console.log(uno, dos, tres)

//Esto, auqnue funciona es poco practico, por eso entra en juego la destructuracion para ayudanos a mejorar esta logica

let [one, two, tree, four] = arreglo
//en este caso, de una vez y de forma dinamica, cada una de las variables toma el valor que se encuentra en la posicion del arreglo, si llegamos a agregar otra varibalbe pero no existe dicha posicion en el arreglo se tomará como undefined
console.log(one, two, tree, four)

//Ejemplo con objetos
//Si por alguna razon necesitamos alamacenar cada una de las propiedades del objeto en una variable independiente podemos destructurar el objeto asi:
const persona = {
    nombre: "Vicente",
    id: 1050603834,
    email: "matallanaa_@outlook.com",
    gender: "male"
}
let { nombre, id, email, gender } = persona
console.log(nombre, id, email, gender)

//Es importante tener en cuenta que para destructurar, tanto la variable a destructurar como la variable destino se deben llamar igual




//OBJETOS LITERALES
//Se definen como una nueva formad e escribir atributos y metodos a partir de ES6
//tenemos por ejemplo el objeto perro

//creo un nuevo bloque de codigo para no tener varaibles superpuestas
{
    let nombre = "Max", edad = 10
    const perro = {
        //en este tipo de asignacion estamos escribiendo mas codigo del que deberiamos, esto es lo que arreglan los objetos literarios
        nombre: nombre,
        edad: edad,
        ladrar: () => {
            console.log("Guauuu Guauuu")
        },
        showInfo: () => {
            console.log(`Nombre: ${nombre} => edad: ${edad}`)
        }
    }
    perro.showInfo()
    perro.ladrar()

    //Para arreglar esta doble escritura de variables podemos hacer lo siguiente

    let name = "Wisper", age = 7
    const dog = {
        //JavaScript ya entiedne que nosotros nos queremos referir a las variables que fueron declaradas mas arriba y por ende no debemos literalmente asignarlas de nuevo, el las asigna de manera dinamica
        name,
        age,
        //Tambien podemos aplicar esta practica con los metodos de los objetos:
        ladrar() {
            //Como el metodo ya está definido, no hace falta redefinirlo de nuevo
            //Solo debemos agregar la nueva sintaxis
            console.log("Guauuu Guauuu Guauuu")
        },
        showInfo: () => {
            console.log(`Nombre: ${name} => edad: ${age}`)
        }
    }
    dog.showInfo()
    dog.ladrar()
}

//Parámetros REST & Operador Spread
//Los parametros REST nos permiten representar un numero idefinido de parametros como un array de los mismos
{
    //Tengo una funcion que suma numeros, pero no se cuantos numero tengo que sumar
    function sumar(a, b, /*Indicativo de paramtro REST:*/...c) {
        //Para este ejercicio lo logico es operar con los parametros que ya sabemos que tenemos
        let result = a + b

        //Como el parametro 3 almacena eso parametros no predecibles en una lista, debemos darle un tratamiento adecuado como a una lista, en este caso, por cada iteracion de la lista, se suma a la variable resultado
        c.forEach((value) => { result += value })
        return result
    }
    console.log(sumar(1, 2))//con los dos parametros predecibles
    console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9))//a partir del 3 se vuelven parametros no predecibles por lo cual empiezan a ser almacenados en la lista c dentro de la funcion sumar()
}
//El operador Spread sirve para expandir datos iterables a otros datos, por ejemplo agregar elementos a una nueva lista sin tener que hacer una cadena de push infinita
{
    let array1 = [1, 2, 3, 4, 5]
    let array2 = [6, 7, 8, 9, 10]

    //Si quiero juntar estos dos arreglos en uno solo puedo utilizar el operador spread para añadirlos a una nueva lista
    let array3 = [...array1, ...array2]
    //Imprime una lista con todos los valores de ambas listas
    console.log(array3)
}



//ARROW FUNCTIONS
//Las llevamos usando todo el documento, basicamente son lsa funciones anonimas que utilizan la siguiente sintaxis () => {}
//Es una funcion expresada, es decir que su invocacion no se puede hacer antes de su declaracion, cosa que con las funciones declaradas si se puede hacer, el objetivo de las funcionesa arrow es volverse mas expresivas para quien programa, Existe una diferencia notoria entre la funciones normales y las funciones flechas y es cuando se utuliza la el "this"

//EJ:
{
    function Ladrar() {
        console.log(this)
        //En este caso imprimirá el objeto window pq ese es el obejto en el que se encuentra conetenida la funcion
    }

    const perro = {
        name: "Dog",
        ladrar: function () {
            console.log(this.name)
            //Al contrario, en este caso y con la palabra reservada function, la funcion entiende el contexto y el uso de this se evalua dentro del objeto, su contexto está dentro del objeto
        }
    }
    const dog = {
        name: "Perro",
        ladrar: () => {
            console.log(this)
            //En este caso tambien imprimirá Window pq como tal, las arrow function entienden por contexto al objeto padre de su objeto, en este caso dicho objeto es window
        }
    }
    Ladrar()
    perro.ladrar()
    dog.ladrar()
    //LO MAS RECOMENDABLE A LA HORA DE CREAR METODOS O FUNCIONES DENTRO DE OBJETOS ES UTILIZAR LITERALES "nombreKey(){code}"
}



//PROTOTIPOS (los prototipos eran la solucion antigua a la creacion de objetos en JS, desde Es6 esto queda resuelto con la implementacion de las clases, cosa que comparte con otros lenguajes y es mucho mas facil de entender y practicar)
//este es uno de los temas mas importantes en todo JS debido a si globalidad en el lenguaje
//Como bien sabemos, JS es un lenguaje multiparadgima, en este caso el paradigma mas utilzado es POO pero se maneja de una manera distinta a como se haria en otros lenguaje como C, JAVA, etc...
//Dentro de la POO existen 4 conceptos importantes
/**
 * - Clases -> Plantilla
 * - Objetos -> Instancia de la Plantilla
 *      - Atributos -> Caracteristicas del objeto -> Variables
 *      - Metodos -> Capacidades del objeto -> Funciones
 */
//JavaScript es un lenguaje orientado a objetos basado en PROTOTIPOS, NO EN CLASES Como en otros lenguajes
//Los Prototipos en JavaScript son el mecanismo por el cual los objetos pueden adquirir atributos y metodos de objetos padre

//EJ:
{
    const animal = {
        name: "Snoopy",
        sound: "Guauu Guauu",
        ladrar() {
            console.log(this.sound)
        }
    }
    console.log(animal)
    //Cuando mandamos imprimir las stast del objeto tenemos que su prototipo es "Object", es decir que sus atributos y metodos escenciales los hereda de ese Objeto, por eso se dice que en JavaScript todo es un objeto... El objeto Object es el objeto primitivo de JavaScript, al igual que lo es en JAVA
}

//CREACION DE PROTOTIPOS
//Usualmente se crea un tipo de funcion llamada "Funcion Constructora" debido a que es la encargada de construir el objeto

{
    function Animal(nombre, sound, ...animalType) {
        this.nombre = nombre
        this.sound = sound
        this.animalType = animalType

        //Lo mas recomendable en terminos de eficiencia y rapidez es unicamente declarar los atributos en el cuerpo de la clas cosntructora, los metodos y/o funciones de deben anexar a la funcion pero ser declarados por fuera de la misma de la siguiente manera

    }
    //De esta manera, podemos crear objetos unicamente con sus atributos y no caer en la mala practica de que por cada objeto que creemos tambien creemos una copia de la declaracion del metodo, en cambio tenemos la opcion de declarar ese metodo una unica vez e invocarlo n veces dea acuerdo a nuestras necesidades sin tener que afectar el rendimiento de nuestra apliación
    Animal.prototype.emitirSonido = function () {
        //Tener muy presente el uso de la palabra this en las funciones prototipicas
        return this.sound
    }

    //Esta es la estructura de una Funcion Constructora de prototipos en JavaScript, se puede ver que el uso de la palabra this para referirnos al contexto de la funcion es de caracter obligatorio, ademas las funciones se deben declarar (valga la redundancia) de manera declarativa para no tener errores

    //Si creamos objetos apartir de esta funcion tendriamos lo siguiente
    const perro = new Animal("Max", "Guauu Guauu", "Perro"),
        gato = new Animal("Oliver", "Miauuu", "Gato")

    //Si utilizamos los objetos con sus propeidades y sus metodos podemos ver que es mas accesible y facil de maniobrar que ir creando uno por uno los objetos de manera individual
    console.log(`Hola, soy ${perro.nombre} y soy un ${perro.animalType}... ${perro.emitirSonido()}`)
    console.log(`Hola, soy ${gato.nombre} y soy un ${gato.animalType}... ${gato.emitirSonido()}`)

    //Ademas de esto, en el momento que accedemos a las stast de los objetos podemos ver que su construcor es Animal, su prototipo sigue siendo Object debido a que evidentemente son Objetos pero su constructor ya no es el prototipo Object si no el prototipo Animal
    console.log(perro)
    console.log(gato)

    //HERENCIA PROTOTIPICA
    //Basicamente es la herencia aplciada a prototitpos
    //Por el ejemplo voy a crear un prototipo Tortuga que herede el prototipos Animal
    function Tortuga(nombre, sonido, color) {
        //(Sacado de la MDN)
        //La funcion Call básicamente le permite llamar a una función definida en otro lugar, pero en el contexto actual. El primer parámetro especifica el valor de this que desea utilizar al ejecutar la función, y los otros parámetros son aquellos que deben pasarse a la función cuando se invoca.
        Animal.call(this, nombre, sonido)
        this.color = color
    }
    //Con esto hemos logrado asociar todos los atributos que recibe la funcion Tortuga con los de la funcion Animal, pero todavia no hemos realizado ninguna herencia debido a que teoricamente ambas funciones tiene un constructor individual, para aplicar la herencia debemos hacer que la funcion Tortuga herede su constructor de la clase Animal, con esto a su vez heredamos los metodos, es por eso que lo hacemos por fuera de la declaracion, debido a la regla n=n que bien sabemos es ineficiente:

    //En la siguente linea de codigo lo que hacemos es decirle a JS que cuadno se cree un objeto de prototipo Tortuga, lo instancie desde el prototipo Animal, ahi es donde aplicamos la herencia:
    Tortuga.prototype = Object.create(Animal.prototype)

    //Pero ahora tenemos un problema, cada vez que llamemos a Tortuga, estaremos llamando tambien a Animal y crearemos una doble instanciacion por lo cual debemos asignar el constructor del objeto a el mismo
    Tortuga.prototype.constructor = Tortuga

    //Con esto resuelto ahora si hemos aplicado de forma correcta la herencia prototipica y podemos crear objetos de tipo Tortuga que se basen en el prototipo Animal 
    const benny = new Tortuga("Benny", "XD", 10)

    //Ademas tambien hemos heredado sus metodos, lo cual era lo que tenia que pasar, no?
    console.log(benny.emitirSonido())

    //Ademas de eso podemos sobreescribir metodos derivados de la clase padre de la siguiente forma

    Tortuga.prototype.emitirSonido = function () {
        return `La Tortuga hace ${this.sound}`
    }
    //La sobreescritua se puede comprobar con la siguiente salida
    console.log(benny.emitirSonido())

    //Si imprimimos el objeto, tenemos que su prototipo es Animal, lo cual nos confirma que la herencia a sido aplciada correctamente
    console.log(benny)
}

//EJERCICIO DE HERENCIA PROTITIPICA
{
    //Debemos crear una funcion user y dos funciones admin y guest que hereden de user

    function User(name, id, role) {
        this.name = name
        this.id = id
        this.role = role
    }

    User.prototype.confirmRole = function () {
        let backReturn
        switch (this.role) {
            case "admin":
                backReturn = "Eres administrador"
                break;
            case "guest":
                backReturn = "Eres usuario"
                break;
            default:
                backReturn = "Rol indefinido"
                break;
        }
        return backReturn
    }

    //Creamos un usuario que herede de User y sea de tipo Admin
    function Admin(name, id, role) {
        User.call(this, name, id, role)
    }
    Admin.prototype = Object.create(User.prototype)
    Admin.prototype.constructor = Admin


    //Hacemos lo mismo con Guest
    function Guest(name, id, role) {
        User.call(this, name, id, role)
    }
    Guest.prototype = Object.create(User.prototype)
    Guest.prototype.constructor = Guest


    const admin1 = new Admin("Vicente", 1050603834, "admin")
    const guest0001 = new Guest("Sara", 12345, "guest")

    //Imprimimos las stast de los objetos
    console.log(admin1)
    console.log(guest0001)

    //Confirmamos que el metodo funcione
    console.log(admin1.confirmRole())
    console.log(guest0001.confirmRole())

    //Listo
}

//CLASES Y HERENCIA

{
    //Desde el año 2015 se pueden escribir y crear clases pero de cualquier manera estas en el fondo sera traducidas como prototipos debido a que JS es un lenguaje basado en prototipos
    //Siguiendo la linea de los prototipos, planteamos el siguiente ejemplo

    //Las clases como tal no reciben un parametros, se reciben por medio de un constructor
    class Car {

        //Metodo constructor de las clases
        constructor(branch, color) {
            this.branch = branch
            this.color = color
        }

        //La definicion de los metodos se realiza de manera normal, en este caso nos ahorramos el tener que escribir los metodos fuera de la clase debido a que js ya se encaraga de declarar el metodo una unica vez y no de copiarlo n veces en funcion de la incovacionm o creacion de lo objetos de la clase

        turnON() {
            console.log("Car is ON")
        }

        turnOF() {
            console.log("Car is OFF")
        }

        printInfo() {
            return `The branch is ${this.branch} and the color is ${this.color}`
        }

        //Aplicacion de metodos estaticos en JS

        static concept() {
            console.log("Los carros fueron diseñados como un medio de transporte revolucionario")
        }


        //Generacion de metodos getter y setter
        get getBranch() {
            return this.branch
        }
        set setBranch(branch) {
            this.branch = branch
        }

    }

    //Creamos un objeto e invocamos un metodo para la vericiacion del funcionamiento del objeto
    const car1 = new Car("Car1", "Green")
    console.log(car1.printInfo())

    //HERENCIA DE CLASES
    //Supongamos que queremos crear dos tipos de carros, un convertible y una van, para aplicar dicha herencia de Car debemos hacer lo siguiente

    //Usamos la palabra reservada extends para aplicar la herencia y por medio del constructor de la clase, llamamos al superconstrucor y enviamos los parametros que este nos pide, si existen parametros adicionales, los inicializamos
    class Convertible extends Car {
        constructor(brand, color, colorCapot) {
            super(brand, color)
            this.colorCapot = colorCapot
        }

        deployCapot() {
            console.log("The capot is already deployed")
        }

        //Podemos sobreescribir metodos de esta manera, sin palabras reservadas ni cosas locas xdd
        turnON() {
            console.log(`${this.branch} is ON`)
        }
    }

    //Creamos un objeto convertible y verificamos que sus metodos funcionen, ademas imprimimos las stast para confirmar que su prototipo padre es Car
    const convertible1 = new Convertible("Ferrari", "Red", "Black")

    console.log(convertible1.printInfo())
    convertible1.turnON()
    console.log(convertible1)

    //Relizamos el mismo ejericio para la creacion de la Van

    class Van extends Car {
        constructor(branch, color, spaces) {
            super(branch, color)
            this.spaces = spaces
        }

        fillVan() {
            console.log("La van ha está llena")
        }
    }

    const van1 = new Van("Mercedes", "Black", 8)
    console.log(van1.printInfo())
    van1.fillVan()
    console.log(van1)

    //Ocurre exactamente igual que con el convertible, en este caso la herencia ha sido aplicado de manera correcta, como podemos ver es una forma mucho mas sencilla de crear objetos y prototipos para los mismos


    //METODOS ESTATICOS
    //JS por defecto es incapaz de crear metodos y atributos privados, todas las clases, metodos y atributos son publicos, en cambio si existen metodos estaticos que son aquellos que pueden ser invocados sin depender de una instanciacion, para crear un metodo estatico se debe anteponer la palabra static al nombre del metodo, para ver el ejemplo, dirigirse a la clase Car

    //Asi podemos invocar un metodo estatico en JS
    Car.concept()

    //Si invocamos un metodo no estatico, directamente no nos aparecerá en la barra de llenado, lo cual indica que no podemos acceder a dicho metodo sin haber instanciado un objeto de la clase a que pertenece

    //GETTER Y SETTERS  
    //Son metodos especiales de las clases que nos permiten acceder y modificar atributos de una clase respetando el encapsulamiento de la misma, debido a que en JS no existe el concepto de los atributos privados, el unico uso actualmente para los getters y setters es para la asignacion y obtencion de variables en la clase, existe una unica caracteristica de estos metodos y es que los metodos getter y setter no se invocan como metodos si no como variables

    //EJ
    //Dirigirse a la clase Car para ver la construccion de los metodos getter y setter

    const car2 = new Car("Chevrolet", "Red")
    console.log(car2.getBranch)
    car2.setBranch = "Renault"
    console.log(car2.getBranch)
    console.log(car2)
}

//OBEJTO CONSOLE
//El objeto console se define en la consola del navegador, es un objeto propio de JS y muy util como ya hemos visto
{
    //console.log() no es el unico metodo de este objeto, existen muchos mas, algunos de los mas importantes son:
    console.error("Para imprimir erroes")
    console.warn("Para imprimir Warnings")
    console.info("Para dar informacion")

    //Existen varios objetos dentro de JS y como es evidente a todos podemos acceder, uno de los mas usados es document
    console.log(document)


    //Existe un metodo capaz de imprimir en una lista todas las propiedades y metodos de un objeto, es igual a un console.log() pero con mejores practicas, es la manera de ver todas las propiedades de un objeto JavaScript específicado por consola, mediante la cual el desarrollador puede facilmente obtener las propiedades del objeto.
    console.dir(window)

    //Tambien en la consola se pueden crear grupos de salidas, para ello se usa el metodo group
    console.group("Lista 1")
    console.log("001")
    console.log("002")
    console.log("003")
    console.log("004")
    console.groupEnd() //Con esto se le da final al grupo y se sigue con el flujo normal de la consola

    //Tambien podemos imprimir las propiedades de los objetos a manera de tabla de la siguiente manera
    console.table(Object.entries(console).sort()/**Ademas podemos usar los metodos de las listas debido a que tecnicamente retorna una lista */)
    //Ademas podemos imrpimir listas de manera normal sin tener que hacer uso del objeto Object
    const array1 = [1, 2, 3, 4, 5, 6]
    console.table(array1)//En este caso, el metodo table unicamente acepta un parametro, si queremos imprimir mas de una lista debemos hacer impresiones individuales
    //Lo mismo lo podemos hacer con los objetos
    const persona = {
        nombre: "Vicente",
        edad: 17,
        id: 1050603834,
        job: "Programmer"
    }

    console.table(persona)

    //Tambien podemos medir el tiempo en el que tarda una instruccion en llevarse a cabo

    console.time("Medicion de llenado")
    const lista = Array(1000000)
    for (let index = 0; index < lista.length; index++) {
        lista[index] = index
    }
    console.timeEnd("Medicion de llenado") //Los nombres de las impresiones deben ser iguales pq es asi como se pueden identificar entre si, el tiempo en JS siempre será medido en ms

    // console.table(lista)

    //Tambien podemos llevar un control de las veces que se ejecuta cierto bloque de codigo con el siguiente metodo:

    for (let index = 0; index < 100; index++) {
        console.log(index)
        console.count("Ejecución numero: ")//Esta linea es la que lleva la cuenta
    }


    //Tambien se pueden hacer ciertos tipos de pruebas unitarias en pro de las buenas practicas y la depuracion del codigo:
    //Ejemplo: tenemos dos variables y se espera que x sea siempre menor que y
    let x = 3
    let y = 2
    let err = "Se esperaba que x fuera menor que y" //Este es el mensaje que saltará si la condicion no se cumple, es el mensaje de error

    console.assert(x < y, { x, y, err })//Debemos pasarle la condicion y los parametros, incluido obviamente el mensaje de error
    //Si la condicion no se cumple, saltará un error en la consola y con este el mensaje que creamos previamente 

    //Cabe aclarar que todos estos metodos tambien funcionan en entornos de desarrollo como Node
}

//OBJETO DATE
//es un objeto que nos permite acceder a fechas y temas de ubicacion temporal
{
    console.log(Date()) //En primer lugar, imprime la hora en la que se ejecuta el codigo junto con el dia y la zona horaria respectiva
    //Lo ideal con el objeto Date es almacenarlo en una variable para que sea mas accesible y manejable

    let date = new Date()
    console.log(date)
    //Existen varios metodos que se pueden trabajar con las fechas
    console.log(date.getDate())//Obtener dia del mes
    console.log(date.getDay())//Obtener dia en la semana, por posiciones, hoy es lunes -> dia 1
    console.log(date.getMonth())//Obtiene la posicion del mes en un array de 12 posiciones -> febrero mes 2 posicion 1
    console.log(date.getFullYear())//Obtener el año
    console.log(date.getHours(), date.getMinutes(), date.getMilliseconds())//Obtener horas y minutos y milisegundos
    //Tambien podemos obtener los datos temporales de una forma ams verbosa
    console.log(date.toDateString(), typeof (date.toDateString()))//Obtener la fecha en String, la segunda impresion es para corroborar que devuelve un String
    console.log(date.toLocaleString())//Obtener los datos de la fecha local de forma verbosa y en String
    console.log(`%s || %s`, date.toLocaleDateString(), date.toLocaleTimeString())//Tambien podemos obtener los datos de fecha y hora locales de manera individual, fun fact: (los simbolos %s sirven como almohadillas para ser llenadas despues, es un tipo de interpolacion)

    //tambien podemos obtener los datos de temporales de la zona horaria UTC en la zona 0
    console.log(`%s || %s`, date.getUTCDate(), date.getUTCHours())//Obtener fecha y hora en la zona 0

    //Tambien existe algo muy curioso y es el metodo now que se ejecuta directamente con el constructor Date
    console.log(Date.now())//El metodo now() retorna los milisegundo que han pasado desde el primero de enero de 1970, fecha conocida como del inicio 0, este metodo es muy importante debido a que nos puede servir para hacer restas de fechas muy simples y faciles de implementar
    //Ejercicio -> averiguar cuantos dias llevo vivo 22/09"2005 -> 6/02/2023
    const NACIMIENTO = new Date(2005, 8, 22) //Creamos la fecha de mi nacimiento
    const ACTUAL = new Date() //Creamos la fecha actual

    //Realizamos la resta entre las dos fechas
    const resultDate = ACTUAL.getTime() - NACIMIENTO.getTime()

    //Le damos formato imrpimiendo el restulado entre todos los flitro de milisegundos, segundos, minutos y horas
    console.log(resultDate / 1000 / 60 / 60 / 24) //Imprime los dias que llevo vivo xdddd
}

//OBEJTO MATH
//Objeto muy util para realizar calculos matematicos, debido a que es un objeto estatico debemos invocar su constructor cada vez que querramos emplear alguno de sus metodos

{
    //Acontinuacion en la consola veremos todos los metodos del objeto Math, ademas tambien existen constante muy utiles como el numero PI o E
    console.table(Math)
    //Existen metodos escenciales y muy utlies en la realizacion de ciertos calculos dentro del entorno de desarrollo

    console.log(Math.abs(10))//Devuelve el valor absoluto de el numero que le pasemos por argumento
    console.log(Math.ceil(120.789))//Redondea al numero entero posterior inmediato, el siguiente // 121
    console.log(Math.floor(120.789))//Redondea al numero entero inferior inmediato, el anterior //120
    console.log(Math.round(120.789))//Redondea al mas cercano, si es mayor a .5 será al siguiente y si es menor al anterior // 121
    console.log(Math.sqrt(16))//Obtener raices cuadradas del numero que le pasemos por argumento //4
    console.log(Math.pow(2, 3))//Potencias, primer argumento es base y el segundo es el exponente // 8
    console.log(Math.sign(-7.8))//Devuelve un valor en funcion de si el numero es negativo o positivo de la siguiente manera // -1
    //NEGATIVO -> -1
    //CERO -> 0
    //POSITIVO -> 1
    console.log(Math.random())//Devulev un numero random entre 0 y 1 el cual puede ser manipulado por medio de multipliaciones, 10, 100, 1000 para obtener mas cifras entre 0 y la respectiva multiplicacion 
}

//OPERADOR DE CORTOCIRCUITO 
//Se refiere a las expresiones && y || de los condicionales los cuales son capaces de acabar con al evalaucio una expresion si se cumple o no la condicion a evaluar
{
    //CORTOCIRCUITO OR
    //Cuando el valor a evaluar en la izquierda es true, toda la expresion será evaluada como tal, logicamente tiene que ser asi y tiene sentido
    //Ej:
    let a = 0
    let b = 10
    console.log(a === 0 || b === 9)//Retorna true
    //CORTOCIRCUITO AND
    //Cuando el valor evaluado a la izquierda de la declaracion retorna false, toda la expresion será tomada como tal
    console.log(b === 0 && a === 0)//Retorna false
}

//ALERT, CONFIRM Y PROMPT
//
{

}