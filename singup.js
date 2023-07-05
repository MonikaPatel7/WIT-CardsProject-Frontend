$(document).ready(()=>{
    $('button').on('click', (e)=>{
        e.preventDefault()
        if($('p').length){
            $('p').each(function(){
                $(this).remove()
            })
        }

        const email = $($('.form-control')[0]).val()
        const password = $($('.form-control')[1]).val()
        const firstName = $($('.form-control')[2]).val()
        const lastName = $($('.form-control')[3]).val()
        const $genderEle = $('input[name="gender"]:checked')
        const $preferEle = $('input[type="checkbox"]:checked')
        if($genderEle.length == 0){
            const $warningEle = $('<p></p>')
            $warningEle.text('Please select gender')
            $warningEle.attr('class','warning')
            $('.gender-section').append($warningEle)
        }else if($preferEle.length == 0){
            const $warningEle = $('<p></p>')
            $warningEle.text('Please select')
            $warningEle.attr('class', 'warning')
            $('.preference').append($warningEle)
        }else{
            const gender = $genderEle.val()
            let prefer = []
            $preferEle.each(function(){
                prefer.push($(this).val())
            })
            // $preferEle.each(i=>{
            //     // console.log($($preferEle[i]).val())
            //     prefer.push($($preferEle[i]).val())
            // })
            console.log(email)
            console.log(password)
            console.log(firstName)
            console.log(lastName)
            console.log(gender)
            console.log(prefer)
        }
    })
})
// const submitEle = document.querySelector('button')
// submitEle.addEventListener('click',(e)=>{
//     e.preventDefault()
//     // remove warning
//     const warningEle = document.querySelectorAll('p')
//     if(warningEle.length!==0){
//         warningEle.forEach((element)=>{
//             element.remove()
//         })
//     }
//     // console.log(document.querySelectorAll('.form-control'))
//     const email = document.querySelectorAll('.form-control')[0].value
//     const password = document.querySelectorAll('.form-control')[1].value
//     const firstName = document.querySelectorAll('.form-control')[2].value
//     const lastName = document.querySelectorAll('.form-control')[3].value
//     const genderEle = document.querySelector('input[name="gender"]:checked')
//     const preferEle = document.querySelectorAll('input[type="checkbox"]:checked')
//     // add validation here
//     //////////add your code here///////////

//     //////////////////////////////////////


//     // console.log(!preferEle.length)
//     if(!genderEle){
//         // show error message for gender
//         const warningEle = document.createElement('p')
//         warningEle.setAttribute('class', 'warning')
//         warningEle.innerText = 'Please select gender'
//         document.querySelector('.gender-section').appendChild(warningEle)
//     }else if(!preferEle.length){
//         // show error message for prefer
//         const warningEle = document.createElement('p')
//         warningEle.setAttribute('class', 'warning')
//         warningEle.innerText = 'Please select'
//         document.querySelector('.preference').appendChild(warningEle)
//     }else{
//         let gender = genderEle.value
//         let prefer = []
//         preferEle.forEach(ele=>{
//             prefer.push(ele.value)
//         })
//         console.log(email)
//         console.log(password)
//         console.log(firstName)
//         console.log(lastName)
//         console.log(gender)
//         console.log(prefer)
//         window.location.href='index.html'
//     }

// })