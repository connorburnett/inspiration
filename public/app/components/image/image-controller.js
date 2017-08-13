function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	function drawImages(res) {

		console.log(res)
		document.body.style.backgroundImage = `url(${res.url})`
	}

	function getImage() {
		imageService.getImage(drawImages)
	}
	getImage()
}