
var base_url = window.location.origin;
var select = document.getElementById('menu');

let menu = document.getElementById('menu');
let textarea = document.querySelector('textarea') 
  
// This event listener has been implemented to identify a 
// Change in the input section of the html code 
// It will be triggered when a file is chosen. \select.addEventListener('change', () => { 


  function handleMenu(id, elm) {
    str = elm.value
    str = str.toLowerCase();
    if (str == "about") {
      window.location = base_url + "/"
    } else {
    window.location = base_url + "/" + str;
    }
  
}