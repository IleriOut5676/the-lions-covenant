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
// THE LION SPEAKS
// ==========================================

function lionVoice() {

    showStory(`

        <p>
            You wait.
        </p>

        <p>
            The lion doesn't move.
        </p>

        <p>
            Then the voice returns.
        </p>

        <p class="dramatic">
            "You finally came back."
        </p>

        <p>
            Your breath catches.
        </p>

        <p>
            You look around.
        </p>

        <p>
            There is no one there.
        </p>

        <p>
            Yet somehow, you know the voice
            is speaking directly to you.
        </p>

    `);

    clearChoices();

    createChoice(
        'Ask, "Who are you?"',
        askQuestion
    );

    createChoice(
        "Stay silent.",
        staySilent
    );
}


// ==========================================
// ASK THE VOICE A QUESTION
// ==========================================

function askQuestion() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "Who are you?"
        </p>

        <p>
            The lion watches you.
        </p>

        <p>
            The voice answers inside your mind.
        </p>

        <p class="dramatic">
            "That is the wrong question."
        </p>

        <p>
            Your stomach twists.
        </p>

        <p>
            "Then what should I ask?"
        </p>

        <p>
            Silence.
        </p>

        <p>
            Then—
        </p>

        <p class="dramatic">
            "Ask who you are."
        </p>

    `);

    clearChoices();

    createChoice(
        "Look at your wrist.",
        touchWrist
    );

    createChoice(
        "Look behind you.",
        lookBehind
    );
}


// ==========================================
// STAY SILENT
// ==========================================

function staySilent() {

    player.trust += 1;

    updateStats();

    showStory(`

        <p>
            You say nothing.
        </p>

        <p>
            Somehow, the silence feels like
            an answer of its own.
        </p>

        <p>
            The lion steps closer.
        </p>

        <p>
            Your instincts tell you to run.
        </p>

        <p>
            But another feeling rises beneath
            the fear.
        </p>

        <p class="dramatic">
            Recognition.
        </p>

        <p>
            The voice returns.
        </p>

        <p>
            "You remember more than you think."
        </p>

    `);

    clearChoices();

    createChoice(
        "Look at your wrist.",
        touchWrist
    );
}


// ==========================================
// TOUCH THE WRIST
// ==========================================

function touchWrist() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            Slowly, you raise your hand.
        </p>

        <p>
            Your wrist feels strangely warm.
        </p>

        <p>
            You touch the place where
            the lion's symbol appeared.
        </p>

        <p class="dramatic">
            Heat shoots through your arm.
        </p>

        <p>
            You gasp.
        </p>

        <p>
            Golden light spreads beneath your skin.
        </p>

        <p>
            The lion immediately lowers its head.
        </p>

        <p>
            Almost like it is bowing.
        </p>

    `);

    clearChoices();

    createChoice(
        "Look at the mark.",
        revealMark
    );
}


// ==========================================
// LOOK BEHIND YOU
// ==========================================

function lookBehind() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            Slowly, you turn around.
        </p>

        <p>
            At first, there is nothing.
        </p>

        <p>
            Then you notice someone standing
            beneath a streetlight.
        </p>

        <p>
            A man.
        </p>

        <p>
            Tall.
        </p>

        <p>
            Completely still.
        </p>

        <p>
            You cannot see his face clearly.
        </p>

        <p class="dramatic">
            But he is watching you.
        </p>

    `);

    clearChoices();

    createChoice(
        "Look at the mark on your wrist.",
        revealMark
    );
}


// ==========================================
// THE GOLDEN MARK
// ==========================================

function revealMark() {

    let reaction = "";

    if (
        player.courage >= player.curiosity &&
        player.courage >= player.fear
    ) {

        reaction = `

            <p>
                You stare at the symbol without
                allowing yourself to step back.
            </p>

            <p>
                Fear is there.
            </p>

            <p>
                But it doesn't control you.
            </p>

            <p class="dramatic">
                Somehow, you feel ready.
            </p>

        `;
    }

    else if (player.curiosity >= player.fear) {

        reaction = `

            <p>
                A thousand questions race
                through your mind.
            </p>

            <p>
                Where did the mark come from?
            </p>

            <p>
                Why does the lion recognise you?
            </p>

            <p>
                And who is the man watching
                from the shadows?
            </p>

        `;
    }

    else {

        reaction = `

            <p>
                Your breathing becomes shallow.
            </p>

            <p>
                You want to cover your wrist,
                but your hand refuses to move.
            </p>

            <p>
                The golden symbol pulses beneath
                your skin.
            </p>

            <p class="dramatic">
                Something has awakened.
            </p>

        `;
    }

    showStory(`

        <p>
            You stare at your wrist.
        </p>

        <p>
            The symbol is unmistakable.
        </p>

        <p class="dramatic">
            A golden lion.
        </p>

        ${reaction}

        <p>
            Somewhere in the distance,
            an elderly woman's voice whispers:
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


// ==========================================
// END OF THE FIRST SECTION OF CHAPTER ONE
// ==========================================

// ==========================================
// CHAPTER ONE ENDING
// ==========================================

