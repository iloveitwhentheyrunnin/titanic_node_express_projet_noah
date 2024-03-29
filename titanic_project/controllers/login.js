import { UsersModel } from '../Models/User.js';
import { sha256 } from '../utils/utils.js';

export function LoginController(req, res) {
  res.render('login.twig',{title: 'Login to the Titanic Tool'})
}

export async function PostLoginController(req, res) {

  const { name, password } = req.body;

  const user = await UsersModel.findOne({ name, password: sha256(password) });

  if (user) {
    req.flash('success', 'Connection successfull!');
    req.session.user = {
      isLogged: true,
    }

    res.redirect('/dashboard')

  } else {
    req.flash('error', 'Connection failed! Invalid credentials');
    res.redirect('/login')
  }
}
