(function() {

	window.onscroll = function() {
		var logo = document.getElementsByTagName("h1")[0];
		var header = document.getElementsByTagName("header")[0];

		if (window.pageYOffset > 45 ) {
			header.className = "compressed";
			// logo.style.backgroundColor = "#ffffff";
		}
		else {
			header.className = "";
		}
	}

})();