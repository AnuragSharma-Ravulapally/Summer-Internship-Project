// Function to handle user input for Binary Search
document.getElementById("array-input-btn").addEventListener("click", function () {
    const input = document.getElementById("array-input").value.trim();
    if (input) {
        // Convert input to an array of numbers
        const array = input.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
        if (array.length > 0) {
            generateBinaryArray(array); // Pass the array for visualization
        } else {
            alert("Please enter a valid array of numbers, separated by commas.");
        }
    } else {
        alert("Input cannot be empty.");
    }
});

// Modified generateBinaryArray function to accept custom input
function generateBinaryArray(arr = null) {
    const container = document.getElementById("binary-array");
    container.innerHTML = ''; // Clear existing elements

    if (!arr) {
        // Generate a random array if no custom input is provided
        arr = [];
        for (let i = 0; i < 30; i++) {
            let value = Math.ceil(Math.random() * 100);
            arr.push(value);
        }
    }

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length && i < 20; i++) {
        let value = arr[i];
        let block = document.createElement("div");
        block.classList.add("block");
        block.style.height = `${value * 3}px`;
        block.style.transform = `translate(${i * 30}px)`;

        let label = document.createElement("label");
        label.classList.add("block_id");
        label.innerText = value;

        block.appendChild(label);
        container.appendChild(block);
    }
}

// Binary Search Functionality
async function binarySearch() {
    const blocks = document.querySelectorAll("#binary-array .block");
    const output = document.getElementById("binary-result");
    const num = parseInt(document.getElementById("binary-input").value, 10);
    let start = 0;
    let end = blocks.length - 1;

    if (isNaN(num)) {
        output.innerText = "Please enter a valid number.";
        return;
    }

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "";
    }

    output.innerHTML = "<strong>Element Found</strong>";
    output.innerText = "";

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        blocks[mid].style.backgroundColor = "#FF4949";

        let value = Number(blocks[mid].childNodes[0].innerHTML);
        await new Promise(resolve => setTimeout(resolve, 300));

        if (value == num) {
            output.innerText = "Element Found";
            blocks[mid].style.backgroundColor = "#13CE66";
            return;
        } else if (value > num) {
            end = mid - 1;
            blocks[mid].style.backgroundColor = "#FFFF00";
        } else {
            start = mid + 1;
            blocks[mid].style.backgroundColor = "#FFFF00";
        }
    }
    
    // output.innerText = "<strong>Element Found</strong>";
    output.innerText = "Element Not Found";
}

document.getElementById("binary-search-btn").addEventListener("click", binarySearch);
generateBinaryArray(); // This will generate a random array initially

// Bubble Sort Script remains the same as in your original code

// Bubble Sort Script with Start, Stop, and Restart
// let bubbleSortInterval;
// let isSorting = false;
// let isPaused = false;
// let blocks;
// let passCount = 0; // Variable to track the number of passes
// let i = 0, j = 0;

// document.getElementById("array-input-btn").addEventListener("click", function () {
//     const input = document.getElementById("array-input-bub").value.trim();
//     if (input) {
//         // Convert input to an array of numbers
//         const array = input.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
//         if (array.length > 0) {
//             generateBinaryArray(array); // Pass the array for visualization
//         } else {
//             alert("Please enter a valid array of numbers, separated by commas.");
//         }
//     } else {
//         alert("Input cannot be empty.");
//     }
// });

// function generateBubbleArray() {
//     const container = document.getElementById("bubble-array");
//     container.innerHTML = ''; // Clear existing elements
//     document.getElementById("pass-count").value = 0; // Reset pass count display
//     passCount = 0; // Reset pass count variable
//     i = 0;
//     j = 0;
//     isSorting = false;
//     isPaused = false;

//     for (let i = 0; i < 15; i++) {
//         let value = Math.ceil(Math.random() * 100);
//         let block = document.createElement("div");
//         block.classList.add("block");
//         block.style.height = `${value * 3}px`;
//         block.style.transform = `translate(${i * 30}px)`;

//         let label = document.createElement("label");
//         label.classList.add("block_id");
//         label.innerText = value;

