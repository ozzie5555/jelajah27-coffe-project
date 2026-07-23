export function initMenuTabs() {
  const tabs = document.querySelectorAll("[data-menu-tab]");
  const panels = document.querySelectorAll("[data-menu-panel]");

  function selectMenu(category) {
    tabs.forEach((tab) => {
      const selected = tab.dataset.menuTab === category;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });

    panels.forEach((panel) => {
      const selected = panel.dataset.menuPanel === category;
      panel.classList.toggle("active", selected);
      panel.hidden = !selected;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectMenu(tab.dataset.menuTab));

    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      selectMenu(tabs[nextIndex].dataset.menuTab);
    });
  });
}
