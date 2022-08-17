async function getResponse() {
	const response = await fetch(
		'https://thatsthespir.it/api',
		{
			method: 'GET'
		}
	);
	const data = await response.json(); 
    console.log(data);
}

getResponse();

