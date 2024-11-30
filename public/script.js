// const field = document.querySelector('#formation-container');
// const searchModal = document.querySelector('.search-modal');
// const addPlayerModal = document.querySelector('.modalContainer');
// const subtitues = document.querySelector('#subtitues-container'); 
// const playerList = document.querySelector('#search-cards');

// // buttons
// const addPlayerBtn = document.getElementById('addBtn');
// const closeModalField = document.querySelector('#closeAdd');
// const closeSearchModal = document.querySelector('.close-btn');

// // cards
// const mainCard = document.querySelectorAll('.mainCard');
// const subCard = document.querySelectorAll('.cardlid');

// // events on each button
// addPlayerBtn.addEventListener('click', function() {
//     addPlayerModal.classList.remove('hidden');
//     addPlayerModal.classList.add('block');
// });

// closeModalField.addEventListener('click', function() {
//     addPlayerModal.classList.remove('block');
//     addPlayerModal.classList.add('hidden');
// });

// closeSearchModal.addEventListener('click', function () {
//     searchModal.classList.add('hidden');
//     document.getElementById('formation-container').classList.remove('hidden');
//     document.getElementById('subtitues-container').classList.remove('hidden');
// });

// mainCard.forEach(function (singleCard, ) {
//     singleCard.addEventListener('click', function () {
//         const position = singleCard.id;
//         displayPlayers(position);
//         addPlayer()
//         searchModal.classList.remove('hidden');
//         document.getElementById('formation-container').classList.add('hidden');
//         document.getElementById('subtitues-container').classList.add('hidden');
//     });
// });

// subCard.forEach(function (singleSubCard) {
//     singleSubCard.addEventListener('click', function () {
//         displayAllPlayers();
//         searchModal.classList.remove('hidden');
//         document.getElementById('formation-container').classList.add('hidden');
//         document.getElementById('subtitues-container').classList.add('hidden');
//     });
// });

// function displayPlayers(position) {
//     // let content = "";
//     // const filteredPLayers = players.filter(function (player) {
//     //    return player.position === position;
//     // })

//     // if (filteredPLayers.length > 0) {
//     //     filteredPLayers.forEach(function (player) {
            
//     //         if (player.position === "GK") {
//     //             content += `
//     //             <div id="${player.position}" class="chosCard w-36 h-40 shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
//     //                                     <button class="relative bottom-5 left-4" aria-label="Card Button">
//     //                                         <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
//     //                                             <div class="flex">
//     //                                                 <div class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
//     //                                                     <div class="flex ">
//     //                                                         <div class="text-sm relative left-1.5 flex flex-col">
//     //                                                             <span class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
//     //                                                             <span class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
//     //                                                             <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
//     //                                                                 <div class=" w-3">
//     //                                                                     <img src="${player.club}" alt="">
//     //                                                                 </div>
                                            
//     //                                                                 <div class=" w-3">
//     //                                                                     <img src="${player.flag}" alt="">
//     //                                                                 </div>
//     //                                                             </div>
//     //                                                         </div>
                                        
//     //                                                         <div class="w-18 relative right-2 bottom-[0.1rem]">
//     //                                                             <img src="${player.photo}" alt="">
//     //                                                         </div>
//     //                                                     </div>
                                     
//     //                                                     <div class="h-3 flex">
//     //                                                         <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
//     //                                                     </div>
                                    
//     //                                                     <div class="flex gap-0.5 relative bottom-1.5">
//     //                                                         <div class="">
                                                                
//     //                                                             <div class="h-3 flex items-center ">
//     //                                                                 <span class="text-[0.6rem] font-thin">DIV</span>
//     //                                                             </div>
                                    
//     //                                                             <div class="h-2.5 flex items-center justify-center">
//     //                                                                 <span class="text-[0.6rem] font-semibold">${player.diving}</span>
//     //                                                             </div>
                                    
//     //                                                         </div>
                                    
