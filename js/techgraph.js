window.addEventListener("load", function() {
	var gh = new Github({
		token: GithubConfig.token,
		auth: "oauth"
	});

	var repo = gh.getRepo('sebastiaanfranken', GithubConfig.repo);

	repo.show(function(err, data) {
		var request = new XMLHttpRequest();
		request.open("GET", data.languages_url);

		request.onreadystatechange = function() {
			if(this.readyState === 4 && this.status == 200) {

				var response = JSON.parse(this.responseText);
				var data = [];

				if(Object.keys(response).length > 0) {
					for(var label in response) {
						data.push({
							value: response[label],
							label: label,
							color: window.ChartColors[label]
						});
					}

					document.querySelector('#site-content aside > div.techgraph').style.display = "block";
					var canvas = document.querySelector('#site-content aside > div.techgraph canvas').getContext('2d');
					var chart = new Chart(canvas).Doughnut(data);
				}
			}
		};

		request.send();
	});
});