function chapterEnding() {

    let ending = "";

    if (
        player.courage >= player.curiosity &&
        player.courage >= player.fear
    ) {

        ending = `

            <p>
                You refuse to run.
            </p>

            <p>
                Whatever is happening,
                you are going to face it.
            </p>

            <p class="dramatic">
                You have never been more certain
                of anything.
            </p>

        `;
    }

    else if (player.curiosity >= player.fear) {

        ending = `

            <p>
                Your mind is filled with questions.
            </p>

            <p>
                You know there is a truth hidden
                beneath everything that just happened.
            </p>

            <p class="dramatic">
                And you intend to find it.
            </p>

        `;
    }

    else {

        ending = `

            <p>
                Every instinct tells you to leave.
            </p>

            <p>
                But deep down, you already know
                that running will not make this disappear.
            </p>

            <p class="dramatic">
                Something has found you.
            </p>

        `;
    }

    showStory(`

        <p class="chapter">
            CHAPTER ONE
        </p>

        <h2>
            The Awakening
        </h2>

        ${ending}

        <p>
            You take one final look at the lion.
        </p>

        <p>
            When you look toward the streetlight again,
            the mysterious man is gone.
        </p>

        <p>
            Or at least...
        </p>

        <p class="dramatic">
            You think he is.
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


// ==========================================
// THE MYSTERIOUS STRANGER
// ==========================================

function meetTheStranger() {

    showStory(`

        <p>
            You turn around.
        </p>

        <p>
            The street is empty.
        </p>

        <p>
            The lion is gone.
        </p>

        <p>
            For a moment, you wonder if you imagined
            everything.
        </p>

        <p>
            Then you hear footsteps.
        </p>

        <p>
            Slow.
        </p>

        <p>
            Deliberate.
        </p>

        <p class="dramatic">
            The man from the streetlight steps
            into the moonlight.
        </p>

        <p>
            He is dressed completely in black.
        </p>

        <p>
            His expression is calm.
        </p>

        <p>
            Almost too calm for someone who has just
            watched a lion appear in the middle of
            Johannesburg.
        </p>

        <p>
            His eyes move from your face...
            to your wrist.
        </p>

        <p class="dramatic">
            He knows about the mark.
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
// RUN FROM THE STRANGER
// ==========================================

function runFromStranger() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You don't wait for an explanation.
        </p>

        <p>
            You run.
        </p>

        <p>
            Your feet carry you down the street
            as fast as they can.
        </p>

        <p>
            You don't stop.
        </p>

        <p>
            You don't look back.
        </p>

        <p>
            Then you hear his voice.
        </p>

        <p class="dramatic">
            "You really don't remember me?"
        </p>

        <p>
            You freeze.
        </p>

        <p>
            You slowly turn around.
        </p>

        <p>
            He is standing several metres away.
        </p>

        <p>
            Somehow...
            he knows your name.
        </p>

    `);

    clearChoices();

    createChoice(
        "Face the lion.",
        strangerLeaves
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
            You take a careful step toward him.
        </p>

        <p>
            "Who are you?"
        </p>

        <p>
            The stranger studies you.
        </p>

        <p>
            For a moment, he says nothing.
        </p>

        <p>
            Then his eyes narrow.
        </p>

        <p class="dramatic">
            "That's what you want to know?"
        </p>

        <p>
            His voice is quiet.
        </p>

        <p>
            Almost familiar.
        </p>

        <p>
            "The better question is...
            who are you?"
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask him about the mark.",
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
            You step forward.
        </p>

        <p>
            "You've been following me."
        </p>

        <p>
            The stranger doesn't deny it.
        </p>

        <p>
            Instead, he looks at you as though
            he has been waiting for this moment
            for years.
        </p>

        <p class="dramatic">
            "Waiting for you."
        </p>

        <p>
            Your heart skips.
        </p>

        <p>
            "Why?"
        </p>

        <p>
            He glances at your wrist.
        </p>

        <p>
            "Because you were never supposed
            to awaken alone."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask him about the mark.",
        askAboutMark
    );

    createChoice(
        "Tell him to leave.",
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
            You say nothing.
        </p>

        <p>
            You simply watch him.
        </p>

        <p>
            He seems completely unafraid.
        </p>

        <p>
            His attention remains fixed
            on your wrist.
        </p>

        <p>
            Then he quietly says:
        </p>

        <p class="dramatic">
            "So it chose you."
        </p>

        <p>
            You frown.
        </p>

        <p>
            "What chose me?"
        </p>

        <p>
            He doesn't answer.
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask him about the mark.",
        askAboutMark
    );
}


// ==========================================
// REJECT THE STRANGER
// ==========================================

function rejectStranger() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            "I don't know who you think I am,"
            you say,
            "but you need to leave me alone."
        </p>

        <p>
            The stranger's expression doesn't change.
        </p>

        <p>
            He takes one step backward.
        </p>

        <p class="dramatic">
            "Not yet."
        </p>

        <p>
            Before you can respond,
            he disappears into the darkness.
        </p>

        <p>
            You stare after him.
        </p>

        <p>
            The street is completely empty.
        </p>

    `);

    clearChoices();

    createChoice(
        "Look at the mark.",
        strangerLeaves
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
            You raise your wrist.
        </p>

        <p>
            "What is this?"
        </p>

        <p>
            The stranger's expression finally changes.
        </p>

        <p>
            Something almost like fear crosses
            his face.
        </p>

        <p class="dramatic">
            "You shouldn't have awakened yet."
        </p>

        <p>
            Your stomach drops.
        </p>

        <p>
            "Awakened to what?"
        </p>

        <p>
            He looks toward the darkness
            behind you.
        </p>

        <p>
            "It means they know you're alive."
        </p>

        <p>
            You stare at him.
        </p>

        <p>
            "Who are they?"
        </p>

        <p>
            He doesn't answer.
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask what he means.",
        strangerWarning
    );

    createChoice(
        "Tell him to leave you alone.",
        rejectStranger
    );
}
// ==========================================
// THE WARNING
// ==========================================

function strangerWarning() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            The stranger looks directly into your eyes.
        </p>

        <p>
            "They've been waiting for you."
        </p>

        <p>
            "Who?"
        </p>

        <p>
            His jaw tightens.
        </p>

        <p>
            Before he can answer,
            headlights appear at the end of the road.
        </p>

        <p>
            A vehicle is approaching.
        </p>

        <p>
            The stranger looks toward it.
        </p>

        <p class="dramatic">
            "You need to decide now."
        </p>

        <p>
            "Come with me..."
        </p>

        <p>
            "...or stay here."
        </p>

    `);

    clearChoices();

    createChoice(
        "Trust the stranger.",
        trustStranger
    );

    createChoice(
        "Stay behind.",
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
            You look at the approaching headlights.
        </p>

        <p>
            Then you look back at the stranger.
        </p>

        <p>
            Every sensible part of you says
            not to trust him.
        </p>

        <p>
            But something deeper tells you
            that he is telling the truth.
        </p>

        <p class="dramatic">
            You take a step toward him.
        </p>

        <p>
            He nods.
        </p>

        <p>
            "Good."
        </p>

        <p>
            "We don't have much time."
        </p>

    `);

    clearChoices();

    createChoice(
        "Follow him.",
        strangerLeaves
    );
}


// ==========================================
// STAY BEHIND
// ==========================================