//     //                                                         <div class="">
                                                                
//     //                                                             <div class="h-3 flex items-center">
//     //                                                                 <span class="text-[0.6rem] font-thin">HAN</span>
//     //                                                             </div>
                                    
//     //                                                             <div class="h-2.5 flex items-center justify-center">
//     //                                                                 <span class="text-[0.6rem] font-semibold">${player.handling}</span>
//     //                                                             </div>
                                    
//     //                                                         </div>
                                    
//     //                                                         <div class="">
                                                                
//     //                                                             <div class="h-3 flex items-center">
//     //                                                                 <span class="text-[0.6rem] font-thin">KIC</span>
//     //                                                             </div>
                                    
//     //                                                             <div class="h-2.5 flex items-center justify-center">
//     //                                                                 <span class="text-[0.6rem] font-semibold">${player.kicking}</span>
//     //                                                             </div>
                                    
//     //                                                         </div>
                                    
//     //                                                         <div class="">
                                                                
//     //                                                             <div class="h-3 flex items-center">
//     //                                                                 <span class="text-[0.6rem] font-thin">REF</span>
//     //                                                             </div>
                                    
//     //                                                             <div class="h-2.5 flex items-center justify-center">
//     //                                                                 <span class="text-[0.6rem] font-semibold">${player.reflexes}</span>
//     //                                                             </div>
                                    
//     //                                                         </div>
                                    
//     //                                                         <div class="">
                                                                
//     //                                                             <div class="h-3 flex items-center">
//     //                                                                 <span class="text-[0.6rem] font-thin">SPE</span>
//     //                                                             </div>
                                    
//     //                                                             <div class="h-2.5 flex items-center justify-center">
//     //                                                                 <span class="text-[0.6rem] font-semibold">${player.speed}</span>
//     //                                                             </div>
                                    
//     //                                                         </div>
                                    
//     //                                                         <div class="">
                                                                
//     //                                                             <div class="h-3 flex items-center">
//     //                                                                 <span class="text-[0.6rem] font-thin">POS</span>
//     //                                                             </div>
                                    
//     //                                                             <div class="h-2.5 flex items-center justify-center">
//     //                                                                 <span class="text-[0.6rem] font-semibold">${player.positioning}</span>
//     //                                                             </div>
                                    
//     //                                                         </div>
//     //                                                     </div>
//     //                                                 </div>
//     //                                             </div>
//     //                                     </button>
//     //                                 </div>
//     //             `
//     //             playerList.innerHTML = content;
//     //             document.querySelectorAll('.chosCard').forEach(function (card) {
//     //                 card.addEventListener('click', function () {
//     //                     replaceMainCard(player, card)
//     //                 })
//     //             }) 
//     //         } else {
//     //             content += `
//     //         <div id="${player.position}" class="chosCard w-36 h-40 shadow-white hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
//     //                                         <button class="relative bottom-5 left-4" aria-label="Card Button">
//     //                                             <img class="" src="../assets/img/badge_gold.webp" class="w-28 h-40">
//     //                                                 <div class="flex">
//     //                                                     <div class="text-[#4d331f] gap-1 flex flex-col items-center justify-center text-2xl relative bottom-[11rem] left-4 h-40 w-28">
//     //                                                         <div class="flex ">
//     //                                                             <div class="text-sm relative left-1.5 flex flex-col">
//     //                                                                 <span class="text-[#4d331f] relative top-2 font-bold text-lg">${player.rating}</span>
//     //                                                                 <span class="text-[#4d331f] relative bottom-0.5 text-[0.5rem]">${player.position}</span>
//     //                                                                 <div class="flex flex-col items-center gap-0.5 relative bottom-1.5">
//     //                                                                     <div class=" w-3">
//     //                                                                         <img src="${player.club}" alt="">
//     //                                                                     </div>
                                                
//     //                                                                     <div class=" w-3">
//     //                                                                         <img src="${player.flag}" alt="">
//     //                                                                     </div>
//     //                                                                 </div>
//     //                                                             </div>
                                            
//     //                                                             <div class="w-18 relative right-2 bottom-[0.1rem]">
//     //                                                                 <img src="${player.photo}" alt="">
//     //                                                             </div>
//     //                                                         </div>
                                         
//     //                                                         <div class="h-3 flex">
//     //                                                             <span class="text-xs font-bold relative bottom-1.5">${player.name}</span>
//     //                                                         </div>
                                        
//     //                                                         <div class="flex gap-0.5 relative bottom-1.5">
//     //                                                             <div class="">
                                                                    
//     //                                                                 <div class="h-3 flex items-center ">
//     //                                                                     <span class="text-[0.6rem] font-thin">PAC</span>
//     //                                                                 </div>
                                        
//     //                                                                 <div class="h-2.5 flex items-center justify-center">
//     //                                                                     <span class="text-[0.6rem] font-semibold">${player.pace}</span>
//     //                                                                 </div>
                                        
//     //                                                             </div>
                                        
//     //                                                             <div class="">
                                                                    
//     //                                                                 <div class="h-3 flex items-center">
//     //                                                                     <span class="text-[0.6rem] font-thin">SHO</span>
//     //                                                                 </div>
                                        
//     //                                                                 <div class="h-2.5 flex items-center justify-center">
//     //                                                                     <span class="text-[0.6rem] font-semibold">${player.shooting}</span>
//     //                                                                 </div>
                                        
//     //                                                             </div>
                                        
//     //                                                             <div class="">
                                                                    
//     //                                                                 <div class="h-3 flex items-center">
//     //                                                                     <span class="text-[0.6rem] font-thin">PAS</span>
//     //                                                                 </div>
                                        
//     //                                                                 <div class="h-2.5 flex items-center justify-center">
//     //                                                                     <span class="text-[0.6rem] font-semibold">${player.passing}</span>
//     //                                                                 </div>
                                        
//     //                                                             </div>
                                        
//     //                                                             <div class="">
                                                                    
//     //                                                                 <div class="h-3 flex items-center">
//     //                                                                     <span class="text-[0.6rem] font-thin">DRI</span>
//     //                                                                 </div>
                                        
//     //                                                                 <div class="h-2.5 flex items-center justify-center">
//     //                                                                     <span class="text-[0.6rem] font-semibold">${player.dribbling}</span>
//     //                                                                 </div>
                                        
//     //                                                             </div>
                                        
//     //                                                             <div class="">
                                                                    
//     //                                                                 <div class="h-3 flex items-center">
//     //                                                                     <span class="text-[0.6rem] font-thin">DEF</span>
//     //                                                                 </div>
                                        
//     //                                                                 <div class="h-2.5 flex items-center justify-center">
//     //                                                                     <span class="text-[0.6rem] font-semibold">${player.defending}</span>
//     //                                                                 </div>
                                        
//     //                                                             </div>
                                        
//     //                                                             <div class="">
                                                                    
//     //                                                                 <div class="h-3 flex items-center">
//     //                                                                     <span class="text-[0.6rem] font-thin">PHY</span>
//     //                                                                 </div>
                                        
//     //                                                                 <div class="h-2.5 flex items-center justify-center">
//     //                                                                     <span class="text-[0.6rem] font-semibold">${player.physical}</span>
//     //                                                                 </div>
                                        
