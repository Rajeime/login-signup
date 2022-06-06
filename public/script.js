let checkbox = document.querySelector('[data-checkbox]');
let password = document.querySelectorAll('[data-password]');

checkbox.addEventListener('change', checkFunction)

function checkFunction(e){
    let status = e.target.checked;
    
    password.forEach((element)=>{
        if(status){
            element.type = 'text'
        }
        else{
            element.type = 'password'
        }
    })
}

