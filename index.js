/*First look at asynchronous. Here, the start and end will print then the timeout after 5 seconds
console.log("Start");

setTimeout(() => console.log("We are in the timeout"), 5000);

console.log("End");
*/
/*
console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the data");
    callback({ userEmail: email });
  }, 3000);
}

//callback funcion that is passed in as a parameter that is run at a later time

function getUserVideos(email, callback) {
  setTimeout(() => {
    console.log("we have collected the videos");
    callback(["vid1", "vid2", "vid3"]);
  }, 2000);
}

function getVideoDetails(videos, callback) {
  setTimeout(() => {
    console.log("Here's your details");
    callback(["The Don", "Beastly Trials", "Techtical"]);
  }, 2000);
}
const user = loginUser("feshoisf@gmail.com", 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (vids) => {
    console.log(vids);
    getVideoDetails(vids[1], (BT) => {
      console.log(BT);
    });
  });
});

console.log("Finish");
*/

//promise is an object that gives us back a result of an asynchronous operation or a failure of it.
/*
const promise = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    resolve({user: "ed"})
  },2000);
})
promise.then(user => {
  console.log(user);
})
*/

/*
console.log("person 1: shows ticket");
console.log("person 2: shows ticket");
//i am person 3 and i dont have ticket, but i make a promise to the ticketer that my
// friend is coming with the ticket
const promiseFriendBringsTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket"); //receiving the ticket in 3 seconds
  }, 3000);
});

//.then means once the promise is fulfilled
// we make the next promise equal to the .then so that it runs after the previous promise is fulfilled
const getPopcorn = promiseFriendBringsTicket.then((t) => {
  console.log(t);
  console.log('"lets go get popcorn"');
  return new Promise((resolve, reject) => resolve(t + ", popcorn"));
});
const getButter = getPopcorn.then((t) => {
  console.log(t);
  console.log('"we need butter"');
  return new Promise((resolve, reject) => resolve(t + ", butter"));
});
getButter.then((t) => console.log(t));
console.log("person 4: shows ticket");
console.log("person 5: shows ticket");
*/
/*
console.log("person 1: shows ticket");
console.log("person 2: shows ticket");
//async functions always return a promise
const getEverything = async () => "get everything"; //'get everything' is the message
getEverything().then((message) => console.log(message)); //here, '.then' tells you when the promise is finished

console.log("person 4: shows ticket");
console.log("person 5: shows ticket");
*/

console.log("person 1: shows ticket");
console.log("person 2: shows ticket");
const getEverything = async () => {
  const promiseFriendBringsTicket = new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve("ticket"), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve( ", popcorn"));
  const getButter = new Promise((resolve, reject) => resolve( ", butter"));

  let ticket = await promiseFriendBringsTicket; //await is just a better version of .then
  console.log('"lets go get popcorn"');

  let popcorn = await getPopcorn;
  console.log('"we need butter"');

  let butter = await getButter;
  return ticket;
};
getEverything().then((t) => {
  console.log("person 3: shows "+t);
});

console.log("person 4: shows ticket");
console.log("person 5: shows ticket");
