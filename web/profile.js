// web/profile.js  (added for review)
// Renders a user profile name into the page.
function renderProfile(el, name) {
  // Vulnerable: assigns untrusted input to innerHTML.
  // Example exploit value for name:
  //   <img src=x onerror="window.__XSS_CODE_EXCERPT=1;alert(document.domain)">
  el.innerHTML = "<div class='greeting'>Welcome " + name + "</div>";
}
module.exports = { renderProfile };
