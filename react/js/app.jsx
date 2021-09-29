let alumno = {
    nombre: "stefy",
    edad: 19,
    mostrar:()=>{
        return `Soy ${alumno.nombre} y tengo ${alumno.edad}`;
    }
};
let saludo=`Hola, ${alumno.nombre} como estan?`; 

ReactDOM.render(
  <div className="row">
      <div className="col-6 bg-primary text-white p-4">
        Aqui estamos dentro del react {alumno.mostrar()}
      </div>
  </div>,
    document.getElementById('root')
  );