//     //                                                             </div>
//     //                                                         </div>
//     //                                                     </div>
//     //                                                 </div>
//     //                                         </button>
//     //                                     </div>`;
//     //             playerList.innerHTML = content;
//     //             document.querySelectorAll('.chosCard').forEach(function (card, index) {
//     //                 card.addEventListener('click', function (currentIndex) {
//     //                     console.log(currentIndex)
//     //                     replaceMainCard(player, card)
//     //                 })
//     //             }) 
//     //         }
//     //     });
//     // } else {
//     //     content = '<p class="font-semibold text-xl text-red-400">No players found for this position</p>'
//     // }
//     let filteredPLayers = players.filter(function (player) {
//         return player.position === position
//     })
//     playerList.innerHTML = '';
//     if (position) {
//         filteredPLayers.forEach(function (player) {
//             const card = document.createElement('div');
//             card.classList.add('chosCard', 'w-36', 'h-40');

//             if(position === "GK") {
//                 card.innerHTML = `<button class="relative bottom-5 left-4" aria-label="Card Button">
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
//                                     </button>`
//             } else {
//                 card.innerHTML = `
//                 <button class="relative bottom-5 left-4" aria-label="Card Button">
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
//                 `
//             }

//             playerList.appendChild(card);
//         })
//     }

// }


// function displayAllPlayers() {
//     playerList.innerHTML = '';
//     if (players.length === 0) {
//         playerList.innerHTML = '<p>No players found</p>'
//     }
//         players.forEach(function (player) {
//             const card = document.createElement('div');
//             card.classList.add('chosCard', 'w-36', 'h-40');

//             if(player.position === "GK") {
//                 card.innerHTML = `<button class="relative bottom-5 left-4" aria-label="Card Button">
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
//                                     </button>`
//             } else {
//                 card.innerHTML = `
//                 <button class="relative bottom-5 left-4" aria-label="Card Button">
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
//                 `
//             }
//         playerList.appendChild(card)
//         })

// }


// function addPlayer(playerName, selected, position) {
//     console.log(selected);

//     const chosedCard = document.getElementById(selected);

//     const selectedPlayer = players.find(function (player) {
//         return player.name === playerName
//     })

//     if (chosedCard) {
//         chosedCard.innerHTML = `
//         <button onclick="addPlayer()" class="relative bottom-5 left-4" aria-label="Card Button">
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
//         `;
//         if(position === "GK") {
//             chosedCard.innerHTML = `<button onclick="addPlayer()" class="relative bottom-5 left-4" aria-label="Card Button">
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
//                                     </button>`
//         }
//     }
// }
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


let searchModal = document.getElementById("searchPlayer");
let modalPlayer = document.getElementById("Modalplayer");
let cardsContainer = document.getElementById("cards");
let scrol = document.getElementById("scrol")
let Name = document.getElementById("playerName");
let photo = document.getElementById("playerPhoto");
let position = document.getElementById("playerPosition");
let club = document.getElementById("playerClub");
let rating = document.getElementById("playerRating");
let pace = document.getElementById("playerPace");
let shooting = document.getElementById("playerShooting");
let passing = document.getElementById("playerPassing");
let dribbling = document.getElementById("playerDribbling");
let Defending = document.getElementById("playerDefending");
let Physical = document.getElementById("playerPhysical");


cardsContainer.addEventListener("wheel", (e) => {
    cardsContainer.scrollLeft += e.deltaX
})
let arry = []

// function fetchData() {

//     fetch('../players.json')
//         .then(response => response.json())
//         .then(data => {
//             const cards = data.players;

//             arry = cards
//             console.log("vdfjhdvdhjvdvbjs", arry);
//             if (arry.length >= 0) {
//                 localStorage.setItem("players", JSON.stringify(arry));
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         })
// }
// fetchData();


function rigex() {

    const NamePattern = /^[a-zA-Z\s]{3,30}$/;
    const clubPattern = /^[a-zA-Z\s_-]{10,100}$/;
    const ratingPattern = /^[0-9]{1,2}$/;

    if (!NamePattern.test(Name.value)) {
        showAlert("Le titre doit être entre 3 et 10 caractères, seulement des lettres.");
        return false;
    }

    if (!clubPattern.test(club.value)) {
        showAlert("La name de club doit être entre 10 et 100 caractères, avec seulement des lettres, chiffres, et ponctuations.");
        return false;
    }

    if (!ratingPattern.test(rating.value) || !ratingPattern.test(pace.value) || !ratingPattern.test(shooting.value) || !ratingPattern.test(passing.value) || !ratingPattern.test(dribbling.value) || !ratingPattern.test(Defending.value) || !ratingPattern.test(Physical.value)) {
        showAlert("Le rating doit être un nombre entre 0 et 99.");
        return false;
    }
    return true;
}


