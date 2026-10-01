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
        "Restart Chapter One",
        restartGame
    );
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
