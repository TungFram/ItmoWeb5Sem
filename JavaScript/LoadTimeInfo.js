(
    function () {
        window.addEventListener("load", DOMPageLoadingTime);
    }
)();

function DOMPageLoadingTime() {
    let htmlElement = document.getElementById("PageLoadingTime");

    const [performanceNavigationTiming] =
        window.performance.getEntriesByType('navigation') // Returns 1-element array.
    const pageLoadDuration =
        Math.round(
            performanceNavigationTiming.loadEventStart -
            performanceNavigationTiming.startTime
        ) / 1000;

    console.log(performanceNavigationTiming);
    console.log('Page was loaded in ' + performanceNavigationTiming.loadEventStart);
    const text = `Page was loaded in ${pageLoadDuration} seconds.`;

    htmlElement.innerHTML = text;
}