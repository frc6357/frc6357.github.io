var config_data = `
{
  "dataFormat": "tsv", 
  "title": "Scouting PASS 2025",
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
        "tank": "Tank<br>",
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
    { "name": "# of Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "# of coral scored in auto",
      "code": "aca",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
      { "name": "# of algae scored in auto",
      "code": "aal",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
     { "name": "Climb",
      "code": "clb",
      "type": "radio",
      "choices": {
        "deep": "Deep<br>",
        "shallow": "Shallow<br>",
        "both": "Both<br>",
        "none": "None"
      },
      "defaultValue": "n"
    },
    { "name": "Floor pickup Coral",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Station pickup Coral",
      "code": "spu",
      "type": "bool"
    },
     { "name": "Score coral level 1", 
      "code": "scq",
      "type": "bool"
    },
     { "name": "Score coral level 2", 
      "code": "scw",
      "type": "bool"
    },
     { "name": "Score coral level 3", 
      "code": "sce",
      "type": "bool"
    },
     { "name": "Score coral level 4", 
      "code": "scr",
      "type": "bool"
    },
     { "name": "Score in Processor", 
      "code": "spi",
      "type": "bool"
    },
     { "name": "Score in Net", 
      "code": "sni",
      "type": "bool"
    },
     { "name": "Remove Algae", 
      "code": "psr",
      "type": "bool"
    },
    { "name": "Unmodified Kit bot *DO NOT ASK*", 
      "code": "kit",
      "type": "bool"
    },
    { "name": "Unmodified Every bot *DO NOT ASK*", 
      "code": "ueb",
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