//         block.appendChild(label);
//         container.appendChild(block);
//     }

//     blocks = document.querySelectorAll("#bubble-array .block"); // Update the blocks reference
// }


let bubbleSortInterval;
let isSorting = false;
let isPaused = false;
let blocks;
let passCount = 0; // Variable to track the number of passes
let i = 0, j = 0;

document.getElementById("array-input-btn-bub").addEventListener("click", function () {
    const input = document.getElementById("array-input-bub").value.trim();
    if (input) {
        // Convert input to an array of numbers
        const array = input.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
        if (array.length > 0) {
            generateBubbleArray(array); // Pass the array for visualization
        } else {
            alert("Please enter a valid array of numbers, separated by commas.");
            generateBubbleArray(); // Generate a random array if the input is invalid
        }
    } else {
        alert("Input cannot be empty.");
        generateBubbleArray(); // Generate a random array if the input is empty
    }
});

function generateBubbleArray(userArray = null) {
    const container = document.getElementById("bubble-array");
    container.innerHTML = ''; // Clear existing elements
    document.getElementById("pass-count").value = 0; // Reset pass count display
    passCount = 0; // Reset pass count variable
    i = 0;
    j = 0;
    isSorting = false;
    isPaused = false;

    const array = userArray || Array.from({ length: 10 }, () => Math.ceil(Math.random() * 100));

    array.forEach((value, idx) => {
        let block = document.createElement("div");
        block.classList.add("block");
        block.style.height = `${value * 3}px`;
        block.style.transform = `translate(${idx * 30}px)`;

        let label = document.createElement("label");
        label.classList.add("block_id");
        label.innerText = value;

        block.appendChild(label);
        container.appendChild(block);
    });

    blocks = document.querySelectorAll("#bubble-array .block"); // Update the blocks reference
}


async function startBubbleSort() {
    const output = document.getElementById("bubble-result");
    if (isSorting) return; // Prevent multiple starts
    isSorting = true;
    disableButtons(true, true);

    for (; i < blocks.length - 1; i++) {
        if (!isSorting) return; // Stop if sorting is interrupted

        if (j === 0 && !isPaused) {
            passCount++; // Increment the pass count only at the start of a new pass
            document.getElementById("pass-count").value = passCount; // Update the pass count display
        }
        isPaused = false; // Reset the paused flag when resuming

        for (; j < blocks.length - i - 1; j++) {
            if (!isSorting) return; // Stop if sorting is interrupted

            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";

            await new Promise(resolve => setTimeout(resolve, 150)); // Delay for visualization

            let value1 = Number(blocks[j].childNodes[0].innerHTML);
            let value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll("#bubble-array .block"); // Update the reference after swap
            }

            blocks[j].style.backgroundColor = "#4806ee";
            blocks[j + 1].style.backgroundColor = "#4806ee";
        }
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
        j = 0; // Reset inner loop index after each outer loop iteration
    }

    blocks[0].style.backgroundColor = "#13CE66"; // Mark the last block as sorted
    output.innerText = "Sorted!";
    isSorting = false;
    disableButtons(false);
}

function stopBubbleSort() {
    isSorting = false;
    isPaused = true;
    disableButtons(false, true);
}

function restartBubbleSort() {
    stopBubbleSort();
    isPaused = false;
    generateBubbleArray();
    startBubbleSort();
}

function swap(el1, el2) {
    return new Promise(resolve => {
        const tempTransform = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = tempTransform;

        window.requestAnimationFrame(() => {
            setTimeout(() => {
                el1.parentNode.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}

function disableButtons(disableStart = false, keepStopEnabled = true) {
    document.getElementById("start-btn").disabled = disableStart;
    document.getElementById("stop-btn").disabled = !keepStopEnabled;
    document.getElementById("restart-btn").disabled = disableStart;
}

document.getElementById("start-btn").addEventListener("click", startBubbleSort);
document.getElementById("stop-btn").addEventListener("click", stopBubbleSort);
document.getElementById("restart-btn").addEventListener("click", restartBubbleSort);

generateBubbleArray();

