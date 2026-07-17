let words = [];
let current = null;


fetch("data/phrasal_verbs.json")
    .then(response => response.json())
    .then(data => {
        words = data;
        console.log(`[${new Date().toISOString()}] There is '${words.length}' phrasal verbs in total.`)
        showRandomWord();
    });


function showRandomWord() {

    const index = Math.floor(
        Math.random() * words.length
    );

    current = words[index];
    console.log(`[${new Date().toISOString()}] New-random phrasal verb is set: '${current.word}'`);

    console.log(`[${new Date().toISOString()}] Setting current word to: '${current.word}'.`);
    document.getElementById("word").textContent =
        current.word;


    console.log(`[${new Date().toISOString()}] Setting 'answer' to be hidden.`);
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
            console.log(`[${new Date().toISOString()}] Clicked 'show answer'. Setting 'answer' to be visible.`)
        }
    );


document
    .getElementById("next")
    .addEventListener(
        "click",
        () => {
            showRandomWord();
            console.log(`[${new Date().toISOString()}] Clicked 'next'.`)
        }
    );
