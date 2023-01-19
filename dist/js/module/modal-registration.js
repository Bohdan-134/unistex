
const btnsRegistration=document.querySelectorAll('.btn-registration');const openModaLogin=document.getElementById('open-modal-login');Array.from(btnsRegistration).forEach(item=>item.addEventListener('click',()=>openModal('registration')));openModaLogin.addEventListener('click',openModal);async function createModal(type){const lang=document.getElementById('select').value;const data=await fetch(`../../data/modal/${lang}.json`)
const translates=await data.json();const t=(key)=>{return translates[key]}
return(`
            <div class='modal'>
                <h3 class='modal-title lang-modal'>${(type == 'registration') ? t("registration") : t("login")}</h3>
                <form class='modal-form lang-modal' action=''>
                    ${(type == 'registration') ? `<input type="text"class="name-i lang-modal"placeholder=${t("input.name")}>` : ''}
                    <input type='text' class='email-i lang-modal' placeholder='${t('input.email')}'>
                    <input type='password' class='password-i lang-modal' placeholder=${t('input.password')}>
                    ${(type == 'registration') ? `<input type='submit'id='registration'class='btn btn-registration lang-modal'value=${t('registration')}` : `<input type='submit'id='login'class='btn btn-login lang-modal'value=${t('login')}>`}
                </form>
            </div>
            `)}
function closeModal(e){const modalWrap=document.querySelector('.modal-wrap');const click=e.composedPath().includes(document.querySelector('div.modal'));if(!click)modalWrap.remove();}
async function openModal(type){const modalWrap=document.createElement('div');modalWrap.classList.add('modal-wrap');modalWrap.innerHTML=await createModal(type);modalWrap.addEventListener('click',closeModal)
document.body.append(modalWrap);}