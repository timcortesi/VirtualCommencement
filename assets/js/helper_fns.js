window.app = {
    data:{},
    update:{},
}

app.data.config = {};
app.data.student_columns = ['x','x','x','x','x','x','x','x']
app.data.student_rows = ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x']
app.data.faculty_columns = ['x','x','x','x','x','x','x','x','x','x','x','x']
app.data.faculty_rows = ['x']
app.data.speech_exists = false;
app.data.colors = [
        '&#x1F3FB;',
        '&#x1F3FC;',
        '&#x1F3FD;',
        '&#x1F3FE;',
        '&#x1F3FF;',
    ];
app.data.genders = [
        '&#x1F468;',
        '&#x1F469;',
        '&#x1F9D1;',
    ];
app.data.random_student = function() {
    var pick_color = app.data.colors[Math.floor(Math.random() * app.data.colors.length)];
    var pick_gender = app.data.genders[Math.floor(Math.random() * app.data.genders.length)];
    return pick_gender+pick_color+"&#x200D;&#x1F393;"
}
app.data.random_person = function() {
    var pick_color = app.data.colors[Math.floor(Math.random() * app.data.colors.length)];
    var pick_gender = app.data.genders[Math.floor(Math.random() * app.data.genders.length)];
    return pick_gender+pick_color+"&#x200D;&#x1F4BC";
}

function init_speech(callback_fn) {
    if (typeof window.speechSynthesis !==  'undefined') {
        app.data.speech_exists = true;
        if(window.speechSynthesis.getVoices().length === 0) {
            window.speechSynthesis.addEventListener('voiceschanged', function() {
                callback_fn();
            });
        }
        else {
            callback_fn()
        }
    }
}

function textToSpeech(text) {
    if (app.data.speech_exists === false) {
        return false;
    }
    var available_voices = window.speechSynthesis.getVoices();
    var english_voice = '';
    for(var i=0; i<available_voices.length; i++) {
        if(available_voices[i].lang === 'en-US') {
            english_voice = available_voices[i];
            break;
        }
    }
    if(english_voice === '') {
        english_voice = available_voices[0];
    }
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.text = text;
    utter.voice = english_voice;
    utter.onend = function() {}
    window.speechSynthesis.speak(utter);
}

var ractive = Ractive({
    target: '#main_target',
    template: templates.main,
    partials: templates,
    data: app.data
});

app.update = function() {
    ractive.set(app.data)
};
