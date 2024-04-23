document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckbox = document.getElementById('toggleCheckbox');
    const toggleLabel = document.getElementById('toggleLabel');

    // Load the extension state from storage and update the checkbox and label
    chrome.storage.sync.get('extensionEnabled', function (data) {
        toggleCheckbox.checked = data.extensionEnabled;
        updateLabel(toggleCheckbox.checked);
    });

    // Add event listener to toggle the extension state when checkbox changes
    toggleCheckbox.addEventListener('change', function () {
        const isChecked = toggleCheckbox.checked;
        chrome.storage.sync.set({ 'extensionEnabled': isChecked });
        updateLabel(isChecked);
    });
 // Add event listener for the button click
    clickMeButton.addEventListener('click', function() {
        // Perform the action when the button is clicked
        // For example, you can open a new tab or redirect to a URL
        window.open('https://www.gamcare.org.uk/get-support/talk-to-us-now/', '_blank');
    });

    // Function to update the label text based on checkbox state
    function updateLabel(isChecked) {
        toggleLabel.textContent = isChecked ? 'Disable Extension' : 'Enable Extension';
    }
});
