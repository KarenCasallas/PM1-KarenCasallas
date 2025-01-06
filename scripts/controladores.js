// convertir activity a HTML

const convertirHtml = (activity) =>{
    const {id,title,description,imgUrl} = activity; 

    const tarjeta = document.createElement("div");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const boton = document.createElement("button");

    h3.textContent = title;
    img.src = imgUrl;
    img.alt = `esta imagen es: ${title}`;
    p.textContent = description;
    boton.textContent = "ELIMINAR";
    boton.id = id;

    tarjeta.classList.add("tarjeta");

    tarjeta.appendChild(h3);
    tarjeta.appendChild(img);
    tarjeta.appendChild(p);
    tarjeta.appendChild(boton);

    boton.addEventListener("click",handlerEliminarTarjeta);

    return tarjeta;
}

//Convertir todas las actividades en html, para agregarlas al contenedor

function actividadesAContenedor (){
    const contenedorTarjetas = document.getElementsByClassName("contenedorTarjetas")[0];
    contenedorTarjetas.innerHTML = "";

    const allActivities = repository.getAllActivities();

    const allActivitiesHtml = allActivities.map((activity) => convertirHtml(activity));
    
    allActivitiesHtml.forEach(function (activitiesHTML){
        return contenedorTarjetas.appendChild(activitiesHTML)
    });
    
}


// implementacion funcion handler y Button

function handlerCrearTarjeta() {
    const inputs = document.getElementsByTagName("input");

    const title = inputs[0].value;
    const description = inputs[1].value;
    const imagen = inputs[2].value;

    if (!title.trim() || !description.trim() || !imagen.trim()) {
        (alert("porfavor completa todos los campos"));
    } else {
        repository.createActivity(title, description, imagen);
        actividadesAContenedor();

        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";

    }
} 


// funcionalidad de eliminar tarjetas del contenedor

const handlerEliminarTarjeta = (event) => {
    
    const buttonClick = event.target;
    const activityId = Number(buttonClick.id); 
    
    repository.deleteActivity(activityId);

    actividadesAContenedor();
}