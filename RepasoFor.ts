//>>>>>>>>>>>>>>>PUNTO 3 - Mostrar impares hasta el numero indicado como parametro<<<<<<<<<<<<<<<<<<<

function impar(){
    for(let i = 0; i <= 20; i++){
        if(i % 2 != 0){
            console.log("Estos numeros son impares:" +i);
        }
    }
}

impar();



//>>>>>>>>>>>>>>>>>>>>PUNTO 4 - Funcion array invertido<<<<<<<<<<<<<<<<<<<<<<<<<<<
function invertirArray(arr1:number[]) {
   
    return arr1.reverse();
}

console.log(invertirArray([2, 4, 6, 8, 10]));




//>>>>>>>>>>>>>>>>>>>>PUNTO 5 - FUNCION ARCOIRIS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function arcoiris(arrayColores:string[]){
    for(let i = 0; i < arrayColores.length; i++){
        if(arrayColores[i] == "azul"){
            console.log("El color esta en el arcoiris")
        }else if(arrayColores[i] == "amarillo"){
            console.log("El color esta en el arcoiris")
        }else if(arrayColores[i] == "naranja"){
            console.log("El color esta en el arcoiris")
        }else if(arrayColores[i] == "verde"){
            console.log("El color esta en el arcoiris")
        }else if(arrayColores[i] == "rojo"){
            console.log("El color esta en el arcoiris")
        }else if(arrayColores[i] == "rosa" ){
            console.log("El color esta en el arcoiris")
        }else{
            console.log("¡El color introducido no forma parte del arcoiris!")
        }
    }
}

arcoiris(["magenta"]);



//>>>>>>>>>>>>>>>>>>>>>>>>>>><<<PUNTO 6 - Funcion par<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //opcion1
    function par(arrNum:number[]){
        for(let i = 0; i < arrNum.length; i++){
            if(arrNum[i] % 2 == 0){
                console.log("Los numeros pares son:"+ arrNum[i]);       
            }
        }
    }
    
    par([1,2,3,4,5,6]);
    
    //opcion2
    function findPar(arr1:number []){
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] % 2 == 0){
               return "Hay numeros pares";       
            }
            else{
              return "No hay numeros pares";
            }
        }
    }
    console.log(findPar([2,3,5,7]));

//>>>>>>>>>>>>>>>>>>>>>> PUNTO 7 - FUNCION devolver true si todos los nombres empiezan por "m"<<<<<<<<<<<<<<<<<<<<<<

function nombres(arrNombre:string[]): Boolean{
    let nombM: boolean = true;
    for(let i = 0; i < arrNombre.length; i++){
        if(arrNombre[i][0] ==="m"){
            nombM = true;      
        }else{
            nombM = false;
        }
    }
    return nombM;
}

console.log(nombres(["javier", "oscar", "marta"]));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PUNTO 9 - Funcion par o impar <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function parImpar(num:number){
    if(num % 2 == 0){
    console.log("El numero es par");
    }else if (num % 2 !=0){
        console.log("El numero es impar")
    }
}
parImpar(7);


//>>>>>>>>>>>>>>>>>>>>>>>> PUNTO 10 - Utilizar funciones anteriores para saber si es par/impar<<<<<<
// la suma de los caracteres:

function sumCaractPI (arrString :string[]){
    let sum = 0;
    for (let i:number = 0; i < arrString.length; i++ ){
        sum = arrString[i].length + sum;
           
    }

    if(sum % 2 == 0){
        console.log("El numero es par");
    }else if (sum % 2 !=0){
        console.log("El numero es impar")
    }
    return sum;
}

//Ejemplos
console.log(sumCaractPI(["Casa", "Coche", "Ciudad", "Cesta"]));
console.log(sumCaractPI(["Barco", "Vaca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]));
console.log(sumCaractPI(["Venezuela", "Veneno", "Voltaje"]));



