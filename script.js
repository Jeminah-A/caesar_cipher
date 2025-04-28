function caesarCipher(text, key, encode = true) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (/[a-z]/.test(char)) {
            let index = char.charCodeAt(0) - 97;
            index = encode ? (index + key) % 26 : (index - key + 26) % 26;
            result += String.fromCharCode(index + 97);
        } else if (/[A-Z]/.test(char)) {
            let index = char.charCodeAt(0) - 65;
            index = encode ? (index + key) % 26 : (index - key + 26) % 26;
            result += String.fromCharCode(index + 65);
        } else {
            result += char; // Keep spaces, numbers, symbols unchanged
        }
    }
    return result;
}

function handleCipher() {
    const text = document.getElementById('text').value;
    const key = parseInt(document.getElementById('key').value);

    // Read from radio buttons
    const modeElements = document.getElementsByName('mode');
    let mode = "encode"; // Default
    for (const elem of modeElements) {
        if (elem.checked) {
            mode = elem.value;
            break;
        }
    }

    const encode = mode === "encode";
    const result = caesarCipher(text, key, encode);

    document.getElementById('result').innerText = result;
}

// For Jest testing
if (typeof module !== "undefined") {
    module.exports = { caesarCipher };
}