function stayBehind() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You shake your head.
        </p>

        <p>
            "I'm not going anywhere with a stranger."
        </p>

        <p>
            The man studies you.
        </p>

        <p>
            For the first time,
            something almost like a smile
            touches his face.
        </p>

        <p class="dramatic">
            "You really don't remember."
        </p>

        <p>
            "Remember what?"
        </p>

        <p>
            He takes a step closer.
        </p>

        <p>
            "Everything."
        </p>

    `);

    clearChoices();

    createChoice(
        "Demand an explanation.",
        strangerLeaves
    );
}


// ==========================================
// THE STRANGER LEAVES
// ==========================================

function strangerLeaves() {

    showStory(`

        <p>
            The stranger looks at you one last time.
        </p>

        <p>
            For a moment, neither of you speaks.
        </p>

        <p>
            Then he steps backward.
        </p>

        <p>
            The darkness seems to swallow him.
        </p>

        <p>
            You blink.
        </p>

        <p class="dramatic">
            He's gone.
        </p>

        <p>
            You look down at your wrist.
        </p>

        <p>
            The golden mark is still there.
        </p>

        <p>
            It is glowing brighter now.
        </p>

        <p>
            Then you hear it.
        </p>

        <p class="dramatic">
            A roar.
        </p>

        <p>
            You turn toward the sound.
        </p>

        <p>
            The lion is standing at the end
            of the road.
        </p>

        <p>
            Its golden eyes meet yours.
        </p>

        <p>
            And somehow, you understand.
        </p>

        <p class="dramatic">
            Tonight wasn't the beginning.
        </p>

        <p class="dramatic">
            It was the return.
        </p>

    `);

    clearChoices();

    createChoice(
        "End Chapter One",
        chapterFinalEnding
    );
}


// ==========================================
// FINAL CHAPTER ONE SCREEN
// ==========================================

// ==========================================
// CHAPTER ONE FINAL SCREEN
// ==========================================

function chapterFinalEnding() {

    showStory(`

        <p class="chapter">
            CHAPTER ONE
        </p>

        <h2>
            The Return
        </h2>

        <p>
            The city continues moving around you.
        </p>

        <p>
            Cars pass in the distance.
        </p>

        <p>
            Johannesburg is still awake.
        </p>

        <p>
            But your world has changed.
        </p>

        <p>
            You look at the golden mark on your wrist.
        </p>

        <p>
            You don't know what it means.
        </p>

        <p>
            You don't know who the stranger was.
        </p>

        <p>
            You don't know why the lion recognised you.
        </p>

        <p>
            But one thing is certain.
        </p>

        <p class="dramatic">
            Someone has been waiting for you.
        </p>

        <p>
            And now...
        </p>

        <p class="dramatic">
            they know you've returned.
        </p>

        <br>

        <p>
            <strong>
                END OF CHAPTER ONE
            </strong>
        </p>

    `);

    clearChoices();

    createChoice(
        "Begin Chapter Two",
        chapterTwoStart
    );

    createChoice(
        "Restart Chapter One",
        restartGame
    );
}

    showStory(`

        <p class="chapter">
            CHAPTER ONE
        </p>

        <h2>
            The Return
        </h2>

        <p>
            The city continues moving around you.
        </p>

        <p>
            Cars pass in the distance.
        </p>

        <p>
            Johannesburg is still awake.
        </p>

        <p>
            But your world has changed.
        </p>

        <p>
            You look at the golden mark on your wrist.
        </p>

        <p>
            You don't know what it means.
        </p>

        <p>
            You don't know who the stranger was.
        </p>

        <p>
            You don't know why the lion recognised you.
        </p>

        <p>
            But one thing is certain.
        </p>

        <p class="dramatic">
            Someone has been waiting for you.
        </p>

        <p>
            And now...
        </p>

        <p class="dramatic">
            they know you've returned.
        </p>

        <br>

        <p>
            <strong>
                END OF CHAPTER ONE
            </strong>
        </p>

    `);

    clearChoices();

    createChoice(
        "Restart Chapter One",
        restartGame
    );



// ==========================================
// RESTART GAME
// ==========================================

// ==========================================
// CHAPTER TWO
// THE BLOODLINE
// ==========================================

function chapterTwoStart() {

    showStory(`

        <p class="chapter">
            CHAPTER TWO
        </p>

        <h2>
            The Bloodline
        </h2>

        <p>
            The next morning arrives quietly.
        </p>

        <p>
            Johannesburg wakes as though nothing
            happened.
        </p>

        <p>
            Cars fill the roads.
        </p>

        <p>
            People rush to work.
        </p>

        <p>
            Coffee shops open.
        </p>

        <p>
            Ordinary life continues.
        </p>

        <p>
            But you haven't slept.
        </p>

        <p>
            You sit on the edge of your bed,
            staring at your wrist.
        </p>

        <p class="dramatic">
            The golden lion is still there.
        </p>

        <p>
            You rub your wrist.
        </p>

        <p>
            Nothing happens.
        </p>

        <p>
            You breathe out slowly.
        </p>

        <p>
            Maybe last night was a dream.
        </p>

        <p>
            Maybe the lion wasn't real.
        </p>

        <p>
            Maybe the stranger wasn't real.
        </p>

        <p>
            Then your phone rings.
        </p>

        <p class="dramatic">
            UNKNOWN NUMBER
        </p>

        <p>
            You stare at the screen.
        </p>

    `);

    clearChoices();

    createChoice(
        "Answer the call.",
        answerUnknownCall
    );

    createChoice(
        "Ignore it.",
        ignoreUnknownCall
    );
}


// ==========================================
// ANSWER UNKNOWN CALL
// ==========================================

function answerUnknownCall() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You hesitate.
        </p>

        <p>
            Then you answer.
        </p>

        <p>
            "Hello?"
        </p>

        <p>
            Silence.
        </p>

        <p>
            You pull the phone away from your ear.
        </p>

        <p>
            "Hello?"
        </p>

        <p>
            Finally, a woman's voice speaks.
        </p>

        <p class="dramatic">
            "Do not trust the man who found you."
        </p>

        <p>
            Your heart stops.
        </p>

        <p>
            You sit up straight.
        </p>

        <p>
            "Who is this?"
        </p>

        <p>
            The woman doesn't answer.
        </p>

        <p>
            Instead, she whispers:
        </p>

        <p class="dramatic">
            "And whatever you do..."
        </p>

        <p class="dramatic">
            "Don't go home."
        </p>

        <p>
            The call ends.
        </p>

    `);

    clearChoices();

    createChoice(
        "Call the number back.",
        callBack
    );

    createChoice(
        "Look around the room.",
        lookAroundRoom
    );
}


// ==========================================
// IGNORE UNKNOWN CALL
// ==========================================

function ignoreUnknownCall() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You stare at the phone.
        </p>

        <p>
            You don't know who is calling.
        </p>

        <p>
            And after everything that happened
            last night...
        </p>

        <p>
            you're not taking any chances.
        </p>

        <p>
            You let the call ring.
        </p>

        <p>
            Once.
        </p>

        <p>
            Twice.
        </p>

        <p>
            Three times.
        </p>

        <p class="dramatic">
            Then it stops.
        </p>

        <p>
            You breathe a sigh of relief.
        </p>

        <p>
            Your phone immediately vibrates again.
        </p>

        <p>
            This time, it isn't a call.
        </p>

        <p class="dramatic">
            You have a new message.
        </p>

    `);

    clearChoices();

    createChoice(
        "Read the message.",
        readUnknownMessage
    );
}


// ==========================================
// CALL BACK
// ==========================================

function callBack() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You immediately call the number back.
        </p>

        <p>
            One ring.
        </p>

        <p>
            Two.
        </p>

        <p>
            Three.
        </p>

        <p>
            Then someone answers.
        </p>

        <p>
            But nobody speaks.
        </p>

        <p>
            You can hear breathing.
        </p>

        <p>
            Then—
        </p>

        <p class="dramatic">
            "You should have listened."
        </p>

        <p>
            The line goes dead.
        </p>

    `);

    clearChoices();

    createChoice(
        "Look around the room.",
        lookAroundRoom
    );
}


// ==========================================
// READ UNKNOWN MESSAGE
// ==========================================

function readUnknownMessage() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            Your hands feel cold.
        </p>

        <p>
            You open the message.
        </p>

        <p class="dramatic">
            DON'T GO HOME.
        </p>

        <p>
            You stare at the screen.
        </p>

        <p>
            Another message appears.
        </p>

        <p class="dramatic">
            THEY KNOW WHERE YOU ARE.
        </p>

        <p>
            Your heart begins to race.
        </p>

        <p>
            Then you hear something.
        </p>

        <p>
            A sound coming from outside.
        </p>

        <p class="dramatic">
            Three slow knocks.
        </p>

        <p>
            Someone is at your door.
        </p>

    `);

    clearChoices();

    createChoice(
        "Go to the door.",
        goToDoor
    );

    createChoice(
        "Stay completely silent.",
        staySilentAtHome
    );
}


// ==========================================
// LOOK AROUND THE ROOM
// ==========================================

function lookAroundRoom() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You slowly look around your room.
        </p>

        <p>
            Everything appears normal.
        </p>

        <p>
            Your clothes are where you left them.
        </p>

        <p>
            Your bag is beside the chair.
        </p>

        <p>
            Your curtains are closed.
        </p>

        <p>
            Nothing seems out of place.
        </p>

        <p>
            Then you notice something.
        </p>

        <p class="dramatic">
            Your bedroom window is open.
        </p>

        <p>
            You are certain you closed it last night.
        </p>

    `);

    clearChoices();

    createChoice(
        "Check the window.",
        checkWindow
    );

    createChoice(
        "Stay away from it.",
        stayAwayFromWindow
    );
}


