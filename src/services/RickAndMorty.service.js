import { API_RAM } from './../constants/Api.constants';

class RickAndMortyService {


    async getAllCharacters(){
        const response = await fetch(API_RAM.CHARACTERS());
        //INTERCERPTOR
        return response.json();    
    }

    async getCharacterById(id){
        const response = await fetch(API_RAM.CHARACTER_BY_ID(id));
        //INTERCERPTOR
        return response.json();    
    }

}

export default new RickAndMortyService();