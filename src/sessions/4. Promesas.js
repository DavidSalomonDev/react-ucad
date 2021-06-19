import getHeroesById from './3. Objetos'

const getHeroesByIdAsync = id =>{
	const promesa = new Promise((resolve, reject) =>{
		setTimeout(() =>{
			const heroe = getHeroesById(id)
			
			if(heroe){
				resolve(heroe)
			}else{
				reject('No se encontro el heroe')
			}

		}, 2000)
	})
	return promesa
}

export default getHeroesByIdAsync