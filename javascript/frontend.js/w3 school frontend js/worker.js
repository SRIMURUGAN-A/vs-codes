let i = 0;

function countnumber() {
    i++;
    postMessage(i);  // Send the incremented value back to the main thread

    setTimeout(countnumber, 1000);  // Repeat every 2 seconds
}

countnumber();  // Start the counting process
