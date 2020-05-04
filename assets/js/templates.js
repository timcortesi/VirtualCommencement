var templates = {
"main":
`
<div class="stage" {{#config.color}}style="background-color:{{config.color}};"{{/config.color}}>
    {{>faculty_seating}}
    {{#student}}
    <div class="vc-container">
        <div class="vc-bottom-bar">
            <div style="text-align:center;">
                {{#student}}
                <h1 style="font-size:7vw;">{{first_name}} {{last_name}}</h1>
                <h3 style="font-size:3.5vw;">{{degree}}</h3>
                {{/student}}
            </div>
            <div style="text-align:right;width:100%;">
                <span class="animate diploma" style="font-size:10vw;">&#x1F4DC;</span>
                <span class="animate student" style="z-index:10;font-size:10vw;">{{{emoji}}}</span>
            </div>
        </div>
    </div>
    {{/student}}
    {{^student}}
        <div style="text-align:center;padding-bottom:20px">
            <h1 style="font-size:7vw;">{{config.school}}</h1>
            <h3>Class of 2020</h3>
        </div>
    {{/student}}
</div>

{{>student_seating}}
{{>music}}
`,
"music": `<center>
<iframe style="width:50%;height:50px;margin-top:100px;" src="https://www.youtube.com/embed/Kw-_Ew5bVxs?{{#play}}autoplay=1{{/play}}&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>
`,

"faculty_seating" : `
<!-- Faculty Seating -->
<div class="row" style="text-align:center;font-size:3vw;">
    <div class="col-xs-12">
        {{#faculty_rows}}
        <div class="row">
            <div class="col-xs-12">
                {{#faculty_columns}}
                <span>{{{random_person()}}}</span>&nbsp;
                {{/faculty_columns}}
            </div>
        </div>
        {{/faculty_rows}}
    </div>
</div>
`,
"student_seating" : `
<!-- Student Seating -->
<div class="row" style="text-align:center;font-size:3vw;">
    <div class="col-xs-6">
        {{#student_rows}}
        <div class="row">
            <div class="col-xs-12">
                {{#student_columns}}
                <span>{{{random_student()}}}</span>&nbsp;
                {{/student_columns}}
            </div>
        </div>
        {{/student_rows}}
    </div>
    <div class="col-xs-6">
        {{#student_rows}}
        <div class="row">
            <div class="col-xs-12">
                {{#student_columns}}
                <span>{{{random_student()}}}</span>&nbsp;
                {{/student_columns}}
            </div>
        </div>
        {{/student_rows}}
    </div>
</div>
`};