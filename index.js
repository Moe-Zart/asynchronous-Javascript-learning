/*First look at asynchronous. Here, the start and end will print then the timeout after 5 seconds
console.log("Start");

setTimeout(() => console.log("We are in the timeout"), 5000);

console.log("End");
*/

console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the data");
    callback({ userEmail: email });
  }, 5000);
}
const user = loginUser('feshoisf@gmail.com', 123456, user => console.log(user));
console.log(user);

console.log("Finish");
//callback funcion that is passed in as a parameter that is run at a later time
