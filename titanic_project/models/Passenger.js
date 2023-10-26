import mongoose from 'mongoose'

const passengerSchema = new mongoose.Schema({
  PassengerId: { type: Number, required: true},
  Survived: { type: Number, required: true},
  Pclass: { type: Number, required: true},
  Name: { type: String, required: true },
  Sex: {type: String, required: true},
  Age: { type: Number, required: true},
  SibSp: { type: Number, required: true},
  Parch: { type: Number, required: true},
  Ticket: { type: Number, required: true},
  Fare: { type: Number, required: true},
  Cabin: { type: String, required: true},
  Embarkend: { type: String, required: true}

});


const collectionName = 'passengers'
const PassengersModel = mongoose.model('Passengers', passengerSchema, collectionName)

export default PassengersModel