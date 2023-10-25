import UsersModel from "../models/User.js";

export async function PostLoginController(req, res) {

  const docs = await UsersModel.find({ name : req.body.name });
  console.log(docs);

  if(docs == null){
    res.redirect('/login')
  } else {
    res.redirect('/dashboard')
  }
}


