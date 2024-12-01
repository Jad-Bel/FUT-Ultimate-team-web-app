// let searchModal = document.getElementById("searchPlayer");
// let modalPlayer = document.getElementById("Modalplayer");
// let cardsContainer = document.getElementById("cards");
// let scrol = document.getElementById("scrol")
// let Name = document.getElementById("playerName");
// let photo = document.getElementById("playerPhoto");
// let position = document.getElementById("playerPosition");
// let club = document.getElementById("playerClub");
// let rating = document.getElementById("playerRating");
// let pace = document.getElementById("playerPace");
// let shooting = document.getElementById("playerShooting");
// let passing = document.getElementById("playerPassing");
// let dribbling = document.getElementById("playerDribbling");
// let Defending = document.getElementById("playerDefending");
// let Physical = document.getElementById("playerPhysical");


// cardsContainer.addEventListener("wheel", (e) => {
//     cardsContainer.scrollLeft += e.deltaX
// })

// function validationForm() {

//     const NamePattern = /^[a-zA-Z\s]{3,30}$/;
//     const clubPattern = /^[a-zA-Z\s_-]{10,100}$/;
//     const ratingPattern = /^[0-9]{1,2}$/;

//     if (!NamePattern.test(Name.value)) {
//         showAlert("Le titre doit être entre 3 et 10 caractères, seulement des lettres.");
//         return false;
//     }

//     if (!clubPattern.test(club.value)) {
//         showAlert("La name de club doit être entre 10 et 100 caractères, avec seulement des lettres, chiffres, et ponctuations.");
//         return false;
//     }

//     if (!ratingPattern.test(rating.value) || !ratingPattern.test(pace.value) || !ratingPattern.test(shooting.value) ||
//         !ratingPattern.test(passing.value) || !ratingPattern.test(dribbling.value) ||
//         !ratingPattern.test(Defending.value) || !ratingPattern.test(Physical.value)) {
//         showAlert("Le rating doit être un nombre entre 0 et 99.");
//         return false;
//     }
//     return true;
// }


// function addPlayer() {
//     if (!validationForm()) {
//         return;
//     }

//     let player = {
//         name: Name.value,
//         photo: photo.value,
//         position: position.value,
//         club: club.value,
//         rating: rating.value,
//     };

//     if (position.value === 'GK') {
//         player.diving = pace.value;
//         player.handling = shooting.value;
//         player.kicking = passing.value;
//         player.reflexes = dribbling.value;
//         player.speed = Defending.value;
//         player.positioning = Physical.value;
//     } else if (position.value !== 'GK') {
//         player.pace = pace.value;
//         player.shooting = shooting.value;
//         player.passing = passing.value;
//         player.dribbling = dribbling.value;
//         player.defending = Defending.value;
//         player.physical = Physical.value;
//     }

//     players.push(player);

//     console.log("Player added:", player);
//     console.log("Updated players array:", players);

//     clearModalField();
// }


// function clearModalField() {
//     Name.value = '';
//     photo.value = '';
//     position.value = '';
//     club.value = '';
//     rating.value = '';
//     pace.value = '';
//     shooting.value = '';
//     passing.value = '';
//     dribbling.value = '';
//     Defending.value = '';
//     Physical.value = '';
// }

// function showAlert(message) {
//     const alertBox = document.getElementById("alert-box");
//     const alertMessage = document.getElementById("alert-message");

//     alertMessage.textContent = message;
//     alertBox.classList.remove("hidden", "fade-out");
//     alertBox.classList.add("fade-in");

//     setTimeout(() => {
//         alertBox.classList.remove("fade-in");
//         alertBox.classList.add("fade-out");

//         setTimeout(() => {
//             alertBox.classList.add("hidden");
//         }, 500);
//     }, 3000);
// }



function displayPlayersModal (position) {
    let filteredPLayers = players.filter(position => player.position == position);
        
}




// function showModal(position) {
//     searchModal.classList.toggle("hidden");

//     // Filter players mn l-array li 3ndek b7asb l-position
//     let feltredArry = players.filter(player => player.position == position);
//     console.log(feltredArry );
    
//     cardsContainer.innerHTML = '';

//     if (position) {
        
