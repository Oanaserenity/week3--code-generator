document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const outputContainer = document.getElementById('outputContainer');
    const keyCodeOutput = document.getElementById('keyCodeOutput');
    const KeyOutput = document.getElementById('KeyOutput');  // Corrected variable name
    const charCodeOutput = document.getElementById('charCodeOutput');

    welcomeMessage.style.fontSize = '20px';

    document.addEventListener('keydown', function (event) {
        outputContainer.style.display = 'block';
        keyCodeOutput.textContent = `Key Code: ${event.keyCode}`;
        KeyOutput.textContent = `.key: ${event.key}`;
        charCodeOutput.textContent = `.charCode: ${event.charCode}`;
    });
});

