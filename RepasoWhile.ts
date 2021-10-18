//>>>>>>>>>>>>>>>PUNTO 3(Opcion 2) - Mostrar impares hasta el numero indicado como parametro<<<<<<<<<<<<<<<<<<<
function impar1(){
    let i = 0;
    
        while (i<= 20){
            if(i % 2 != 0){
                console.log("Estos numeros son impares:" +i);
            }
            i++;
        }
    
    }


impar1();

//>>>>>>>>>>>>>>>>>>>>>>>>>>><<<PUNTO 6 - Funcion par<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //OPCION 3 CON WHILE

function par(arrNum:number[]){
    let i = 0;

    while(i < arrNum.length){
        if(arrNum[i] % 2 == 0){
            console.log("Los numeros pares son:"+ arrNum[i]);       
        }
        i++;
    }
}

par([1,2,3,4]);


//>>>>>>>>>>>>>>>>>>>>>> PUNTO 8 - Funcion SUMA caracteres array<<<<<<<<<<<<<<<<<<<<<<
    //Opcion 2 con While

function sumCaractArr(arr1 :string[]):number {
    let suma = 0;
    let i:number = 0;
    while ( i < arr1.length){
        suma = arr1[i].length + suma;
        i++ 
    }
    return suma;
}

console.log(sumCaractArr(["ana", "sofia", "andre"]));
