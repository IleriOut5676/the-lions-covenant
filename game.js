alert("GAME.JS IS WORKING!");

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
    fear: 0
};


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");

const courageDisplay = document.getElementById("courage");
const curiosityDisplay = document.getElementById("curiosity");
const trustDisplay = document.getElementById("trust");
const fearDisplay = document.getElementById("fear");


// ==========================================
// UPDATE STATS
// ==========================================

function updateStats() {

    courageDisplay.textContent = player.courage;
    curiosityDisplay.textContent = player.curiosity;
    trustDisplay.textContent = player.trust;
    fearDisplay.textContent = player.fear;
}


// ==========================================
// DISPLAY STORY
// ==========================================

function showStory(content) {

    storyText.innerHTML = content;
}


// ==========================================
// CREATE CHOICE BUTTON
// ==========================================

function createChoice(text, action) {

    const button = document.createElement("button");

    button.textContent = text;

    button.addEventListener("click", action);

    choices.appendChild(button);
}


// ==========================================
// CLEAR CHOICES
// ==========================================

function clearChoices() {

    choices.innerHTML = "";
}


// ==========================================
// START GAME
// ==========================================

function startGame() {

    showStory(`

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

    `);


    clearChoices();


    createChoice(
        "Keep walking. I refuse to let fear control me.",
        () => firstChoice("courage")
    );


    createChoice(
        "Stop and listen. Something about the sound feels familiar.",
        () => firstChoice("curiosity")
    );


    createChoice(
        "Turn around and run.",
        () => firstChoice("fear")
    );


    updateStats();
}


// ==========================================
// FIRST CHOICE
// ==========================================

function firstChoice(choice) {

    if (choice === "courage") {

        player.courage += 1;

        updateStats();

        courageousEncounter();

    }


    else if (choice === "curiosity") {

        player.curiosity += 1;

        updateStats();

        curiousEncounter();

    }


    else if (choice === "fear") {

        player.fear += 1;

        updateStats();

        fearfulEncounter();

    }
}


// ==========================================
// COURAGE PATH
// ==========================================

function courageousEncounter() {

    showStory(`

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

    `);


    clearChoices();


    createChoice(
        "Stand your ground.",
        courageChoice
    );


    createChoice(
        'Ask, "Why are you following me?"',
        speakToLion
    );
}


// ==========================================
// CURIOSITY PATH
// ==========================================

function curiousEncounter() {

    showStory(`

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

    `);


    clearChoices();


    createChoice(
        "Go closer.",
        investigateLion
    );


    createChoice(
        "Stay hidden and observe.",
        watchLion
    );
}


// ==========================================
// FEAR PATH
// ==========================================

function fearfulEncounter() {

    showStory(`

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

    `);


    clearChoices();


    createChoice(
        "Face the lion.",
        faceFear
    );


    createChoice(
        'Whisper, "Please don\'t hurt me."',
        begLion
    );
}


// ==========================================
// COURAGE BRANCH
// ==========================================

function courageChoice() {

    player.courage += 1;

    updateStats();


    showStory(`

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

    `);


    clearChoices();


    createChoice(
        "Reach toward it.",
        lionVoice
    );
}


// ==========================================
// SPEAK TO LION
// ==========================================

function speakToLion() {

    player.curiosity += 1;

    updateStats();

    lionVoice();
}


// ==========================================
// INVESTIGATE
// ==========================================

function investigateLion() {

    player.curiosity += 1;

    updateStats();


    showStory(`

        <p>
            You step between the trees.
        </p>

        <p>
            The golden shape becomes clearer.
        </p>

        <p>
            A lion stands beneath an enormous old tree.
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

    `);


    clearChoices();


    createChoice(
        "Look at your wrist.",
        touchWrist
    );
}


// ==========================================
// WATCH LION
// ==========================================

function watchLion() {

    player.curiosity += 1;

    updateStats();


    showStory(`

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

    `);


    clearChoices();


    createChoice(
        "Slowly turn around.",
        lookBehind
    );
}


