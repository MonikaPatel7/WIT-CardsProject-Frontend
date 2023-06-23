$(document).ready(()=>{
    $('button').on('click', (e)=>{
        e.preventDefault()
        const cardName = $('.form-control')[0].value
        const cardDescription = $('.form-control')[1].value
        const cardLevel = $($('.form-control')[2]).val()
        const cardPoint = $($('.form-control')[3]).val()
        const cardImageURL = $($('.form-control')[4]).val()
        // validation
        /////////////add code here/////////////

        ///////////////////////////////////////
        const data = {name:cardName, description:cardDescription, 
            level: cardLevel, point: cardPoint, imageURL:cardImageURL}
        
        localStorage.setItem('card', JSON.stringify(data))
        window.location.href='cards.html'
    })
})



// const submitBtn = document.querySelector('button')
// submitBtn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     const dataList = document.querySelectorAll('.form-control')
//     const cardName = dataList[0].value
//     const cardDescription = dataList[1].value
//     const cardLevel = dataList[2].value
//     const cardPoint = dataList[3].value
//     const cardImageURL = dataList[4].value
//     // validation
//     /////////////add code here/////////////

//     ///////////////////////////////////////
//     const data = {name:cardName, description:cardDescription, 
//         level: cardLevel, point: cardPoint, imageURL:cardImageURL}
    
//     localStorage.setItem('card', JSON.stringify(data))
//     window.location.href='cards.html'
// })