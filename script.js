// ========== Contact Form Submission ========== //
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector('form[name="submit-to-google-sheet"]');
  const msgSpan = document.getElementById('msg');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = {
        name: formData.get("Name"),
        email: formData.get("Email"),
        message: formData.get("Message"),
      };

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycby2Y83Doi1pCS8qUVgP2bKZGaJPd99GImpm3moFimlqbMsyBVHsV_LAfu1MnKnLfAss/exec", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          msgSpan.textContent = "Message sent successfully!";
          msgSpan.style.color = "#61b752";
          contactForm.reset();
        } else {
          msgSpan.textContent = "Error sending message.";
          msgSpan.style.color = "red";
        }
      } catch (err) {
        console.error(err);
        msgSpan.textContent = "Something went wrong.";
        msgSpan.style.color = "red";
      }

      setTimeout(() => {
        msgSpan.textContent = "";
      }, 5000);
    });
  }
});

// ========== About Section Tab Switching ========== //
function openTab(tabName) {
  const tabLinks = document.querySelectorAll('.tab-links');
  const tabContents = document.querySelectorAll('.tab-contents');

  tabLinks.forEach(link => link.classList.remove('active-link'));
  tabContents.forEach(content => content.classList.remove('active-tab'));

  const activeLink = document.querySelector(`.tab-links[onclick="openTab('${tabName}')"]`);
  const activeTab = document.getElementById(tabName);

  if (activeLink) activeLink.classList.add('active-link');
  if (activeTab) activeTab.classList.add('active-tab');
}



// ========== Mobile Navigation Toggle ========== //
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// Auto-close on outside click or scroll
window.addEventListener('click', function (e) {
  const navLinks = document.getElementById("nav-links");
  const menuIcon = document.getElementById("menu-icon");

  if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
    navLinks.classList.remove("show");
  }
});

window.addEventListener('scroll', function () {
  document.getElementById("nav-links").classList.remove("show");
});





// Mobile dropdown arrow toggle
document.querySelectorAll('.about-mobile-dropdowns details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    const arrow = detail.querySelector('.arrow');
    if (detail.open) {
      arrow.innerHTML = '&#9652;'; // ▲
    } else {
      arrow.innerHTML = '&#9662;'; // ▼
    }
  });
});






document.querySelectorAll('.about-mobile-dropdowns details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    const arrow = detail.querySelector('.arrow');
    if (arrow) {
      arrow.innerHTML = detail.open ? '&#9652;' : '&#9662;'; // ▲ when open, ▼ when closed
    }
  });
});
