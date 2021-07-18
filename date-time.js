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