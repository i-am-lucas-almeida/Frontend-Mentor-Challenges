// USING API

const userSearch = document.getElementById('userSearch');
const btnSearch = document.getElementById('btnSearch');
const errorMessage = document.querySelector('.error-message');
const url = 'https://api.github.com/users/';
let user = 'octocat';

const userName = document.querySelector('.user-name');
const userUserName = document.querySelector('.user-username');
const userJoin = document.querySelector('.user-join');
const userImage = document.querySelector('.user-image');
const userProfile = document.querySelector('.user-profile');
const userRepos = document.querySelector('.user-repos');
const userFollowers = document.querySelector('.user-followers');
const userFollowing = document.querySelector('.user-following');
const userLocation = document.querySelector('.user-location');
const userCompany = document.querySelector('.user-company');
const userWebsite = document.querySelector('.user-website');
const userTwitter = document.querySelector('.user-twitter');

btnSearch.addEventListener('click', e => {

    e.preventDefault();

    if(userSearch.value === '') {

        userSearch.focus();
        userSearch.classList.add('error');
        errorMessage.classList.add('error-message--active');


    } else{

        userSearch.classList.remove('error');
        user = userSearch.value;
        errorMessage.classList.remove('error-message--active');
        getGithubData();

    }

});

async function getGithubData() {

    fetch(`${url}${user}`)

    .then((result) => result.json())
    .then((data) => (

        (data.name === null ? userName.textContent = '' : userName.textContent = data.name) &&
        
        (userUserName.textContent = `${'@'}${data.login}`) &&

        (userUserName.href = data.html_url ? data.html_url : '#') &&

        (userImage.src = data.avatar_url) &&

        (userJoin.textContent = data.created_at ? `${'Joined in'} ${dateFormat(data.created_at)}` : '') &&

        (userProfile.textContent = data.bio ? data.bio : '"This profile has no bio"') &&

        (userRepos.textContent = data.public_repos ? data.public_repos : '0') &&

        (userFollowers.textContent = data.followers ? data.followers : '0') &&

        (userFollowing.textContent = data.following ? data.following : '0') &&

        (data.company === null ? userCompany.textContent = 'Without company' : userCompany.innerHTML = `<p class='info-valid'>${data.company}<p>`) &&

        (data.location === null ? userLocation.textContent = 'Without location' : userLocation.innerHTML = `<p class='info-valid'>${data.location}</p>`) &&

        (data.blog === '' ? userWebsite.textContent = 'Without website' : userWebsite.innerHTML = `<a href='${data.blog}' target="_blank" class="link-valid">${data.blog}</a>`) &&

        (data.twitter_username === null ? userTwitter.textContent = 'Without twitter' : userTwitter.innerHTML = `<a href='https://twitter.com/${data.twitter_username}' target="_blank" class="link-valid">${'@'}${data.twitter_username}</a>`)

    ))

    .catch(error => {

        throw error;

    })

}

const dateFormat = (str) => {

    const year = new Date(Date.parse(str)).getFullYear();
    const day = new Date(str).getDate();
    const month = new Date(str).toLocaleString('ENG', {month: 'long'});

    return `${day} ${month} ${year}`;

}

getGithubData();

// BUTTON TOGGLE THEME

const btnTheme = document.getElementById('btnTheme');
const toggleTheme = document.getElementById('toggleTheme');
const themeName = document.querySelector('.theme-name');

const imgDark = document.querySelector('.img-dark');
const imgLight = document.querySelector('.img-light');

btnTheme.addEventListener('click', () => {

    document.documentElement.setAttribute("data-theme", "light");
    themeName.textContent = 'dark';
    imgLight.classList.toggle('img-theme--toggle');
    imgDark.classList.toggle('img-theme--toggle');

    if(toggleTheme.checked) {

        document.documentElement.setAttribute("data-theme", "dark");
        themeName.textContent = 'light';
    
    }

});