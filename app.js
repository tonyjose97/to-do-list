const input = document.getElementById("ingresar-tarea")
const boton = document.querySelector("button")
const listaDeTareas = document.getElementById("lista-de-tareas")

function agregarTarea() {
    if(input.value){
        //crear elemento div para la tarea //
        let tareaNueva = document.createElement("div")
        tareaNueva.classList.add("tarea")


        //crear elemtor text ingresado por el usuario//
        let texto = document.createElement("p")
        texto.classList.add("container-fluid")
        texto.innerHTML = input.value;
        tareaNueva.appendChild(texto)


        //crear y agregar contenedor de iconos//
        let iconos = document.createElement("div")
        iconos.classList.add("iconos")
        tareaNueva.appendChild(iconos)

        //iconos//
        let completar = document.createElement("i")
        completar.classList.add("bi","bi-check-circle-fill", "icono-completar","btn")
        completar.addEventListener("click",completarTarea)

        let eliminar = document.createElement("i")
        eliminar.classList.add("bi", "bi-trash3-fill","icono-eliminar","btn")
        eliminar.addEventListener("click", elimiarTarea)

        let editar = document.createElement("i")
        editar.classList.add("bi", "bi-pencil-square","btn")
        editar.addEventListener("click",editarTarea)

        iconos.append(completar,eliminar,editar)

        //agregar a la lista de tarea//
        listaDeTareas.appendChild(tareaNueva)
    }else{
        alert("por favor escriba una tarea")
    } 
}
//completar tarea//
function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle("completada")
    
}

// eliminar tarea//
function elimiarTarea(e) {
    let tarea = e.target.parentNode.parentNode
    tarea.remove()
}

//edita tarea//
function editarTarea(e) {
    let tarea = e.target.value
    let tareaEditada = ""
    tarea.textContent = tareaEditada
    agregarTarea()
    
}

//agregar tarea al boton//
boton.addEventListener("click",agregarTarea)

input.addEventListener("keydown", (e) => {    
    if (e.key === "Enter") {
        agregarTarea();
    }
})

