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
const rating = document.querySelector('#ratingInput');
const pace = document.querySelector('#paceInput');
const shooting = document.querySelector('#shootingInput');
const passing = document.querySelector('#passingInput');
const dribbling = document.querySelector('#dribblingInput');
const defending = document.querySelector('#defendingInput');
const physical = document.querySelector('#physicalInput');
const club = document.querySelector('#clubInput');
const playersList = document.querySelector('#players-list');
const removePlayerBtn = document.querySelector('#removePlayer');

let nextId = 27;

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

position.addEventListener('change', function () {
    const positionSelect = position.value;

    const paceLabel = document.querySelector('label[for="pace"]');
    const shootingLabel = document.querySelector('label[for="shooting"]');
    const passingLabel = document.querySelector('label[for="passing"]');
    const dribblingLabel = document.querySelector('label[for="dribbling"]');
    const defendingLabel = document.querySelector('label[for="defending"]');
    const physicalLabel = document.querySelector('label[for="physical"]');

    if (positionSelect === 'GK') {
        paceLabel.textContent = 'Diving';
        shootingLabel.textContent = 'Handling';
        passingLabel.textContent = 'Kicking';
        dribblingLabel.textContent = 'Reflexes';
        defendingLabel.textContent = 'Speed';
        physicalLabel.textContent = 'Positioning';
    } else {
        paceLabel.textContent = 'Pace';
        shootingLabel.textContent = 'Shooting';
        passingLabel.textContent = 'Passing';
        dribblingLabel.textContent = 'Dribbling';
        defendingLabel.textContent = 'Defending';
        physicalLabel.textContent = 'Physical';
    }
});

