document.addEventListener("DOMContentLoaded", () => {
  const reservationForm = document.getElementById("reservation-form");
  const contactForm = document.getElementById("contact-form");

  reservationForm.addEventListener("submit", () => {
    alert("Reservation request sent! We'll get back to you soon.");
  });

  contactForm.addEventListener("submit", () => {
    alert("Message sent! We'll contact you shortly.");
  });

  // Handle Order Buttons
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dish = button.dataset.item;
      const contactSection = document.getElementById("contact");
      const messageBox = document.querySelector("#contact-form textarea");
      messageBox.value = `I'd like to order: ${dish}`;
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});




