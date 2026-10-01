// ==========================================
// THE LION'S COVENANT
// CHOICE-BASED GAME ENGINE
// CHAPTER ONE
// ==========================================


// ==========================================
// PLAYER DATA
// ==========================================

const player = {

    courage: 0,
    curiosity: 0,
    trust: 0,
    fear: 0,

    name: "Unknown"

};


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const storyText =
    document.getElementById("story-text");

const choices =
    document.getElementById("choices");


// ==========================================
// UPDATE STATS
// ==========================================

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


// ==========================================
// START OF THE GAME
// ==========================================

function startGame() {

    storyText.innerHTML = `

        <p>
            Johannesburg is unusually quiet tonight.
        </p>

        <p>
            You should have been home twenty minutes ago.
        </p>

        <p>
            Instead, you are walking alone beneath a moon
            so bright that the road looks almost silver.
        </p>

        <p>
            The city feels different tonight.
        </p>

        <p>
            Colder.
        </p>

        <p class="dramatic">
            Then you hear it.
        </p>

        <p class="dramatic">
            A growl.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="firstChoice('courage')">

            Keep walking.
            I refuse to let fear control me.

        </button>


        <button onclick="firstChoice('curiosity')">

            Stop and listen.
            Something about the sound feels familiar.

        </button>


        <button onclick="firstChoice('fear')">

            Turn around and run.

        </button>

    `;
}


// ==========================================
// FIRST CHOICE
// ==========================================

function firstChoice(choice) {


    if (choice === "courage") {

        player.courage++;

        courageousEncounter();

    }


    else if (choice === "curiosity") {

        player.curiosity++;

        curiousEncounter();

    }


    else if (choice === "fear") {

        player.fear++;

        fearfulEncounter();

    }


    updateStats();
}


// ==========================================
// COURAGE PATH
// ==========================================

function courageousEncounter() {

    storyText.innerHTML = `

        <p>
            You keep walking.
        </p>

        <p>
            Your heart is beating faster now,
            but you refuse to look back.
        </p>

        <p>
            Another growl comes from behind you.
        </p>

        <p>
            You stop.
        </p>

        <p>
            Slowly, you turn.
        </p>

        <p class="dramatic">
            A lion is standing in the road.
        </p>

        <p>
            It is enormous.
        </p>

        <p>
            And it is staring directly at you.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="courageChoice()">

            Stand your ground.

        </button>


        <button onclick="speakToLion()">

            Ask,
            "Why are you following me?"

        </button>

    `;
}


// ==========================================
// CURIOSITY PATH
// ==========================================

function curiousEncounter() {

    storyText.innerHTML = `

        <p>
            You stop.
        </p>

        <p>
            You listen carefully.
        </p>

        <p>
            The growl came from the abandoned park
            across the road.
        </p>

        <p>
            You should probably leave.
        </p>

        <p>
            Instead, you take one step toward it.
        </p>

        <p>
            Then another.
        </p>

        <p class="dramatic">
            Something golden moves between the trees.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="investigateLion()">

            Go closer.

        </button>


        <button onclick="watchLion()">

            Stay hidden and observe.

        </button>

    `;
}


// ==========================================
// FEAR PATH
// ==========================================

function fearfulEncounter() {

    storyText.innerHTML = `

        <p>
            You run.
        </p>

        <p>
            Your shoes strike the pavement
            as your heart pounds.
        </p>

        <p>
            You don't look back.
        </p>

        <p>
            You turn the corner.
        </p>

        <p>
            Then you stop.
        </p>

        <p class="dramatic">
            The lion is already there.
        </p>

        <p>
            Waiting for you.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="faceFear()">

            Face the lion.

        </button>


        <button onclick="begLion()">

            Whisper,
            "Please don't hurt me."

        </button>

    `;
}


// ==========================================
// COURAGE BRANCH
// ==========================================

function courageChoice() {

    player.courage++;

    storyText.innerHTML = `

        <p>
            You refuse to move.
        </p>

        <p>
            The lion takes one step toward you.
        </p>

        <p>
            Then another.
        </p>

        <p>
            You can hear your own heartbeat.
        </p>

        <p>
            The creature stops only inches away.
        </p>

        <p class="dramatic">
            It lowers its head.
        </p>

        <p>
            Not in attack.
        </p>

        <p>
            In recognition.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="lionVoice()">

            Reach toward it.

        </button>

    `;


    updateStats();
}


// ==========================================
// SPEAK TO LION
// ==========================================

function speakToLion() {

    player.curiosity++;

    lionVoice();
}


// ==========================================
// INVESTIGATE
// ==========================================

function investigateLion() {

    player.curiosity++;

    storyText.innerHTML = `

        <p>
            You step between the trees.
        </p>

        <p>
            The golden shape becomes clearer.
        </p>

        <p>
            A lion stands beneath an enormous
            old tree.
        </p>

        <p>
            But something is strange.
        </p>

        <p>
            Around its neck is a thin golden chain.
        </p>

        <p>
            Hanging from it is a symbol.
        </p>

        <p class="dramatic">
            The same symbol appears on your wrist.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="touchWrist()">

            Look at your wrist.

        </button>

    `;


    updateStats();
}


