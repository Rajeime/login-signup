var checkbox = document.querySelector('[data-checkbox]');
var password = document.querySelectorAll('[data-password]');

checkbox.addEventListener('change', checkFunction);

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