//         // L-loop b7al li kant b7ala ghi nghtsemo player cards
//         feltredArry.forEach(player => {
//             const shortStatLeft = position === "GK" ? `
//                     <p> ${player.diving}DIV</p>
//                     <p> ${player.handling}HAN</p>
//                     <p> ${player.kicking}KIC</p>
//         ` : `
//                     <p> ${player.pace}PAC</p>
//                     <p> ${player.shooting}SHO</p>
//                     <p> ${player.passing}PAS</p>
//         `;
//             const shortStatRight = position === "GK" ? `
//                     <p> ${player.reflexes}REF</p>
//                     <p> ${player.speed}SPE</p>
//                     <p> ${player.positioning}POS</p>
//         ` : `
//                     <p> ${player.dribbling}DRI</p>
//                     <p> ${player.defending}DEF</p>
//                     <p> ${player.physical}PHY</p>
//         `;

//             const playerCard = document.createElement('div');
//             playerCard.classList.add('bg-[url(\'../assets/img/badge_ballon_dor.webp\')]', 'bg-cover', 'bg-center', 'w-[7vw]', 'h-[20vh]', 'shadow-xl', 'flex', 'flex-col', 'justify-around');

//             playerCard.innerHTML = `
//             <div class="flex flex-col items-center gap-1">
//         <div class=" bg-[url('../assets/img/badge_ballon_dor.webp')] bg-cover bg-center flex flex-col justify-around items-center group">
//             <div class="flex flex-col justify-center items-center">
//                 <div class="w-[7rem] flex justify-center">
//                     <img class="h-[8vh] relative top-5" src="${player.photo}" alt="">
//                 </div>
//                 <div class="flex flex-col items-center w-[7vw]">
//                     <div class="text-center relative top-5">
//                         <h3 class="font-bold text-[10px] text-black">${player.name}</h3>
//                         <div class="flex items-center ">
//                             <div class=" w-3">
//                                 <img src="${player.club}" alt="">
//                             </div>
//                             <span class="block relative bottom-1 left-2 font-extrabold text-black mt-2 text-[8px] w-6 ">${player.rating}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="from-transparent text-white relative top-5">
//                     <div class="flex gap-2 justify-evenly font-semibold w-20 h-9 text-[7px] mb-10 ">
//                         <div class="text-left text-[6px] ">
//                             ${shortStatLeft}
//                         </div>
//                         <div class="text-right text-[6px]">
//                             ${shortStatRight}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="absolute w-28 h-36 z-30 text-white flex justify-center items-center">
//             <button onclick="AjouterPlayer('${player.name}', '${player.position}','${post}')" class="w-full h-full"></button>
//         </div>
//     </div>
//             `;
//             cardsContainer.appendChild(playerCard);
//         });
//     }
//     // } else {
//     //     // Ila l-position mafih la valeur, tsed chi7aja mn players array
//     //     players.forEach(player => {
//     //         const playerCard = document.createElement('div');
//     //         playerCard.classList.add('bg-[url(\'../assets/img/badge_ballon_dor.webp\')]', 'bg-cover', 'bg-center', 'min-w-[9vw]', 'rounded-xl', 'shadow-xl', 'flex', 'flex-col', 'justify-around');

//     //         playerCard.innerHTML = `
//     //         <div class="text-center mt-">
//     //             <span class="block font-extrabold text-white mt-2 text-[10px]">${player.rating}</span>
//     //             <h3 class="text-white font-bold text-[10px] mt-1">${player.name}</h3>
//     //             <p class=" text-gray-300 font-medium text-[8px]">${player.club}</p>
//     //         </div>
//     //         <div class="w-full flex justify-center">
//     //             <img class="h-[9vh] rounded-b-full pb-1" src="${player.photo}" alt="">
//     //         </div>
//     //         `;
//     //         cardsContainer.appendChild(playerCard);
//     //     });
//     // }
// }

// function AjouterPlayer(playerName, selected, position) {
//     console.log(selected);


//     const cardElement = document.getElementById(selected);

//     const storedPlayers = localStorage.getItem("players");
//     let arryPlayer = JSON.parse(storedPlayers) || [];


//     const player = arryPlayer.find(player => player.name === playerName);

//     if (!player) {
//         console.error('Player not found');
//         return;
//     }


