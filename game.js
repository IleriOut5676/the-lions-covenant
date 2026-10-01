// ==========================================
// THE LION'S COVENANT
// Game Engine
// ==========================================


// ------------------------------------------
// PLAYER STATS
// ------------------------------------------

let player = {

    courage: 0,

    curiosity: 0,

    trust: 0,

    fear: 0

};


// ------------------------------------------
// GET HTML ELEMENTS
// ------------------------------------------

const storyText =
    document.getElementById("story-text");

const choices =
    document.getElementById("choices");


// ------------------------------------------
// MAKE A CHOICE
// ------------------------------------------

function makeChoice(choice) {


    // --------------------------------------
    // COURAGE
    // --------------------------------------

    if (choice === "courage") {

        player.courage++;

        showEncounter();

    }


    // --------------------------------------
    // CURIOSITY
    // --------------------------------------

    else if (choice === "curiosity") {

        player.curiosity++;

        showEncounter();

    }


    // --------------------------------------
    // FEAR
    // --------------------------------------

    else if (choice === "fear") {

        player.fear++;

        showEncounter();

    }


    updateStats();

}


// ------------------------------------------
// THE LION ENCOUNTER
// ------------------------------------------

function showEncounter() {


    storyText.innerHTML = `

        <p>
            You turn around.
        </p>

        <p>
            At the edge of the darkness stands a lion.
        </p>

        <p>
            Not a zoo lion.
            Not a dream.
        </p>

        <p>
            A massive creature with golden eyes
            watches you from beneath the trees.
        </p>

        <p>
            And somehow...
            you know it is watching <em>you</em>.
        </p>

        <p class="dramatic">
            It takes one step forward.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="nextChoice('stay')">

            Stay completely still.

        </button>


        <button onclick="nextChoice('speak')">

            Whisper:
            "Who are you?"

        </button>


        <button onclick="nextChoice('run')">

            Run.

        </button>

    `;
}


// ------------------------------------------
// SECOND CHOICE
// ------------------------------------------

function nextChoice(choice) {


    if (choice === "stay") {

        player.courage++;

    }


    else if (choice === "speak") {

        player.curiosity++;

    }


    else if (choice === "run") {

        player.fear++;

    }


    showLionEyes();

    updateStats();
}


// ------------------------------------------
// THE LION'S EYES
// ------------------------------------------

function showLionEyes() {


    storyText.innerHTML = `

        <p>
            The lion stops.
        </p>

        <p>
            Its golden eyes meet yours.
        </p>

        <p>
            Suddenly, the world becomes silent.
        </p>

        <p>
            No cars.
            No wind.
            No city.
        </p>

        <p>
            Only you...
            and the creature.
        </p>

        <p class="dramatic">
            Then a voice speaks inside your mind.
        </p>

        <p>
            <em>
                "You finally came back."
            </em>
        </p>

    `;


    choices.innerHTML = `

        <button onclick="finalChoice('question')">

            "Back from where?"

        </button>


        <button onclick="finalChoice('silent')">

            Say nothing.

        </button>


        <button onclick="finalChoice('panic')">

            Panic and back away.

        </button>

    `;
}


// ------------------------------------------
// FINAL CHOICE OF CHAPTER 1
// ------------------------------------------

function finalChoice(choice) {


    if (choice === "question") {

        player.curiosity++;

    }


    else if (choice === "silent") {

        player.trust++;

    }


    else if (choice === "panic") {

        player.fear++;

    }


    showMark();

    updateStats();
}


// ------------------------------------------
// THE MARK
// ------------------------------------------

function showMark() {


    storyText.innerHTML = `

        <p>
            The lion lowers its head.
        </p>

        <p>
            Suddenly, something burns against
            your wrist.
        </p>

        <p>
            You look down.
        </p>

        <p class="dramatic">
            A golden mark is appearing beneath
            your skin.
        </p>

        <p>
            It resembles the head of a lion,
            surrounded by an ancient circle.
        </p>

        <p>
            The creature looks at the mark.
        </p>

        <p>
            Then...
        </p>

        <p class="dramatic">
            it kneels.
        </p>

        <p>
            Somewhere far away, an elderly woman
            suddenly opens her eyes.
        </p>

        <p>
            "She has awakened."
        </p>

    `;


    choices.innerHTML = `

        <button onclick="chapterComplete()">

            Touch the mark.

        </button>

    `;
}


// ------------------------------------------
// CHAPTER COMPLETE
// ------------------------------------------

function chapterComplete() {


    player.trust++;


    storyText.innerHTML = `

        <p>
            The lion rises.
        </p>

        <p>
            For the first time, you notice a
            silver scar across its forehead.
        </p>

        <p>
            Almost like a crown.
        </p>

        <p>
            You don't understand what is happening.
        </p>

        <p class="dramatic">
            But tonight was not an accident.
        </p>

        <p>
            Someone has been waiting for you.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="location.reload()">

            Restart Chapter One

        </button>

    `;


    updateStats();
}


// ------------------------------------------
// UPDATE PLAYER STATS ON SCREEN
// ------------------------------------------

function updateStats() {


    document.getElementById("courage")
        .textContent = player.courage;


    document.getElementById("curiosity")
        .textContent = player.curiosity;


    document.getElementById("trust")
        .textContent = player.trust;


    document.getElementById("fear")
        .textContent = player.fear;

}
