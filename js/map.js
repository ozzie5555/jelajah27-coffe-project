export async function initTravelMap() {
  const container = document.querySelector(".world-map-container");
  const visitMap = document.querySelector(".visit-map");
  const mapTooltip = document.querySelector(".map-tooltip");

  if (!container || !visitMap || !mapTooltip) return;

  try {
    const response = await fetch(container.dataset.mapSrc);
    if (!response.ok) throw new Error("Unable to load the world map");
    container.innerHTML = await response.text();
  } catch (error) {
    container.innerHTML = "<p class=\"map-error\">Travel map could not be loaded.</p>";
    console.error(error);
    return;
  }

  const mapObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("map-visible");
        mapObserver.unobserve(entry.target);
      }
    },
    { threshold: 0.28 }
  );

  const mapBounds = visitMap.getBoundingClientRect();
  const mapIsAlreadyVisible =
    mapBounds.top < window.innerHeight && mapBounds.bottom > 0;

  if (mapIsAlreadyVisible) {
    visitMap.classList.add("map-visible");
  } else {
    mapObserver.observe(visitMap);
  }

  const journeyPoints = container.querySelectorAll(".journey-point");

  function showJourneyStop(point) {
    journeyPoints.forEach((item) => item.classList.toggle("active", item === point));
    mapTooltip.querySelector("small").textContent =
      "Stop " + point.dataset.order + " / 27";
    mapTooltip.querySelector("strong").textContent = point.dataset.country;
    mapTooltip.querySelector("span").textContent = point.dataset.city;
  }

  journeyPoints.forEach((point) => {
    point.addEventListener("pointerenter", () => showJourneyStop(point));
    point.addEventListener("focus", () => showJourneyStop(point));
    point.addEventListener("click", () => showJourneyStop(point));
  });
}
