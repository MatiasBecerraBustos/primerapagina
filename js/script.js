function showAlert(){
    alert("¡Hola Mundo! esto es una alerta desde JavaScript");}
   
   
    const form = document.getElementById('myForms');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        validateForm();
    });
    function validateEmail(email) {
        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
        return regex.test(email)
    }
    function validateForm() {
        const emailInput = document.getElementById('email');
        const email = emailInput.value;
    
        if (!validateEmail(email)) {
            alert('Por favor ingrese un correo electrínico válido');
        }else {
            alert('Correo electrónico enviado correctamente');
        }
    }

    document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

 /*   console.log("hola");


 var nombre = "matias";
 console.log(nombre)
 console.log(typeof nombre)
 
 function sumar(num1, num2){
    let resultado = num1+ num2;
    return resultado;
 }

 function restar(num1, num2){
return num1-num2;
 }

 function multi(num1, num2){
    return num1*num2;
    }

 console.log(sumar(2,12))
 console.log(restar(2,12))
 console.log(multi(2,12))

var nombres = ["matias", "juan", "pedro", "12"];
var apellidos={matias:"becerra", juan:"gomez", pedro:"gutierrez" };
console.log(nombres)
console.log(apellidos)*/