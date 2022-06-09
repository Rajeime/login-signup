//script for navigation menu in welcome page

let options = Array.from(document.querySelectorAll('[data-option]'));
let contentSection = document.querySelector('[data-main-section]');
let contentOptions = Array.from(document.querySelectorAll('[data-option-select]'))

    options.forEach((option, index)=>{
        option.addEventListener('click',(e)=>{
            
            //removes any link with class of active
            options.forEach((element)=>{
                element.classList.remove('active')
            })

            contentOptions.forEach((element)=>{
                element.classList.remove('visible')
            })
            //add active class to option clicked
            e.target.classList.add('active')
            navIndex = index

            contentOptions.forEach((element,index)=>{
                if(navIndex == index){
                    element.classList.add('visible')
                }
            })
        })
    })

   