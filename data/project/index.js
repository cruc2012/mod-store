window.onload = function () {
    let textInput = document.getElementById("textInput");
    let numberInput = document.getElementById("numberInput");
    let outputList = document.getElementById("outputList");
    let copyButton = document.getElementById("copyButton");

    function updateOutput() {
        let text = textInput.value;
        let times = parseInt(numberInput.value);

        // Clear previous output
        outputList.innerHTML = "";

        if (!isNaN(times) && times > 0) {
            for (let i = 0; i < times; i++) {
                let listItem = document.createElement("li");
                listItem.textContent = text;
                outputList.appendChild(listItem);
            }
        }
    }

    function copyToClipboard() {
        let textToCopy = "";
        let listItems = outputList.querySelectorAll("li");

        listItems.forEach(item => {
            textToCopy += item.textContent + "\n";
        });

        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert("Copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        }
    }

    textInput.addEventListener("input", updateOutput);
    numberInput.addEventListener("input", updateOutput);
    copyButton.addEventListener("click", copyToClipboard);
};
