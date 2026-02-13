// script.js

let userName = '';
let userNickname = '';

// Questions array with deeper questions for a long-term relationship
const questions = [
    "Have our 3 years together meant something to you?",
    "Do you see me as your partner for life?",
    "Do you see our future together?",
    "Have I supported you through your hardest times?",
    "Do you trust me completely?",
    "Have we grown together as a couple?",
    "Do you love me for who I really am?",
    "Have our memories made you smile today?",
    "Can you imagine spending forever with me?",
    "Do you feel safe and loved with me?",
    "Have I made you a better person?",
    "Do you believe we're meant to be?",
    "Will you be my valentine?"
];

let currentQuestionIndex = 0;

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
    userName = document.getElementById('name-input').value;
    userNickname = document.getElementById('nickname-input').value;
    
    // Hide form and show questions
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('questions-container').style.display = 'flex';
    
    // Start displaying questions
    displayQuestion();
}

// Function to display the current question
function displayQuestion() {
    document.getElementById('question').innerText = questions[currentQuestionIndex];
    // Reset button styles and text
    document.getElementById('yes-button').innerText = 'Yes';
    document.getElementById('no-button').innerText = 'No';
    document.getElementById('yes-button').style.fontSize = '26px';
}

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Check if this is the last question
        if (currentQuestionIndex === questions.length - 1) {
            // Flash rainbow colors for the final answer
            flashRainbowColors(function() {
                document.getElementById('question').style.display = 'none'; // Hide the question
                displayCatHeart(); // Display the cat-heart.gif
            });
        } else {
            // Move to the next question
            currentQuestionIndex++;
            displayQuestion();
        }
    } else if (option === 'no') {
        // If on the last question, make the "Yes" button bigger
        if (currentQuestionIndex === questions.length - 1) {
            document.getElementById('no-button').innerText = 'You sure?'; 
            // Increase font size of "Yes" button
            var yesButton = document.getElementById('yes-button');
            var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
            var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2x
            yesButton.style.fontSize = newSize + 'px';
        } else {
            // For earlier questions, just show a reaction
            alert('Bawal! Dapat yes lang!!!!');
        }
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially (don't call displayQuestion here)
displayCat();
