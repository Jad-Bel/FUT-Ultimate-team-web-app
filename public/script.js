const field = document.querySelector('#formation-container');
const searchModal = document.querySelector('.search-modal');
const addPlayerModal = document.querySelector('.modalContainer');
const subtitues = document.querySelector('#subtitues-container'); 
const playerList = document.querySelector('#search-cards');

// buttons
const addPlayerBtn = document.getElementById('addBtn');
const closeModalField = document.querySelector('#closeAdd');
const closeSearchModal = document.querySelector('.close-btn');

// cards
const mainCard = document.querySelectorAll('.mainCard');
const subCard = document.querySelectorAll('.cardlid');

// events on each button
addPlayerBtn.addEventListener('click', function() {
    addPlayerModal.classList.remove('hidden');
    addPlayerModal.classList.add('block');
});

closeModalField.addEventListener('click', function() {
    addPlayerModal.classList.remove('block');
    addPlayerModal.classList.add('hidden');
});

closeSearchModal.addEventListener('click', function () {
    searchModal.classList.add('hidden');
    document.getElementById('formation-container').classList.remove('hidden');
    document.getElementById('subtitues-container').classList.remove('hidden');
});

mainCard.forEach(function (singleCard, ) {
    singleCard.addEventListener('click', function () {
        const position = singleCard.id;
        displayPlayers(position);
        addPlayer()
        searchModal.classList.remove('hidden');
        document.getElementById('formation-container').classList.add('hidden');
        document.getElementById('subtitues-container').classList.add('hidden');
    });
});

subCard.forEach(function (singleSubCard) {
    singleSubCard.addEventListener('click', function () {
        displayAllPlayers();
        searchModal.classList.remove('hidden');
        document.getElementById('formation-container').classList.add('hidden');
        document.getElementById('subtitues-container').classList.add('hidden');
    });
});

