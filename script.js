function highlight() {
    //Write your code here
const boldElements = document.getElementsByTagName("strong");
  for (let i = 0; i < boldElements.length; i++) {
    boldElements[i].style.color = "green";
  }

}


function return_normal() {
    //Write your code here
const boldElements = document.getElementsByTagName("strong");
  for (let i = 0; i < boldElements.length; i++) {
    boldElements[i].style.color = "black";
  }
    
}
const linkElement = document.getElementById("link");
const textElement = document.getElementById("text");

linkElement.addEventListener("mouseover", highlight);
linkElement.addEventListener("mouseout", return_normal);