// ==========================================
// GO TO THE DOOR
// ==========================================

function goToDoor() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You slowly walk toward the door.
        </p>

        <p>
            Your hand reaches for the handle.
        </p>

        <p>
            You stop.
        </p>

        <p>
            Something feels wrong.
        </p>

        <p>
            You look down.
        </p>

        <p class="dramatic">
            A golden glow is shining beneath the door.
        </p>

    `);

    clearChoices();

    createChoice(
        "Open the door.",
        openDoor
    );

    createChoice(
        "Step away.",
        stepAwayFromDoor
    );
}


// ==========================================
// STAY SILENT
// ==========================================

function staySilentAtHome() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You don't move.
        </p>

        <p>
            You don't breathe.
        </p>

        <p>
            You simply listen.
        </p>

        <p>
            Three knocks.
        </p>

        <p>
            Silence.
        </p>

        <p>
            Three more knocks.
        </p>

        <p class="dramatic">
            Then a voice speaks from the other side.
        </p>

        <p>
            A man's voice.
        </p>

        <p class="dramatic">
            "I know you're in there."
        </p>

    `);

    clearChoices();

    createChoice(
        "Open the door.",
        openDoor
    );

    createChoice(
        "Stay hidden.",
        stayHidden
    );
}


// ==========================================
// CHECK WINDOW
// ==========================================

function checkWindow() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You approach the window.
        </p>

        <p>
            You slowly pull the curtain aside.
        </p>

        <p>
            The street below is empty.
        </p>

        <p>
            Almost empty.
        </p>

        <p>
            Across the road stands a black vehicle.
        </p>

        <p>
            Its engine is running.
        </p>

        <p>
            Someone is sitting inside.
        </p>

        <p class="dramatic">
            Watching your building.
        </p>

    `);

    clearChoices();

    createChoice(
        "Look closer.",
        lookCloser
    );

    createChoice(
        "Move away from the window.",
        moveAway
    );
}


// ==========================================
// STAY AWAY FROM WINDOW
// ==========================================

function stayAwayFromWindow() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You decide not to go near the window.
        </p>

        <p>
            Something tells you that would be
            a very bad idea.
        </p>

        <p>
            You step away.
        </p>

        <p>
            Then your phone vibrates again.
        </p>

        <p class="dramatic">
            UNKNOWN NUMBER
        </p>

    `);

    clearChoices();

    createChoice(
        "Check the phone.",
        readUnknownMessage
    );
}


// ==========================================
// OPEN THE DOOR
// ==========================================

function openDoor() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You slowly open the door.
        </p>

        <p>
            The hallway is empty.
        </p>

        <p>
            No footsteps.
        </p>

        <p>
            No stranger.
        </p>

        <p>
            Nothing.
        </p>

        <p>
            You look down.
        </p>

        <p class="dramatic">
            A small golden envelope lies on the floor.
        </p>

        <p>
            Your name is written across it.
        </p>

    `);

    clearChoices();

    createChoice(
        "Pick up the envelope.",
        openEnvelope
    );

    createChoice(
        "Leave it where it is.",
        leaveEnvelope
    );
}


// ==========================================
// STEP AWAY FROM DOOR
// ==========================================

function stepAwayFromDoor() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You step away from the door.
        </p>

        <p>
            The golden light disappears.
        </p>

        <p>
            Silence fills the room.
        </p>

        <p>
            Then your phone vibrates.
        </p>

        <p>
            One new message.
        </p>

        <p class="dramatic">
            "You should have opened it."
        </p>

    `);

    clearChoices();

    createChoice(
        "Read the sender information.",
        checkSender
    );
}


// ==========================================
// STAY HIDDEN
// ==========================================

function stayHidden() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You move away from the door.
        </p>

        <p>
            You wait.
        </p>

        <p>
            Ten seconds.
        </p>

        <p>
            Twenty.
        </p>

        <p>
            Nothing.
        </p>

        <p>
            Then the handle slowly moves.
        </p>

        <p class="dramatic">
            Someone is trying to open the door.
        </p>

    `);

    clearChoices();

    createChoice(
        "Stay hidden.",
        stayHiddenAgain
    );

    createChoice(
        "Confront whoever is outside.",
        confrontDoor
    );
}


// ==========================================
// LOOK CLOSER
// ==========================================

function lookCloser() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You lean closer to the window.
        </p>

        <p>
            The driver turns his head.
        </p>

        <p>
            You cannot see his face.
        </p>

        <p>
            But you see something hanging
            from the rear-view mirror.
        </p>

        <p class="dramatic">
            A golden lion.
        </p>

        <p>
            Your wrist suddenly burns.
        </p>

    `);

    clearChoices();

    createChoice(
        "Touch the mark.",
        chapterTwoMark
    );
}


// ==========================================
// MOVE AWAY
// ==========================================

function moveAway() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You step away from the window.
        </p>

        <p>
            Your heart is pounding.
        </p>

        <p>
            Then you hear something behind you.
        </p>

        <p>
            A quiet voice.
        </p>

        <p class="dramatic">
            "You're finally remembering."
        </p>

    `);

    clearChoices();

    createChoice(
        "Turn around.",
        chapterTwoVoice
    );
}


// ==========================================
// OPEN ENVELOPE
// ==========================================

function openEnvelope() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You pick up the envelope.
        </p>

        <p>
            It feels strangely warm.
        </p>

        <p>
            You open it.
        </p>

        <p>
            Inside is a single photograph.
        </p>

        <p>
            You stare at it.
        </p>

        <p class="dramatic">
            The photograph is of you.
        </p>

        <p>
            But you are a child.
        </p>

        <p>
            Standing beside you is the lion.
        </p>

        <p>
            And beside the lion...
        </p>

        <p class="dramatic">
            is the mysterious stranger.
        </p>

    `);

    clearChoices();

    createChoice(
        "Turn the photograph over.",
        turnPhotograph
    );
}


// ==========================================
// LEAVE ENVELOPE
// ==========================================

function leaveEnvelope() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You decide not to touch it.
        </p>

        <p>
            You step backward.
        </p>

        <p>
            The golden envelope suddenly opens
            by itself.
        </p>

        <p class="dramatic">
            A photograph slides onto the floor.
        </p>

    `);

    clearChoices();

    createChoice(
        "Look at the photograph.",
        turnPhotograph
    );
}


// ==========================================
// CHECK SENDER
// ==========================================

function checkSender() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You check the message details.
        </p>

        <p>
            There is no phone number.
        </p>

        <p>
            No contact name.
        </p>

        <p>
            Just one word.
        </p>

        <p class="dramatic">
            COVENANT
        </p>

        <p>
            Your wrist begins to glow.
        </p>

    `);

    clearChoices();

    createChoice(
        "Touch the mark.",
        chapterTwoMark
    );
}