function addPlayer() {
    if (!rigex()) {
        return;
    }

    let player = {
        name: Name.value,
        photo: photo.value,
        position: position.value,
        club: club.value,
        rating: rating.value,
        pace: pace.value,
        shooting: shooting.value,
        passing: passing.value,
        dribbling: dribbling.value,
        defending: Defending.value,
        physical: Physical.value,
    };

    players.push(player);

    console.log("Player added:", player);
    console.log("Updated players array:", players);

    clearInput();
}


function clearInput() {
    Name.value = '';
    photo.value = '';
    position.value = '';
    club.value = '';
    rating.value = '';
    pace.value = '';
    shooting.value = '';
    passing.value = '';
    dribbling.value = '';
    Defending.value = '';
    Physical.value = '';
}

function showAlert(message) {
    const alertBox = document.getElementById("alert-box");
    const alertMessage = document.getElementById("alert-message");

    alertMessage.textContent = message;
    alertBox.classList.remove("hidden", "fade-out");
    alertBox.classList.add("fade-in");

    setTimeout(() => {
        alertBox.classList.remove("fade-in");
        alertBox.classList.add("fade-out");

        setTimeout(() => {
            alertBox.classList.add("hidden");
        }, 500);
    }, 3000);
}








function showModal(post) {
    searchModal.classList.toggle("hidden");

    // Filter players mn l-array li 3ndek b7asb l-position
    let feltredArry = players.filter(player => player.position == post);
    cardsContainer.innerHTML = '';

    if (post) {
        // L-loop b7al li kant b7ala ghi nghtsemo player cards
        feltredArry.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('bg-[url(\'/img/card.png\')]', 'bg-cover', 'bg-center', 'w-[7vw]', 'h-[20vh]', 'rounded-xl', 'shadow-xl', 'flex', 'flex-col', 'justify-around');

            playerCard.innerHTML = `
            <div class="text-center mt-">
                <span class="block font-extrabold text-white mt-2 text-[10px]">${player.rating}</span>
                <h3 class="text-white font-bold text-[10px] mt-1">${player.name}</h3>
                <p class=" text-gray-300 font-medium text-[8px]">${player.club}</p>
            </div>
            <div class="w-full flex justify-center">
                <img class="h-[8vh] rounded-b-full pb-1" src="${player.photo}" alt="">
            </div>
            <div class="absolute w-28 h-36 z-30 text-white flex justify-center items-center">
                <button onclick="AjouterPlayer('${player.name}', '${player.position}','${post}')" class="w-full h-full"></button>
            </div>
            <div class=" from-transparent  rounded-b-xl text-white flex justify-center">
                <div class="flex gap-2 justify-around font-semibold w-28 h-10 text-[7px] mb-10">
                <div class="text-left">
                    <p> ${player.pace}PAC</p>
                    <p> ${player.shooting}SHO</p>
                    <p> ${player.passing}PAC</p>
                </div>
                <div class="text-right">
                    <p> ${player.dribbling}DRI</p>
                    <p> ${player.defending}DEF</p>
                    <p> ${player.physical}PHY</p>
                </div>
                </div>
            </div>
            `;

            // Si l-post "GK" (goalkeeper), tsed l-template dyal "GK"
            if (post === "GK") {
                playerCard.innerHTML = `
                    <div class="text-center mt-">
                        <span class="block font-extrabold text-white mt-2 text-[10px]">${player.rating}</span>
                        <h3 class="text-white font-bold text-[10px] mt-1">${player.name}</h3>
                        <p class=" text-gray-300 font-medium text-[8px]">${player.club}</p>
                    </div>
                    <div class="w-full flex justify-center">
                        <img class="h-[8vh] rounded-b-full pb-1" src="${player.photo}" alt="">
                    </div>
                    <div class="absolute w-28 h-36 z-30 text-white flex justify-center items-center">
                        <button onclick="AjouterPlayer('${player.name}', '${player.position}','${post}')" class="w-full h-full"></button>
                    </div>
                    <div class=" from-transparent  rounded-b-xl text-white flex justify-center">
                        <div class="flex gap-2 justify-around font-semibold w-20 h-10 text-[8px] mb-10">
                        <div class="text-left">
                            <p> ${player.diving}DIV</p>
                            <p> ${player.handling}HND</p>
                            <p> ${player.kicking}KCK</p>
                        </div>
                        <div class="text-right">
                            <p> ${player.reflexes}RFX</p>
                            <p> ${player.speed}SPD</p>
                            <p> ${player.positioning}POS</p>
                        </div>
                        </div>
                    </div>
                `;
            }
            cardsContainer.appendChild(playerCard);
        });
    } else {
        // Ila l-post mafih la valeur, tsed chi7aja mn players array
        players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('bg-[url(\'/img/card.png\')]', 'bg-cover', 'bg-center', 'min-w-[9vw]', 'rounded-xl', 'shadow-xl', 'flex', 'flex-col', 'justify-around');

            playerCard.innerHTML = `
            <div class="text-center mt-">
                <span class="block font-extrabold text-white mt-2 text-[10px]">${player.rating}</span>
                <h3 class="text-white font-bold text-[10px] mt-1">${player.name}</h3>
                <p class=" text-gray-300 font-medium text-[8px]">${player.club}</p>
            </div>
            <div class="w-full flex justify-center">
                <img class="h-[9vh] rounded-b-full pb-1" src="${player.photo}" alt="">
            </div>
            `;
            cardsContainer.appendChild(playerCard);
        });
    }
}

