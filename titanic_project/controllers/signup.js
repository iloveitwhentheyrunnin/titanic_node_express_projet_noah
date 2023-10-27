import { UsersModel } from '../Models/User.js';


export function SignController(req, res) {
  res.render('signup.twig',{title: 'Create access'})
}

export async function SignUpController(req, res) {
  const { name, password } = req.body;

  const errors = [];

  if (!name || name.toString().trim() === '') errors.push(`Le champs "firstName" est requis.`);
  if (!password || password.toString().trim() === '') errors.push(`Le champs "password" est requis.`);

  if (errors.length > 0) {
    throw new Error(errors.join('<br>'));
  }

  const existingUser = await UsersModel.findOne({ name });

  if (existingUser !== null) {
    req.flash('error', 'You cannot use this name.');
    res.redirect('/signup');
  } else {
    try {
      const newUser = await UsersModel.createUser(name, password);
      req.flash('success', 'Account created! Now you can login');
      res.redirect('/login');
    } catch ({ message: errorMessage }) {
      return res.status(400).render('login.twig', { errorMessage, values: req.body });
    }
  }


}

