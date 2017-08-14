function QuoteController() {
	var quoSer = this
	var qs = new QuoteService()

	qs.getQuote(function (quote) {
		console.log('What is the quote', quote)

		var qotd = quote.quote
		var auth = quote.author

		var template = `
			<div id="qut">"${qotd}"</div>
			<div id="authr">~${auth}</div>
		`

		document.getElementById('quote').innerHTML = template

		$("#qut").hover(function () {
			$("#authr").css("display", "block");
		}, function () {
			$("#authr").css("display", "none");
		});
	})
}