// ==========================================
// FEAR BRANCH
// ==========================================

function faceFear() {

    player.courage += 1;

    updateStats();


    showStory(`

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

    `);


    clearChoices();


    createChoice(
        'Ask, "What are you?"',
        lionVoice
    );
}


// ==========================================
// BEGGING
// ==========================================

function begLion() {

    player.fear += 1;

    updateStats();


    showStory(`

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

    `);


    clearChoices();


    createChoice(
        "Listen.",
        lionVoice
    );
}


// ==========================================
// LION VOICE
// ==========================================

function lionVoice() {

    player.trust += 1;

    updateStats();


    showStory(`

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

    `);


    clearChoices();


    createChoice(
        '"Back from where?"',
        askQuestion
    );


    createChoice(
        "Say nothing.",
        staySilent
    );
}


// ==========================================
// ASK QUESTION
// ==========================================

function askQuestion() {

    player.curiosity += 1;

    updateStats();

    revealMark();
}


// ==========================================
// STAY SILENT
// ==========================================

function staySilent() {

    player.trust += 1;

    updateStats();

    revealMark();
}


// ==========================================
// TOUCH WRIST
// ==========================================

function touchWrist() {

    player.trust += 1;

    updateStats();

    revealMark();
}


// ==========================================
// LOOK BEHIND
// ==========================================

function lookBehind() {

    player.fear += 1;

    updateStats();


    showStory(`

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

    `);


    clearChoices();


    createChoice(
        "Look at your wrist.",
        revealMark
    );
}


// ==========================================
// THE MARK
// ==========================================

// ==========================================
// THE MARK
// ==========================================

function revealMark() {

    let reaction = "";

    if (
        player.courage >= player.curiosity &&
        player.courage >= player.fear &&
        player.courage >= player.trust
    ) {

        reaction = `
            <p>
                Your first instinct is not to run.
            </p>

            <p>
                Somehow, standing beneath the moon,
                you feel strangely certain.
            </p>

            <p class="dramatic">
                You are not supposed to be afraid.
            </p>
        `;

    }

    else if (
        player.curiosity >= player.courage &&
        player.curiosity >= player.fear &&
        player.curiosity >= player.trust
    ) {

        reaction = `
            <p>
                Your mind races with questions.
            </p>

            <p>
                What is happening to you?
            </p>

            <p>
                Why does this symbol feel familiar?
            </p>

            <p class="dramatic">
                And why does some part of you want to understand it?
            </p>
        `;

    }

    else if (
        player.trust >= player.courage &&
        player.trust >= player.curiosity &&
        player.trust >= player.fear
    ) {

        reaction = `
            <p>
                You should be terrified.
            </p>

            <p>
                Yet something inside you tells you
                that this is not an attack.
            </p>

            <p class="dramatic">
                Somehow, you feel that you have been here before.
            </p>
        `;

    }

    else {

        reaction = `
            <p>
                Panic rises in your chest.
            </p>

            <p>
                You want to tear the strange symbol
                from your skin.
            </p>

            <p class="dramatic">
                But the mark only burns brighter.
            </p>
        `;
    }


    showStory(`

        <p>
            You look down.
        </p>

        <p>
            A golden symbol is appearing beneath your skin.
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

        ${reaction}

        <p>
            Somewhere across the city,
            an elderly woman suddenly opens her eyes.
        </p>

        <p>
            She looks toward the moon.
        </p>

        <p class="dramatic">
            "She's awakened."
        </p>

    `);


    clearChoices();


    createChoice(
        "Continue.",
        chapterEnding
    );
}

    showStory(`

        <p>
            You look down.
        </p>

        <p>
            A golden symbol is appearing beneath your skin.
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

    `);


    clearChoices();


    createChoice(
        "Continue.",
        chapterEnding
    );
}


// ==========================================
// CHAPTER ENDING
// ==========================================

// ==========================================
// THE STRANGER
// ==========================================

