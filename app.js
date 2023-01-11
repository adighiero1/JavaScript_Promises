/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

console.log("Excercise 1");
let paragraphError = document.getElementById("error");
let unorderedList = document.getElementById("list");

console.log("Excercise 2");

let promise = getList();

function handleSuccess(list) {
  //takes in array consolelogs it
  list.forEach((hobbit) => {
    let thisLi = document.createElement("li");
    thisLi.textContent = hobbit;
    unorderedList.appendChild(thisLi);
  });
}

function handleError(err) {
  paragraphError.textContent = err.message;
}

promise.then(handleSuccess).catch(handleError);

// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
