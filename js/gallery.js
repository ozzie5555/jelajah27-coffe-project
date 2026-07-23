export function initGalleryFilters() {
  const filterButtons = document.querySelectorAll(".filters button");
  const galleryItems = document.querySelectorAll(".gallery-item");
  
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      galleryItems.forEach((item) => {
        item.classList.toggle(
          "hidden",
          filter !== "all" && item.dataset.category !== filter
        );
      });
    });
  });
}
