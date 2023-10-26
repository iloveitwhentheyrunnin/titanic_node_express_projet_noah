import PassengersModel from "../models/Passenger.js";

export function ResearchController(req, res) {
  res.render("research.twig");
}

export async function PostResearchController(req, res) {
  //get datas from form
  const sex = req.body.sex;
  const age = req.body.age;
  const pclass = req.body.pclass;

  const docs = await PassengersModel.find({
    $and: [
      {Sex: sex,},{Age: age,},{Pclass: pclass,},
    ],
  });

  if(docs != null){
     res.render('research.twig',{docs})
  } else {
     res.redirect('/dashboard');
  }

  
}