function AjouterPlayer(playerName, selected, post) {
    console.log(selected);


    const cardElement = document.getElementById(selected);

    const storedPlayers = localStorage.getItem("players");
    let arryPlayer = JSON.parse(storedPlayers) || [];


    const player = arryPlayer.find(player => player.name === playerName);

    if (!player) {
        console.error('Player not found');
        return;
    }


    if (cardElement) {
        cardElement.innerHTML = `
              <div class="flex flex-col items-center gap-1">
    <div class="relative bg-[url('/img/card.png')] bg-cover bg-center w-[7vw] h-[20vh] rounded-xl shadow-xl flex flex-col justify-around group">
      <div class="text-center mt-">
        <span class="block font-extrabold text-white mt-2 text-[10px]">${player.rating}</span>
        <h3 class="text-white font-bold text-[10px] mt-1">${player.name}</h3>
        <p class="text-gray-300 font-medium text-[8px]">${player.club}</p>
      </div>
      <div class="w-full flex justify-center">
        <img class="h-[8vh] rounded-b-full pb-1" src="${player.photo}" alt="">
      </div>
      <div id="btn" class="absolute w-[7vw] rounded-3xl h-[18vh] bg-opacity-90 bg-black z-50 text-white flex justify-center items-center flex-col justify-around  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
        <button onclick="showModal('${post}')" class="border-[1px] rounded-xl border-white border-solid w-10 h-8">
          <i class="fa-solid fa-rotate"></i>
        </button>
        <button onclick="suprim('${player.name}','${post}')" class="border-[1px] rounded-xl border-white border-solid w-10 h-8">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div class="from-transparent rounded-b-xl text-white flex justify-center">
        <div class="flex gap-2 justify-around font-semibold w-20 h-10 text-[7px] mb-10">
          <div class="text-left">
            <p id="pace">${player.pace}PAC</p>
            <p>${player.shooting}SHO</p>
            <p>${player.passing}PAC</p>
          </div>
          <div class="text-right">
            <p>${player.dribbling}DRI</p>
            <p>${player.defending}DEF</p>
            <p>${player.physical}PHY</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
                `;
        if (post === "GK") {
            cardElement.innerHTML = `
                  <div class="flex flex-col items-center gap-1">
    <div class="relative bg-[url('/img/card.png')] bg-cover bg-center w-[7vw] h-[20vh] rounded-xl shadow-xl flex flex-col justify-around group">
      <div class="text-center mt-">
        <span class="block font-extrabold text-white mt-2 text-[10px]">${player.rating}</span>
        <h3 class="text-white font-bold text-[10px] mt-1">${player.name}</h3>
        <p class="text-gray-300 font-medium text-[8px]">${player.club}</p>
      </div>
      <div class="w-full flex justify-center">
        <img class="h-[8vh] rounded-b-full pb-1" src="${player.photo}" alt="">
      </div>
      <div id="btn" class="absolute w-[7vw] rounded-3xl h-[18vh] bg-opacity-90 bg-black z-50 text-white flex justify-center items-center flex-col justify-around  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
        <button class="border-[1px] rounded-xl border-white border-solid w-10 h-8">
          <i class="fa-solid fa-rotate"></i>
        </button>
        <button class="border-[1px] rounded-xl border-white border-solid w-10 h-8">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div class="from-transparent rounded-b-xl text-white flex justify-center">
        <div class="flex gap-2 justify-around font-semibold w-20 h-10 text-[7px] mb-10">
          <div class="text-left">
            <p id="pace">${player.pace}PAC</p>
            <p>${player.shooting}SHO</p>
            <p>${player.passing}PAC</p>
          </div>
          <div class="text-right">
            <p>${player.dribbling}DRI</p>
            <p>${player.defending}DEF</p>
            <p>${player.physical}PHY</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
                        `;
        }
    }

    searchModal.classList.toggle("hidden");


}



