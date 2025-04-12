function encryptText() {
    let input = document.getElementById("inputText").value.toLowerCase();
    let key = parseInt(document.getElementById("keyInput").value);
    
    if (isNaN(key) || key < 0) {
        alert("Please enter a valid number (0 or higher) for the key.");
        return;
    }

    let keyPrefix = (parseInt("11111", 2) - key).toString(2).padStart(5, "0"); // Binary subtraction
    let encrypted = keyPrefix; // Start encryption with the binary key prefix
    let spaceCode = "00000"; // Space representation

    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
            encrypted += ` ${spaceCode} `; // Convert spaces
        } else if (input[i] >= "a" && input[i] <= "z") {
            let charCode = input.charCodeAt(i) - 96; // Convert 'a' = 1, 'b' = 2, etc.
            let binary = (charCode + key).toString(2).padStart(5, "0"); // Convert to binary and add key
            encrypted += ` ${binary} `;
            key++; // Increase key for next letter
        }
    }

    document.getElementById("outputText").innerText = encrypted.trim();
}

function copyText() {
    let text = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
}

function decryptText() {
    let encrypted = document.getElementById("encryptedInput").value.trim();
    let userKey = parseInt(document.getElementById("decryptKey").value);
    let expectedPrefix = (parseInt("11111", 2) - userKey).toString(2).padStart(5, "0"); // Binary subtraction

    let parts = encrypted.split(" "); // Split into parts
    let extractedKey = parts.shift(); // First part is the key

    if (extractedKey !== expectedPrefix) {
        document.getElementById("decryptedText").innerText = "Incorrect key";
        return;
    }

    let decrypted = "";
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === "00000") {
            decrypted += " "; // Convert spaces
        } else {
            let num = parseInt(parts[i], 2) - userKey; // Convert binary back
            decrypted += String.fromCharCode(num + 96); // Convert to letters
            userKey++; // Increase key
        }
    }

    document.getElementById("decryptedText").innerText = decrypted;
}
