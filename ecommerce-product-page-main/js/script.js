const imageProductGallery = document.getElementById("imageProduct");

function selectImage(img) {

    imageProductGallery.src = img.src;

};

/*************************************************************/

const add = document.getElementById("add");
const remove = document.getElementById("remove");
const quantItem = document.getElementById("quantItem");
const cartQuant = document.getElementById("cartQuant");
const buttonCheckout = document.getElementById("buttonCheckout");
const quantItem_modal = document.getElementById("quantItem_modal");
const finalPrice = document.getElementById("finalPrice");
const cartEmpty = document.getElementById("modal-cart_empty");
const cartFull = document.getElementById("modal-cart_items");

let cont = 0;

add.addEventListener('click', e => {

    cont += 1;
    quantItem.innerHTML = cont;

});

remove.addEventListener('click', e => {

    if (cont >= 1) {

        cont -= 1;
        quantItem.innerHTML = cont;

    }

});

buttonCheckout.addEventListener('click', e => {

    if (cont == 0) {

        cartQuant.style.display = 'none';

    } else {
        
        cartEmpty.style.display = 'none';
        cartFull.style.display = 'block';
        cartQuant.style.display = 'block';
        cartQuant.innerHTML = cont;
        quantItem_modal.innerHTML = cont;
        finalPrice.innerHTML = '$' + (cont * 125.00) + '.00';

    }

});

/********************************************/

const modalCart = document.getElementById("modalCart");
const deleteAll = document.getElementById("deleteAll");

function openCartModal() {

    modalCart.classList.toggle("openModal");

};

deleteAll.addEventListener('click', e => {

    cartEmpty.style.display = 'grid';
    cartFull.style.display = 'none';
    quantItem_modal.innerHTML = '0';
    finalPrice.innerHTML = '$00.00';
    cartQuant.style.display = 'none';
    cont = 0;
    quantItem.innerHTML = cont;

});

/**************************************************/

const modalImage = document.getElementById("modalImage");
const imageProductModal = document.getElementById("imageModal");

function openImageModal(img) {

    imageProductModal.src = img.src;
    document.body.style.overflow = 'hidden'; 
    modalImage.style.display = 'grid';

};

function closeImageModal() {

    document.body.style.overflow = 'auto'; 
    modalImage.style.display = 'none';

};

/****************************************************/

const navMenu = document.getElementById("navMenu");
const divBody =document.querySelector(".body");

function openMenu() {

    navMenu.classList.add("activeNavMenu");
    document.body.style.overflow = "hidden";
    divBody.style.display = "block";

};

function closeMenu() {

    navMenu.classList.remove("activeNavMenu");
    document.body.style.overflow = "auto";
    divBody.style.display = "none";

};

/********************************************************/