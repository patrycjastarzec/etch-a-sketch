const buttonCreate = document.getElementById('create-grid');
const buttonRemove = document.getElementById('remove-grid');
const number = document.getElementsByName('number');
const color = document.getElementsByName('select-color');
const mainDiv = document.querySelector('.grid-container');

const setValue = () => {
  let number_value; 
  for (let i = 0; i < number.length; i++){
      if(number[i].checked){
        number_value = number[i].value;
      }
  } 
  return number_value;
}

const setColor = () => {
  let color_value; 
  for (let i = 0; i < color.length; i++){
      if(color[i].checked){
        color_value = color[i].value;
      }
  } 
  return color_value;
}

const addDiv = () => {
  let selectedNumber = setValue();
  let selectedColor = setColor();

  for (let x = 0; x < selectedNumber; x++) {
    let newDiv = document.createElement('div');
    mainDiv.appendChild(newDiv);
    newDiv.setAttribute('id', x);
    newDiv.className = 'square';
  
    if (selectedNumber == 64){
      newDiv.style.height = '12.5%';
      newDiv.style.width = '12.5%';
    } else if(selectedNumber == 100){
      newDiv.style.height = '10%';
      newDiv.style.width = '10%';
    } else if(selectedNumber == 400){
      newDiv.style.height = '5%';
      newDiv.style.width = '5%';
    }  
    
    function applyColor() {
      if (selectedColor == 'color') {
        const red = Math.floor(Math.random() * 100);
        const green = Math.floor(Math.random() * 100);
        const blue = Math.floor(Math.random() * 100);
        newDiv.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
      } else {
        const randomColorValue = Math.floor(Math.random() * 100);
        newDiv.style.backgroundColor = `rgb(${randomColorValue}%, ${randomColorValue}%, ${randomColorValue}%)`;  
      } 
    } 
    
    newDiv.addEventListener('mouseover', applyColor);

    buttonCreate.disabled = true;
  } 
}

buttonCreate.addEventListener('click', addDiv);

const removeGrid = () => {
  mainDiv.textContent = '';
  buttonCreate.disabled = false;
}

buttonRemove.addEventListener('click', removeGrid);


  








