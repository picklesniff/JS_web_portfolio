function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};



function toggleTimeline() {
  const popup = document.getElementById("timeline-popup");
  const overlay = document.getElementById("popup-overlay");
  const dropdown = document.querySelector(".dropdown-toggle");

  if (popup.classList.contains("open")) {
    popup.classList.remove("open");
    overlay.classList.remove("open");
    dropdown.innerHTML = "More about my professional &#9662;";
  } else {
    popup.classList.add("open");
    overlay.classList.add("open");
    dropdown.innerHTML = "Less about my professional path &#9650;";
  }
}

// ✅ Close pop-up when clicking outside the box
document.getElementById("popup-overlay").addEventListener("click", function (event) {
  if (event.target === this) {
    toggleTimeline();
  }
});