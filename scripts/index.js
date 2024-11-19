document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(
    ".nav-item.dropdown .dropdown-toggle"
  );
  const dropdownMenu = document.querySelector(
    ".nav-item.dropdown .dropdown-menu"
  );

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", () => {
      const isExpanded =
        dropdownToggle.getAttribute("aria-expanded") === "true";
      dropdownToggle.setAttribute("aria-expanded", !isExpanded);
      dropdownMenu.classList.toggle("show", !isExpanded);
    });

    document.addEventListener("click", (event) => {
      if (
        !dropdownToggle.contains(event.target) &&
        !dropdownMenu.contains(event.target)
      ) {
        dropdownToggle.setAttribute("aria-expanded", "false");
        dropdownMenu.classList.remove("show");
      }
    });
  }
  document.querySelector(".burger").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");

    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  });
});
