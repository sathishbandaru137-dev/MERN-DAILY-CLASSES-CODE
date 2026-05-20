const CollageSchema = new mongoose.Schema({
   name: {type:String, required:true},
   code: {type:String, unique: true, required:true},
   depertment: {type:Array, required:true},
   address: {type:String,required:true},
   url: {type:String, required:true,unique:true},
  },{timestamps:true})
  const collageModel = mongoose.model("Collage",CollageSchema);

  module.exports = collageModel;
  