//     if (cardElement) {
//         cardElement.innerHTML = `
//         <div class="flex flex-col items-center gap-1">
//         <div class=" bg-[url('../assets/img/badge_ballon_dor.webp')] bg-cover bg-center flex flex-col justify-around items-center group">
//             <div class="flex flex-col justify-center items-center">
//                 <div class="w-[7rem] flex justify-center">
//                     <img class="h-[8vh] relative top-5" src="${player.photo}" alt="">
//                 </div>
//                 <div class="flex flex-col items-center w-[7vw]">
//                     <div class="text-center relative top-5">
//                         <h3 class="font-bold text-[10px] text-black">${player.name}</h3>
//                         <div class="flex items-center ">
//                             <div class=" w-3">
//                                 <img src="${player.club}" alt="">
//                             </div>
//                             <span class="block relative bottom-1 left-2 font-extrabold text-black mt-2 text-[8px] w-6 ">${player.rating}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="from-transparent text-white relative top-5">
//                     <div class="flex gap-2 justify-evenly font-semibold w-20 h-9 text-[7px] mb-10 ">
//                         <div class="text-left text-[6px] ">
//                             <p id="pace">${player.pace}PAC</p>
//                             <p>${player.shooting}SHO</p>
//                             <p>${player.passing}PAC</p>
//                         </div>
//                         <div class="text-right text-[6px]">
//                             <p>${player.dribbling}DRI</p>
//                             <p>${player.defending}DEF</p>
//                             <p>${player.physical}PHY</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//                 `;
//         if (position === "GK") {
//             cardElement.innerHTML = `
//   <div class="flex flex-col items-center gap-1">
//         <div class=" bg-[url('../assets/img/badge_ballon_dor.webp')] bg-cover bg-center flex flex-col justify-around items-center group">
//             <div class="flex flex-col justify-center items-center">
//                 <div class="w-[7rem] flex justify-center">
//                     <img class="h-[8vh] relative top-5" src="${player.photo}" alt="">
//                 </div>
//                 <div class="flex flex-col items-center w-[7vw]">
//                     <div class="text-center relative top-5">
//                         <h3 class="font-bold text-[10px] text-black">${player.name}</h3>
//                         <div class="flex items-center ">
//                             <div class=" w-3">
//                                 <img src="${player.club}" alt="">
//                             </div>
//                             <span class="block relative bottom-1 left-2 font-extrabold text-black mt-2 text-[8px] w-6 ">${player.rating}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div id="btn" class="absolute w-[7vw] h-[18vh] bg-opacity-90 bg-black z-50 text-white flex items-center flex-col justify-around opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
//                     <button class="w-10 h-8 flex justify-center items-center">
//                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"/></svg>                    </button>
//                     <button class="w-10 h-8 flex justify-center items-center">
//                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>                    
//                     </button>
//                 </div>
//                 <div class="from-transparent text-white relative top-5">
//                     <div class="flex gap-2 justify-evenly font-semibold w-20 h-9 text-[7px] mb-10 ">
//                         <div class="text-left text-[6px] ">
//                             <p id="pace">${player.diving}DIV</p>
//                             <p>${player.handling}HAN</p>
//                             <p>${player.kicking}KIC</p>
//                         </div>
//                         <div class="text-right text-[6px]">
//                             <p>${player.reflexes}REF</p>
//                             <p>${player.speed}SPE</p>
//                             <p>${player.positioning}POS</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
  
//                         `;
//         }
//     }

//     searchModal.classList.toggle("hidden");


// }



// function showModalPlayer() {
//     modalPlayer.classList.toggle("hidden");
// }

// function suprim(playerName, position, arrayData) {
//     // Retrieve the container for the player's position and update its content
//     let posistion = document.getElementById(position);
//     posistion.innerHTML = `
//     <div id="btn" class="absolute w-[7vw] h-[18vh] bg-opacity-90 bg-black z-50 text-white flex items-center flex-col justify-around opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
//         <button class="w-10 h-8 flex justify-center items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"/></svg>                    </button>
//         <button class="w-10 h-8 flex justify-center items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>                    
//         </button>
//     </div>
//     <div class="bg-black w-10 h-5 text-white flex justify-center items-center font-bold bg-opacity-80 rounded-3xl" value="${position}">
//         ${position}
//     </div>`;

//     // Filter the array to exclude the player with the specified name
//     const updatedArray = arrayData.filter(player => player.name !== playerName);
//     console.log(updatedArray);

