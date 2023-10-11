import {LikeRepository,TweetRepository} from '../repository/index.js';

class LikeService {
    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){
        if(modelType=='Tweet'){
            var likeable = await this.tweetRepository.find(modelId);
        }else if(modelType=='Comment'){

        }else{
            throw new Error('no any such model type');
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        });
        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.save();
            var isAdded = false;
        }
        else{
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}

export default LikeService;