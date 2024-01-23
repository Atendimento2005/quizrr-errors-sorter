function sortAll() {
	let cardsContainers = document.querySelectorAll(".row.g-3");

	cardsContainers.forEach((cardsContainer) => {
		//Expand the chapter list
		cardsContainer.lastChild.firstChild.click();

		let data = Array.from(cardsContainer.children).sort((a, b) => {
			// Extract unattempted and mistakes
			let valueb = Array.from(b.querySelectorAll(".sc-gKXOVf.leoCAQ")).map(
				(elem) => Number(elem.innerText.replace(/\D/g, ""))
			);
			let valuea = Array.from(a.querySelectorAll(".sc-gKXOVf.leoCAQ")).map(
				(elem) => Number(elem.innerText.replace(/\D/g, ""))
			);

			mistakesa = valuea[0];
			mistakesb = valueb[0];
			unattempteda = valuea[1];
			unattemptedb = valueb[1];

			if (mistakesa !== mistakesb) {
				return mistakesa < mistakesb;
			}

			return unattempteda < unattemptedb;
		});

		cardsContainer.innerHTML = "";

		data.forEach((elem) => {
			cardsContainer.appendChild(elem);
		});
	});

	console.log("Executed!");
}

browser.runtime.onMessage.addListener((message) => {
	console.log("Starting...");
	sortAll();
});