//     return updatedArray; // Return the updated array to be used elsewhere
// }

// function showAlert(message) {
//     const alertBox = document.getElementById("alert-box");
//     const alertMessage = document.getElementById("alert-message");

//     // Update the alert message and display the alert box
//     alertMessage.textContent = message;
//     alertBox.classList.remove("hidden", "fade-out");
//     alertBox.classList.add("fade-in");

//     // Set a timeout to hide the alert box after 3 seconds
//     setTimeout(() => {
//         alertBox.classList.remove("fade-in");
//         alertBox.classList.add("fade-out");

//         // Ensure the alert box is hidden after the fade-out animation
//         setTimeout(() => {
//             alertBox.classList.add("hidden");
//         }, 500);
//     }, 3000);
// };


// function ajoutPlayer() {
//     const players = JSON.parse(localStorage.getItem("players")) || [];
//     console.log(players);
// }

// function showAlert(message) {
//     alert(message);
// }

const formation = document.querySelector('#formation-container');
const subtitues = document.querySelector('#subtitues-container');
const formModal = document.querySelector('.modalContainer');
const searchPlayers = document.querySelector('.search-modal')
const emptyCard = document.querySelectorAll('.cardlid');
const emptySubCard = document.querySelectorAll('.emptySubCard');
const addPlayenBtn = document.querySelector('#addBtn');
const closeAddBtn = document.querySelector('#closeAdd');
const searchCloseBtn = document.querySelector('.close-btn');
const submitPlayerBtn = document.querySelector('.submitBtn');
const Name = document.querySelector('#nameInput');
const position = document.querySelector('#positionInput');
const rating = document.querySelector('#nameInput');
const pace = document.querySelector('#paceInput');
const shooting = document.querySelector('#shootingInput');
const passing = document.querySelector('#passingInput');
const dribbling = document.querySelector('#dribblingInput');
const defending = document.querySelector('#defendingInput');
const physical = document.querySelector('#physicalInput');
const club = document.querySelector('#clubInput');


emptyCard.forEach(singleEmptyCard => {
    singleEmptyCard.addEventListener('click', function (singleEmptyCard) {
        formation.classList.add('hidden');
        subtitues.classList.add('hidden');
        searchPlayers.classList.remove('hidden');
        console.log(1);
    })
});

emptySubCard.forEach(singleEmptySubCard => {
    singleEmptySubCard.addEventListener('click', function (singleEmptyCard) {
        formation.classList.add('hidden');
        subtitues.classList.add('hidden');
        searchPlayers.classList.remove('hidden');
        console.log(1);
    })
});


searchCloseBtn.addEventListener('click', function () {
    formation.classList.remove('hidden');
    subtitues.classList.remove('hidden');
    searchPlayers.classList.add('hidden');
    console.log(2)
})


addPlayenBtn.addEventListener('click', function () {
    formation.classList.add('hidden');
    subtitues.classList.add('hidden');
    formModal.classList.remove('hidden');
    console.log(1)
});

closeAddBtn.addEventListener('click', function () {
    formation.classList.remove('hidden');
    subtitues.classList.remove('hidden');
    formModal.classList.add('hidden');
})


function addPlayer () {
    const player = {
        name: Name.value,
        position: position.value,
        club: club.value,
        rating: rating.value,
    }  
    
    if (position.value === "GK") {
        player.diving = pace.value;
        player.handling = shooting.value;
        player.kicking = passing.value;
        player.reflexes = dribbling.value;
        player.speed = defending.value;
        player.positioning = physical.value;
    } else if (position.value !== "GK") {
        player.pace = pace.value;
        player.shooting = shooting.value;
        player.passing = passing.value;
        player.dribbling = dribbling.value;
        player.defending = defending.value;
        player.physical = physical.value;
    }

    players.push(player);
    console.log(player)
    clearFormField();
}

submitPlayerBtn.addEventListener('click', function () {
    addPlayer();
    console.log(players)
})

function clearFormField () {
    const player = {
        name: Name.value,
        position: position.value,
        club: club.value,
        rating: rating.value,
        pace: pace.value,
        shooting: shooting.value,
        passing: passing.value,
        dribbling: dribbling.value,
        defending: defending.value,
        physical: physical.value
    }
}

