/*
8 rows - 64 div - height/width 12.5%
10 rows - 100 div - height/width 10%
20 rows - 400 div - height/width 5%
*/
const button = document.getElementById('myBtn');
const number = document.getElementsByName('number');

const setValue = () => {
  let number_value; 
  for (let i = 0; i < number.length; i++){
      if(number[i].checked){
          number_value = number[i].value;
      }
  } 
  return number_value;
}

const addDiv = () => {
  let selectedNumber = setValue();
  const mainDiv = document.querySelector('.grid-container');

  for (let x = 0; x < selectedNumber; x++) {
    let newDiv = document.createElement('div');
    mainDiv.appendChild(newDiv);
    newDiv.setAttribute("id", x);
    newDiv.className = 'square';
  
    if (selectedNumber == 64){
      newDiv.style.height = "12.5%";
      newDiv.style.width = "12.5%";
    } else if(selectedNumber == 100){
      newDiv.style.height = "10%";
      newDiv.style.width = "10%";
    } else if(selectedNumber == 400){
      newDiv.style.height = "5%";
      newDiv.style.width = "5%";
    }  
  
    function applyColor() {
      const randomColorValue = Math.floor(Math.random() * 100);
      newDiv.style.backgroundColor = `rgb(${randomColorValue}%, ${randomColorValue}%, ${randomColorValue}%)`;    
    }   
    
    newDiv.addEventListener("mouseover", applyColor);

    button.disabled = true;
  } 
}

button.addEventListener('click', addDiv);



  
//background-color: rgb(255, 0, 0);


  








