
const enterName = () => {
  var welcome_paragraph = document.getElementById('welcome');
  var name = document.getElementById('name');
  welcome_paragraph.innerHTML = "Welcome " + name.value;
  const evt = new CustomEvent('onNameEntered', { detail: {color: "#e0a7ad"}});
  document.dispatchEvent(evt);
}
  
let buttonTrigger = document.querySelector ('button');
let result = document.querySelector('h1');



document.addEventListener('onNameEntered', (e) => {
  document.body.style.backgroundColor = e.detail.color
})
let myPromise = new Promise(function(Resolve, Reject) {
  setTimeout(function() {Resolve("Congratulations, You have made a Promise !!"); }, 3000);
  
});
  

myPromise.then(function(value) {
  document.getElementById("promiseexpl").innerHTML = value;
});


// const userLeft = true
// const userStays = false

// function watchVideo(){
//   return new Promise ((resolve, reject)=>{
//     if(userLeft){
//       reject({
//         name: 'User Left',
//         message: ':('
//       })
//     }else if(userStays){
//       errorCallback({
//         name:'User Watching',
//         message:'Cat'

//       })
//     }else{
//       resolve('Thumbs Up and subscribe')
//     }
//   }) 
  
// }
// watchVideo.then((message)=>{
//   console.log('Success'+ message)
// }).catch((error) =>{
//   console.log(error.name + '' + error.message)
// })


