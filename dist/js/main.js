
import'./animation/estonia-inf.js';gsap.registerPlugin(ScrollTrigger);let vh=window.innerHeight*0.01;document.documentElement.style.setProperty('--vh',`${vh}px`);window.addEventListener('resize',()=>{let vh=window.innerHeight*0.01;document.documentElement.style.setProperty('--vh',`${vh}px`);});gsap.to(".product-back-img",{opacity:1,durection:1,transition:.5,scrollTrigger:{trigger:".products-container__purpose",start:"top center",end:"center center",scrub:true,id:"scrub"}});gsap.to(".container-perspective",{rotateX:'0deg',scrollTrigger:{trigger:".products-container__purpose",start:"top center",end:"center center",scrub:true,id:"scrub"}});$(document).ready(function(){$('.accordeon-item__title').click(function(event){$(this).toggleClass('accordeon-item__title-active').next().slideToggle(300);});$('.footer-spoiler__title').click(function(event){$(this).next().slideToggle(300);});});const btnsRegistration=document.querySelectorAll('.btn-registration');Array.from(btnsRegistration).forEach(item=>item.addEventListener('click',()=>openModal('registration')))
const btnStart=document.getElementById('start');btnStart.addEventListener('click',()=>openModal('registration'));const openModaLogin=document.getElementById('open-modal-login');openModaLogin.addEventListener('click',openModal);function createModal(type){return`
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
AOS.init({disable:false,startEvent:'DOMContentLoaded',initClassName:'aos-init',animatedClassName:'aos-animate',useClassNames:false,disableMutationObserver:false,debounceDelay:50,throttleDelay:99,offset:120,delay:500,duration:800,easing:'ease',once:false,mirror:false,anchorPlacement:'top-bottom',});