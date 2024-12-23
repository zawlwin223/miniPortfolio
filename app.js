document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded')
  // Add any JavaScript functionality here
  document.getElementById('toggle-night-mode').addEventListener('click', () => {
    document.body.classList.toggle('night-mode')
  })
})
