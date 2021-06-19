import {
	heroes
} from './data'

const getHeroesById = (id) => {
	return heroes.find((heroe) => heroe.id === id);
}

export default getHeroesById