(function() {

	// I'm saying to the browser:
	// When the user scrolls in the window,
	// do the following...
	window.onscroll = function() {

		// I create a variable called 'logo' and make it the first h1 element on the page
		var logo = document.getElementsByTagName("h1")[0];

		// I create a variable called 'header' and make it the first header element on the page
		var header = document.getElementsByTagName("header")[0];


		// I tell the browser that if the scolling get over 45 (px) do something
		if (window.pageYOffset > 45 ) {
			// I tell the browser to make the class of header equal to 'compressed'
			header.className = "compressed";
		} // if it's not over 45, do something else:
		else {
			// I tell the browser to make the class of header equal to '' (nothing)
			header.className = "";
		}
	}

})();


// As I didn't need to use logo, I could actually remove that variable. 
// Delete line 9 and check if it still works, then commit the change!