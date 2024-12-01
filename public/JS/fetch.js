let players = [];
let playersCards = [];

async function loadCards() {
    let response = await axios.get("../players.json");
    players = response.data;
    players.forEach
}