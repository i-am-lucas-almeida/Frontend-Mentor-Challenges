const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const url = 'https://api.shrtco.de/v2/shorten?url=';
const formControl = document.querySelector('.form-control');

const boxResp = document.querySelector('.box-resp');
const link = document.querySelector('.link');
const resp = document.querySelector('.resp');

searchBtn.addEventListener('click', e => {

    e.preventDefault();
    getShortLink();

});

async function getShortLink() {

    const searchInputValue = searchInput.value;

    if(searchInputValue === '') {

        searchInput.focus();        
        formControl.classList.add('error');

    } else if(!isValidUrl(searchInputValue)) {

        searchInput.value = '';
        searchInput.focus();
        searchInput.placeholder = 'Use uma URL válida';
        formControl.classList.add('error');

    } else {

        searchInput.value = '';
        searchInput.placeholder = 'Cole o link aqui...';
        formControl.classList.remove('error');

        const res = await fetch(`${url}${searchInputValue}`);
        const data = await res.json();

        const originalLink = data.result.original_link;
        const fullLink = data.result.full_short_link;
        const shortLink = data.result.short_link;

        const newLink = document.createElement('div');

        newLink.innerHTML = `
        
            <div class="links animate__animated animate__pulse">
            
                <p class="link">${originalLink}</p>

                <aside>

                    <a href="${fullLink}" class="resp" target="_blank">${shortLink}</a>

                    <button class="btn-copy">Copiar</button>

                </aside>
            
            </div>

        `

        boxResp.insertAdjacentElement('afterbegin', newLink);

        // function to copy the short link.

        const btnCopy = document.querySelector(".btn-copy");

        btnCopy.addEventListener('click', () => {

            navigator.clipboard.writeText(shortLink);

            btnCopy.classList.add('btn-copy--active');
            btnCopy.textContent = 'Copiado';

            setTimeout(function () {

                btnCopy.classList.remove('btn-copy--active');
                btnCopy.textContent = 'Copiar';

            }, 2000);

        });

    }

}

function isValidUrl(url) {

    return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(url);

}

//  GET ACTUAL YEAR

const year = document.querySelector('.year');

const date = new Date();
year.textContent = date.getFullYear();