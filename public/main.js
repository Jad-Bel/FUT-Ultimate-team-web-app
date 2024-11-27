


const addPlayerBtn = document.getElementById('addBtn');
const modalField = document.querySelector('.modalContainer');
const closeModalField = document.querySelector('#closeAdd');
const searchModal = document.querySelector('.search-modal');
const card = document.querySelectorAll('.cardlid')
const closeSearchModal = document.querySelector('.close-btn');


addPlayerBtn.addEventListener('click', function() {
    modalField.classList.remove('hidden');
    modalField.classList.add('block');
});

closeModalField.addEventListener('click', function() {
    modalField.classList.remove('block');
    modalField.classList.add('hidden');
})

closeSearchModal.addEventListener('click', function () {
    searchModal.classList.add('hidden');
    document.getElementById('formation-container').classList.remove('hidden')
    document.getElementById('subtitues-container').classList.remove('hidden')
})


let startIndex = 0;
let playersPerPage = 10;

let request = new XMLHttpRequest;
request.open("GET", "../players.json")
request.send()

request.onload = function (allPlayers) {
    if(request.status === 200) {
        
        let allPlayers = JSON.parse(request.responseText)
        let data = allPlayers.players

        const cardContainer = document.querySelector("#search-cards");

        card.forEach(function (singleCard) {

            singleCard.addEventListener('click', function () {
                const position = singleCard.id;
                
                const filteredPLayers = data.filter((player) => player.position === position)
                document.getElementById('formation-container').classList.add('hidden')
                document.getElementById('subtitues-container').classList.add('hidden')
        
                searchModal.classList.remove('hidden');
                cardContainer.innerHTML = "";
        
                filteredPLayers.forEach((player) => {
                    let displayName;
        
                    if (player.name.length < 1) {
                        const nameParts = player.name.split(' ')[0];
                        displayName = player.name[nameParts.length - 1];
                    } else {
                        displayName = player.name
                    }
                    
                    console.log(player);
                    cardContainer.innerHTML +=
                     `
                    <div id="LW" class="cardlid w-36 h-40 shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
                                    <button class="relative bottom-5 left-4" aria-label="Card Button">
                                        <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
                                            <div class="flex">
                                                <div class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
                                                    <div class="flex ">
                                                        <div class="text-sm relative left-1.5 flex flex-col">
                                                            <span class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
                                                            <span class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
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
                                                        <span class="text-xs font-bold relative bottom-1.5">${displayName}</span>
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
                                    </button>
                                </div>
                            `
        
                            
                    });
        
                })
        })
    }
}
