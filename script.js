document.addEventListener("DOMContentLoaded", function() {
    // Disable right-click
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    // Disable text selection
    document.addEventListener("selectstart", function(event) {
        event.preventDefault();
    });

    // Disable copying
    document.addEventListener("copy", function(event) {
        event.preventDefault();
    });
});
