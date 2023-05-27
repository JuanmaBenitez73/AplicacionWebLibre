var URL = "https://hp-api.onrender.com/api/characters";
var URLGryffindor = "https://hp-api.onrender.com/api/characters/house/gryffindor";
var URLSlytherine = "https://hp-api.onrender.com/api/characters/house/slytherine";
var URLRavenclaw = "https://hp-api.onrender.com/api/characters/house/ravenclaw";
var URLHufflepuff = "https://hp-api.onrender.com/api/characters/house/hufflepuff";

var arrayCharacters = [];
var gryffindorCharacters = [];
var slytherineCharacters = [];
var ravenclawCharacters = [];
var hufflepuffCharacters = [];

export async function getHpCharacters() {
    for (var i = 0; i < 25; i++) {
        var request = await fetch(URL);
        var data = await request.json();
        arrayCharacters.push(data[i]);
        viewCharacters(data[i]);
    }
}

export async function getGryffindor() {
    var request = await fetch(URLGryffindor);
    var data = await request.json();
    gryffindorCharacters.push(data);
    console.log(gryffindorCharacters);
    for (var i = 0; i < 25; i++) {
        var request2 = await fetch(URL);
        var data2 = await request2.json();
        if (gryffindorCharacters[0][i].id == data2[i].id) {
            viewCharacters(data2[i]);
        }
    }
}

export async function getSlytherine() {
    var request = await fetch(URLSlytherine);
    var data = await request.json();
    slytherineCharacters.push(data);
    console.log(slytherineCharacters);
    for (var i = 0; i < 25; i++) {
        var request2 = await fetch(URL);
        var data2 = await request2.json();
        if (slytherineCharacters[0][i].id == data2[i].id) {
            viewCharacters(data2[i]);
        }
    }
}

export async function getRavenclaw() {
    var request = await fetch(URLRavenclaw);
    var data = await request.json();
    ravenclawCharacters.push(data);
    console.log(ravenclawCharacters);
    for (var i = 0; i < 25; i++) {
        var request2 = await fetch(URL);
        var data2 = await request2.json();
        if (ravenclawCharacters[0][i].id == data2[i].id) {
            viewCharacters(data2[i]);
        }
    }
}

export async function getHufflepuff() {
    var request = await fetch(URLHufflepuff);
    var data = await request.json();
    hufflepuffCharacters.push(data);
    console.log(hufflepuffCharacters);
    for (var i = 0; i < 25; i++) {
        var request2 = await fetch(URL);
        var data2 = await request2.json();
        if (hufflepuffCharacters[0][i].id == data2[i].id) {
            viewCharacters(data2[i]);
        }
    }
}

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
    ancestro.style.marginTop = "-5%";

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
    patron.style.marginTop = "-3%";

    return patron;
}

//export async function viewHouse(){
//    var all = document.getElementById("all2");
//    var div1 = document.createElement("div");
//    div1.style.display = "flex";
//    div1.style.justifyContent = "center";
//    var img1 = document.createElement("img");
//    img1.width = "200px";
//    img1.src = "./images/Hogwarts.png";

