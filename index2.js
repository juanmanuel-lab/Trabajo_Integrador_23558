// definir el valor del ticket
const ticket = 200;
// Definir descuentos
const decEstudiante = 0.80;
const descTrainee = 0.50;
const descJunior= 0.15;

//tomar los elementos

const nombre= document.getElementsByClassName('form-control');
const apellido = document.getElementsByClassName('form-control');
const correo = document.getElementById('correo');
const cantidad = document.getElementById('cantidad');
const categoria= document.getElementById('categoria');
const totalPagar= document.getElementById('TotalAPagar');
const btnResumen = document.getElementById('btnResumen');
const btnBorrar = document.getElementById('btnBorrar');
console.log(totalPagar);

function calcularPago(){
    let total= cantidad.value * ticket;

    switch (categoria.value){
        case "Estudiante":
            total =total-(total* decEstudiante);
        break;
        case "Trainee":
            total=total-(total*descTrainee);
        break;
        case "Junior":
            total=total(total*descJunior);
        break;
    }
    totalPagar.textContent = `Total a Pagar: $ ${total}`;

}
function borrar(){
cantidad.value=" ";
nombre.value= " ";
apellido.value=" ";
correo.value=" ";
totalPagar.textContent=`Total a Pagar: $`;
}
// Evita refrescar lapagina
btnResumen.addEventListener('click',(e)=>{
e.preventDefault(); 
calcularPago();
});
btnBorrar.addEventListener('click',(e)=>{
    borrar();
});