function showModalPlayer() {
    modalPlayer.classList.toggle("hidden");
}

function suprim(playerName, post, arrayData) {
    // Retrieve the container for the player's position and update its content
    let posistion = document.getElementById(post);
    posistion.innerHTML = `
    <div
        class="bg-[url('/img/card.png')] bg-cover bg-center w-[7vw] h-[20vh] rounded-xl shadow-xl flex flex-col justify-around">
        <button onclick="showModal('${post}')" class="w-full text-white font-bold h-full text-[3vh]">
            +
        </button>
    </div>
    <div
        class="bg-black w-10 h-5 text-white flex justify-center items-center font-bold bg-opacity-80 rounded-3xl"
        value="${post}">
        ${post}
    </div>`;

    // Filter the array to exclude the player with the specified name
    const updatedArray = arrayData.filter(player => player.name !== playerName);
    console.log(updatedArray);

    return updatedArray; // Return the updated array to be used elsewhere
}

function showAlert(message) {
    const alertBox = document.getElementById("alert-box");
    const alertMessage = document.getElementById("alert-message");

    // Update the alert message and display the alert box
    alertMessage.textContent = message;
    alertBox.classList.remove("hidden", "fade-out");
    alertBox.classList.add("fade-in");

    // Set a timeout to hide the alert box after 3 seconds
    setTimeout(() => {
        alertBox.classList.remove("fade-in");
        alertBox.classList.add("fade-out");

        // Ensure the alert box is hidden after the fade-out animation
        setTimeout(() => {
            alertBox.classList.add("hidden");
        }, 500);
    }, 3000);
};


function ajoutPlayer() {
    const players = JSON.parse(localStorage.getItem("players")) || [];
    console.log(players);
}

function showAlert(message) {
    alert(message);
}

function displayPlayer() {

}


y