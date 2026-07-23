export function initNewsletter() {
  const newsletterForm = document.querySelector("#newsletter-form");
  const newsletterMessage = document.querySelector("#newsletter-message");
  
  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterMessage.textContent = "Thank you — your next story is on its way.";
    newsletterMessage.classList.add("success");
    newsletterForm.reset();
  });
  
  document.querySelector("#year").textContent = new Date().getFullYear();
}
