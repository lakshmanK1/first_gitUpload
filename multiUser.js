const submitButton = document.getElementById("submit");

if (document.readyState !== "loading") {
  console.log("vscode");

  var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
    i = keys.length; //6
  console.log("keys", keys);
  let stringifiedDetailsOfPeople, detailsOfPeople;

  // 6 to 0
  Object.keys(localStorage).forEach((key) => {
    //i==2
    if (key.match(/userDetails/g)) {
    
      stringifiedDetailsOfPeople = localStorage.getItem(key);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);

      addNewLineElement(detailsOfPeople);
    }
  });
}
// const listOfPeople = []
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {

    const object = {
      name: name,
      emailId: emailId //unique
    };
    axios.post("https://crudcrud.com/api/38f658a203d744ec8a2cf2dafc562136/useDetails",object)
    .then((res) => {
      addNewLineElement(res.data)
      console.log(res);
    })

    // localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    // addNewLineElement(object);
  }
});

function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );
  console.log(document.createElement("i"));
  const a1 = document.createElement("input");
  a1.id = "ram";
  a1.type = "button";
  a1.value = "Edit";
  a1.className = "delete";
  a1.style.border = "2px solid green";
  console.log(a1);
  li.appendChild(a1);

  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.className = "delete";
  a.style.border = "2px solid red";
  console.log(a);
  li.appendChild(a);
  console.log(li);

  ul.appendChild(li);
}
