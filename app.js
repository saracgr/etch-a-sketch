const container = document.querySelector('.container')
const pixelContainer = document.createElement('div')
const sketchPad = document.querySelector('.sketch-pad')
sketchPad.appendChild(pixelContainer).className = 'pixel_container';


//Pen buttons
const rainbowBtn = document.querySelector('.rainbow')
const darkBtn = document.querySelector('.dark')
const resetBtn = document.querySelector('.reset');
const buttons = document.querySelector('.buttons')



// Rainbow pen button
let isRainbow = false;
rainbowBtn.addEventListener('click', ()=> {
  isRainbow = true;
  isBlack = false;
})

function rainBow(e){ 
  if(isRainbow){
    e.target.style = `background-color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  } 
}

    
//Dark Pen
let isBlack = false;
darkBtn.addEventListener('click', ()=> {
  isBlack = true;
  isRainbow = false;

})
function dark(e){
  if(isBlack){
    e.target.style = `background-color: black;`
  }
}




// Creating Grid
function createSquareDiv(pixels){
     pixelContainer.style.setProperty('--grid-rows', pixels)
     pixelContainer.style.setProperty('--grid-cols', pixels)
     isRainbow = false;
    for (let i = 0; i < pixels * pixels; i++) {
      let squareDiv = document.createElement('div');
      pixelContainer.appendChild(squareDiv).className = "square"; 
      squareDiv.addEventListener("pointerover", rainBow);
      squareDiv.addEventListener("pointerover", dark);
    } 
}

createSquareDiv(16);

//Clearing Grid
resetBtn.addEventListener('click', () => {
  pixelContainer.childNodes.forEach((child) => {
    child.style.backgroundColor = "unset";
    isRainbow = false;
    isBlack = false;
})
});
 