//    all.appendChild(div1);
//    div1.appendChild(img1);
//}

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
    var wizardHat = document.createElement("div");
    wizardHat.style.display = "flex";
    wizardHat.style.justifyContent = "center";
    var hat = document.createElement("div");
    hat.style.paddingLeft = "1rem";
    hat.style.marginTop = "-6%";
    var isWizardhatImage = document.createElement("img");
    isWizardhatImage.src = "./images/hat.png";
    isWizardhatImage.style.width = "20px";
    isWizardhatImage.style.height = "20px";
    var isNotWizardhatImage = document.createElement("img");
    isNotWizardhatImage.src = "./images/hatcross.png";
    isNotWizardhatImage.style.width = "20px";
    isNotWizardhatImage.style.height = "20px";
    var ancestryBlood = document.createElement("div");
    ancestryBlood.style.display = "flex";
    ancestryBlood.style.justifyContent = "center";
    var bloodImage = document.createElement("div");
    bloodImage.style.marginTop = "-5.5%";
    bloodImage.style.paddingLeft = "1rem";
    var blood = document.createElement("img");
    blood.src = "./images/blood.png";
    blood.style.width = "10px";
    blood.style.height = "15px";
    var wand = document.createElement("div");
    wand.style.textAlign = "justify";
    wand.style.marginTop = "-5%";
    var p = document.createElement("p");
    p.innerHTML = "- Varita:";
    p.style.textDecoration = "underline";
    var ul = document.createElement("ul");
    var longitud = document.createElement("li");
    var info = document.createElement("div");
    var actor = document.createElement("div");

    name.innerHTML = data.name;
    image.src = data.image;
    actor.innerHTML = `Actor/Actriz: ${data.actor}`;
    longitud.innerHTML = `Longitud: ${Number((data.wand.length * 2.54).toFixed(2))} cm`;
    patronus.innerHTML = `Patronus: ${data.patronus}`;

    if (data.hogwartsStaff) {
        info.innerHTML = "Puesto en Hogwarts: Trabajador";
    } else if (data.hogwartsStudent) {
        info.innerHTML = "Puesto en Hogwarts: Estudiante";
    }

    if (data.gender === "female") {
        gender.appendChild(female);
        tarjet.addEventListener("mouseover", () => {
            tarjet.style.textShadow = "0px 0px 20px rgb(226, 44, 155)";
            tarjet.style.boxShadow = "0 2px 73px rgb(226, 44, 155)";
            image.style.boxShadow = "0 2px 20px rgb(226, 44, 155)";
            name.style.color = "rgb(226, 44, 155)";
            
        });
        tarjet.addEventListener("mouseleave", () => {
            tarjet.style.textShadow = "none";
            tarjet.style.boxShadow = "none";
            image.style.boxShadow = "none";
            name.style.color = "white";
            tarjet.style.color = "white";
        });
    } else if (data.gender === "male") {
        gender.appendChild(male);
        tarjet.addEventListener("mouseover", () => {
            tarjet.style.textShadow = "0px 0px 20px rgb(81, 151, 226)";
            tarjet.style.boxShadow = "0 2px 73px rgb(81, 151, 226)";
            image.style.boxShadow = "0 2px 20px rgb(81, 151, 226)";
            name.style.color = "rgb(81, 151, 226)";
        });
        tarjet.addEventListener("mouseleave", () => {
            tarjet.style.textShadow = "none";
            tarjet.style.boxShadow = "none";
            image.style.boxShadow = "none";
            name.style.color = "white";
            tarjet.style.color = "white";
        });
    }

    container.appendChild(tarjet);
    tarjet.appendChild(name);
    tarjet.appendChild(image);
    tarjet.appendChild(hr);
    tarjet.appendChild(typesAndGender);
    typesAndGender.appendChild(getSpecies(data));
    typesAndGender.appendChild(gender);
    tarjet.appendChild(wizardHat);
    wizardHat.appendChild(getWizard(data));

    if (data.wizard != false) {
        wizardHat.appendChild(hat);
        hat.appendChild(isWizardhatImage);
    }
    else {
        wizardHat.appendChild(hat);
        hat.appendChild(isNotWizardhatImage);
    }
    if (data.ancestry != "") {
        tarjet.appendChild(ancestryBlood);
        ancestryBlood.appendChild(getAncestry(data));
        ancestryBlood.appendChild(bloodImage);
        bloodImage.appendChild(blood);
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
        ul.appendChild(longitud);
    }
    if (data.patronus != "") {
        tarjet.appendChild(getPatronus(data));
    }

    tarjet.appendChild(info);
    tarjet.appendChild(actor);
}

//export function sortCharacters(order) {
//    var sortedCharacters = "";

//    if (order === 'a') {
//        sortedCharacters = arrayCharacters.slice().sort((a, b) => {
//            var nameA = a.name.toLowerCase();
//            var nameB = b.name.toLowerCase();
//            var result = 0;

//            if (nameA < nameB) {
//                result = -1;
//            }
//            if (nameA > nameB) {
//                result = 1;
//            }
//            return result;
//        });
//    }
//    else if (order === 'd') {
//        sortedCharacters = arrayCharacters.slice().sort((a, b) => {
//            var nameA = a.name.toLowerCase();
//            var nameB = b.name.toLowerCase();
//            var result = 0;

//            if (nameA < nameB) {
//                result = 1;
//            }
//            if (nameA > nameB) {
//                result = -1;
//            }
//            return result;
//        });
//    }
//    viewCharacters(sortedCharacters);
//}

//export async function searchCharacters() {
//    var search = document.getElementById("searchInput");
//    var searchValue = search.value;

//    var filteredCharacters = arrayCharacters.filter((character) => {
//        return character.name.toLowerCase().includes(searchValue.toLowerCase());
//    });
//    viewCharacters(filteredCharacters);
//}