/* Add a nav bar to the page */
function generateNavBar(prevHref, nextHref) {
    // HTML for the nav bar, including the proper links to previous and next page
    var prevText = prevHref ? "&#8249;" : "";
    var nextText = nextHref ? "&#8250;" : "";
    var part1 = 
`<p>
    <a href="part1.html">&#8544;. Silberman</a>
</p>
<span>
    <a href="chapter1.html">1</a>
    <a href="chapter2.html">2</a>
    <a href="chapter3.html">3</a>
    <a href="chapter4.html">4</a>
</span>
`;
    var part2 = 
`<p>
    <a href="part2.html">&#8545;. Reintegration</a>
</p>
<span>
    <a href="chapter5.html">1</a>
    <a href="chapter6.html">2</a>
    <a href="chapter7.html">3</a>
</span>
`;

    var part3 = 
`<p>
    <a href="part3.html">&#8546;. Dissemination</a>
</p>
<span>
    <a href="chapter8.html">1</a>
    <a href="chapter9.html">2</a>
    <a href="chapter10.html">3</a>
    <a href="chapter11.html">4</a>
    <a href="chapter12.html">5</a>
</span>
`;

    var navHtml = 
`<div class="bar">
    <div class="menu-content">
        <div class="menu-top">
            <div class="home">
                <a href="index.html">THE MACHINE</a>
            </div>
        </div>
        <div class="menu-body">
            ${part1}
            ${part2}
            ${part3}
        </div>
        <div class="menu-settings">
            <button id="dark-mode-button" onclick="toggleDarkMode()">Dark Mode</button>
        </div>
    </div>
    <div class="bar-content">
        <a class="prev" href="${prevHref}">${prevText}</a>
        <span class="menu-toggle" onclick="openMenu()">&#9660;</span>
        <a class="next" href="${nextHref}">${nextText}</a>
    </div>
</div>`;

    return navHtml;
}

/* Add page controls to the page */
function generatePageControls(prevHref, nextHref) {
    // HTML for the page controls, including the proper links to previous and next page
    var prevText = prevHref ? "&#8249;" : "";
    var nextText = nextHref ? "&#8250;" : "";

    var pageControlsHtml = `
<div class="page-controls">
    <a class="prev" href="${prevHref}">${prevText}</a>
    <a class="next" href="${nextHref}">${nextText}</a>
</div>`;

    return pageControlsHtml;
}

// Open the navigation menu
function openMenu() {
    barMenuToggle.classList.add("open");
    bar.classList.add("show-menu");
    barMenuToggle.onclick = closeMenu;
}

// Close the navigation menu
function closeMenu() {
    barMenuToggle.classList.remove("open");
    bar.classList.remove("show-menu");
    barMenuToggle.onclick = openMenu;
}

// Get the proper links that should appear in the page controls
var prevHref = document.currentScript.getAttribute("prev-href");
var nextHref = document.currentScript.getAttribute("next-href");

// Get the HTML for the bar, and put it at the top of the body
var barHtml = generateNavBar(prevHref, nextHref);
document.body.innerHTML = barHtml + document.body.innerHTML;

// Add page controls to the text content container
var textContentContainer = document.querySelector(".text-content");
textContentContainer.innerHTML += generatePageControls(prevHref, nextHref);

// Nav menu controls - HTML elements stored in JS
var bar = document.querySelector(".bar");
var barMenuToggle = document.querySelector(".bar .menu-toggle");

// Set initial scroll top
var lastScrollTop = 0;

// Add a listener for scroll events
window.addEventListener("scroll", function() {
    // Get the current scroll location
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop){
        // if we are scrolling down, hide the bar
        bar.classList.add("hide");
        closeMenu();
    } else {
        // if we are scrolling up, show the bar
        bar.classList.remove("hide");
    }
    
    // reset the scroll location
    lastScrollTop = st <= 0 ? 0 : st;
}, false);