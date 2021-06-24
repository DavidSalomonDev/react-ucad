// ASYNC -- AWAIT

// Promise
/* 
const getImagenPromesa = () =>{
	const promesa = new Promise((resolve, reject) =>{
 		resolve('https://google.com')
 	})
 	return promesa
}
*/ 

// const getImagenPromesa = () => new Promise (resolve => resolve('https://google.com'))

// getImagenPromesa().then(console.log)

// Utilizando ASYNC
//ASYNC convierte la función en una promesa

// const getImagen = async () =>{
// 	return 'https://googleasync.com'
// }
// console.log(getImagen())

const getImagen = async() =>{
	
	const apiKey = 'NJ9tSPN3FIDxmPY3DGf2MdZgjTz7wlKS'
	const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
	
	const {data} = await peticion.json()
	const {url} = data.images.original

	const img = document.createElement('img')
	img.src = url

	document.body.append(img)

}

getImagen()


