import UsersModel from "../models/User.js";

export function LoginController(req, res) {
  res.render('login.twig',{title: 'Login to the Titanic Tool'})
}

export async function PostLoginController(req, res) {

  const docs = await UsersModel.findOne({
    name: req.body.name,
  })

  const { name, password } = req.body;

  if (name === docs.name && password === docs.password) {
    req.session.user = {
      isLogged: true,
    }

    res.redirect('/dashboard')

  } else {
    res.redirect('/login')
  }
}


