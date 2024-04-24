import { UserRepository } from "../repository/index.js";

class UserService{

    constructor(){
        this.userRepository = new UserRepository;
    }

    async signup(data){

        try {
            const user = this.userRepository.create(data);
        return user;
        } catch (error) {
            console.log(error);
            throw error
        }
        

    }

}


export default UserService