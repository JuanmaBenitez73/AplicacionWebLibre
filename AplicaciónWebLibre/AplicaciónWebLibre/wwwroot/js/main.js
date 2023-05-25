var URL = "https://hp-api.onrender.com/api/characters";

//function executeOnloadMethod() {
//    DotNet.invokeMethodAsync("AplicaciónWebLibre", "GetHpCharacters")
//        //.catch(error => {
//        //    console.error(error);
//        //});
//}

export async function getHpCharacters() {
	var request = await fetch(URL);
	var data = await request.json();

	for (var i = 0; i < 25; i++) {
		console.log(data[i]);
	}
}
