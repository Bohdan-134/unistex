import { getLangJson } from '../main.js';

const lanBtn = document.getElementById('select');

lanBtn.addEventListener('change', function() {
    const lang = document.querySelectorAll('.lan');
    const lng = lanBtn.value;

    getLangJson('../data/lan.json').then((data) => {
        lang.forEach(elem => {
            for (let key in data) {
                for (let key2 in data[key]) {
                    if (elem.getAttribute('data-lan') == key2) elem.innerHTML = data[key][key2][lng]
                }
            }
        })
    });

})