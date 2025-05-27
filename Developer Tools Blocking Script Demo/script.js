// Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+U
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        alert("Developer tools detected! Closing the page.");
        redirectToBlank();
    }
});

function redirectToBlank() {
    window.location.replace("about:blank");
}

(function detectDevTools() {
    let devtoolsOpen = false;

    function checkWindowSize() {
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            devtoolsOpen = true;
        }
    }

    function checkConsoleBehavior() {
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function () {
                devtoolsOpen = true;
                alert("Developer tools detected! Closing the page.");
                redirectToBlank();
            }
        });
        console.log(element);
    }

    function monitorDevTools() {
        devtoolsOpen = false;
        checkWindowSize();
        if (devtoolsOpen) {
            alert("Developer tools detected! Closing the page.");
            redirectToBlank();
        } else {
            checkConsoleBehavior();
        }
    }

    setInterval(monitorDevTools, 100);
})();
