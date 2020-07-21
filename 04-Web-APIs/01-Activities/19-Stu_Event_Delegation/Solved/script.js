var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob" }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  console.log(event.target);
  if (event.target.matches("button")) {
    // stop the page from reloading
    event.preventDefault();
    // make the modal show up
    modalEl.style.display = "block";
    // get the current id of the person associated with the edit button clicked
    currentId = parseInt(event.target.parentElement.id);
    // get the info on a specific person
    var name = people[currentId].name;
    var description = people[currentId].description;
    // Add the person's name to the modal window
    modalNameEl.textContent = name;
    // add
    if (description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }
  }
}

closeEl.addEventListener("click", close);
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
});

addBtn.addEventListener("click", addPersonToList);
peopleListEl.addEventListener("click", handleClick);
document.addEventListener("click", function (event) {
  if (event.target === modalEl) {
    close();
  }
});
