let count = 0;


const countText =
document.getElementById("count");


// Update Screen

function updateCount(){

    countText.textContent = count;

}


// Increment

function increment(){

    count++;

    updateCount();

}


// Decrement

function decrement(){

    count--;

    updateCount();

}


// Increment by 5

function incrementFive(){

    count += 5;

    updateCount();

}


// Reset

function resetCount(){

    count = 0;

    updateCount();

}