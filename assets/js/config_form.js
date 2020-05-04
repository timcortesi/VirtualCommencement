window.config_form = {
	"legend": "Virtual Commencement Configuration",
	"name": "config",
	"autoFocus": true,
	"default": {
		"horizontal": false
	},
	"horizontal": true,
	"actions": [
		{
			"type": "save",
			"action": "save",
			"label": "Play!",
			"modifiers": "btn btn-success"
		}
	],
	"fields": [
        {
            "name":"school",
            "label":"School",
            "value":'Binghamton University'
        },
		{
			"type": "output",
			"label": "",
			"name": "helptext",
			"value": "<div class=\"alert alert-info\">Use the (+) and (-) buttons to add / remove students.  Click \"Play!\" when everyone has been entered.",
			"edit": false,
			"parse": false,
			"data": [
				{
					"key": "",
					"value": ""
				}
			]
		},
		{
			"label": "Student",
			"name": "students",
			"array": {
				"min": null,
				"max": null
			},
			"fields": [
				{
					"label": "First Name",
					"name": "first_name",
					"columns": 6,
					"data": [
						{
							"key": "",
							"value": ""
						}
					],
					"type": "text",
					"widgetType": "input",
					"editable": true
				},
				{
					"label": "Last Name",
					"name": "last_name",
					"columns": 6,
					"data": [
						{
							"key": "",
							"value": ""
						}
					],
					"type": "text",
					"widgetType": "input",
					"editable": true
				},
				{
					"label": "Degree",
					"name": "degree",
					"columns": 6,
					"data": [
						{
							"key": "",
							"value": ""
						}
					],
					"type": "text",
					"widgetType": "input",
					"editable": true
				},
				{
					"type": "select",
					"label": "Gender",
					"name": "gender",
					"columns": 6,
					"multiple": false,
					"data": [
						{
							"key": "",
							"value": ""
						}
					],
					"options": [
						{
							"label": "",
							"type": "optgroup",
							"options": [
								{
									"label": "Male",
									"value": "0"
								},
								{
									"label": "Female",
									"value": "1"
								},
								{
									"label": "N/A",
									"value": "2"
								}
							]
						}
					],
					"widgetType": "collection",
					"editable": true
				},
				{
					"type": "radio",
					"label": "Skin Color",
					"name": "color",
					"value": "1",
					"multiple": false,
					"data": [
						{
							"key": "",
							"value": ""
						}
					],
					"options": [
						{
							"label": "",
							"type": "optgroup",
							"options": [
								{
									"label": "<span style=\"font-size:50px;\">🧑🏻</span>",
									"value": "0"
								},
								{
									"label": "<span style=\"font-size:50px;\">🧑🏼</span>",
									"value": "1"
								},
								{
									"label": "<span style=\"font-size:50px;\">🧑🏽</span>",
									"value": "2"
								},
								{
									"label": "<span style=\"font-size:50px;\">🧑🏾</span>",
									"value": "3"
								},
								{
									"label": "<span style=\"font-size:50px;\">🧑🏿</span>",
									"value": "4"
								}
							]
						}
					],
					"widgetType": "collection",
					"editable": true
				}
			],
			"type": "fieldset"
		}
	]
}