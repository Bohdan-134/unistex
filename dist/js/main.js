
$(document).ready(function(){$('.accordeon-item__title').click(function(event){$(this).toggleClass('accordeon-item__title-active').next().slideToggle(300);});$('.footer-spoiler__title').click(function(event){$(this).next().slideToggle(300);});});const openModaLogin=document.getElementById('open-modal-login');const openModalRegistration=document.getElementById('open-modal-registration');openModaLogin.addEventListener('click',openModal);openModalRegistration.addEventListener('click',function(){openModal('registration');});function createModal(type){return`
        <div class='modal'>
            <h3 class='modal-title'>${(type == 'registration') ? 'Registration' : 'Login'}</h3>
            <form class='modal-form' action=''>
                ${(type == 'registration') ? '<input type="text" class="name-i" placeholder="name">' : ''}
                <input type='text' class='email-i' placeholder='email'>
                <input type='password' class='password-i' placeholder='password'>
                ${(type == 'registration') ? "<input type='submit' id='registration' class='btn btn-registration' value='Registration'>" : "<input type='submit' id='login' class='btn btn-login' value='Login'>"}
            </form>
        </div>
    `}
function closeModal(e){const modalWrap=document.querySelector('.modal-wrap');const click=e.composedPath().includes(document.querySelector('div.modal'));if(!click)modalWrap.remove();}
function openModal(type){const modalWrap=document.createElement('div');modalWrap.classList.add('modal-wrap');modalWrap.innerHTML=createModal(type);modalWrap.addEventListener('click',closeModal)
document.body.append(modalWrap);}
const lanBtn=document.getElementById('select');lanBtn.addEventListener('change',function(e){let lang=document.querySelectorAll('.lan');if(lanBtn.value=='en'){getLangJson().then((data)=>{lang.forEach(elem=>{for(let key in data){for(let key2 in data[key]){if(elem.getAttribute('data-lan')==key2)elem.innerHTML=data[key][key2].en;}}})});}else if(lanBtn.value=='ru'){getLangJson().then((data)=>{lang.forEach(elem=>{for(let key in data){for(let key2 in data[key]){if(elem.getAttribute('data-lan')==key2)elem.innerHTML=data[key][key2].ru;}}})})}})
function getLangJson(){return fetch('../data/lan.json').then((response)=>{return response.json();})}
function translate(){}