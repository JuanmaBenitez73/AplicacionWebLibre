var URL = "https://hp-api.onrender.com/api/characters";
var URLGryffindor = "https://hp-api.onrender.com/api/characters/house/gryffindor";
var URLSlytherin = "https://hp-api.onrender.com/api/characters/house/slytherin";
var URLRavenclaw = "https://hp-api.onrender.com/api/characters/house/ravenclaw";
var URLHufflepuff = "https://hp-api.onrender.com/api/characters/house/hufflepuff";

var arrayCharacters = [];
var gryffindorCharacters = [];
var slytherinCharacters = [];
var ravenclawCharacters = [];
var hufflepuffCharacters = [];

export async function getHpCharacters() {
    var container = document.getElementById("container");
    container.innerHTML = "";
    for (var i = 0; i < 25; i++) {
        var request = await fetch(URL);
        var data = await request.json();
        arrayCharacters.push(data[i]);
        viewCharacters(data[i]);
    }
}

export async function getGryffindor() {
    var container = document.getElementById("container");
    container.innerHTML = "";
    var request = await fetch(URL);
    var data = await request.json();
    arrayCharacters.push(data);
    //console.log(arrayCharacters);
    for (var i = 0; i < 25; i++) {
        var request2 = await fetch(URLGryffindor);
        var data2 = await request2.json();
        gryffindorCharacters.push(data2);
        //console.log(gryffindorCharacters[0]);
        for (var j = 0; j < gryffindorCharacters[0].length; j++) {
            if (arrayCharacters[i].id == gryffindorCharacters[0][j].id) {
                //console.log(gryffindorCharacters[0][j]);
                viewCharacters(gryffindorCharacters[0][j]);
            }
        }
    }
}

export async function getSlytherin() {
    var container = document.getElementById("container");
    container.innerHTML = "";
    var request = await fetch(URL);
    var data = await request.json();
    arrayCharacters.push(data);
    //console.log(arrayCharacters);
    for (var i = 0; i < 25; i++) {
        var request2 = await fetch(URLSlytherin);
        var data2 = await request2.json();
        slytherinCharacters.push(data2);
        //console.log(slytherinCharacters[0]);
        for (var j = 0; j < slytherinCharacters[0].length; j++) {
            if (arrayCharacters[i].id == slytherinCharacters[0][j].id) {
                //console.log(slytherinCharacters[0][j]);
                viewCharacters(slytherinCharacters[0][j]);
            }
        }
    }
}

export async function getRavenclaw() {
    var container = document.getElementById("container");
    container.innerHTML = "";
    var request = await fetch(URL);
    var data = await request.json();
    arrayCharacters.push(data);
    //console.log(arrayCharacters);
    for (var i = 0; i < 25; i++) {
        var request2 = await fetch(URLRavenclaw);
        var data2 = await request2.json();
        ravenclawCharacters.push(data2);
        //console.log(ravenclawCharacters[0]);
        for (var j = 0; j < ravenclawCharacters[0].length; j++) {
            if (arrayCharacters[i].id == ravenclawCharacters[0][j].id) {
                //console.log(ravenclawCharacters[0][j]);
                viewCharacters(ravenclawCharacters[0][j]);
            }
        }
    }
}

export async function getHufflepuff() {
    var container = document.getElementById("container");
    container.innerHTML = "";
    var request = await fetch(URL);
    var data = await request.json();
    arrayCharacters.push(data);
    //console.log(arrayCharacters);
    for (var i = 0; i < 25; i++) {
        var request2 = await fetch(URLHufflepuff);
        var data2 = await request2.json();
        hufflepuffCharacters.push(data2);
        //console.log(hufflepuffCharacters[0]);
        for (var j = 0; j < hufflepuffCharacters[0].length; j++) {
            if (arrayCharacters[i].id == hufflepuffCharacters[0][j].id) {
                //console.log(hufflepuffCharacters[0][j]);
                viewCharacters(hufflepuffCharacters[0][j]);
            }
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

var housesShields = [
    "./images/Hogwarts.png",
    "./images/Gryffindor.png",
    "./images/Slytherin.png",
    "./images/Ravenclaw.png",
    "./images/Hufflepuff.png"
];

export async function viewHouseShield(num){
    var all = document.getElementById("all2");
    all2.innerHTML = "";
    var div1 = document.createElement("div");
    div1.style.display = "flex";
    div1.style.justifyContent = "center";
    var img1 = document.createElement("img");
    img1.width = 200;
    img1.src = housesShields[num - 1];
    img1.style.filter = "drop-shadow(0 0 10px white)";
    
    div1.appendChild(img1);
    all.appendChild(div1);
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

export function sortCharactersAscending() {
    var container = document.getElementById("container");
    container.innerHTML = "";

    var result = 0;

    var sortedCharactersAsc = arrayCharacters.slice().sort((a, b) => {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();

        if (nameA < nameB) {
            result = -1;
        }
        if (nameA > nameB) {
            result = 1;
        }
        return result;
    });

    for (var i = 0; i < sortedCharactersAsc.length; i++) {
        viewCharacters(sortedCharactersAsc[i]);
    }
}

export function sortCharactersDescending() {
    var container = document.getElementById("container");
    container.innerHTML = "";

    var result = 0;

    var sortedCharactersDesc = arrayCharacters.slice().sort((a, b) => {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();

        if (nameA > nameB) {
            result = -1;
        }
        if (nameA < nameB) {
            result = 1;
        }
        return result;
    });

    for (var i = 0; i < sortedCharactersDesc.length; i++) {
        viewCharacters(sortedCharactersDesc[i]);
    }
}

export async function searchCharacters() {
    var container = document.getElementById("container");
    container.innerHTML = "";

    var search = document.getElementById("searchInput");
    var searchValue = search.value;

    var filteredCharacters = [];

    for (var i = 0; i < arrayCharacters.length; i++) {
        if (arrayCharacters[i].name.toLowerCase().includes(searchValue.toLowerCase())) {
            filteredCharacters.push(arrayCharacters[i]);
        }
    }
    for (var i = 0; i < filteredCharacters.length; i++) {
        await viewCharacters(filteredCharacters[i]);
    }
}