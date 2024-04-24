import UserService from "../service/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    return res.status(200).json({
        success:true,
        message:"User Signed Up Successfully",
        error:"",
        data:response,
    })

  } catch (error) {
        return res.status(500).json({
            success:false,
            message:"SOmething went wrong",
            data:"",
            err:error
        })
  }
};
