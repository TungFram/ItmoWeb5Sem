(function () {
    document.addEventListener("DOMContentLoaded", domLoadTime);
})();

function domLoadTime() {
    window.addEventListener("load", loadTime);
    var time = new Date().getTime();
    const h6 = document.querySelector("h6");
    function loadTime() {
        h6.innerHTML = new Date().getTime() - time;
    }
}