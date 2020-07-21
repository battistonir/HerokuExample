var tagName = prompt(
  "Please enter an HTML Tag (ex. h1, h2, p, div):",
  "enter tag"
);

if (
  tagName !== "h1" &&
  tagName !== "h2" &&
  tagName !== "p" &&
  tagName !== "div"
) {
  alert("please enter a valid tag");
} else {
  // create and store an element
  var tag = document.createElement(tagName);
  // build out the element by adding content
  tag.textContent = "This was made via prompts. It's a " + tagName;
  // place the element in the page
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");
if (nextTag === true) {
  var secondTagName = prompt(
    "Please enter another  HTML Tag (ex. h1, h2, p, div):",
    "enter tag here"
  );
  if (
    secondTagName !== "h1" &&
    secondTagName !== "h2" &&
    secondTagName !== "p" &&
    secondTagName !== "div"
  ) {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent =
      "This is our second tag via prompts, it's a " + secondTagName;
    document.body.appendChild(secondTag);

    // create the image
    var coolImage = document.createElement("img");
    // build by adding content
    coolImage.setAttribute(
      "src",
      "https://miro.medium.com/max/964/0*JtrE4wwY5SDpVgk6."
    );
    coolImage.setAttribute("alt", "Only real hackers hack through payphones.");
    coolImage.classList.add("cool-image");
    // place the image in the page

    var imageContainer = document.createElement(div);
    imageContainer.append(coolImage);
    document.body.prepend(imageContainer);
  }
}
