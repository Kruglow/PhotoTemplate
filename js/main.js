function theme(){
    const toogleTheme = document.querySelector('.theme');
    const logo = document.querySelectorAll('.logo');
    const logoClient = document.querySelectorAll('.logoClient');
    const circle = document.querySelector('.circle');
    let el = document.documentElement;
    
    toogleTheme.addEventListener('click',()=>{
            if (el.hasAttribute('data-theme')){
                circle.style.animation = 'movel .3s linear'
                    circle.style.left = '2px'
            } else{
                circle.style.animation = 'move .3s linear'
                circle.style.left = '28px'
            }
        timer = setTimeout(function() {
            if (el.hasAttribute('data-theme')){
                el.removeAttribute('data-theme','white'),
                logo.forEach(item=>{
                    item.style.fill = 'white'
                });
                logoClient.forEach(item=>{
                    item.style.fill = 'white';
                })
                
            } else{
                el.setAttribute('data-theme','white'),
                logo.forEach(item=>{
                    item.style.fill = 'black'
                });
                logoClient.forEach(item=>{
                    item.style.fill = 'black';
                })
                
            }
        }, 300);
        
    });
}

const sectionWork = document.querySelector('.work').querySelector('.container').querySelectorAll('article');
let modalWork = document.querySelectorAll('.modalWork');
const openModal = document.querySelector('#workpopup');

modalWork.forEach(item=>{
    let parentModal = item.parentElement;
    let images = parentModal.parentElement.children[0]
    let header = parentModal.parentElement.children[1].children[0]
    let text = parentModal.parentElement.children[1].children[1]

    item.addEventListener('click', event =>{
        event.preventDefault();
        openModal.style.display = 'block'
        openModal.innerHTML = `
        <div class="modalcontent">
            <img src="${images.src}" alt="img">
            <div class="modaltext">
                <h3>${header.textContent}</h3>
                <p>${text.textContent}</p>
            </div>
            <span class="close">x</span>
        </div>
        `
        document.body.style.overflow = 'hidden';

        let closeModal = document.querySelector('.close');
        closeModal.addEventListener('click',()=>{
            openModal.style.display = 'none'
            document.body.style.overflow = '';
        })
    });

    openModal.addEventListener('click',(e) =>{
        if (e.target === openModal){
            openModal.style.display = 'none'
            document.body.style.overflow = '';
        }
    });
    
})






theme();



