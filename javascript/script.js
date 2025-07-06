document.addEventListener('DOMContentLoaded', function () {
  // Back to Top button logic
  const backToTop = document.getElementById('backToTop');
  if (backToTop) { // Check if button exists on the page
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact Info De-obfuscation
  const emailUser = 'info.jazhieldesigns';
  const emailDomain = 'gmail.com';
  const fullEmail = `${emailUser}@${emailDomain}`;

  // Footer Email Link (present on all pages)
  const footerEmailLink = document.getElementById('footer-email');
  if (footerEmailLink) {
    footerEmailLink.href = `mailto:${fullEmail}`;
    footerEmailLink.textContent = fullEmail;
  }

  // Privacy Policy Page specific email links
  const privacyEmail1 = document.getElementById('privacy-email-1');
  const privacyEmail2 = document.getElementById('privacy-email-2');
  if (privacyEmail1) {
    privacyEmail1.href = `mailto:${fullEmail}`;
    privacyEmail1.textContent = fullEmail;
  }
  if (privacyEmail2) {
    privacyEmail2.href = `mailto:${fullEmail}`;
    privacyEmail2.textContent = fullEmail;
  }

  // Contact Page specific email and phone links
  const contactEmailLink = document.getElementById('contact-email');
  if (contactEmailLink) {
    contactEmailLink.href = `mailto:${fullEmail}`;
    contactEmailLink.textContent = fullEmail;
  }

  const contactPhoneLink = document.getElementById('contact-phone');
  if (contactPhoneLink) {
    const phoneParts = ['704', '561', '1937'];
    const fullPhone = phoneParts.join('');
    const formattedPhone = phoneParts.join(' ');
    contactPhoneLink.href = `tel:${fullPhone}`;
    contactPhoneLink.textContent = formattedPhone;
  }

  // Gallery Modal Logic (only for examples.html)
  const galleryImages = document.querySelectorAll('.gallery img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');
  const modalDesc = document.getElementById('modalDesc'); // New: for description

  if (galleryImages.length > 0 && modal && modalImg && modalClose) { // Check if gallery elements exist
    galleryImages.forEach(img => {
      img.addEventListener('click', function () {
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        if (modalDesc) { // If description element exists
          modalDesc.textContent = this.getAttribute('data-description') || '';
        }
        modal.classList.add('active');
      });
    });

    modalClose.addEventListener('click', function () {
      modal.classList.remove('active');
      modalImg.src = '';
      modalImg.alt = '';
      if (modalDesc) {
        modalDesc.textContent = ''; // Clear description on modal close
      }
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        modalImg.src = '';
        modalImg.alt = '';
        if (modalDesc) {
          modalDesc.textContent = '';
        }
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        modal.classList.remove('active');
        modalImg.src = '';
        modalImg.alt = '';
        if (modalDesc) {
          modalDesc.textContent = '';
        }
      }
    });
  }
});