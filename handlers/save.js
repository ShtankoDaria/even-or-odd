function saveHandler() {
  debugger;
  // write me!
  let newInput = document.getElementById("input").value;
  // log user interaction: handler name, user input, new state
  if (isNaN(newInput)){
    strings.NaNy.push(newInput);
  } 
  else{
    if ((Number(newInput)%2 == 0)){
      strings.evens.push(newInput);
  } else {
    strings.odds.push(newInput);
  }
}
  log.push({
    handler: 'save',
    newInput,
    strings: JSON.parse(JSON.stringify(strings))
  })
}
