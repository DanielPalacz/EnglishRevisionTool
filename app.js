let words = [];
let current = null;


fetch("data/phrasal_verbs.json")
    .then(response => response.json())
    .then(data => {
        words = data;
        showRandomWord();
    });


function showRandomWord() {

    const index = Math.floor(
        Math.random() * words.length
    );

    current = words[index];

    document.getElementById("word").textContent =
        current.word;

    document.getElementById("answer").hidden = true;

    document.getElementById("answer").innerHTML =
        `
        <p>${current.translations.join(", ")}</p>
        <p>${current.examples[0]}</p>
        `;
}


document
    .getElementById("show-answer")
    .addEventListener(
        "click",
        () => {
            document.getElementById("answer").hidden = false;
        }
    );


document
    .getElementById("next")
    .addEventListener(
        "click",
        () => {
            showRandomWord();
        }
    );