// ==========================================
// STAY HIDDEN AGAIN
// ==========================================

function stayHiddenAgain() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You remain completely still.
        </p>

        <p>
            The door handle stops moving.
        </p>

        <p>
            Silence.
        </p>

        <p>
            Then footsteps move away.
        </p>

        <p>
            You wait another minute.
        </p>

        <p>
            When you finally look toward the door,
            something has been left outside.
        </p>

        <p class="dramatic">
            A black envelope.
        </p>

    `);

    clearChoices();

    createChoice(
        "Open it.",
        openBlackEnvelope
    );
}


// ==========================================
// CONFRONT THE DOOR
// ==========================================

function confrontDoor() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You step toward the door.
        </p>

        <p>
            "Who is there?"
        </p>

        <p>
            Silence.
        </p>

        <p>
            You reach for the handle.
        </p>

        <p>
            Then a familiar voice answers.
        </p>

        <p class="dramatic">
            "It's me."
        </p>

        <p>
            The stranger.
        </p>

    `);

    clearChoices();

    createChoice(
        "Open the door.",
        openDoorForStranger
    );

    createChoice(
        "Ask how he found you.",
        questionStrangerAtDoor
    );
}

function restartGame() {

    player.courage = 0;
    player.curiosity = 0;
    player.trust = 0;
    player.fear = 0;

    updateStats();

    startGame();
}
// ==========================================
// OPEN THE DOOR FOR THE STRANGER
// ==========================================

function openDoorForStranger() {

    player.trust += 1;

    updateStats();

    showStory(`

        <p>
            You slowly open the door.
        </p>

        <p>
            The stranger is standing in the hallway.
        </p>

        <p>
            He looks exactly as he did last night.
        </p>

        <p>
            Calm.
        </p>

        <p>
            Completely in control.
        </p>

        <p>
            His eyes immediately move to your wrist.
        </p>

        <p class="dramatic">
            "It's getting stronger."
        </p>

        <p>
            "What is?"
        </p>

        <p>
            He looks directly at you.
        </p>

        <p class="dramatic">
            "Your bloodline."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask him what bloodline he means.",
        askBloodline
    );

    createChoice(
        "Ask why he keeps following you.",
        askWhyFollowing
    );
}


// ==========================================
// QUESTION THE STRANGER AT THE DOOR
// ==========================================

function questionStrangerAtDoor() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You don't open the door.
        </p>

        <p>
            "How did you find me?"
        </p>

        <p>
            Silence.
        </p>

        <p>
            Then the stranger answers.
        </p>

        <p class="dramatic">
            "Because I've been looking for you
            for a very long time."
        </p>

        <p>
            Your stomach twists.
        </p>

        <p>
            "Why?"
        </p>

        <p>
            He takes a breath.
        </p>

        <p>
            "Because your family disappeared."
        </p>

        <p>
            You stare at the door.
        </p>

        <p class="dramatic">
            "My family?"
        </p>

        <p>
            "You were told they were gone."
        </p>

        <p>
            "They weren't."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask about your family.",
        askBloodline
    );

    createChoice(
        "Open the door.",
        openDoorForStranger
    );
}


// ==========================================
// ASK ABOUT THE BLOODLINE
// ==========================================

function askBloodline() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "What bloodline?"
        </p>

        <p>
            The stranger looks at you carefully.
        </p>

        <p>
            He seems to be deciding
            how much to tell you.
        </p>

        <p>
            Finally, he says:
        </p>

        <p class="dramatic">
            "The Lion Bloodline."
        </p>

        <p>
            You almost laugh.
        </p>

        <p>
            "That's not real."
        </p>

        <p>
            His expression doesn't change.
        </p>

        <p>
            "You saw the lion last night."
        </p>

        <p>
            You say nothing.
        </p>

        <p>
            He continues.
        </p>

        <p class="dramatic">
            "And it recognised you."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask about the lion.",
        askAboutLion
    );

    createChoice(
        "Ask about your family.",
        askFamily
    );
}


// ==========================================
// ASK WHY HE IS FOLLOWING
// ==========================================

function askWhyFollowing() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            "Why do you keep following me?"
        </p>

        <p>
            The stranger looks away for a moment.
        </p>

        <p>
            Then he looks back at you.
        </p>

        <p class="dramatic">
            "Because someone is hunting you."
        </p>

        <p>
            Your heart drops.
        </p>

        <p>
            "Who?"
        </p>

        <p>
            "The people who destroyed your family."
        </p>

        <p>
            You stare at him.
        </p>

        <p>
            "What are you talking about?"
        </p>

        <p>
            He steps closer.
        </p>

        <p class="dramatic">
            "You don't remember because they made sure
            you wouldn't."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask what happened to your family.",
        askFamily
    );

    createChoice(
        "Ask who is hunting you.",
        askHunters
    );
}


// ==========================================
// ASK ABOUT THE LION
// ==========================================

function askAboutLion() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "The lion..."
        </p>

        <p>
            You swallow.
        </p>

        <p>
            "What is it?"
        </p>

        <p>
            The stranger looks toward the window.
        </p>

        <p>
            "It isn't simply an animal."
        </p>

        <p>
            You wait.
        </p>

        <p class="dramatic">
            "It is a guardian."
        </p>

        <p>
            "A guardian of what?"
        </p>

        <p>
            He looks at your wrist.
        </p>

        <p class="dramatic">
            "You."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask why it protects you.",
        askWhyProtected
    );

    createChoice(
        "Ask about the Covenant.",
        askCovenant
    );
}


// ==========================================
// ASK ABOUT FAMILY
// ==========================================

function askFamily() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "What happened to my family?"
        </p>

        <p>
            The stranger becomes unusually quiet.
        </p>

        <p>
            "Your family belonged to a hidden
            royal bloodline."
        </p>

        <p>
            You stare at him.
        </p>

        <p>
            "Royal?"
        </p>

        <p>
            He nods.
        </p>

        <p>
            "They protected something older
            than the kingdom itself."
        </p>

        <p>
            "What?"
        </p>

        <p class="dramatic">
            "The Covenant."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask what the Covenant is.",
        askCovenant
    );

    createChoice(
        "Ask what happened to your parents.",
        askParents
    );
}


// ==========================================
// ASK WHO IS HUNTING YOU
// ==========================================

function askHunters() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            "Who is hunting me?"
        </p>

        <p>
            The stranger's face becomes serious.
        </p>

        <p>
            "People who believe your blood
            belongs to them."
        </p>

        <p>
            You feel a chill.
        </p>

        <p>
            "Why?"
        </p>

        <p>
            He looks at your wrist.
        </p>

        <p class="dramatic">
            "Because you are the last heir."
        </p>

        <p>
            The words echo inside your mind.
        </p>

        <p>
            Last heir.
        </p>

        <p>
            Heir to what?
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask what you are heir to.",
        askCovenant
    );

    createChoice(
        "Ask who wants you.",
        askWhoWantsYou
    );
}


// ==========================================
// WHY THE LION PROTECTS YOU
// ==========================================

function askWhyProtected() {

    player.trust += 1;

    updateStats();

    showStory(`

        <p>
            "Why does the lion protect me?"
        </p>

        <p>
            The stranger studies you.
        </p>

        <p>
            "Because it made a promise."
        </p>

        <p>
            "To who?"
        </p>

        <p>
            He pauses.
        </p>

        <p class="dramatic">
            "To your mother."
        </p>

        <p>
            You stop breathing.
        </p>

        <p>
            Your mother.
        </p>

        <p>
            The woman you were told you lost
            when you were young.
        </p>

        <p>
            The golden mark on your wrist pulses.
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask about your mother.",
        askParents
    );

    createChoice(
        "Ask about the Covenant.",
        askCovenant
    );
}


