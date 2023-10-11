import Like from '../models/like.js';
import CrudRepository from './crud-repo.js';

class Likerepository extends CrudRepository{
    constrctor(){
        super(Like);
    }
}

export default Likerepository;