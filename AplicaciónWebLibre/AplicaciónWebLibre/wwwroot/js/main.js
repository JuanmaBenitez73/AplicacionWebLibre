var URL = "https://hp-api.onrender.com/api/characters";

var especies = {
    "human": "Humano",
    "half-giant": "Medio Gigante",
    "werewolf": "Hombre Lobo",
    "cat": "Gato"
};

function getSpecies(data) {
    var type = document.createElement("div");
    type.classList.add("type");

    type.innerHTML = `Especie: ${especies[data.species]}`;

    return type;
}

var mago = {
    true: "Es mago",
    false: "No es mago"
}

function getWizard(data) {
    var isWizard = document.createElement("div");
    isWizard.classList.add("wizard");

    isWizard.innerHTML = mago[data.wizard];
    isWizard.style.marginTop = "-5%";

    return isWizard;
}

var ancestros = {
    "half-blood": "Mestizo",
    muggleborn: "Hijo de Muggle / Sangre sucia",
    "pure-blood": "Pura sangre",
    squib: "Hijo de mago"
}

function getAncestry(data) {
    var ancestro = document.createElement("div");
    ancestro.classList.add("ancestro");

    ancestro.innerHTML = ancestros[data.ancestry];

    return ancestro;
}

var madera = {
    holly: "Acebo",
    vine: "Enredadera",
    willow: "Sauce",
    hawthorn: "Espino",
    fir: "Abeto",
    ash: "Cenizo",
    oak: "Roble",
    cherry: "Cerezo",
    yew: "Tejo",
    cypress: "Ciprés",
    walnut: "Nogal",
    cedar: "Cedro",
    birch: "Abedul",
    elm: "Olmo"
}

function getWood(data) {
    var wood = document.createElement("li");
    wood.classList.add("wood");

    wood.innerHTML = `Madera de: ${madera[data.wand.wood]}`;

    return wood;
}

var nucleo = {
    "phoenix feather": "Pluma de fénix",
    "dragon heartstring": "Corazón de dragón",
    "unicorn tail-hair": "Pelos de cola de unicornio",
    "unicorn hair": "Pelo de unicornio",
}

function getCore(data) {
    var core = document.createElement("li");
    core.classList.add("core");

    core.innerHTML = `Núcleo de: ${nucleo[data.wand.core]}`;

    return core;
}

var patronus = {
    stag: "Ciervo",
    otter: "Nutria",
    "Jack Russell terrier": "Perro Jack Russel Terrier",
    "tabby cat": "Gato atigrado",
    swan: "Cisne",
    doe: "Cervatillo",
    "Non-Corporeal": "No corpóreo",
    hare: "Liebre",
    horse: "Caballo",
    wolf: "Lobo",
    weasel: "Comadreja",
    lynx: "Lince",
    "persian cat": "Gato persa",
}

function getPatronus(data) {
    var patron = document.createElement("div");
    patron.classList.add("patronus");

    patron.innerHTML = `Su Patronus es: ${patronus[data.patronus]}`;

    return patron;
}

export async function getHpCharacters() {
    for (var i = 0; i < 25; i++) {
        var request = await fetch(URL);
        var data = await request.json();
        viewCharacters(data[i]);
		console.log(data[i]);
	}
}

