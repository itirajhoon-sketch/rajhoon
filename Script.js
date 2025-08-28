// Toggle visibility of an element by id
function toggleVisibility(id) {
  const element = document.getElementById(id);
  if (!element) return;
  element.style.display = element.style.display === "none" ? "block" : "none";
}
