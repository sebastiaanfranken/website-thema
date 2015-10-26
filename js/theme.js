window.addEventListener("load", function() {

	var header = document.querySelector("#site-header"),
		headerHeight = window.getComputedStyle(header).height.replace("px", ""),
		body = document.querySelector("body"),
		previousTop = 0;

	if(body.classList.contains("page-home")) {
		if(window.scrollY > headerHeight && !header.classList.contains("detached")) {
			header.classList.add("detached");
		}

		window.addEventListener("scroll", function(event) {

			var currentTop = window.scrollY;

			if(currentTop < previousTop && currentTop < headerHeight && header.classList.contains("detached")) {
				header.classList.remove("detached");
			}

			if(currentTop > headerHeight && !header.classList.contains("detached")) {
				header.classList.add("detached");
			}

			previousTop = currentTop;

		}, false);
	}

	

}, false);
