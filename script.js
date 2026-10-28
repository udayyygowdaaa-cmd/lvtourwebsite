document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // 2. Interactive Calculator Logic (Packages Page)
  const calcDestination = document.getElementById("calcDestination");
  const travelersInput = document.getElementById("travelers");
  const totalCostDisplay = document.getElementById("totalCost");

  function calculateTotal() {
    if (calcDestination && travelersInput && totalCostDisplay) {
      const pricePerPerson = parseFloat(calcDestination.value);
      const count = parseInt(travelersInput.value) || 1;
      const total = pricePerPerson * count;
      totalCostDisplay.textContent = `$${total.toLocaleString()}`;
    }
  }

  if (calcDestination && travelersInput) {
    calcDestination.addEventListener("change", calculateTotal);
    travelersInput.addEventListener("input", calculateTotal);
  }

  // 3. Contact Form Submission (Contact Page)
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Simple feedback message simulation
      formFeedback.textContent = "Thank you! Your message has been sent successfully. We will contact you shortly.";
      contactForm.reset();

      setTimeout(() => {
        formFeedback.textContent = "";
      }, 5000);
    });
  }
});
