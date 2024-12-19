const selectedBoxes = [];
const currentStatus = document.querySelector(".status");
const boxes = document.querySelectorAll(".boxes .box");
const totalLength = boxes.length;
let timerId = null;

function addEventListners(elements, handler) {
  elements.forEach((node) => {
    node.addEventListener("click", handler);
  });
}

function addClass(e) {
  const currentNode = e.target;
  const nodeExist = selectedBoxes.find((ele) => ele === currentNode);
  if (!nodeExist) {
    currentNode.style.backgroundColor = "green";
    selectedBoxes.push(currentNode);
  }
  if (selectedBoxes.length === totalLength) {
    // remove event listener for future click event.
    removeEventListerers(selectedBoxes, addClass);

    // update status
    currentStatus.innerHTML = "Wait for some time..";

    // remove change color every 1sec
    const id = setInterval(() => {
      const boxesLength = selectedBoxes.length;
      if (boxesLength > 0) {
        const popped = selectedBoxes.pop();
        popped.style.backgroundColor = "white";

        if (boxesLength === 1) {
          // remove timerid
          clearInterval(timerId);
          // add event listners to active click functionality
          addEventListners(boxes, addClass);

          // update status
          currentStatus.innerHTML = "Start Selecting...";
        }
      }
    }, 1000);

    // set timer id;
    timerId = id;
  }

}

function removeEventListerers(elements, callback) {
  elements.forEach((node) => node.removeEventListener("click", callback));
}

function init() {
  addEventListners(boxes, addClass);
}

init();
