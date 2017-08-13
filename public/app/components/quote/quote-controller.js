function QuoteController() {
	var quoSer = this
	var qs = new QuoteService()

	qs.getQuote(function (quote) {
		console.log('What is the quote', quote)

		var qotd = quote.quote
		var auth = quote.author

		var template = `
			<div class="qut">"${qotd}"</div>
			<div class="authr">~${auth}</div>
		`

		document.getElementById('quote').innerHTML = template
	})
}
