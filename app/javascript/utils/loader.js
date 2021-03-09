//hide loader on DOM loaded
document.addEventListener("turbolinks:load", () => {
  if(window.isLoading) return;

  document.getElementById('loader').style.display = 'none';
})