// ==========================================
// THE COVENANT
// ==========================================

function askCovenant() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "What is the Covenant?"
        </p>

        <p>
            The stranger looks at you for a long moment.
        </p>

        <p>
            "It is an ancient promise."
        </p>

        <p>
            "Made between your bloodline
            and the guardians."
        </p>

        <p>
            "The lions."
        </p>

        <p>
            You look down at your wrist.
        </p>

        <p>
            The golden symbol begins to glow.
        </p>

        <p class="dramatic">
            "The Covenant protects the heir."
        </p>

        <p>
            "And you..."
        </p>

        <p class="dramatic">
            "...are the heir."
        </p>

    `);

    clearChoices();

    createChoice(
        "Accept the truth.",
        acceptBloodline
    );

    createChoice(
        "Tell him he's lying.",
        rejectBloodline
    );
}


// ==========================================
// ASK ABOUT PARENTS
// ==========================================

function askParents() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            "What happened to my parents?"
        </p>

        <p>
            The stranger looks down.
        </p>

        <p>
            "They tried to protect you."
        </p>

        <p>
            "From who?"
        </p>

        <p>
            "Everyone."
        </p>

        <p>
            You shake your head.
        </p>

        <p>
            "That doesn't make sense."
        </p>

        <p>
            He looks at you.
        </p>

        <p class="dramatic">
            "Because you were never supposed
            to know this young."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask what happened to them.",
        askParentsAgain
    );

    createChoice(
        "Ask about the Covenant.",
        askCovenant
    );
}


// ==========================================
// ASK WHO WANTS YOU
// ==========================================

function askWhoWantsYou() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            "Who wants me?"
        </p>

        <p>
            The stranger's expression hardens.
        </p>

        <p>
            "A rival bloodline."
        </p>

        <p>
            "They believe the Covenant
            should belong to them."
        </p>

        <p>
            "And they will do anything
            to claim it."
        </p>

        <p>
            You stare at him.
        </p>

        <p class="dramatic">
            "Including killing me?"
        </p>

        <p>
            He doesn't answer.
        </p>

        <p>
            His silence tells you enough.
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask how to protect yourself.",
        askProtection
    );

    createChoice(
        "Ask about the rival bloodline.",
        askRival
    );
}


// ==========================================
// ASK ABOUT MOTHER
// ==========================================

function askParentsAgain() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "Tell me the truth."
        </p>

        <p>
            The stranger looks directly at you.
        </p>

        <p>
            "Your mother is alive."
        </p>

        <p class="dramatic">
            Everything stops.
        </p>

        <p>
            You can't speak.
        </p>

        <p>
            "That's impossible."
        </p>

        <p>
            "No."
        </p>

        <p>
            His voice softens.
        </p>

        <p>
            "It's just something you were
            never meant to know."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask where she is.",
        askWhereMother
    );

    createChoice(
        "Ask why she left you.",
        askWhyMotherLeft
    );
}


// ==========================================
// ASK WHERE MOTHER IS
// ==========================================

function askWhereMother() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "Where is she?"
        </p>

        <p>
            The stranger looks toward the door.
        </p>

        <p>
            "Somewhere safe."
        </p>

        <p>
            "But not for long."
        </p>

        <p>
            Your heart pounds.
        </p>

        <p>
            "Why?"
        </p>

        <p class="dramatic">
            "Because they know you've awakened."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask who they are.",
        askHunters
    );

    createChoice(
        "Ask how to find your mother.",
        askProtection
    );
}


// ==========================================
// ASK WHY MOTHER LEFT
// ==========================================

function askWhyMotherLeft() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            "Why did she leave me?"
        </p>

        <p>
            The stranger shakes his head.
        </p>

        <p>
            "She didn't leave you."
        </p>

        <p>
            "She hid you."
        </p>

        <p>
            You stare at him.
        </p>

        <p>
            "From the people hunting your family."
        </p>

        <p class="dramatic">
            "She sacrificed her life
            so you could have one."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask where she is now.",
        askWhereMother
    );

    createChoice(
        "Ask about the Covenant.",
        askCovenant
    );
}


// ==========================================
// ASK HOW TO PROTECT YOURSELF
// ==========================================

function askProtection() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            "How do I protect myself?"
        </p>

        <p>
            The stranger steps closer.
        </p>

        <p>
            "You learn."
        </p>

        <p>
            "Learn what?"
        </p>

        <p>
            "Who you are."
        </p>

        <p class="dramatic">
            "And how to control what is inside you."
        </p>

        <p>
            Your wrist glows again.
        </p>

        <p>
            The lion symbol appears brighter.
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask him to teach you.",
        askToLearn
    );

    createChoice(
        "Say you don't need his help.",
        refuseHelp
    );
}


// ==========================================
// ASK ABOUT RIVAL BLOODLINE
// ==========================================

function askRival() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "Tell me about the rival bloodline."
        </p>

        <p>
            The stranger's expression darkens.
        </p>

        <p>
            "They have waited generations
            for your family to disappear."
        </p>

        <p>
            "They believe the Covenant
            was stolen from them."
        </p>

        <p>
            "Now that you've awakened..."
        </p>

        <p class="dramatic">
            "...they will come for you."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask who leads them.",
        askRivalLeader
    );

    createChoice(
        "Ask how to stop them.",
        askProtection
    );
}


// ==========================================
// ASK TO LEARN
// ==========================================

function askToLearn() {

    player.trust += 1;

    updateStats();

    showStory(`

        <p>
            You look at him.
        </p>

        <p>
            "Teach me."
        </p>

        <p>
            For the first time,
            the stranger smiles.
        </p>

        <p>
            "I was hoping you'd say that."
        </p>

        <p>
            He turns toward the hallway.
        </p>

        <p class="dramatic">
            "Then we need to leave.
            Now."
        </p>

    `);

    clearChoices();

    createChoice(
        "Follow him.",
        chapterTwoDeparture
    );

    createChoice(
        "Ask where you're going.",
        askDestination
    );
}


// ==========================================
// REFUSE HELP
// ==========================================

function refuseHelp() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            "I don't need you."
        </p>

        <p>
            The stranger watches you quietly.
        </p>

        <p>
            Then he nods.
        </p>

        <p>
            "Maybe you don't."
        </p>

        <p>
            He turns away.
        </p>

        <p>
            Before leaving, he says:
        </p>

        <p class="dramatic">
            "But the people coming for you
            won't care whether you're ready."
        </p>

        <p>
            He disappears down the hallway.
        </p>

    `);

    clearChoices();

    createChoice(
        "Follow him.",
        chapterTwoDeparture
    );
}


