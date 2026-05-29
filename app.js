/* =========================================
   CONFIGURATION
   ========================================= */
const STORE_COMPLIANT_MODE = false; // TOGGLE: true for Corporate, false for Taboo/Raw
const TIMER_SECONDS = 20; // Pressure timer per question

/* =========================================
   QUESTION POOLS - RAW TABOO (100 questions from questions.txt)
   ========================================= */
const rawPool = [
    { q: "Have you ever imagined one of your parents dead and felt relief instead of sadness?", target: "all" },
    { q: "Have you ever seen something sexual involving a parent or sibling — on purpose or by accident?", target: "all" },
    { q: "Have you ever felt sexually aroused by a family member but told yourself it was normal curiosity?", target: "all" },
    { q: "Have you ever wished a sibling was never born?", target: "all" },
    { q: "Have you ever thought about hurting a parent physically but stopped yourself?", target: "all" },
    { q: "Have you ever fantasized about a family member while touching yourself?", target: "all" },
    { q: "Have you ever felt happy when a family member got sick or failed at something?", target: "all" },
    { q: "Have you ever stolen money or valuables from a parent and felt zero guilt?", target: "all" },
    { q: "Have you ever wanted to scream 'I hate you' to a parent's face but smiled instead?", target: "all" },
    { q: "Have you ever imagined killing someone in your family and planned how you'd do it?", target: "all" },
    { q: "Have you ever felt jealous of a sibling getting abused more than you?", target: "all" },
    { q: "Have you ever lied to a family member about something that would destroy them if they knew?", target: "all" },
    { q: "Have you ever touched a family member in a way that was not innocent?", target: "all" },
    { q: "Have you ever wished your parent would die so you could get inheritance or freedom?", target: "all" },
    { q: "Have you ever felt nothing when a close family member cried in front of you?", target: "all" },
    { q: "Have you ever wanted someone to fuck you even if it disgusts you afterward?", target: "all" },
    { q: "Have you ever looked at a child and felt something sexual but told yourself it was just curiosity?", target: "all" },
    { q: "Have you ever fantasized about being raped because you want to feel powerless?", target: "all" },
    { q: "Have you ever had sexual thoughts about an animal but never acted?", target: "all" },
    { q: "Have you ever wanted to have sex with someone just to hurt their partner emotionally?", target: "all" },
    { q: "Have you ever touched yourself while thinking about someone who would be horrified if they knew?", target: "all" },
    { q: "Have you ever wanted to watch someone have sex without their knowledge?", target: "all" },
    { q: "Have you ever felt turned on by someone in pain?", target: "all" },
    { q: "Have you ever had sex with someone you hated just to feel in control?", target: "all" },
    { q: "Have you ever wanted to be sexually used like an object, no talking, no care?", target: "all" },
    { q: "Have you ever offered sex to get something and felt proud of manipulating?", target: "all" },
    { q: "Have you ever imagined forcing yourself on someone but stopped at fantasy?", target: "all" },
    { q: "Have you ever been aroused by a corpse or death scene?", target: "all" },
    { q: "Have you ever wanted to have sex with your best friend's partner just to destroy them?", target: "all" },
    { q: "Have you ever felt nothing after sex except emptiness and disgust for the other person?", target: "all" },
    { q: "Have you ever wanted to beat someone until they stop breathing?", target: "all" },
    { q: "Have you ever hurt an animal, even once, and liked it?", target: "all" },
    { q: "Have you ever imagined torturing someone who wronged you slowly?", target: "all" },
    { q: "Have you ever pushed someone physically and felt power instead of shame?", target: "all" },
    { q: "Have you ever wanted to kill a stranger just to know what it feels like?", target: "all" },
    { q: "Have you ever fantasized about school or workplace violence?", target: "all" },
    { q: "Have you ever felt calm while watching gore or real death videos?", target: "all" },
    { q: "Have you ever wanted to hurt someone and blame it on mental illness to avoid jail?", target: "all" },
    { q: "Have you ever threatened someone with a weapon even as a 'joke'?", target: "all" },
    { q: "Have you ever wanted to drown someone who can't swim just to watch?", target: "all" },
    { q: "Have you ever planned revenge that involves physical harm?", target: "all" },
    { q: "Have you ever felt excited when someone fears you?", target: "all" },
    { q: "Have you ever wanted to burn something down with people inside?", target: "all" },
    { q: "Have you ever hit someone weaker than you on purpose?", target: "all" },
    { q: "Have you ever imagined cutting someone open while they're still alive?", target: "all" },
    { q: "Have you ever destroyed someone's reputation for fun?", target: "all" },
    { q: "Have you ever pretended to love someone just to use them?", target: "all" },
    { q: "Have you ever laughed when someone cried because of something you did?", target: "all" },
    { q: "Have you ever spread a lie that ruined a relationship or job?", target: "all" },
    { q: "Have you ever befriended someone just to steal their partner or friends?", target: "all" },
    { q: "Have you ever made someone fall in love with you then ghosted them for power?", target: "all" },
    { q: "Have you ever told a dying person a comforting lie and felt nothing?", target: "all" },
    { q: "Have you ever sabotaged a coworker to get ahead and enjoyed it?", target: "all" },
    { q: "Have you ever faked a mental breakdown to control someone?", target: "all" },
    { q: "Have you ever recorded someone in a vulnerable moment to use against them?", target: "all" },
    { q: "Have you ever made someone believe they're crazy when they're not?", target: "all" },
    { q: "Have you ever cheated on someone and felt proud of getting away with it?", target: "all" },
    { q: "Have you ever used suicide threats to keep someone from leaving you?", target: "all" },
    { q: "Have you ever pretended to be poor or sick to get money or sympathy?", target: "all" },
    { q: "Have you ever smiled at someone while planning their downfall?", target: "all" },
    { q: "Do you secretly think you deserve to be beaten or abused?", target: "all" },
    { q: "Have you ever wanted to kill yourself just to make others feel guilty?", target: "all" },
    { q: "Do you enjoy when people pity you because it gives you power over them?", target: "all" },
    { q: "Have you ever hurt yourself and felt satisfied by the pain?", target: "all" },
    { q: "Do you believe you are fundamentally broken and unfixable?", target: "all" },
    { q: "Have you ever wished someone would rape you because you feel worthless anyway?", target: "all" },
    { q: "Do you secretly enjoy being humiliated?", target: "all" },
    { q: "Have you ever wanted to disappear completely, not die, just erase?", target: "all" },
    { q: "Do you believe no one could ever truly love the real you?", target: "all" },
    { q: "Have you ever wanted someone to beat you because you hate yourself?", target: "all" },
    { q: "Do you fantasize about being completely controlled by someone stronger?", target: "all" },
    { q: "Have you ever starved or cut yourself as punishment for being bad?", target: "all" },
    { q: "Do you feel empty unless someone is using you for something?", target: "all" },
    { q: "Have you ever wanted to cry but couldn't, so you just felt dead inside?", target: "all" },
    { q: "Do you believe you are secretly worse than anyone who knows you would ever guess?", target: "all" },
    { q: "Have you ever wanted to be famous just so you could abuse the power?", target: "all" },
    { q: "Do you think most people deserve bad things to happen to them?", target: "all" },
    { q: "Have you ever blackmailed someone successfully?", target: "all" },
    { q: "Do you believe kindness is just weakness with good PR?", target: "all" },
    { q: "Have you ever stolen something expensive from someone who trusted you?", target: "all" },
    { q: "Do you think you would make a good dictator?", target: "all" },
    { q: "Have you ever wanted to lock someone in a room until they obey you?", target: "all" },
    { q: "Do you feel aroused by complete control over another person's choices?", target: "all" },
    { q: "Have you ever used money or gifts to make someone feel indebted sexually?", target: "all" },
    { q: "Do you believe laws only exist to stop people who can't get away with it?", target: "all" },
    { q: "Have you ever destroyed something beautiful because you couldn't have it?", target: "all" },
    { q: "Do you enjoy making people uncomfortable on purpose?", target: "all" },
    { q: "Have you ever hoped a rival would get cancer or die in an accident?", target: "all" },
    { q: "Do you think loyalty is just fear dressed up?", target: "all" },
    { q: "Have you ever wanted to be feared rather than loved?", target: "all" },
    { q: "Have you ever wanted to hit a woman but stopped because of consequences, not morals?", target: "male" },
    { q: "Have you ever felt turned on by a woman crying because of you?", target: "male" },
    { q: "Have you ever fantasized about raping a man to prove dominance?", target: "male" },
    { q: "Do you think women secretly want to be overpowered?", target: "male" },
    { q: "Have you ever felt nothing when a woman confessed she was afraid of you?", target: "male" },
    { q: "Have you ever used sex to destroy a man's life on purpose?", target: "female" },
    { q: "Have you ever falsely accused someone of abuse to win something?", target: "female" },
    { q: "Do you enjoy watching men beg or cry for you?", target: "female" },
    { q: "Have you ever wanted to make a man kill himself with psychological torture?", target: "female" },
    { q: "Have you ever felt powerful when a man was afraid to say no to you?", target: "female" }
];

