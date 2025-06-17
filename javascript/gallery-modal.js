document.addEventListener('DOMContentLoaded', function () {
  const galleryImages = document.querySelectorAll('.gallery img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');

  galleryImages.forEach(img => {
    img.addEventListener('click', function () {
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      modal.classList.add('active');
    });
  });

  modalClose.addEventListener('click', function () {
    modal.classList.remove('active');
    modalImg.src = '';
    modalImg.alt = '';
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      modalImg.src = '';
      modalImg.alt = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modal.classList.remove('active');
      modalImg.src = '';
      modalImg.alt = '';
    }
  });
});
