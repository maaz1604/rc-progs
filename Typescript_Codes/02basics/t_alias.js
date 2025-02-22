function createuser(User) {
    return { firstname: "", email: "", isActive: false };
}
createuser({ firstname: "", email: "", isActive: false });
var myUser = {
    name: "Rakesh Kumar",
    email: "sjxcj@gmail.com",
    isPaid: true,
    _id: "flow456#56$$90*&65"
};
myUser.email = "thor45@gmail.com"; // this will allow to change the email.
// myUser._id=""  this will not allow to change the _id because _id is only readable not updatable.