async function viewCharacters(data) {
    var container = document.getElementById("container");
    
    var tarjet = document.createElement("div");
    tarjet.classList.add("character");
    var hr = document.createElement("hr");
    hr.style.width = "73%";
    hr.style.margin = "auto";
    var name = document.createElement("h1");
    var image = document.createElement("img");
    image.classList.add("image");
    var typesAndGender = document.createElement("div");
    typesAndGender.style.display = "flex";
    typesAndGender.style.justifyContent = "center";
    typesAndGender.style.marginTop = "10px";
    var gender = document.createElement("div");
    gender.style.paddingLeft = "1rem";
    var male = document.createElement("img");
    male.src = "./images/male.png";
    male.style.width = "10px";
    male.style.height = "10px";
    var female = document.createElement("img");
    female.src = "./images/shemale.png";
    female.style.width = "15px";
    female.style.height = "15px";
    var wand = document.createElement("div");
    wand.style.textAlign = "justify";
    var p = document.createElement("p");
    p.innerHTML = "- Varita:";
    p.style.textDecoration = "underline";
    var ul = document.createElement("ul");
    var wood = document.createElement("li");
    var core = document.createElement("li");
    var length = document.createElement("li");
    var patronus = document.createElement("div");
    var info = document.createElement("div");
    var actor = document.createElement("div");

    name.innerHTML = data.name;
    image.src = data.image;
    actor.innerHTML = "Actor/Actriz: " + data.actor;

    wood.innerHTML = "Madera: " + data.wand.wood;
    core.innerHTML = "Nucleo: " + data.wand.core;
    length.innerHTML = `Longitud: ${Number((data.wand.length * 2.54).toFixed(2))} cm`;
    patronus.innerHTML = "Patronus: " + data.patronus;


    if (data.hogwartsStaff) {
        info.innerHTML = "Puesto en Hogwarts: Trabajador";
    } else if (data.hogwartsStudent) {
        info.innerHTML = "Puesto en Hogwarts: Estudiante";
    }

    if (data.gender === "female") {
        gender.appendChild(female);
        tarjet.addEventListener("mouseover", () => {
            /*tarjet.style.textShadow = "0px 0px 10px rgb(226, 44, 155)";
            tarjet.style.boxShadow = "0 2px 50px rgb(226, 44, 155)";
            image.style.boxShadow = "0 2px 10px rgb(226, 44, 155)";*/
            tarjet.style.boxShadow = "0 2px 50px white";
            image.style.boxShadow = "0 2px 10px white";
            tarjet.style.color = "rgb(226, 44, 155)";
            tarjet.style.border = "2px solid rgb(226, 44, 155)";
            image.style.border = "2px solid rgb(226, 44, 155)";
            
        });
        tarjet.addEventListener("mouseleave", () => {
            tarjet.style.textShadow = "none";
            tarjet.style.boxShadow = "none";
            image.style.boxShadow = "none";

            tarjet.style.color = "white";
            tarjet.style.border = "2px solid white";
            image.style.border = "2px solid white";
        });
    } else if (data.gender === "male") {
        gender.appendChild(male);
        tarjet.addEventListener("mouseover", () => {
            /*tarjet.style.textShadow = "0px 0px 10px rgb(81, 151, 226)";
            tarjet.style.boxShadow = "0 2px 50px rgb(81, 151, 226)";
            image.style.boxShadow = "0 2px 10px rgb(81, 151, 226)";*/
            tarjet.style.boxShadow = "0 2px 50px white";
            image.style.boxShadow = "0 2px 10px white";
            tarjet.style.color = "rgb(81, 151, 226)";
            tarjet.style.border = "2px solid rgb(81, 151, 226)";
            image.style.border = "2px solid rgb(81, 151, 226)";
        });
        tarjet.addEventListener("mouseleave", () => {
            tarjet.style.textShadow = "none";
            tarjet.style.boxShadow = "none";
            image.style.boxShadow = "none";

            tarjet.style.color = "white";
            tarjet.style.border = "2px solid white";
            image.style.border = "2px solid white";
        });
    }

    container.appendChild(tarjet);
    tarjet.appendChild(name);
    tarjet.appendChild(image);
    tarjet.appendChild(hr);
    tarjet.appendChild(typesAndGender);
    typesAndGender.appendChild(getSpecies(data));
    typesAndGender.appendChild(gender);
    tarjet.appendChild(getWizard(data));
    if (data.ancestry != "") {
        tarjet.appendChild(getAncestry(data));
    }
    if (data.wand.wood != "" && data.wand.core != "" && data.wand.length != null) {
        tarjet.appendChild(wand);
        wand.appendChild(p);
        wand.appendChild(ul);
    }
    if (data.wand.wood == "" && data.wand.core != "" && data.wand.length != null) {
        tarjet.appendChild(wand);
        wand.appendChild(p);
        wand.appendChild(ul);
    }
    if (data.wand.wood != "" && data.wand.core == "" && data.wand.length != null) {
        tarjet.appendChild(wand);
        wand.appendChild(p);
        wand.appendChild(ul);
    }
    if (data.wand.wood != "" && data.wand.core != "" && data.wand.length == null) {
        tarjet.appendChild(wand);
        wand.appendChild(p);
        wand.appendChild(ul);
    }
    if (data.wand.wood == "" && data.wand.core == "" && data.wand.length != null) {
        tarjet.appendChild(wand);
        wand.appendChild(p);
        wand.appendChild(ul);
    }
    if (data.wand.wood == "" && data.wand.core != "" && data.wand.length == null) {
        tarjet.appendChild(wand);
        wand.appendChild(p);
        wand.appendChild(ul);
    }
    if (data.wand.wood != "" && data.wand.core == "" && data.wand.length == null) {
        tarjet.appendChild(wand);
        wand.appendChild(p);
        wand.appendChild(ul);
    }
    if (data.wand.wood != "") {
        ul.appendChild(getWood(data));
    }
    if (data.wand.core != "") {
        ul.appendChild(getCore(data));
    }
    if (data.wand.length != null) {
        ul.appendChild(length);
    }
    if (data.patronus != "") {
        tarjet.appendChild(getPatronus(data));
    }
    tarjet.appendChild(info);
    tarjet.appendChild(actor);
}