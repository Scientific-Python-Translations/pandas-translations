window.addEventListener("DOMContentLoaded", function() {
  var BASE_URL = location.protocol + "//" + location.hostname + ":" + location.port
  var CURRENT_LANGUAGE = document.documentElement.lang;
  var PATHNAME = location.pathname.replace('/' + CURRENT_LANGUAGE + '/', '')
  var languages = JSON.parse(document.getElementById("languages").getAttribute('data-lang').replace(/'/g, '"'));
  console.log(BASE_URL, CURRENT_LANGUAGE, PATHNAME);
  const language_names = {
        'en': 'English',
        'es': 'Español',
        'fr': 'Français',
        'pt': 'Português'
      }

  // Create dropdown menu
  function makeDropdown(options) {
    var dropdown = document.createElement("li");
    dropdown.classList.add("nav-item");
    dropdown.classList.add("dropdown");

    var link = document.createElement("a");
    link.classList.add("nav-link");
    link.classList.add("dropdown-toggle");
    link.setAttribute("data-bs-toggle", "dropdown");
    link.setAttribute("href", "#");
    link.setAttribute("role", "button");
    link.setAttribute("aria-haspopup", "true");
    link.setAttribute("aria-expanded", "false");
    link.textContent = language_names[CURRENT_LANGUAGE];

    var dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");

    options.forEach(function(i) {
      var dropdownItem = document.createElement("a");
      dropdownItem.classList.add("dropdown-item");
      dropdownItem.textContent = language_names[i] || i.toUpperCase();
      dropdownItem.setAttribute("href", "#");
      dropdownItem.addEventListener("click", function() {
        if (i == 'en') {
          URL_LANGUAGE = '/';
        } else {
          URL_LANGUAGE = '/' + i;
        }
        var PATHNAME = location.pathname.replace('/' + CURRENT_LANGUAGE + '/', '')
        var newUrl = BASE_URL + URL_LANGUAGE + PATHNAME
        window.location.href = newUrl;
      });
      dropdownMenu.appendChild(dropdownItem);
    });

    dropdown.appendChild(link);
    dropdown.appendChild(dropdownMenu);
    return dropdown;
  }

  var container = document.getElementById("language-switcher-container");
  if (container) {
    var dropdown = makeDropdown(languages);
    container.appendChild(dropdown);
  }
});
