let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function deleteLast(){
  display.value = display.value.slice(0, -1);
}

function calculate(){

  let expression = display.value;

  // Prevent division by zero
  if(expression.includes("/0")){
    display.value = "Cannot divide by zero";
    return;
  }

  try{

    let result = eval(expression);

    // Add to history
    let listItem = document.createElement("li");
    listItem.textContent = `${expression} = ${result}`;
    historyList.prepend(listItem);

    display.value = result;
  }

  catch{
    display.value = "Error";
  }
}