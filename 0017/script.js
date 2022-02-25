//Faça um Programa que peça dois números e imprima o maior deles.
function maiorNumero(n1=0,n2=0,n3=0){ 


if(n1>n2 && n1>n3){
    maoir=n1
    console.log("O maior número é",n1)

}else if  (n2>n3 && n2>n1) {  console.log("O maior número é",n2)
 maior=n2
   
} else  if (n3>n1 && n3>n2) { 
      console.log("O maior número é",n3)
      maior=n3
}
}
maiorNumero(4,5,7)
