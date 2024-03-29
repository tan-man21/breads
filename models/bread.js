const mongoose = require('mongoose')
const { Schema } = mongoose
const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: {type: String, default: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}!`
}
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread