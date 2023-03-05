const noContext = document.getElementById('noMenu');

noContext.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// SHORTCUT DISABLE START ======================================================================== //
document.addEventListener("keydown", function(event) {
	// Prevent default action for F5, Ctrl+R, and Ctrl+F5
	if (event.keyCode === 116 || (event.ctrlKey && event.keyCode === 82)) {
		event.preventDefault();
	}
	if (event.ctrlKey && event.keyCode === 116) {
		event.preventDefault();
		location.reload(true);
	}
	// Prevent default action for Ctrl+Shift+I
	if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
		event.preventDefault();
	}
});
// ========================================================================== SHORTCUT DISABLE END //