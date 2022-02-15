const actualYear = document.querySelector('.actual-year');

const year = new Date();
const getYear = year.getFullYear();

actualYear.textContent = getYear;