const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


let index = 0


function init(e) {
 
 
  const key = parseInt(e.detail || e.which);
 

 
  if (key === code[index]) {
    index++, console.log;
 
    if (index === code.length) {
      alert("Contra motherfuckers");
 
      index = 0;
    }
  } 
  
  else {
    index = 0;
  }
  
  
 }
 


document.body.addEventListener('keydown', init)
  
    

 
  // Write your JavaScript code inside the init() function