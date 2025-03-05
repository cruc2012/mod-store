function extractKey(encryptedMessage) {
    let parts = encryptedMessage.split(" "); // Split message
    let prefixBinary = parts[0]; // First part is the prefix
    let prefixDecimal = parseInt(prefixBinary, 2); // Convert to decimal
    return 31 - prefixDecimal; // Extracted Key
}

function adminDecryptText() {
    let encrypted = document.getElementById("adminEncryptedInput").value.trim();
    let parts = encrypted.split(" "); // Split into binary values
    let extractedKey = extractKey(encrypted); // Get the extracted key

    let decrypted = "";
    let key = extractedKey;

    for (let i = 1; i < parts.length; i++) { // Start from index 1 to skip prefix
        if (parts[i] === "00000") {
            decrypted += " "; // Convert spaces
        } else {
            let num = parseInt(parts[i], 2) - key; // Convert binary back
            decrypted += String.fromCharCode(num + 96); // Convert to letters
            key++; // Increase key
        }
    }

    document.getElementById("extractedKey").innerText = extractedKey; // Show key
    document.getElementById("adminDecryptedText").innerText = decrypted; // Show message
}