// ==========================================
// ASK RIVAL LEADER
// ==========================================

function askRivalLeader() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            "Who leads them?"
        </p>

        <p>
            The stranger looks at you.
        </p>

        <p>
            His answer is barely a whisper.
        </p>

        <p class="dramatic">
            "The Queen."
        </p>

        <p>
            You freeze.
        </p>

        <p>
            "Queen of what?"
        </p>

        <p>
            He doesn't answer.
        </p>

        <p>
            Instead, your phone rings.
        </p>

        <p class="dramatic">
            UNKNOWN NUMBER.
        </p>

    `);

    clearChoices();

    createChoice(
        "Answer the call.",
        queenCall
    );

    createChoice(
        "Ignore it.",
        ignoreQueenCall
    );
}


// ==========================================
// ASK DESTINATION
// ==========================================

function askDestination() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "Where are we going?"
        </p>

        <p>
            The stranger looks over his shoulder.
        </p>

        <p>
            "Somewhere they can't find you."
        </p>

        <p>
            "Where?"
        </p>

        <p class="dramatic">
            "Home."
        </p>

        <p>
            You frown.
        </p>

        <p>
            "This is my home."
        </p>

        <p>
            He shakes his head.
        </p>

        <p class="dramatic">
            "No."
        </p>

        <p>
            "It isn't."
        </p>

    `);

    clearChoices();

    createChoice(
        "Follow him.",
        chapterTwoDeparture
    );
}


// ==========================================
// THE PHOTOGRAPH
// ==========================================

function turnPhotograph() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            Your hands tremble as you turn
            the photograph over.
        </p>

        <p>
            There is writing on the back.
        </p>

        <p class="dramatic">
            "When the lion calls,
            the heir must return."
        </p>

        <p>
            Beneath the words is a date.
        </p>

        <p>
            The date is the day you were born.
        </p>

        <p>
            You stare at the photograph.
        </p>

        <p>
            You were never supposed to see this.
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask what the photograph means.",
        askPhotograph
    );

    createChoice(
        "Touch the golden mark.",
        chapterTwoMark
    );
}


// ==========================================
// THE BLACK ENVELOPE
// ==========================================

function openBlackEnvelope() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You slowly open the black envelope.
        </p>

        <p>
            Inside is a single card.
        </p>

        <p>
            No name.
        </p>

        <p>
            No address.
        </p>

        <p class="dramatic">
            Only a golden lion symbol.
        </p>

        <p>
            Beneath it are four words.
        </p>

        <p class="dramatic">
            "WE KNOW WHO YOU ARE."
        </p>

        <p>
            Your wrist burns.
        </p>

    `);

    clearChoices();

    createChoice(
        "Touch the mark.",
        chapterTwoMark
    );

    createChoice(
        "Destroy the card.",
        destroyCard
    );
}


// ==========================================
// THE VOICE
// ==========================================

function chapterTwoVoice() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You slowly turn around.
        </p>

        <p>
            Nobody is there.
        </p>

        <p>
            But you heard someone.
        </p>

        <p>
            A voice.
        </p>

        <p class="dramatic">
            "Precious."
        </p>

        <p>
            Your blood runs cold.
        </p>

        <p>
            Nobody here should know your name.
        </p>

        <p>
            The golden mark begins to glow.
        </p>

    `);

    clearChoices();

    createChoice(
        "Answer the voice.",
        answerVoice
    );

    createChoice(
        "Run from the room.",
        runFromRoom
    );
}


// ==========================================
// CHAPTER TWO MARK
// ==========================================

function chapterTwoMark() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You touch the golden mark.
        </p>

        <p>
            The room disappears.
        </p>

        <p>
            For a moment, you are somewhere else.
        </p>

        <p>
            You see a woman.
        </p>

        <p>
            She is holding a baby.
        </p>

        <p>
            The baby has the same golden mark.
        </p>

        <p class="dramatic">
            You realise the baby is you.
        </p>

        <p>
            The woman looks directly at you.
        </p>

        <p>
            And whispers:
        </p>

        <p class="dramatic">
            "My little lion."
        </p>

        <p>
            The vision disappears.
        </p>

    `);

    clearChoices();

    createChoice(
        "Tell the stranger what you saw.",
        tellStrangerVision
    );

    createChoice(
        "Keep the vision to yourself.",
        hideVision
    );
}


// ==========================================
// PHOTOGRAPH QUESTION
// ==========================================

function askPhotograph() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            You hold the photograph toward him.
        </p>

        <p>
            "How long have you had this?"
        </p>

        <p>
            He looks at it.
        </p>

        <p>
            His expression changes.
        </p>

        <p class="dramatic">
            "Since the night you disappeared."
        </p>

        <p>
            You stare at him.
        </p>

        <p>
            "I didn't disappear."
        </p>

        <p>
            He looks directly into your eyes.
        </p>

        <p class="dramatic">
            "You did."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask what happened that night.",
        askLostNight
    );

    createChoice(
        "Touch the golden mark.",
        chapterTwoMark
    );
}


// ==========================================
// DESTROY THE CARD
// ==========================================

function destroyCard() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You tear the card in half.
        </p>

        <p>
            Then again.
        </p>

        <p>
            And again.
        </p>

        <p>
            You throw the pieces into the bin.
        </p>

        <p>
            For a moment, nothing happens.
        </p>

        <p>
            Then the pieces begin to glow.
        </p>

        <p class="dramatic">
            The golden lion symbol appears
            on your bedroom wall.
        </p>

    `);

    clearChoices();

    createChoice(
        "Touch the symbol.",
        chapterTwoMark
    );
}


// ==========================================
// ANSWER THE VOICE
// ==========================================

function answerVoice() {

    player.trust += 1;

    updateStats();

    showStory(`

        <p>
            "Who are you?"
        </p>

        <p>
            The voice answers.
        </p>

        <p class="dramatic">
            "Someone who remembers you."
        </p>

        <p>
            "I don't remember you."
        </p>

        <p>
            Silence.
        </p>

        <p>
            Then:
        </p>

        <p class="dramatic">
            "That's because they made you forget."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask who made you forget.",
        askWhoMadeForget
    );

    createChoice(
        "Ask what you forgot.",
        askWhatForgot
    );
}


// ==========================================
// RUN FROM ROOM
// ==========================================

function runFromRoom() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You run.
        </p>

        <p>
            You grab your bag.
        </p>

        <p>
            You don't stop to think.
        </p>

        <p>
            You just need to get out.
        </p>

        <p>
            As you reach the front door,
            your wrist burns.
        </p>

        <p class="dramatic">
            The lion is calling again.
        </p>

    `);

    clearChoices();

    createChoice(
        "Follow the call.",
        chapterTwoDeparture
    );
}


// ==========================================
// TELL STRANGER ABOUT VISION
// ==========================================

