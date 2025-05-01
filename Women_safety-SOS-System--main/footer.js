document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load footer.");
      return response.text();
    })
    .then(data => {
      document.getElementById("footer").innerHTML = data;
      const yearElem = document.getElementById("current-year");
      if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
      }
    })
    .catch(error => {
      console.error("Error loading footer:", error);
    });
});
