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
