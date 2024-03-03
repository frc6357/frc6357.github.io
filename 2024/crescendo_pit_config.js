var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Pit Scouting",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width (in)",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Length",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Height (in)",
      "code": "hei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Width",
      "code": "mah",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "swerve": "Swerve<br>",
        "west": "West Coast/Tank<br>",
        "mech": "Mechanum<br>",
        "other": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other ratio (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "neo": "Neo<br>",
        "falc": "Falcon<br>",
        "cim": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# of Motors",
      "code": "nob",
      "type": "number"
    },
    { "name": "Floor pickup Notes",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Source pickup Notes",
      "code": "spu",
      "type": "bool"
    },
    { "name": "Number of Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Number of pieces scored in auto",
      "code": "npa",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Climb",
      "code": "cli",
      "type": "radio",
      "choices": {
        "inside": "Inside<br>",
        "outside": "Outside<br>",
        "both": "Both<br>",
        "none": "None<br>"
      },
      "defaultValue":"n"
    },
    { "name": "Score AMP",
      "code": "amp",
      "type": "bool"
    },
    { "name": "Score Speaker",
      "code": "spe",
      "type": "bool"
    },
    { "name": "Score Trap",
      "code": "tra",
      "type": "bool"
    },
    { "name": "Major Concerns",
      "code": "mc",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
