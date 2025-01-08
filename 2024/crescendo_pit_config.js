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
    { "name": "Length (in)",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Height (in)",
      "code": "hei",
      "type": "number",
      "defaultValue": "0"
    },
     { "name": " Extended Height (in)",
      "code": "exh",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight (pounds)",
      "code": "mah",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "swerve": "Swerve<br>",
        "west": "Tank<br>",
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
    { "name": "Score From",
      "code": "fsg",
      "type": "radio",
      "choices": {
        "sub": "Subwoofer<br>",
        "away": "away from subwoofer<br>",
        "both": "both<br>",
        "cant": "Can not score in general"
      },
      "defaultValue": "x"
    },
    { "name": "Drivetrain Motor",
      "code": "dtm",
      "type": "radio",
      "choices": {
        "neo": "Neo<br>",
        "fal": "Falcon<br>",
        "cim": "CIM<br>",
        "kra": "Kraken<br>",
        "other": "Other"
      },
      "defaultValue": "o"
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
    { "name": "Piece recognition in auto",
      "code": "gpr",
      "type": "bool"
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
