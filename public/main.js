// let data = JSON.parse(localStorage.getItem("players") || "[]");

// const fetchData = async () => {
//     if (data.length === 0 && !localStorage.getItem("players_loaded")) {
//         try {
//             const response = await axios.get('https://raw.githubusercontent.com/aymanebenhima/FUT-Champ-Ultimate-Team-Assets/refs/heads/main/players.json');
//             if (response.data && response.data.players) {
//                 data = response.data.players;
//                 localStorage.setItem("players", JSON.stringify(data));
//                 localStorage.setItem("players_loaded", "true");
//                 console.log(data);
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }
// }


// document.addEventListener('DOMContentLoaded', fetchData)


const addPlayerBtn = document.getElementById('addBtn');
const modalField = document.querySelector('.modalContainer');
const closeModalField = document.querySelector('#closeAdd');
const searchPlayerBtn = document.querySelector('.search-modal');



addPlayerBtn.addEventListener('click', function() {
    modalField.classList.remove('hidden');
    modalField.classList.add('block');
});

closeModalField.addEventListener('click', function() {
    modalField.classList.remove('block');
    modalField.classList.add('hidden');
})

searchPlayerBtn.addEventListener('click', function () {

})

fetch("../players.json")
.then(response => response.json())
.then (allPlayers => {
    const card = document.querySelector('.cardlid')

    card.addEventListener()
})