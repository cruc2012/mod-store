window.onload = function () {
    let textInput = document.getElementById("textInput");
    let numberInput = document.getElementById("numberInput");
    let outputList = document.getElementById("outputList");

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

    textInput.addEventListener("input", updateOutput);
    numberInput.addEventListener("input", updateOutput);
};

