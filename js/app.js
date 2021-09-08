let resultado=0; /**variable con scope global */
/*string, int, boolean, undefine, array object, null*/
function suma(){
     resultado = 10;
    return resultado;
}
console.log(suma());
console.log(resultado);

let nombre = "Luis";
let apellido = "Navas";
let edad = "48";
let llueve = true;
let participantes = [" Luis", " Junior", "Daniel", " Marta", " Martin"];

for(let a=0; a < participantes.length; a++){
    console.log(participantes[a]);
}
participantes.forEach(part=>console.log(part))

function render(){
    let contenedor = document.getElementById('root');
    participantes.forEach(part=>contenedor.innerHTML+=
        `<div class='card col-4'style='width: 20rem;'>
            <img src='...' class='card-img-top' alt='...'>
            <div class='card-body'>
                <h5 class='card-title'>${part}</h5>
                <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='#' class='btn-primary'>Go somewhere</a>
                </div>
            </div>` 
            );
}
render();