function addPlayer() {
    const player = {
        id: nextId++,
        name: Name.value,
        position: position.value,
        club: club.value,
        rating: rating.value,
        photo: "../assets/img/anoPlayer.png",
        logo: "../assets/img/football-club.png",
        flag: "../assets/img/unknown_flags_flag_9091.png"
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
    clearFormField();
}

submitPlayerBtn.addEventListener('click', function () {
    addPlayer();
    console.log(players)
    formation.classList.remove('hidden');
    subtitues.classList.remove('hidden');
    formModal.classList.add('hidden');
})

function clearFormField() {
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

let currTarget = null;
let insertedPlayers = [];


function displayFiltredPlayers(position, event) {
    const filteredPLayers = players.filter(player => player.position === position);
    playersList.innerHTML = '';
    currTarget = event.currentTarget;
    

    filteredPLayers.forEach(player => {
        if (!insertedPlayers.includes(player.id)) {
            const newDiv = document.createElement('div');
            newDiv.classList = 'cardlid w-36 h-40 shadow-emerald-500 hover:drop-shadow-2xl transition-all duration-200 ease-in-out'

            if (position === "GK") {
                newDiv.innerHTML = `<button class="relative bottom-5 left-4" onclick="insertPlayer(${player.id})">
                        <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
                        <div class="flex">
                            <div
                                class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
                                <div class="flex ">
                                    <div class="text-sm relative left-1.5 flex flex-col">
                                        <span
                                            class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
                                        <span
                                            class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
                                        <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
                                            <div class=" w-3">
                                                <img src="${player.club}" alt="">
                                            </div>
            
                                            <div class=" w-3">
                                                <img src="${player.flag}" alt="">
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="w-18 relative right-2 bottom-[0.1rem]">
                                        <img src="${player.photo}" alt="">
                                    </div>
                                </div>
            
                                <div class="h-3 flex">
                                    <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
                                </div>
            
                                <div class="flex gap-0.5 relative bottom-1.5">
                                    <div class="">
            
                                        <div class="h-3 flex items-center ">
                                            <span class="text-[0.6rem] font-thin">DIV</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.diving}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">HAN</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.handling}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">KIC</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.kicking}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">REF</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.reflexes}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">SPD</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.speed}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">POS</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.positioning}</span>
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>`
            } else {
                newDiv.innerHTML = `<button class="relative bottom-5 left-4" onclick="insertPlayer(${player.id})">
                <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
                <div class="flex">
                    <div
                        class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
                        <div class="flex ">
                            <div class="text-sm relative left-1.5 flex flex-col">
                                <span
                                    class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
                                <span
                                    class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
                                <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
                                    <div class=" w-3">
                                        <img src="${player.club}" alt="">
                                    </div>

                                    <div class=" w-3">
                                        <img src="${player.flag}" alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="w-18 relative right-2 bottom-[0.1rem]">
                                <img src="${player.photo}" alt="">
                            </div>
                        </div>

                        <div class="h-3 flex">
                            <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
                        </div>

                        <div class="flex gap-0.5 relative bottom-1.5">
                            <div class="">

                                <div class="h-3 flex items-center ">
                                    <span class="text-[0.6rem] font-thin">PAC</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.pace}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">SHO</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.shooting}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">PAS</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.passing}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">DRI</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.dribbling}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">DEF</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.defending}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">PHY</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.physical}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </button>`
            }

            playersList.appendChild(newDiv);
        }

    })

    insertedPlayers.length = 0;
    formation.classList.add('hidden');
    subtitues.classList.add('hidden');
    searchPlayers.classList.remove('hidden');
}

function displayAllPlayers(event) {
    playersList.innerHTML = '';
    currTarget = event.currentTarget;
    

    players.forEach(player => {
            const newDiv = document.createElement('div');
            newDiv.classList = 'cardlid w-36 h-40 shadow-emerald-500 hover:drop-shadow-2xl transition-all duration-200 ease-in-out'

            if (player.position === "GK") {
                newDiv.innerHTML = `<button class="relative bottom-5 left-4" onclick="insertPlayer(${player.id})">
                        <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
                        <div class="flex">
                            <div
                                class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
                                <div class="flex ">
                                    <div class="text-sm relative left-1.5 flex flex-col">
                                        <span
                                            class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
                                        <span
                                            class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
                                        <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
                                            <div class=" w-3">
                                                <img src="${player.club}" alt="">
                                            </div>
            
                                            <div class=" w-3">
                                                <img src="${player.flag}" alt="">
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="w-18 relative right-2 bottom-[0.1rem]">
                                        <img src="${player.photo}" alt="">
                                    </div>
                                </div>
            
                                <div class="h-3 flex">
                                    <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
                                </div>
            
                                <div class="flex gap-0.5 relative bottom-1.5">
                                    <div class="">
            
                                        <div class="h-3 flex items-center ">
                                            <span class="text-[0.6rem] font-thin">DIV</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.diving}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">HAN</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.handling}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">KIC</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.kicking}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">REF</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.reflexes}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">SPD</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.speed}</span>
                                        </div>
            
                                    </div>
            
                                    <div class="">
            
                                        <div class="h-3 flex items-center">
                                            <span class="text-[0.6rem] font-thin">POS</span>
                                        </div>
            
                                        <div class="h-2.5 flex items-center justify-center">
                                            <span class="text-[0.6rem] font-semibold">${player.positioning}</span>
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>`
            } else {
                newDiv.innerHTML = `<button class="relative bottom-5 left-4" onclick="insertPlayer(${player.id})">
                <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
                <div class="flex">
                    <div
                        class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
                        <div class="flex ">
                            <div class="text-sm relative left-1.5 flex flex-col">
                                <span
                                    class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
                                <span
                                    class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
                                <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
                                    <div class=" w-3">
                                        <img src="${player.club}" alt="">
                                    </div>

                                    <div class=" w-3">
                                        <img src="${player.flag}" alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="w-18 relative right-2 bottom-[0.1rem]">
                                <img src="${player.photo}" alt="">
                            </div>
                        </div>

                        <div class="h-3 flex">
                            <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
                        </div>

                        <div class="flex gap-0.5 relative bottom-1.5">
                            <div class="">

                                <div class="h-3 flex items-center ">
                                    <span class="text-[0.6rem] font-thin">PAC</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.pace}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">SHO</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.shooting}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">PAS</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.passing}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">DRI</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.dribbling}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">DEF</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.defending}</span>
                                </div>

                            </div>

                            <div class="">

                                <div class="h-3 flex items-center">
                                    <span class="text-[0.6rem] font-thin">PHY</span>
                                </div>

                                <div class="h-2.5 flex items-center justify-center">
                                    <span class="text-[0.6rem] font-semibold">${player.physical}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </button>`
            }

            playersList.appendChild(newDiv);
        }

    )

    insertedPlayers.length = 0;
    formation.classList.add('hidden');
    subtitues.classList.add('hidden');
    searchPlayers.classList.remove('hidden');
}

function insertPlayer(id) {

    const playerToInsert = players.find(player => player.id === id);

    if (!playerToInsert) {
        console.log('player not found');
        return;
    }    

    if (playerToInsert.position === "GK") {
        currTarget.innerHTML = `<div class="cardlid w-36 h-40 shadow-emerald-500 hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
        <div class="w-[80%] flex justify-center z-50">
            <button id="removePlayer" onclick="removePlayer(${playerToRemove.id})" class="w-[50%] text-black bg-emerald-500 rounded-lg font-semibold p-1 text-[5px] flex items-center justify-center hover:w-[50%] hover:bg-emerald-800 z-50">Remove player</button>
        </div>
        <button class="relative bottom-5 right-4" onclick="insertPlayer(${playerToInsert.id})">
                    <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
                    <div class="flex">
                        <div
                            class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
                            <div class="flex ">
                                <div class="text-sm relative left-1.5 flex flex-col">
                                    <span
                                        class="text-[#4d331f] relative top-2 font-bold text-lg">${playerToInsert.rating}</span>
                                    <span
                                        class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${playerToInsert.position}</span>
                                    <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
                                        <div class=" w-3">
                                            <img src="${playerToInsert.club}" alt="">
                                        </div>
        
                                        <div class=" w-3">
                                            <img src="${playerToInsert.flag}" alt="">
                                        </div>
                                    </div>
                                </div>
        
                                <div class="w-18 relative right-2 bottom-[0.1rem]">
                                    <img src="${playerToInsert.photo}" alt="">
                                </div>
                            </div>
        
                            <div class="h-3 flex">
                                <span class="text-xs font-bold relative bottom-1.5">${playerToInsert.name}</span>
                            </div>
        
                            <div class="flex gap-0.5 relative bottom-1.5">
                                <div class="">
        
                                    <div class="h-3 flex items-center ">
                                        <span class="text-[0.6rem] font-thin">DIV</span>
                                    </div>
        
                                    <div class="h-2.5 flex items-center justify-center">
                                        <span class="text-[0.6rem] font-semibold">${playerToInsert.diving}</span>
                                    </div>
        
                                </div>
        
                                <div class="">
        
                                    <div class="h-3 flex items-center">
                                        <span class="text-[0.6rem] font-thin">HAN</span>
                                    </div>
        
                                    <div class="h-2.5 flex items-center justify-center">
                                        <span class="text-[0.6rem] font-semibold">${playerToInsert.handling}</span>
                                    </div>
        
                                </div>
        
                                <div class="">
        
                                    <div class="h-3 flex items-center">
                                        <span class="text-[0.6rem] font-thin">KIC</span>
                                    </div>
        
                                    <div class="h-2.5 flex items-center justify-center">
                                        <span class="text-[0.6rem] font-semibold">${playerToInsert.kicking}</span>
                                    </div>
        
                                </div>
        
                                <div class="">
        
                                    <div class="h-3 flex items-center">
                                        <span class="text-[0.6rem] font-thin">REF</span>
                                    </div>
        
                                    <div class="h-2.5 flex items-center justify-center">
                                        <span class="text-[0.6rem] font-semibold">${playerToInsert.reflexes}</span>
                                    </div>
        
                                </div>
        
                                <div class="">
        
                                    <div class="h-3 flex items-center">
                                        <span class="text-[0.6rem] font-thin">SPD</span>
                                    </div>
        
                                    <div class="h-2.5 flex items-center justify-center">
                                        <span class="text-[0.6rem] font-semibold">${playerToInsert.speed}</span>
                                    </div>
        
                                </div>
        
                                <div class="">
        
                                    <div class="h-3 flex items-center">
                                        <span class="text-[0.6rem] font-thin">POS</span>
                                    </div>
        
                                    <div class="h-2.5 flex items-center justify-center">
                                        <span class="text-[0.6rem] font-semibold">${playerToInsert.positioning}</span>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>`
    } else {
        currTarget.innerHTML = `<div class="cardlid w-36 h-40 shadow-emerald-500 hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
        <div class="w-[80%] flex justify-center z-50">
            <button id="removePlayer" onClick='removePlayer(${playerToInsert.id},event)' class="w-[50%] text-black bg-emerald-500 rounded-lg font-semibold p-1 text-[5px] flex items-center justify-center hover:w-[50%] hover:bg-emerald-800 z-50">Remove player</button>
        </div>
        <button class="relative bottom-5 right-3.5" onclick="insertPlayer(${playerToInsert.id})">
            <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
            <div class="flex">
                <div
                    class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
                    <div class="flex ">
                        <div class="text-sm relative left-1.5 flex flex-col">
                            <span
                                class="text-[#4d331f] relative top-2 font-bold text-lg">${playerToInsert.rating}</span>
                            <span
                                class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${playerToInsert.position}</span>
                            <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
                                <div class=" w-3">
                                    <img src="${playerToInsert.club}" alt="">
                                </div>

                                <div class=" w-3">
                                    <img src="${playerToInsert.flag}" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="w-18 relative right-2 bottom-[0.1rem]">
                            <img src="${playerToInsert.photo}" alt="">
                        </div>
                    </div>

                    <div class="h-3 flex">
                        <span class="text-xs font-bold relative bottom-1.5">${playerToInsert.name}</span>
                    </div>

                    <div class="flex gap-0.5 relative bottom-1.5">
                        <div class="">

                            <div class="h-3 flex items-center ">
                                <span class="text-[0.6rem] font-thin">PAC</span>
                            </div>

                            <div class="h-2.5 flex items-center justify-center">
                                <span class="text-[0.6rem] font-semibold">${playerToInsert.pace}</span>
                            </div>

                        </div>

                        <div class="">

                            <div class="h-3 flex items-center">
                                <span class="text-[0.6rem] font-thin">SHO</span>
                            </div>

                            <div class="h-2.5 flex items-center justify-center">
                                <span class="text-[0.6rem] font-semibold">${playerToInsert.shooting}</span>
                            </div>

                        </div>

                        <div class="">

                            <div class="h-3 flex items-center">
                                <span class="text-[0.6rem] font-thin">PAS</span>
                            </div>

                            <div class="h-2.5 flex items-center justify-center">
                                <span class="text-[0.6rem] font-semibold">${playerToInsert.passing}</span>
                            </div>

                        </div>

                        <div class="">

                            <div class="h-3 flex items-center">
                                <span class="text-[0.6rem] font-thin">DRI</span>
                            </div>

                            <div class="h-2.5 flex items-center justify-center">
                                <span class="text-[0.6rem] font-semibold">${playerToInsert.dribbling}</span>
                            </div>

                        </div>

                        <div class="">

                            <div class="h-3 flex items-center">
                                <span class="text-[0.6rem] font-thin">DEF</span>
                            </div>

                            <div class="h-2.5 flex items-center justify-center">
                                <span class="text-[0.6rem] font-semibold">${playerToInsert.defending}</span>
                            </div>

                        </div>

                        <div class="">

                            <div class="h-3 flex items-center">
                                <span class="text-[0.6rem] font-thin">PHY</span>
                            </div>

                            <div class="h-2.5 flex items-center justify-center">
                                <span class="text-[0.6rem] font-semibold">${playerToInsert.physical}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </button>
    </div>`
    }
    
    insertedPlayers.push(playerToInsert.id);
    
    currTarget.classList.add('inTeam');

    formation.classList.remove('hidden');
    subtitues.classList.remove('hidden');
    searchPlayers.classList.add('hidden');

    
}

function removePlayer(id,event) {
    const playerToRemove = players.find(player => player.id === id);
    
    currTarget = event.currentTarget.parentElement.parentElement.parentElement;
    console.log(currTarget);
    

    currTarget.innerHTML = `
    <div id="${playerToRemove.position}" ondblClick="displayFiltredPlayers('${playerToRemove.position}', event)" class="cardlid w-28 h-40 relative">
                                <button class="h-40">
                                    <img class="" src="../assets/img/placeholder-card-normal.webp">
                                    <div
                                        class="flex items-center justify-center text-2xl  h-20 relative bottom-[7.5rem] w-full text-white">
                                        <div class="flex items-center justify-center">
                                            <div class="absolute top-[21px] right-[48px] font-large text-green-400">
                                                <span class="h-9">+</span>
                                            </div>
                                            <svg class="" viewBox="0 0 36 42" fill="none" width="30">
                                                <path
                                                    d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                                                    stroke="limegreen" stroke-width="1.5"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
    `
    currTarget = null;
    insertedPlayers.pop(playerToRemove.id);

    formation.classList.remove('hidden');
    subtitues.classList.remove('hidden');
    searchPlayers.classList.add('hidden');
};