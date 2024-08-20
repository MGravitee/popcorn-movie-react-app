export default function filterActive() {
  const links = document.querySelectorAll(".underline-slide");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Prevent the default anchor behavior
      event.preventDefault();

      // Remove the active class from all links
      links.forEach((link) => {
        link.classList.remove("active");
      });

      // Add the active class to the clicked link
      link.classList.add("active");
    });
  });
}
