var pTags = document.querySelectorAll("p");
var divTags = document.querySelectorAll("div");
var aTags = document.querySelectorAll("a");
var imgEl = document.querySelector("img");
console.log(imgEl);
var changeP = document.querySelector("#change2");

console.log(pTags);

pTags[0].setAttribute("style", "font-size: 65px;");
changeP.setAttribute("style", "color:blue; border:2px solid black;");
aTags[0].setAttribute("href", "https://github.com");
imgEl.setAttribute("src", "images/image_1.jpg");
imgEl.setAttribute("style", "width:500px; height:200px;");
imgEl.setAttribute("alt", "Guy walking with save the earth bag");

for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "text-decoration:underline; color:red;");
}