function displayPlayers(position) {
    // let content = "";
    // const filteredPLayers = players.filter(function (player) {
    //    return player.position === position;
    // })

    // if (filteredPLayers.length > 0) {
    //     filteredPLayers.forEach(function (player) {
            
    //         if (player.position === "GK") {
    //             content += `
    //             <div id="${player.position}" class="chosCard w-36 h-40 shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
    //                                     <button class="relative bottom-5 left-4" aria-label="Card Button">
    //                                         <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
    //                                             <div class="flex">
    //                                                 <div class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
    //                                                     <div class="flex ">
    //                                                         <div class="text-sm relative left-1.5 flex flex-col">
    //                                                             <span class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
    //                                                             <span class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
    //                                                             <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
    //                                                                 <div class=" w-3">
    //                                                                     <img src="${player.club}" alt="">
    //                                                                 </div>
                                            
    //                                                                 <div class=" w-3">
    //                                                                     <img src="${player.flag}" alt="">
    //                                                                 </div>
    //                                                             </div>
    //                                                         </div>
                                        
    //                                                         <div class="w-18 relative right-2 bottom-[0.1rem]">
    //                                                             <img src="${player.photo}" alt="">
    //                                                         </div>
    //                                                     </div>
                                     
    //                                                     <div class="h-3 flex">
    //                                                         <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
    //                                                     </div>
                                    
    //                                                     <div class="flex gap-0.5 relative bottom-1.5">
    //                                                         <div class="">
                                                                
    //                                                             <div class="h-3 flex items-center ">
    //                                                                 <span class="text-[0.6rem] font-thin">DIV</span>
    //                                                             </div>
                                    
    //                                                             <div class="h-2.5 flex items-center justify-center">
    //                                                                 <span class="text-[0.6rem] font-semibold">${player.diving}</span>
    //                                                             </div>
                                    
    //                                                         </div>
                                    
    //                                                         <div class="">
                                                                
    //                                                             <div class="h-3 flex items-center">
    //                                                                 <span class="text-[0.6rem] font-thin">HAN</span>
    //                                                             </div>
                                    
    //                                                             <div class="h-2.5 flex items-center justify-center">
    //                                                                 <span class="text-[0.6rem] font-semibold">${player.handling}</span>
    //                                                             </div>
                                    
    //                                                         </div>
                                    
    //                                                         <div class="">
                                                                
    //                                                             <div class="h-3 flex items-center">
    //                                                                 <span class="text-[0.6rem] font-thin">KIC</span>
    //                                                             </div>
                                    
    //                                                             <div class="h-2.5 flex items-center justify-center">
    //                                                                 <span class="text-[0.6rem] font-semibold">${player.kicking}</span>
    //                                                             </div>
                                    
    //                                                         </div>
                                    
    //                                                         <div class="">
                                                                
    //                                                             <div class="h-3 flex items-center">
    //                                                                 <span class="text-[0.6rem] font-thin">REF</span>
    //                                                             </div>
                                    
    //                                                             <div class="h-2.5 flex items-center justify-center">
    //                                                                 <span class="text-[0.6rem] font-semibold">${player.reflexes}</span>
    //                                                             </div>
                                    
    //                                                         </div>
                                    
    //                                                         <div class="">
                                                                
    //                                                             <div class="h-3 flex items-center">
    //                                                                 <span class="text-[0.6rem] font-thin">SPE</span>
    //                                                             </div>
                                    
    //                                                             <div class="h-2.5 flex items-center justify-center">
    //                                                                 <span class="text-[0.6rem] font-semibold">${player.speed}</span>
    //                                                             </div>
                                    
    //                                                         </div>
                                    
    //                                                         <div class="">
                                                                
    //                                                             <div class="h-3 flex items-center">
    //                                                                 <span class="text-[0.6rem] font-thin">POS</span>
    //                                                             </div>
                                    
    //                                                             <div class="h-2.5 flex items-center justify-center">
    //                                                                 <span class="text-[0.6rem] font-semibold">${player.positioning}</span>
    //                                                             </div>
                                    
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                     </button>
    //                                 </div>
    //             `
    //             playerList.innerHTML = content;
    //             document.querySelectorAll('.chosCard').forEach(function (card) {
    //                 card.addEventListener('click', function () {
    //                     replaceMainCard(player, card)
    //                 })
    //             }) 
    //         } else {
    //             content += `
    //         <div id="${player.position}" class="chosCard w-36 h-40 shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
    //                                         <button class="relative bottom-5 left-4" aria-label="Card Button">
    //                                             <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
    //                                                 <div class="flex">
    //                                                     <div class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
    //                                                         <div class="flex ">
    //                                                             <div class="text-sm relative left-1.5 flex flex-col">
    //                                                                 <span class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
    //                                                                 <span class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
    //                                                                 <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
    //                                                                     <div class=" w-3">
    //                                                                         <img src="${player.club}" alt="">
    //                                                                     </div>
                                                
    //                                                                     <div class=" w-3">
    //                                                                         <img src="${player.flag}" alt="">
    //                                                                     </div>
    //                                                                 </div>
    //                                                             </div>
                                            
    //                                                             <div class="w-18 relative right-2 bottom-[0.1rem]">
    //                                                                 <img src="${player.photo}" alt="">
    //                                                             </div>
    //                                                         </div>
                                         
    //                                                         <div class="h-3 flex">
    //                                                             <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
    //                                                         </div>
                                        
    //                                                         <div class="flex gap-0.5 relative bottom-1.5">
    //                                                             <div class="">
                                                                    
    //                                                                 <div class="h-3 flex items-center ">
    //                                                                     <span class="text-[0.6rem] font-thin">PAC</span>
    //                                                                 </div>
                                        
    //                                                                 <div class="h-2.5 flex items-center justify-center">
    //                                                                     <span class="text-[0.6rem] font-semibold">${player.pace}</span>
    //                                                                 </div>
                                        
    //                                                             </div>
                                        
    //                                                             <div class="">
                                                                    
    //                                                                 <div class="h-3 flex items-center">
    //                                                                     <span class="text-[0.6rem] font-thin">SHO</span>
    //                                                                 </div>
                                        
    //                                                                 <div class="h-2.5 flex items-center justify-center">
    //                                                                     <span class="text-[0.6rem] font-semibold">${player.shooting}</span>
    //                                                                 </div>
                                        
    //                                                             </div>
                                        
    //                                                             <div class="">
                                                                    
    //                                                                 <div class="h-3 flex items-center">
    //                                                                     <span class="text-[0.6rem] font-thin">PAS</span>
    //                                                                 </div>
                                        
    //                                                                 <div class="h-2.5 flex items-center justify-center">
    //                                                                     <span class="text-[0.6rem] font-semibold">${player.passing}</span>
    //                                                                 </div>
                                        
    //                                                             </div>
                                        
    //                                                             <div class="">
                                                                    
    //                                                                 <div class="h-3 flex items-center">
    //                                                                     <span class="text-[0.6rem] font-thin">DRI</span>
    //                                                                 </div>
                                        
    //                                                                 <div class="h-2.5 flex items-center justify-center">
    //                                                                     <span class="text-[0.6rem] font-semibold">${player.dribbling}</span>
    //                                                                 </div>
                                        
    //                                                             </div>
                                        
    //                                                             <div class="">
                                                                    
    //                                                                 <div class="h-3 flex items-center">
    //                                                                     <span class="text-[0.6rem] font-thin">DEF</span>
    //                                                                 </div>
                                        
    //                                                                 <div class="h-2.5 flex items-center justify-center">
    //                                                                     <span class="text-[0.6rem] font-semibold">${player.defending}</span>
    //                                                                 </div>
                                        
    //                                                             </div>
                                        
    //                                                             <div class="">
                                                                    
    //                                                                 <div class="h-3 flex items-center">
    //                                                                     <span class="text-[0.6rem] font-thin">PHY</span>
    //                                                                 </div>
                                        
    //                                                                 <div class="h-2.5 flex items-center justify-center">
    //                                                                     <span class="text-[0.6rem] font-semibold">${player.physical}</span>
    //                                                                 </div>
                                        
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                         </button>
    //                                     </div>`;
    //             playerList.innerHTML = content;
    //             document.querySelectorAll('.chosCard').forEach(function (card, index) {
    //                 card.addEventListener('click', function (currentIndex) {
    //                     console.log(currentIndex)
    //                     replaceMainCard(player, card)
    //                 })
    //             }) 
    //         }
    //     });
    // } else {
    //     content = '<p class="font-semibold text-xl text-red-400">No players found for this position</p>'
    // }
    let filteredPLayers = players.filter(function (player) {
        return player.position === position
    })
    playerList.innerHTML = '';
    if (position) {
        filteredPLayers.forEach(function (player) {
            const card = document.createElement('div');
            card.classList.add('chosCard', 'w-36', 'h-40');

            if(position === "GK") {
                card.innerHTML = `<button class="relative bottom-5 left-4" aria-label="Card Button">
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
                                                                <span class="text-[0.6rem] font-thin">SPE</span>
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
                card.innerHTML = `
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
                                        </button>
                `
            }

            playerList.appendChild(card);
        })
    }

}


function displayAllPlayers() {
    playerList.innerHTML = '';
    if (players.length === 0) {
        playerList.innerHTML = '<p>No players found</p>'
    }
        players.forEach(function (player) {
            const card = document.createElement('div');
            card.classList.add('chosCard', 'w-36', 'h-40');

            if(player.position === "GK") {
                card.innerHTML = `<button class="relative bottom-5 left-4" aria-label="Card Button">
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
                                                                <span class="text-[0.6rem] font-thin">SPE</span>
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
                card.innerHTML = `
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
                                        </button>
                `
            }
        playerList.appendChild(card)
        })

}


function addPlayer(playerName, selected, position) {
    console.log(selected);

    const chosedCard = document.getElementById(selected);

    const selectedPlayer = players.find(function (player) {
        return player.name === playerName
    })

    if (chosedCard) {
        chosedCard.innerHTML = `
        <button onclick="addPlayer()" class="relative bottom-5 left-4" aria-label="Card Button">
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
                                        </button>
        `;
        if(position === "GK") {
            chosedCard.innerHTML = `<button onclick="addPlayer()" class="relative bottom-5 left-4" aria-label="Card Button">
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
                                                                <span class="text-[0.6rem] font-thin">SPE</span>
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
        }
    }
}
// function replaceMainCard(player, singleCard) {
//     if (player.position === "GK") {
//         singleCard.innerHTML += `
//         <div id="${player.position}" class="chosCard w-36 h-40 shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
//                     <button class="relative bottom-5 left-4" aria-label="Card Button">
//                         <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
//                             <div class="flex">
//                                 <div class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
//                                     <div class="flex ">
//                                         <div class="text-sm relative left-1.5 flex flex-col">
//                                             <span class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
//                                             <span class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
//                                             <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
//                                                 <div class=" w-3">
//                                                     <img src="${player.club}" alt="">
//                                                 </div>
                        
//                                                 <div class=" w-3">
//                                                     <img src="${player.flag}" alt="">
//                                                 </div>
//                                             </div>
//                                         </div>
                    
//                                         <div class="w-18 relative right-2 bottom-[0.1rem]">
//                                             <img src="${player.photo}" alt="">
//                                         </div>
//                                     </div>
                 
//                                     <div class="h-3 flex">
//                                         <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
//                                     </div>
                
//                                     <div class="flex gap-0.5 relative bottom-1.5">
//                                         <div class="">
                                            
//                                             <div class="h-3 flex items-center ">
//                                                 <span class="text-[0.6rem] font-thin">DIV</span>
//                                             </div>
                
//                                             <div class="h-2.5 flex items-center justify-center">
//                                                 <span class="text-[0.6rem] font-semibold">${player.diving}</span>
//                                             </div>
                
//                                         </div>
                
//                                         <div class="">
                                            
//                                             <div class="h-3 flex items-center">
//                                                 <span class="text-[0.6rem] font-thin">HAN</span>
//                                             </div>
                
//                                             <div class="h-2.5 flex items-center justify-center">
//                                                 <span class="text-[0.6rem] font-semibold">${player.handling}</span>
//                                             </div>
                
//                                         </div>
                
//                                         <div class="">
                                            
//                                             <div class="h-3 flex items-center">
//                                                 <span class="text-[0.6rem] font-thin">KIC</span>
//                                             </div>
                
//                                             <div class="h-2.5 flex items-center justify-center">
//                                                 <span class="text-[0.6rem] font-semibold">${player.kicking}</span>
//                                             </div>
                
//                                         </div>
                
//                                         <div class="">
                                            
//                                             <div class="h-3 flex items-center">
//                                                 <span class="text-[0.6rem] font-thin">REF</span>
//                                             </div>
                
//                                             <div class="h-2.5 flex items-center justify-center">
//                                                 <span class="text-[0.6rem] font-semibold">${player.reflexes}</span>
//                                             </div>
                
//                                         </div>
                
//                                         <div class="">
                                            
//                                             <div class="h-3 flex items-center">
//                                                 <span class="text-[0.6rem] font-thin">SPE</span>
//                                             </div>
                
//                                             <div class="h-2.5 flex items-center justify-center">
//                                                 <span class="text-[0.6rem] font-semibold">${player.speed}</span>
//                                             </div>
                
//                                         </div>
                
//                                         <div class="">
                                            
//                                             <div class="h-3 flex items-center">
//                                                 <span class="text-[0.6rem] font-thin">POS</span>
//                                             </div>
                
//                                             <div class="h-2.5 flex items-center justify-center">
//                                                 <span class="text-[0.6rem] font-semibold">${player.positioning}</span>
//                                             </div>
                
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                     </button>
//                 </div>
//         `
//                     const filteredPlayer = players.find(p => p.name === playerName)                    

//         console.log(player.position + " " + player.name)
//     } else {
//         singleCard.innerHTML = `
//         <div id="${player.position}" class="chosCard w-36 h-40 shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
//                              <button class="relative bottom-5">
//                                  <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
//                                      <div class="flex">
//                                          <div class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
//                                              <div class="flex ">
//                                                  <div class="text-sm relative left-1.5 flex flex-col">
//                                                      <span class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
//                                                      <span class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
//                                                      <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
//                                                          <div class=" w-3">
//                                                              <img src="${player.club}" alt="">
//                                                          </div>
                                 
//                                                          <div class=" w-3">
//                                                              <img src="${player.flag}" alt="">
//                                                          </div>
//                                                      </div>
//                                                  </div>
                             
//                                                  <div class="w-18 relative right-2 bottom-[0.1rem]">
//                                                      <img src="${player.photo}" alt="">
//                                                  </div>
//                                              </div>
                         
//                                              <div class="h-3 flex">
//                                                  <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
//                                              </div>
                         
//                                              <div class="flex gap-0.5 relative bottom-1.5">
//                                                  <div class="">
                                                     
//                                                      <div class="h-3 flex items-center ">
//                                                          <span class="text-[0.6rem] font-thin">PAC</span>
//                                                      </div>
                         
//                                                      <div class="h-2.5 flex items-center justify-center">
//                                                          <span class="text-[0.6rem] font-semibold">${player.pace}</span>
//                                                      </div>
                         
//                                                  </div>
                         
//                                                  <div class="">
                                                     
//                                                      <div class="h-3 flex items-center">
//                                                          <span class="text-[0.6rem] font-thin">SHO</span>
//                                                      </div>
                         
//                                                      <div class="h-2.5 flex items-center justify-center">
//                                                          <span class="text-[0.6rem] font-semibold">${player.shooting}</span>
//                                                      </div>
                         
//                                                  </div>
                         
//                                                  <div class="">
                                                     
//                                                      <div class="h-3 flex items-center">
//                                                          <span class="text-[0.6rem] font-thin">PAS</span>
//                                                      </div>
                         
//                                                      <div class="h-2.5 flex items-center justify-center">
//                                                          <span class="text-[0.6rem] font-semibold">${player.passing}</span>
//                                                      </div>
                         
//                                                  </div>
                         
//                                                  <div class="">
                                                     
//                                                      <div class="h-3 flex items-center">
//                                                          <span class="text-[0.6rem] font-thin">DRI</span>
//                                                      </div>
                         
//                                                      <div class="h-2.5 flex items-center justify-center">
//                                                          <span class="text-[0.6rem] font-semibold">${player.dribbling}</span>
//                                                      </div>
                         
//                                                  </div>
                         
//                                                  <div class="">
                                                     
//                                                      <div class="h-3 flex items-center">
//                                                          <span class="text-[0.6rem] font-thin">DEF</span>
//                                                      </div>
                         
//                                                      <div class="h-2.5 flex items-center justify-center">
//                                                          <span class="text-[0.6rem] font-semibold">${player.defending}</span>
//                                                      </div>
                         
//                                                  </div>
                         
//                                                  <div class="">
                                                     
//                                                      <div class="h-3 flex items-center">
//                                                          <span class="text-[0.6rem] font-thin">PHY</span>
//                                                      </div>
                         
//                                                      <div class="h-2.5 flex items-center justify-center">
//                                                          <span class="text-[0.6rem] font-semibold">${player.physical}</span>
//                                                      </div>
                         
//                                                  </div>
//                                              </div>
//                                          </div>
//                                      </div>
//                              </button>
//                          </div>
//                     `;
//     }


    

//     searchModal.classList.add("hidden");
//     document.getElementById('formation-container').classList.remove('hidden');
//     document.getElementById('subtitues-container').classList.remove('hidden');
// }


