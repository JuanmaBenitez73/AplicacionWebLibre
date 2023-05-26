var URL = "https://hp-api.onrender.com/api/characters";

export async function getHpCharacters() {
	var request = await fetch(URL);
	var data = await request.json();

	for (var i = 0; i < 25; i++) {
		console.log(data[i]);
	}
}
