const apiKey = 'NJ9tSPN3FIDxmPY3DGf2MdZgjTz7wlKS'
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

//Fetch API
/*
peticion
	.then((resp) =>{
		console.log(resp)
	})
	.catch(console.warn())
*/

peticion
	.then(res => res.json())
	.then(({data}) =>{
		// console.log(data.images.original.url)
		const {url} = data.images.original
		const img = document.createElement('img')
		img.src = url
		document.body.append(img)
	})
	.catch(console.warn)
