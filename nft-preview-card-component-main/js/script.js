const mainImage = document.getElementById('mainImage');
const imageHover = document.querySelector('.img-hover');
const imageView = document.querySelector('.img-hover_image');

mainImage.addEventListener('mouseover', function() {

    imageHover.style.display = 'block';
    imageView.style.display = 'block';

});

mainImage.addEventListener('mouseout', function() {

    imageHover.style.display = 'none';
    imageView.style.display = 'none';
    
});

const modal = document.getElementById('modal');
const imageModal = document.getElementById('imageModal');

function openModalImage(img) {

    modal.style.display = 'flex';
    imageModal.src = img.src;

}

function closeModalImage() {

    modal.style.display = 'none';

}