// ==========================================
// WATCH LION
// ==========================================

function watchLion() {

    player.curiosity++;

    storyText.innerHTML = `

        <p>
            You stay hidden.
        </p>

        <p>
            The lion doesn't move.
        </p>

        <p>
            Instead, it looks toward the city.
        </p>

        <p>
            Then something strange happens.
        </p>

        <p class="dramatic">
            It kneels.
        </p>

        <p>
            Not to you.
        </p>

        <p>
            To something behind you.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="lookBehind()">

            Slowly turn around.

        </button>

    `;


    updateStats();
}


// ==========================================
// FEAR BRANCH
// ==========================================

function faceFear() {

    player.courage++;

    storyText.innerHTML = `

        <p>
            You stop running.
        </p>

        <p>
            You turn around.
        </p>

        <p>
            The lion watches you.
        </p>

        <p>
            For the first time,
            you notice its eyes.
        </p>

        <p class="dramatic">
            They are not animal eyes.
        </p>

        <p>
            They look almost human.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="lionVoice()">

            Ask,
            "What are you?"

        </button>

    `;


    updateStats();
}


// ==========================================
// BEGGING
// ==========================================

function begLion() {

    player.fear++;

    storyText.innerHTML = `

        <p>
            Your voice barely comes out.
        </p>

        <p>
            "Please don't hurt me."
        </p>

        <p>
            The lion tilts its head.
        </p>

        <p>
            Then something impossible happens.
        </p>

        <p class="dramatic">
            A man's voice answers inside your mind.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="lionVoice()">

            Listen.

        </button>

    `;


    updateStats();
}


// ==========================================
// LION VOICE
// ==========================================

function lionVoice() {

    player.trust++;

    storyText.innerHTML = `

        <p>
            The lion's golden eyes meet yours.
        </p>

        <p>
            The entire city suddenly becomes silent.
        </p>

        <p>
            You cannot hear traffic.
        </p>

        <p>
            You cannot hear the wind.
        </p>

        <p>
            You cannot even hear your own breathing.
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

        <button onclick="askQuestion()">

            "Back from where?"

        </button>


        <button onclick="staySilent()">

            Say nothing.

        </button>

    `;


    updateStats();
}


// ==========================================
// ASK QUESTION
// ==========================================

function askQuestion() {

    player.curiosity++;

    revealMark();

}


// ==========================================
// STAY SILENT
// ==========================================

function staySilent() {

    player.trust++;

    revealMark();

}


// ==========================================
// TOUCH WRIST
// ==========================================

function touchWrist() {

    player.trust++;

    revealMark();

}


// ==========================================
// LOOK BEHIND
// ==========================================

function lookBehind() {

    player.fear++;

    storyText.innerHTML = `

        <p>
            You slowly turn around.
        </p>

        <p>
            There is nobody there.
        </p>

        <p>
            You turn back.
        </p>

        <p>
            The lion is gone.
        </p>

        <p class="dramatic">
            But something is burning against your wrist.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="revealMark()">

            Look at your wrist.

        </button>

    `;


    updateStats();
}


// ==========================================
// THE MARK
// ==========================================

function revealMark() {

    storyText.innerHTML = `

        <p>
            You look down.
        </p>

        <p>
            A golden symbol is appearing beneath
            your skin.
        </p>

        <p>
            It resembles the head of a lion
            surrounded by an ancient circle.
        </p>

        <p>
            You have never seen it before.
        </p>

        <p>
            Yet somehow...
        </p>

        <p class="dramatic">
            you recognise it.
        </p>

        <p>
            Somewhere across the city,
            an elderly woman suddenly opens her eyes.
        </p>

        <p>
            She looks toward the moon.
        </p>

        <p>
            "She's awakened."
        </p>

    `;


    choices.innerHTML = `

        <button onclick="chapterEnding()">

            Continue.

        </button>

    `;
}


// ==========================================
// CHAPTER ENDING
// ==========================================

function chapterEnding() {

    let endingMessage = "";


    if (
        player.courage >
        player.fear &&
        player.courage >= player.curiosity
    ) {

        endingMessage = `
            You don't know what the mark means.
            But you know one thing.

            Whatever is coming...

            you will face it.
        `;

    }


    else if (
        player.curiosity >
        player.fear
    ) {

        endingMessage = `
            Questions race through your mind.

            Who was the lion?

            What does the symbol mean?

            And why did it call you
            "back"?
        `;

    }


    else {

        endingMessage = `
            You want to run.

            You want to forget tonight ever happened.

            But deep down, you know the truth.

            The darkness has already found you.
        `;
    }


    storyText.innerHTML = `

        <p class="dramatic">
            CHAPTER ONE COMPLETE
        </p>

        <p>
            ${endingMessage}
        </p>

        <p>
            Somewhere in the darkness,
            something watches.
        </p>

        <p class="dramatic">
            And it knows your name.
        </p>

    `;


    choices.innerHTML = `

        <button onclick="location.reload()">

            Restart Chapter One

        </button>

    `;


    updateStats();
}


// ==========================================
// START GAME
// ==========================================

startGame();

updateStats();
