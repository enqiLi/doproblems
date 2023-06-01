document.write('<div class="topnav">\
<a class="nav-link" class="active" href="index.html">Home</a>\
<a class="nav-link" href="LA.html">Linear Algebra</a>\
<a class="nav-link" href="algebra.html">Algebra</a>\
<a class="nav-link" href="CA.html">Complex Analysis</a>\
<a class="nav-link" href="topology.html">Topology</a>\
</div>\
');
document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});