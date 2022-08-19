// i  have to make a counter , for the game part 
// i need a function , data modeling that will work with the display of the content 
//WHAT I WANT TO DO IS TO CREATE AN APP THAT WHEN YOU FISRT LOG IN WILL ASK YOU HOW YOU DOING ?
//DEPENDING ON THE ANSWER OF THE USER ? THE DISPLAY WILL BE MEME OR A RANDAM PLAYLIST 
// A GREETING FUNCTION TO GREET THE USER once the page is loaded 
function greetuser(){
 return "Hello!"
}  
function respond(){
     return setTimeout((greetuser, 1000){
          return "Hey!"
     }); 
}
 function createTheMeme(theme,image,text){
     return {
          theme: theme ,
          image: image ,
          text: text 
     };
 } 
 function displayMeme (meme){
     return meme.theme + ' ' + meme.image + ' '+ meme.text ;
 }  


 
/**
* TODO: Implement a function that clears all the content
* prior to generating new random content
*/
function clearAll() {
 var memeContainer = document.querySelector('.meme-content');
  var songContainer = document.querySelector('.song-content');
 memeContainer.innerHTML = '' ;
  songContainer.innerHTML = '' ;
 }

 container.appendChild (newImg);
}

/**
* TODO: 
* - Show a random Meme in the correct location
* - Never show more than 1 meme at a time
*/
function showMeme() {
  // Value is a string representing image URL
 var randomMemeUrl = getRandomData('memes');
 var container = document.querySelector('.meme-content');
 var newImg = document.createElement('img');
 newImg.setAttribute('src',randomMemeUrl);

clearAll();
container.appendChild (newImg);

/**
* TODO: 
* - Play a random song in the correct location
* - Never play more than 1 song at a time
*/
function playSong() {
  // Value is a string representing the joke
  const randomJokeText = getRandomData('jokes');
}


function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

// ----------------------------------------------------
// NO NEED TO CHANGE ANYTHING BELOW but...
// feel free to add/remove items from these lists to customize
// your results
// ----------------------------------------------------

// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://www.happierhuman.com/wp-content/uploads/2022/02/memes-being-ignored-factorymeme-someone-pay-attention.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'];


// Just a little helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles
};

