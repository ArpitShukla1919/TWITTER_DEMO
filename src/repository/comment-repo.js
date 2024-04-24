import CrudRepository from "./crud-repo.js";
import Comment from "../models/comment.js";

class CommentRepository extends CrudRepository{
        constructor(){
            super(Comment)
        }
}

export default CommentRepository;