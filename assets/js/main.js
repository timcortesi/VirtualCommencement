var show_form = function() {
    if (window.location.hash !== '') {
        window.config_form.data = JSON.parse(decodeURIComponent(window.location.hash.slice(1)))
    }
    config_form = new gform(window.config_form).modal().on('save',function(form_event){ 
        if (form_event.form.validate()) {
            form_data = form_event.form.get();
            app.data.config = form_data;
            window.location.hash = JSON.stringify(form_data);
            app.data.students = form_data.students;
            app.update();
            config_form.trigger('close');
            init_speech(start);
        }
    }).on('cancel',function() {
        config_form.trigger('close');
    });
}

trigger_student = function(index) {
    app.data.student = app.data.students[index]
    app.data.student.emoji = 
        app.data.genders[parseInt(app.data.student.gender)] + 
        app.data.colors[parseInt(app.data.student.color)] + "&#x200D;&#x1F393;"            
    app.update();    
    textToSpeech(app.data.student.first_name+' '+app.data.student.last_name)
}

function start() {
    var index = 0;
    // trigger_student(index);
    // index++;
    var walk_interval = setInterval(function() {
        if (typeof app.data.students[index] === 'undefined') {
            clearInterval(walk_interval);
            app.data.student = false;
            app.update();
            config_form.modal();
        } else {
            trigger_student(index);
            index++;
        }
    }, 8000)
}

show_form();

// init_speech(start);