function tellStrangerVision() {

    player.trust += 1;

    updateStats();

    showStory(`

        <p>
            You tell him everything.
        </p>

        <p>
            The woman.
        </p>

        <p>
            The baby.
        </p>

        <p>
            The golden mark.
        </p>

        <p>
            The stranger listens without interrupting.
        </p>

        <p>
            When you finish, he closes his eyes.
        </p>

        <p class="dramatic">
            "She finally reached you."
        </p>

        <p>
            "Who?"
        </p>

        <p>
            He looks at you.
        </p>

        <p class="dramatic">
            "Your mother."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask where she is.",
        askWhereMother
    );
}


// ==========================================
// HIDE THE VISION
// ==========================================

function hideVision() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You say nothing.
        </p>

        <p>
            You keep the vision to yourself.
        </p>

        <p>
            The stranger watches you carefully.
        </p>

        <p>
            "You saw something."
        </p>

        <p>
            You don't answer.
        </p>

        <p class="dramatic">
            He knows you're lying.
        </p>

    `);

    clearChoices();

    createChoice(
        "Tell him the truth.",
        tellStrangerVision
    );

    createChoice(
        "Keep your secret.",
        chapterTwoDeparture
    );
}


// ==========================================
// ASK ABOUT THE LOST NIGHT
// ==========================================

function askLostNight() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "What happened that night?"
        </p>

        <p>
            The stranger looks away.
        </p>

        <p>
            "Your family was attacked."
        </p>

        <p>
            "Your mother used the Covenant
            to hide you."
        </p>

        <p>
            "Then she disappeared."
        </p>

        <p>
            You swallow hard.
        </p>

        <p class="dramatic">
            "And everyone thought you were dead."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask where your mother is.",
        askWhereMother
    );

    createChoice(
        "Ask who attacked your family.",
        askHunters
    );
}


// ==========================================
// WHO MADE YOU FORGET
// ==========================================

function askWhoMadeForget() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            "Who made me forget?"
        </p>

        <p>
            The voice becomes quieter.
        </p>

        <p class="dramatic">
            "The people who feared what you would become."
        </p>

        <p>
            You feel the mark burning.
        </p>

        <p>
            "What am I?"
        </p>

        <p>
            Silence.
        </p>

        <p class="dramatic">
            "The last Queen of the Lions."
        </p>

    `);

    clearChoices();

    createChoice(
        "Continue.",
        chapterTwoRevelation
    );
}


// ==========================================
// WHAT DID YOU FORGET?
// ==========================================

function askWhatForgot() {

    player.curiosity += 1;

    updateStats();

    showStory(`

        <p>
            "What did I forget?"
        </p>

        <p>
            The voice answers immediately.
        </p>

        <p class="dramatic">
            "Everything."
        </p>

        <p>
            You feel a sudden pain behind your eyes.
        </p>

        <p>
            Images flash through your mind.
        </p>

        <p>
            A palace.
        </p>

        <p>
            A woman.
        </p>

        <p>
            A lion.
        </p>

        <p>
            Fire.
        </p>

        <p>
            Blood.
        </p>

        <p class="dramatic">
            And a crown.
        </p>

    `);

    clearChoices();

    createChoice(
        "Continue.",
        chapterTwoRevelation
    );
}


// ==========================================
// QUEEN'S CALL
// ==========================================

function queenCall() {

    player.fear += 1;

    updateStats();

    showStory(`

        <p>
            You answer.
        </p>

        <p>
            Nobody speaks.
        </p>

        <p>
            Then a woman's voice whispers:
        </p>

        <p class="dramatic">
            "Hello, little heir."
        </p>

        <p>
            The call ends.
        </p>

        <p>
            You stare at the phone.
        </p>

        <p>
            The stranger looks at you.
        </p>

        <p class="dramatic">
            "She knows."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask who she is.",
        askRivalLeader
    );

    createChoice(
        "Leave with the stranger.",
        chapterTwoDeparture
    );
}


// ==========================================
// IGNORE QUEEN'S CALL
// ==========================================

function ignoreQueenCall() {

    player.courage += 1;

    updateStats();

    showStory(`

        <p>
            You refuse to answer.
        </p>

        <p>
            The phone stops ringing.
        </p>

        <p>
            The stranger watches you.
        </p>

        <p>
            "Good."
        </p>

        <p>
            You look at him.
        </p>

        <p>
            "Why?"
        </p>

        <p class="dramatic">
            "Because she wanted you to answer."
        </p>

    `);

    clearChoices();

    createChoice(
        "Ask what happens next.",
        chapterTwoDeparture
    );
}


// ==========================================
// FINAL REVELATION
// ==========================================

function chapterTwoRevelation() {

    showStory(`

        <p class="chapter">
            CHAPTER TWO
        </p>

        <h2>
            The Heir
        </h2>

        <p>
            Your knees almost give way.
        </p>

        <p>
            Queen.
        </p>

        <p>
            Heir.
        </p>

        <p>
            Bloodline.
        </p>

        <p>
            Covenant.
        </p>

        <p>
            None of it makes sense.
        </p>

        <p>
            Yet somehow...
        </p>

        <p class="dramatic">
            It feels familiar.
        </p>

        <p>
            You look at your wrist.
        </p>

        <p>
            The golden lion begins to glow.
        </p>

        <p>
            Somewhere far away,
            something answers with a roar.
        </p>

        <p>
            The stranger looks toward the window.
        </p>

        <p class="dramatic">
            "They're coming."
        </p>

        <p>
            You look at him.
        </p>

        <p>
            "Who?"
        </p>

        <p>
            His eyes meet yours.
        </p>

        <p class="dramatic">
            "The people who want your crown."
        </p>

        <br>

        <p>
            <strong>
                TO BE CONTINUED...
            </strong>
        </p>

    `);

    clearChoices();

    createChoice(
        "Continue the story",
        chapterTwoDeparture
    );

    createChoice(
        "Restart Chapter One",
        restartGame
    );
}


// ==========================================
// CHAPTER TWO DEPARTURE
// ==========================================

function chapterTwoDeparture() {

    showStory(`

        <p>
            You grab your things.
        </p>

        <p>
            The stranger waits by the door.
        </p>

        <p>
            You take one final look around
            the room you've always called home.
        </p>

        <p>
            Something tells you that when you return,
            nothing will be the same.
        </p>

        <p>
            You step outside.
        </p>

        <p>
            The morning air is cold.
        </p>

        <p>
            Somewhere beyond the city,
            a lion roars.
        </p>

        <p>
            The stranger looks toward the sound.
        </p>

        <p class="dramatic">
            "It's time."
        </p>

        <p>
            You don't know where you're going.
        </p>

        <p>
            You don't know who you really are.
        </p>

        <p>
            But you finally understand one thing.
        </p>

        <p class="dramatic">
            Your life was never ordinary.
        </p>

        <p>
            And the truth is coming for you.
        </p>

        <br>

        <p>
            <strong>
                END OF CHAPTER TWO
            </strong>
        </p>

    `);

    clearChoices();

    createChoice(
        "Restart Chapter One",
        restartGame
    );
}


// ==========================================
// END OF CHAPTER TWO
// ==========================================


// ==========================================
// START THE GAME
// ==========================================

startGame();
