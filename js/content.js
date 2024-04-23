// This script will execute on the matched web pages to block gambling content

// Function to hide elements matching a CSS selector
function hideElements(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.style.display = 'none'; // Hide the element
  });
}

// Define the CSS selectors for elements to be blocked
const selectorsToBlock = [
  // Add CSS selectors for elements to block
  '.gambling-banner',      // Banner ads promoting gambling
  '.gambling-links',       // Links to gambling websites
  '.gambling-video',       // Embedded gambling videos
  // Add more selectors as needed
];

// Hide the elements matching the selectors
selectorsToBlock.forEach(selector => {
  hideElements(selector);
});
