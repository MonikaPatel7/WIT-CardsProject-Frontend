// const loginEle = document.getElementsByTagName('label')
// const loginEle = document.querySelectorAll('label')
const loginEle = document.querySelector('button')
loginEle.addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById('login-email').nextElementSibling.style.display = 'none'
    document.getElementById('login-email').classList.remove("warning");
    document.getElementById('login-password').nextElementSibling.style.display = 'none'
    document.getElementById('login-password').classList.remove("warning");

    const email = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value
    // const password = document.querySelector('#login-password').value
    
    let reEmail = /[a-z]+@[a-z]+\.[a-z]+/
    let rePassword = /[a-zA-Z0-9]{6,20}/

    if(!reEmail.test(email)){
        // show the error for email
        document.getElementById('login-email').classList.add("warning")
        document.getElementById('login-email').nextElementSibling.style.display = 'block'
    }else if(!rePassword.test(password)){
        // show the error for password
        document.getElementById('login-password').classList.add("warning");
        document.getElementById('login-password').nextElementSibling.style.display = 'block'
    }else{
        // send data to backend
        console.log(email)
        console.log(password)
        window.location.href='cards.html'
    }
     
})