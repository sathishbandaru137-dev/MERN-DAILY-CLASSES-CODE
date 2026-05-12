function display() {
  console.log("This is display function");
}
//test to return userDetails
const test = () => {
  const userDetails = {
    name: "satish",
    email: "admin@gmail.com",
    phone: 9110577317,
  };
  return userDetails;
};
const name="Ravi";
module.exports={display,test, name} //exporting variables and functions