function meetTheStranger() {

    player.courage += 1;

    updateStats();


    showStory(`

        <p>
            You turn around.
        </p>

        <p>
            A man is standing beneath the streetlight.
        </p>

        <p>
            Tall.
        </p>

        <p>
            Completely still.
        </p>

        <p>
            He is dressed in black,
            but somehow the darkness around him
            seems darker than it should be.
        </p>

        <p>
            His eyes meet yours.
        </p>

        <p class="dramatic">
            He looks at your wrist.
        </p>

        <p>
            His expression changes.
        </p>

        <p>
            Only for a second.
        </p>

        <p>
            Recognition.
        </p>

        <p>
            Then it disappears.
        </p>

    `);


    clearChoices();


    createChoice(
        "Ask him who he is.",
        askStranger
    );


    createChoice(
        "Demand to know why he was following you.",
        confrontStranger
    );


    createChoice(
        "Say nothing and watch him.",
        observeStranger
        
    );
}
// ==========================================
// ASK THE STRANGER
// ==========================================

function askStranger() {

    player.curiosity += 1;

    updateStats();


    showStory(`

        <p>
            "Who are you?"
        </p>

        <p>
            The man doesn't answer immediately.
        </p>

        <p>
            His gaze remains fixed on your wrist.
        </p>

        <p>
            "The better question,"
            he finally says,
            "is who are you?"
        </p>

        <p>
            Your stomach drops.
        </p>

        <p>
            "I asked you first."
        </p>

        <p class="dramatic">
            A faint smile touches his lips.
        </p>

        <p>
            "I know."
        </p>

    `);


    clearChoices();


    createChoice(
        "Ask him what he knows about the mark.",
        askAboutMark
    );


    createChoice(
        "Tell him to leave you alone.",
        rejectStranger
    );
}
// ==========================================
// CONFRONT THE STRANGER
// ==========================================

function confrontStranger() {

    player.courage += 1;

    updateStats();


    showStory(`

        <p>
            "Why were you following me?"
        </p>

        <p>
            The man's expression doesn't change.
        </p>

        <p>
            "I wasn't."
        </p>

        <p>
            You narrow your eyes.
        </p>

        <p>
            "Then what are you doing here?"
        </p>

        <p>
            He takes one step closer.
        </p>

        <p class="dramatic">
            "Waiting for you."
        </p>

        <p>
            The words send a strange chill through you.
        </p>

    `);


    clearChoices();


    createChoice(
        "Ask him what he means.",
        askAboutMark
    );


    createChoice(
        "Step away from him.",
        rejectStranger
    );
}
// ==========================================
// OBSERVE THE STRANGER
// ==========================================

function observeStranger() {

    player.curiosity += 1;

    updateStats();


    showStory(`

        <p>
            You don't answer.
        </p>

        <p>
            You simply watch him.
        </p>

        <p>
            He watches you back.
        </p>

        <p>
            Neither of you moves.
        </p>

        <p>
            Then his eyes flick toward the darkness
            where the lion disappeared.
        </p>

        <p class="dramatic">
            "So it chose you."
        </p>

        <p>
            Your blood runs cold.
        </p>

    `);


    clearChoices();


    createChoice(
        "Ask him what he means.",
        askAboutMark
    );
}
// ==========================================
// ASK ABOUT THE MARK
// ==========================================

function askAboutMark() {

    player.curiosity += 1;

    updateStats();


    showStory(`

        <p>
            "What do you know about this?"
        </p>

        <p>
            You hold up your wrist.
        </p>

        <p>
            The golden symbol is still glowing.
        </p>

        <p>
            For the first time,
            the man's calm expression disappears.
        </p>

        <p>
            He looks almost concerned.
        </p>

        <p class="dramatic">
            "You shouldn't have awakened yet."
        </p>

        <p>
            "Awakened?"
        </p>

        <p>
            He says nothing.
        </p>

        <p>
            You take a step toward him.
        </p>

        <p>
            "What does that mean?"
        </p>

        <p>
            He looks directly into your eyes.
        </p>

        <p class="dramatic">
            "It means they know you're alive."
        </p>

    `);


    clearChoices();


    createChoice(
        "Who are 'they'?",
        strangerWarning
    );


    createChoice(
        "Tell him you don't believe him.",
        rejectStranger
    );
}
// ==========================================
// STRANGER'S WARNING
// ==========================================

