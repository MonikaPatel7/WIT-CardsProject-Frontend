$(document).ready(()=>{
    const cardData = JSON.parse(localStorage.getItem('card'))
    if(cardData){
        let $newCard = $(`
        <div class="card d-flex flex-row shadow m-2 p-0" style="width: 28rem;">
            <div class="bg-info rounded-2 px-2">
                <div class="bg-secondary m-3 rounded-3">
                    <p class="text-center text-white fw-bolder px-2 text-nowrap">LEVEL ${cardData.level}</p>
                </div>
                <div class="d-flex justify-content-center"> 
                    <img style="width:100px" src=${cardData.imageURL} alt="male avatar with beard">
                </div>
                <div class="bg-secondary m-2 px-2 rounded-3"> 
                    <p class="text-center text-white fw-bolder text-nowrap">${cardData.point} POINTS</p>
                </div>
            </div>
            <div class="m-3 position-relative" style="width: 16rem;">
                <div>
                    <h1> ${cardData.name} </h1>
                </div>
                <div>
                    <p class="lh-sm"> ${cardData.description}</p>
                </div>
                <div class="position-absolute bottom-0 end-0">
                    <a href="https://www.google.com" class="text-decoration-none">LinkedIn </a>
                </div>
            </div>
        </div>`)

        $('#cards').append($newCard)
        localStorage.removeItem('card')
    }
    $('button').on('click',()=>{
        window.location.href="create.html"
    })

})
// const cardData = JSON.parse(localStorage.getItem('card'))

// // const cardData = {name:'John Doe', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
// //                   level: 13, point: 15434, imageURL:"https://cdn-icons-png.flaticon.com/512/147/147144.png"}

// if(cardData){
//     document.getElementById('cards').innerHTML += `
//     <div class="card d-flex flex-row shadow m-2 p-0" style="width: 28rem;">
//         <div class="bg-info rounded-2 px-2">
//             <div class="bg-secondary m-3 rounded-3">
//                 <p class="text-center text-white fw-bolder px-2 text-nowrap">LEVEL ${cardData.level}</p>
//             </div>
//             <div class="d-flex justify-content-center"> 
//                 <img style="width:100px" src=${cardData.imageURL} alt="male avatar with beard">
//             </div>
//             <div class="bg-secondary m-2 px-2 rounded-3"> 
//                 <p class="text-center text-white fw-bolder text-nowrap">${cardData.point} POINTS</p>
//             </div>
//         </div>
//         <div class="m-3 position-relative" style="width: 16rem;">
//             <div>
//                 <h1> ${cardData.name} </h1>
//             </div>
//             <div>
//                 <p class="lh-sm"> ${cardData.description}</p>
//             </div>
//             <div class="position-absolute bottom-0 end-0">
//                 <a href="https://www.google.com" class="text-decoration-none">LinkedIn </a>
//             </div>
//         </div>
//     </div>`
//     // localStorage.removeItem('card')
// }

// const createBtn = document.querySelector('button')
// createBtn.addEventListener('click', ()=>{
//     window.location.href="create.html"
// })