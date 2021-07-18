// C:\development\new-tab-page\index.html

let getCurrentDateTime = () => { 
	return new Date().toLocaleString()
	};

	window.setInterval(() => {
	let currentDateTime = getCurrentDateTime();
	let timeElem =  document.getElementById("datetime");
	timeElem.innerHTML = currentDateTime;
	}, 1000
	);

	let editArea = document.getElementById("editarea");
	editArea.addEventListener(
		'click',
		() => { 
			let placeHolderText = document.querySelector(".placeholder-text"); 
			placeHolderText.style.display = 'none';
		}
	);


	

	 async function getHistoricalFact() {
		 const historicalFact = await fetch('http://api.hiztory.org/date/event/09/24/api.xml')
		 .catch(() => {
			console.log('API Error');
		  });
		if(historicalFact) {
			window.alert("Historical fact returned");
			console.log("---------------");
			console.log(historicalFact);
			console.log("---------------");
		}
	

	 }