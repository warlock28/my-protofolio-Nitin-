// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to animate skill bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
  });
}

// Function to animate counters
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const speed = 200; // Adjust the speed here
      const increment = Math.ceil(target / speed);

      const updateCount = () => {
          const count = +counter.innerText;
          if (count < target) {
              counter.innerText = Math.min(count + increment, target);
              setTimeout(updateCount, 10); // Speed of incrementing numbers
          }
      };

      updateCount();
  });
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Initialize flags to check if animations have occurred
let skillBarsAnimated = false;
let countersAnimated = false;

// Trigger animations when the "Skills" section is in the viewport
function handleScroll() {
  const skillsSection = document.querySelector('.skills-section');
  const countersSection = document.querySelector('.counters-section');

  if (isInViewport(skillsSection) && !skillBarsAnimated) {
      animateSkillBars(); // Animate skill bars when in viewport
      skillBarsAnimated = true; // Set flag to true to prevent re-animation
  }

  if (isInViewport(countersSection) && !countersAnimated) {
      animateCounters(); // Animate counters when in viewport
      countersAnimated = true; // Set flag to true to prevent re-animation
      window.removeEventListener('scroll', handleScroll); // Optionally remove event listener after animation
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

  
  // Trigger handleScroll function on page load and scroll event
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll); // Also check on page load
  // Detect if the section is in the viewport and add animation class
function revealSections() {
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function(section) {
    var position = section.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      section.classList.add('content-visible');
    }
  });
}

window.addEventListener('scroll', revealSections);

