const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

// function dateDisplayer() {
//   hour.innerHTML = date.getHours();
//   minute.innerHTML = date.getMinutes();
//   second.innerHTML = date.getSeconds();
// }
var interval = setInterval(function dateDisplayer() {
  var date = new Date();
  hour.innerHTML = date.getHours();
  minute.innerHTML = date.getMinutes();
  
  second.innerHTML = date.getSeconds();
}, 1000);

function dateFetcher() {
  var date = new Date();
  return date.getTime();
}
