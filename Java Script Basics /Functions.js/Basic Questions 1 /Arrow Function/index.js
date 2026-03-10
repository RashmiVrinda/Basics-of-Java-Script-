// const user = {

//     username: "Rashmi Das",
//     price: 999,
//     welcomeMessage: function(){

//         console.log(`${this.username}, welcome to website`);
     
//     }
// }
// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();
// console.log(this)

//this only works with objects not functions 
function chai() {
    let username = "Rashmi"
    console.log(this.username);
}

chai()