function strangerWarning() {

    player.fear += 1;

    updateStats();


    showStory(`

        <p>
            "Who are they?"
        </p>

        <p>
            The man looks toward the road.
        </p>

        <p>
            His jaw tightens.
        </p>

        <p>
            "People who have been waiting
            a very long time."
        </p>

        <p>
            "For me?"
        </p>

        <p>
            He looks back at you.
        </p>

        <p class="dramatic">
            "For you."
        </p>

        <p>
            Before you can ask another question,
            headlights appear in the distance.
        </p>

        <p>
            The man's entire posture changes.
        </p>

        <p>
            "You need to go."
        </p>

        <p>
            "Why?"
        </p>

        <p class="dramatic">
            "Because they're here."
        </p>

    `);


    clearChoices();


    createChoice(
        "Trust him and leave.",
        trustStranger
    );


    createChoice(
        "Stay and find out who is coming.",
        stayBehind
    );
}
// ==========================================
// TRUST THE STRANGER
// ==========================================

function trustStranger() {

    player.trust += 1;

    updateStats();


    showStory(`

        <p>
            You don't understand what is happening.
        </p>

        <p>
            You don't understand who this man is.
        </p>

        <p>
            But something tells you to trust him.
        </p>

        <p>
            You take a step toward him.
        </p>

        <p>
            He nods once.
        </p>

        <p class="dramatic">
            "Good."
        </p>

        <p>
            Then he turns toward the darkness.
        </p>

        <p>
            "Stay close."
        </p>

    `);


    clearChoices();


    createChoice(
        "Follow him.",
        strangerLeaves
    );
}
// ==========================================
// CHAPTER ENDING
// ==========================================

function chapterEnding() {

    let endingMessage = "";

    if (
        player.courage > player.fear &&
        player.courage >= player.curiosity
    ) {

        endingMessage = `
            <p>
                You don't know what the mark means.
            </p>

            <p>
                But you know one thing.
            </p>

            <p class="dramatic">
                Whatever is coming...
                you will face it.
            </p>
        `;

    }

    else if (
        player.curiosity > player.fear
    ) {

        endingMessage = `
            <p>
                Questions race through your mind.
            </p>

            <p>
                Who was the lion?
            </p>

            <p>
                What does the symbol mean?
            </p>

            <p>
                And why did it call you
                "back"?
            </p>
        `;

    }

    else {

        endingMessage = `
            <p>
                You want to run.
            </p>

            <p>
                You want to forget tonight ever happened.
            </p>

            <p>
                But deep down, you know the truth.
            </p>

            <p class="dramatic">
                The darkness has already found you.
            </p>
        `;
    }


    showStory(`

        ${endingMessage}

        <p>
            You take one final look at the golden mark
            burning against your skin.
        </p>

        <p>
            Then you hear something behind you.
        </p>

        <p class="dramatic">
            Footsteps.
        </p>

        <p>
            Slow.
        </p>

        <p>
            Calm.
        </p>

        <p>
            Getting closer.
        </p>

    `);


    clearChoices();


    createChoice(
        "Turn around.",
        meetTheStranger
    );


    createChoice(
        "Run.",
        runFromStranger
    );
}
    let endingMessage = "";


    if (
        player.courage > player.fear &&
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
        player.curiosity > player.fear
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


    showStory(`

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

    `);


    clearChoices();


    createChoice(
        "Restart Chapter One",
        restartGame
    );


    updateStats();
}


// ==========================================
// RESTART GAME
// ==========================================

function restartGame() {

    player.courage = 0;
    player.curiosity = 0;
    player.trust = 0;
    player.fear = 0;

    updateStats();

    startGame();
}


// ==========================================
// START THE GAME
// ==========================================

startGame();