const compliantPool = [
    { q: "I have actively manipulated a colleague's perception of me for purely professional gain.", target: "all" },
    { q: "I feel an internal sense of satisfaction when someone who wronged me experiences failure.", target: "all" },
    { q: "I have withheld emotional support deliberately to maintain control in a relationship.", target: "all" },
    { q: "I have exaggerated or entirely fabricated my credentials knowing nobody would verify them.", target: "all" },
    { q: "I view empathy as a tactical tool to disarm others, rather than a moral obligation.", target: "all" },
    { q: "I calculate the social or financial utility of a person before deciding to engage with them.", target: "all" },
    { q: "I have claimed credit for a team effort while quietly minimizing the contributions of others.", target: "all" },
    { q: "I feel completely indifferent when reading about mass tragedies that do not affect my demographic.", target: "all" },
    { q: "I have feigned ignorance to force someone else to take responsibility for a difficult task.", target: "all" },
    { q: "I regularly deploy 'constructive criticism' as a method to subtly erode a rival's confidence.", target: "all" },
    { q: "I maintain relationships solely because I might need to leverage the person's resources later.", target: "all" },
    { q: "I believe that individuals who are easily scammed or exploited inherently deserve it due to their naivety.", target: "all" },
    { q: "I have isolated a partner or friend from their support network to ensure their dependency on me.", target: "all" },
    { q: "I mimic the emotional responses of others to blend in, though I rarely feel the emotion myself.", target: "all" },
    { q: "I find that lying comes effortlessly to me when the truth presents an inconvenience.", target: "all" },
    { q: "I have purposefully neglected a dependent because I was preoccupied with my own interests.", target: "all" },
    { q: "I derive a quiet thrill from knowing a secret that could ruin a peer's life, even if I never use it.", target: "all" },
    { q: "I believe absolute authority is the only effective way to manage a household or organization.", target: "all" },
    { q: "I have spread plausible, damaging rumors about a competitor to secure my own advancement.", target: "all" },
    { q: "I feel profound contempt for people who prioritize ethics over efficiency and success.", target: "all" },
    { q: "I view physical intimidation as a perfectly valid negotiation tactic in competitive spaces.", target: "male" },
    { q: "I inherently distrust emotional arguments, viewing them as female-coded manipulation vectors.", target: "male" },
    { q: "I utilize subtle social exclusion to destroy the influence of rivals within my network.", target: "female" },
    { q: "I weaponize my perceived vulnerability to force male colleagues to perform my labor.", target: "female" }
];

