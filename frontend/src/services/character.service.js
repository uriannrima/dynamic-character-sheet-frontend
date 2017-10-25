import CharacterModule from 'Modules/character.module';
import AbstractService from './abstract.service';

class CharacterService extends AbstractService {
    constructor() {
        super({
            model: CharacterModule.Character,
            url: '/character'
        });
    }
}

export default new CharacterService();
