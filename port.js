function handleSubmit() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if(name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
    } else {
        alert("Please fill all fields.");
        return false;
    }
    return false; // prevent actual form submission
}
const words = ["STUDENT ", "WEB DEVELOPER ", "CONTENT CREATOR "];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const speed = 80;
  const element = document.getElementById("type-text");

  function typeEffect() {
    currentWord = words[i];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, j--);
    } else {
      element.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pause before deleting
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
  }

  typeEffect();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skills = document.querySelectorAll('.skill-level');
        skills.forEach(skill => {
          skill.classList.add('active');
        });
        observer.disconnect(); // Run only once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector("#skills"));