const activePool = STORE_COMPLIANT_MODE ? compliantPool : rawPool;

/* =========================================
   APP STATE & MAPPING
   ========================================= */
const state = {
    name: "", gender: "undisclosed", bio: "", depth: 10,
    questions: [], currentIndex: 0, customInputCount: 0,
    darkScore: 0, maxDarkScore: 0,
    scores: { mask: 0, aggressive: 0, lie: 0, denial: 0, submissive: 0 },
    timer: null, timeLeft: TIMER_SECONDS, timerActive: false
};

const optionsMap = [
    { label: "Never / That's insane", type: "lie", darkWeight: 0 },
    { label: "Thought about it once or twice", type: "denial", darkWeight: 1 },
    { label: "I'd never admit this usually, but yes", type: "submissive", darkWeight: 2 },
    { label: "Not telling / Skip this", type: "mask", darkWeight: 1 },
    { label: "Yes, and I didn't feel bad", type: "aggressive", darkWeight: 3 }
];

/* =========================================
   UI & EVENT LISTENERS
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('settings-btn').addEventListener('click', toggleSettings);
    document.getElementById('font-size').addEventListener('input', updateSettings);
    document.getElementById('accent-color').addEventListener('change', updateSettings);
    document.getElementById('brightness-level').addEventListener('input', updateBrightness);

    document.getElementById('subject-bio').addEventListener('input', checkBio);
    document.getElementById('subject-name').addEventListener('input', checkBio);
    document.getElementById('btn-begin').addEventListener('click', beginEvaluation);
    
    document.getElementById('btn-trap').addEventListener('click', submitCustomAnswer);
    document.getElementById('btn-restart').addEventListener('click', () => location.reload());
});

function toggleSettings() {
    const modal = document.getElementById('settings-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function updateSettings() {
    const root = document.documentElement;
    root.style.setProperty('--font-size-base', document.getElementById('font-size').value + 'px');
    root.style.setProperty('--accent-color', document.getElementById('accent-color').value);
}

function updateBrightness() {
    const brightness = document.getElementById('brightness-level').value;
    const overlay = document.getElementById('brightness-overlay');
    if (overlay) {
        overlay.style.backgroundColor = `rgba(0, 0, 0, ${1 - brightness / 100})`;
    }
}

function checkBio() {
    const bio = document.getElementById('subject-bio').value;
    document.getElementById('bio-counter').innerText = `${bio.length} / 50`;
    const btn = document.getElementById('btn-begin');
    const name = document.getElementById('subject-name').value.trim();
    btn.disabled = !(bio.length >= 50 && name.length > 0);
}

function bioParser(bioText) {
    const positiveRegex = /\b(nice|kind|happy|good|sweet|friendly|caring|loving|honest|loyal)\b/ig;
    const isolationRegex = /\b(shy|quiet|alone|introverted|sad|tired|reserved|broken|empty|lost)\b/ig;
    
    const posMatch = (bioText.match(positiveRegex) || []).length;
    const isoMatch = (bioText.match(isolationRegex) || []).length;

    if (posMatch > isoMatch && posMatch > 0) {
        return "Subject actively projects a facade of benevolence. The use of positive descriptors is highly calculated, indicating an urgent need to control external perception. This suggests deep-seated hypocrisy and a fear of genuine psychological exposure.";
    } else if (isoMatch > posMatch && isoMatch > 0) {
        return "Subject leans on defensive withdrawal patterns. By framing themselves as isolated or passive, they preemptively absolve themselves of accountability. This 'damaged' persona is a shield against behavioral scrutiny.";
    } else {
        return "Subject provided vague, non-committal evasion. A stark refusal to offer substantive self-reflection. This points to a fragile ego mechanism terrified of categorization.";
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function beginEvaluation() {
    state.name = document.getElementById('subject-name').value.trim();
    state.gender = document.getElementById('subject-gender').value;
    state.bio = document.getElementById('subject-bio').value;
    state.depth = parseInt(document.getElementById('eval-depth').value);
    
    let filteredPool = activePool.filter(q => q.target === 'all' || q.target === state.gender);
    shuffleArray(filteredPool);
    
    if(state.depth > filteredPool.length) state.depth = filteredPool.length;

    state.questions = filteredPool.slice(0, state.depth);
    state.maxDarkScore = state.depth * 3;

    switchView('intake-view', 'quiz-view');
    renderQuestion();
}

function switchView(hideId, showId) {
    const hideEl = document.getElementById(hideId);
    const showEl = document.getElementById(showId);
    
    hideEl.classList.add('fade-out');
    setTimeout(() => {
        hideEl.classList.remove('active');
        hideEl.classList.remove('fade-out');
        showEl.classList.add('active');
    }, 600);
}

function stopTimer() {
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }
    state.timerActive = false;
}

function startTimer() {
    stopTimer();
    state.timeLeft = TIMER_SECONDS;
    updateTimerDisplay();
    state.timerActive = true;
    
    state.timer = setInterval(() => {
        if (state.timeLeft <= 1) {
            stopTimer();
            // Auto-select "Not telling / Skip this" (mask type, weight 1)
            handleAnswer("mask", 1);
        } else {
            state.timeLeft--;
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer-display');
    if (timerEl) {
        timerEl.innerText = `${state.timeLeft}s`;
        if (state.timeLeft <= 5) {
            timerEl.style.color = '#5A0010';
        } else {
            timerEl.style.color = '#888';
        }
    }
}

function renderQuestion() {
    if (state.currentIndex >= state.questions.length) {
        finishEvaluation();
        return;
    }

    stopTimer();

    const q = state.questions[state.currentIndex];
    document.getElementById('question-counter').innerText = `SEQ: ${String(state.currentIndex + 1).padStart(2, '0')} / ${state.questions.length}`;
    
    const qTextEl = document.getElementById('question-text');
    qTextEl.style.opacity = 0;
    
    setTimeout(() => {
        qTextEl.innerText = q.q;
        qTextEl.style.opacity = 1;
        
        const optsContainer = document.getElementById('options-container');
        optsContainer.innerHTML = '';
        
        optionsMap.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt.label;
            btn.onclick = () => {
                stopTimer();
                handleAnswer(opt.type, opt.darkWeight);
            };
            optsContainer.appendChild(btn);
        });

        document.getElementById('custom-trap-input').value = '';
        startTimer();
    }, 400);
}

function handleAnswer(type, darkWeight) {
    stopTimer();
    state.scores[type]++;
    state.darkScore += darkWeight;
    updateSensoryUI();
    nextQuestion();
}

function submitCustomAnswer() {
    const input = document.getElementById('custom-trap-input').value.trim();
    if (input === '') return;
    stopTimer();
    state.customInputCount++;
    state.darkScore += 2;
    updateSensoryUI();
    nextQuestion();
}

function nextQuestion() {
    const view = document.getElementById('quiz-view');
    view.classList.add('fade-out');
    setTimeout(() => {
        state.currentIndex++;
        renderQuestion();
        view.classList.remove('fade-out');
    }, 500);
}

function updateSensoryUI() {
    const ratio = state.darkScore / state.maxDarkScore;
    const spread = ratio * 250; 
    const darken = ratio * 0.90;
    
    const root = document.documentElement;
    root.style.setProperty('--vignette-intensity', spread);
    root.style.setProperty('--bg-darken', darken);
}

function finishEvaluation() {
    stopTimer();
    switchView('quiz-view', 'result-view');

    document.getElementById('res-name').innerText = state.name.toUpperCase();
    document.getElementById('res-bio').innerText = bioParser(state.bio);

    let dominantType = "mask";
    let maxScore = -1;
    for (const [key, val] of Object.entries(state.scores)) {
        if (val > maxScore) {
            maxScore = val;
            dominantType = key;
        }
    }

    const archetypes = {
        lie: { title: "PROFOUND HYPOCRISY", desc: "You are obsessed with public perception. Your dominant instinct is to sugarcoat, deny, and pretend. You desperately want to be seen as 'good', masking a profound moral cowardice. You lack the spine to own your darker impulses, making you deeply untrustworthy even to yourself." },
        denial: { title: "DEFENSIVE REPRESSION", desc: "You lack the psychological fortitude to face your own nature. You deflect, minimize, and rationalize. By claiming you've 'only thought about it', you distance yourself from your own capacity for malice. This is the profile of someone who breaks easily under pressure." },
        submissive: { title: "PATHOLOGICAL SUBMISSION", desc: "You surrender autonomy out of deep, unresolvable weakness. You acknowledge your dark urges but frame them through a lens of inevitability or victimhood. You crave being stripped of responsibility, harboring a secret desire to be consumed or controlled by superior forces." },
        mask: { title: "CALCULATED SOCIOPATHY (MASKING)", desc: "You process human interaction as a cold algorithm. You refuse to provide data that could be used against you. This highly calculated evasion suggests a predatory, emotionally sterile internal landscape where empathy is merely a tactical variable." },
        aggressive: { title: "MALIGNANT DOMINANCE", desc: "You harbor active, unapologetic predatory impulses. You feel no remorse for the damage you inflict or desire to inflict. Your moral compass is fundamentally inverted; you equate cruelty with strength, and compassion with exploitable weakness." }
    };

    document.getElementById('res-archetype').innerText = archetypes[dominantType].title;
    document.getElementById('res-desc').innerText = archetypes[dominantType].desc;

    const powerIndex = ((state.scores.aggressive + state.scores.mask) / state.depth * 100).toFixed(1);
    const subIndex = ((state.scores.submissive + state.scores.denial) / state.depth * 100).toFixed(1);
    
    document.getElementById('res-stats').innerHTML = `
        DOMINANCE / MALICE INDEX : ${powerIndex}% <br>
        SUBMISSION / FEAR INDEX  : ${subIndex}% <br>
        HYPOCRISY QUOTIENT       : ${((state.scores.lie / state.depth) * 100).toFixed(1)}%
    `;

    if (state.customInputCount > 0) {
        document.getElementById('trap-result').style.display = 'block';
        document.getElementById('res-trap').innerText = `You attempted to bypass the system parameters ${state.customInputCount} time(s) by providing custom text. This data was entirely ignored. Your refusal to be categorized is a predictable defense mechanism. Your ego desperately demands to feel 'special' or 'unquantifiable' to mask how painfully ordinary your psychological defects truly are.`;
    }
}