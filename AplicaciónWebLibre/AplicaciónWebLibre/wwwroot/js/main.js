var URL = "https://api.spotify.com/v1/albums/";

var albumsIds = [
	{
		//nombre: "Un Verano Sin Ti"
		id: "3RQQmkQEvNCY4prGKE6oc5"
	},
	{
		//nombre: "Los Niños del Parque",
		id: "6hkJjr8eUF53zDqxXcc4Lf"
	},
	{
		//nombre: "Microdosis",
		id: "0QLDQG7Jx78rEUDW03IhHC"
	},
	{
		//nombre: "YHLQMDLG",
		id: "5lJqux7orBlA1QzyiBGti1"
	},
	{
		//nombre: "Saturno",
		id: "5AcRssiG0Zqu3lqYW7hMoM"
	},
	{
		//nombre: "Feliz cumpleaños Ferxxo",
		id: "7pijRxgRaBirPz6wDaJIp9"
	},
	{
		//nombre: "Juglar del Siglo XXI",
		id: "7bxbscLnwPLah6i2bZVA9V"
	},
	{
		//nombre: "Muerte",
		id: "27xqCLyTHom0wyjtw08K12"
	}
];

export async function getAlbums() {
	for (var i = 0; i < albumsIds.length; i++) {
		var request = await fetch(URL + albumsIds[i].id);
		var data = await request.json();

		console.log(data);
    }
}
