gsap.registerPlugin(ScrollTrigger);

// img-product
gsap.to(".product-back-img", {
    opacity: 1,
    durection: 1,
    transition: .5,
    scrollTrigger: {
        trigger: ".products-container__purpose",
        start: "top center",
        end: "center center",
        scrub: true,
        id: "scrub"
    }
});

// estonia
gsap.to(".shadow_circle__gsap", {
    opacity: 1,
    scale: 1,
    transition: .5,
    scrollTrigger: {
        trigger: ".estonia-inf",
        start: "top center",
        end: "center center",
        scrub: true,
        //markers: true,
        id: "scrub"
    }
});


// accordeon
$(document).ready(function() {
    $('.accordeon-item__title').click(function(event) {
        $(this).toggleClass('accordeon-item__title-active').next().slideToggle(300);
    });
    $('.footer-spoiler__title').click(function(event) {
        $(this).next().slideToggle(300);
    });
});

// registration

const btnsRegistration = document.querySelectorAll('.btn-registration');

Array.from(btnsRegistration).forEach(item => item.addEventListener('click', () => openModal('registration')))



const btnStart = document.getElementById('start');
btnStart.addEventListener('click', () => openModal('registration'));

// modal
const openModaLogin = document.getElementById('open-modal-login');


openModaLogin.addEventListener('click', openModal);

function createModal(type) {
    return `
        <div class='modal'>
            <h3 class='modal-title'>${(type == 'registration') ? 'Registration' : 'Login'}</h3>
            <form class='modal-form' action=''>
                ${(type == 'registration') ? '<input type="text" class="name-i" placeholder="name">' : ''}
                <input type='text' class='email-i' placeholder='email'>
                <input type='password' class='password-i' placeholder='password'>
                ${(type == 'registration') ? "<input type='submit' id='registration' class='btn btn-registration' value='Registration'>" : "<input type='submit' id='login' class='btn btn-login' value='Login'>"}
            </form>
        </div>
    `
}

function closeModal(e) {
    const modalWrap = document.querySelector('.modal-wrap');
    const click = e.composedPath().includes(document.querySelector('div.modal'));
    if (!click) modalWrap.remove();
}

function openModal(type) {
    const modalWrap = document.createElement('div');
    modalWrap.classList.add('modal-wrap');
    modalWrap.innerHTML = createModal(type);
    modalWrap.addEventListener('click', closeModal)
    document.body.append(modalWrap);
}

//lan

const lanBtn = document.getElementById('select');
lanBtn.addEventListener('change', function(e) {
    let lang = document.querySelectorAll('.lan');
    if (lanBtn.value == 'en') {
        getLangJson().then((data) => {
            lang.forEach(elem => {
                for (let key in data) {
                    for (let key2 in data[key]) {
                        if (elem.getAttribute('data-lan') == key2) elem.innerHTML = data[key][key2].en;
                    }
                }
            })
        });
    } else if (lanBtn.value == 'ru') {
        getLangJson().then((data) => {
            lang.forEach(elem => {
                for (let key in data) {
                    for (let key2 in data[key]) {
                        if (elem.getAttribute('data-lan') == key2) elem.innerHTML = data[key][key2].ru;
                    }
                }
            })
        })
    }
})

function getLangJson() {
    return fetch('../data/lan.json')
        .then((response) => {
            return response.json();
        })
}

AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});