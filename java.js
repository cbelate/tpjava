//Unidad I
//Ej1- Realice un algoritmo que muestre el nombre y apellido de un usuario//
var nombre = prompt (
    "Ingrese su Nombre de Usuario"
)
var apellido = prompt (
    "Ingrese su Apellido"
)
alert ( nombre + " " + apellido)


//Ej2- Realice un algoritmo que muestre el promedio de 3 notas//

var n1 = prompt (
    "Ingrese primer numero "
)
n1=Number (n1)

var n2 = prompt (
    "Ingrese segundo numero "
)
n2=Number (n2)

var n3 = prompt (
    "ingrese tercer numero "
)
n3=Number (n3)

alert ( (n1+n2+n3) /3 )

// Ej3 - Realice el algoritmo para calcular e informar el perímetro del triángulo //

var lt1 = prompt (
    "Ingrese medida primer lado"
)
lt1 = Number(lt1)

var lt2 = prompt (
    "Ingrese medida segundo lado"
)
lt2 = Number(lt2)

var lt3 = prompt (
    "Ingrese medida tercer lado"
)
lt3 = Number(lt3)

alert (lt1+lt2+lt3)

//Ej4 - Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado.//

var lc1 = prompt (
    "Ingrese medida primer lado"
)
lc1 = Number(lc1)

var lc2 = prompt (
    "Ingrese medida segundo lado"
)
lc2 = Number(lc2)

var Perimetro = (lc1+lc2) * 2

Perimetro=Number (Perimetro)

alert ("El perimetro del cuadrado es:"+Perimetro)

var superficie = (lc1*lc2)

superficie=Number (superficie)

alert ("La superficie del cuadrado es:"+superficie)

//Ej5 - Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo//

var br = prompt (
    "Ingrese medida de la base del rectangulo"
)
br = Number(br)

var ar = prompt (
    "Ingrese medida de la altura del rectangulo"
)
ar = Number(ar)

var Perimetrorec = (br+ar) * 2

Perimetrorec =Number (Perimetrorec)

alert ("El perimetro del rectangulo es:"+Perimetrorec)

var superficierec = (br * ar)

superficierec=Number (superficierec)

alert ("La superficie del cuadrado es:"+superficierec)

//Ej6- Realice el algoritmo para calcular e informar el resto de la división entera entre los valores.//
var numero1=50;
var numero2=2;
var resto=numero1%numero2;
alert("El resto de la division "+numero1+"/"+numero2+" es: "+resto);

//Ej7- Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario.
var usuario='Mariana1551';
alert("Bienvenido "+usuario);

//Ej8 - Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.
const PI=3.1416;
var radio=5;
var perimetro = 2* PI * radio;
var area = PI * radio * radio;
alert("Con circulo de radio: "+radio+"\n"+"El perimetro del circulo es: "+perimetro+"\n"+"El area del circulo es: "+area);






