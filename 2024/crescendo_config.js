var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "6357 ReefScape 🪸",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024txcmp1",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auto": [
     { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
     { "name": "Coral Scores in Troft",
      "code": "aco",
      "type": "counter"
    },
     { "name": "Coral Scores level 2",
      "code": "act",
      "type": "counter"
    },
     { "name": "Coral scores level 3",
      "code": "acs",
      "type": "counter"
    },
     { "name": "Coral scores level 4",
      "code": "acf",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "APS",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "ane",
      "type": "counter"
    }
  ],
  "teleop": [
     { "name": "Coral Scores in Troft",
      "code": "csu",
      "type": "counter"
    },
     { "name": "Coral Scores level 2",
      "code": "cos",
      "type": "counter"
    },
     { "name": "Coral scores level 3",
      "code": "cst",
      "type": "counter"
    },
     { "name": "Coral scores level 4",
      "code": "scf",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "pro",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "net",
      "type": "counter"
    },
     { "name": "Algae removed",
      "code": "are",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "station": "Station<br>",
        "floor": "Floor<br>",
        "both": "Both<br>",
        "NA": "Not Attempted"
      },
      "defaultValue": "x"
    },
   { "name": "Missed Algae",
      "code": "mal",
      "type": "counter"
    },
     { "name": "Dropped Algae (>2)",
      "code": "dra",
      "type": "bool"
    },
     { "name": "Dropped Coral (>2)",
      "code": "drc",
      "type": "bool"
    },
     { "name": "fouls",
      "code": "fou",
      "type": "counter"
    },
     { "name": "Defense",
      "code": "def",
      "type":"radio",
      "choices": {
        "uno": "Protected a specic areas<br>",
        "mult": "Protected multiple areas<br>",
        "tar": "Focused on one team<br>",
        "NA": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "If defense, did team appear to halt or delay the opponent from scoring?",
      "code": "ide",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "parked": "Parked<br>",
        "onsatge": "Onstage<br>",
        "harmony": "Harmony<br>",
        "attempted": "Attempted climb but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "High note scores",
      "code": "hns",
      "type": "radio",
      "choices": {
        "1": "1<br>",
        "2": "2<br>",
        "3": "3<br>",
        "attempted": "Attempted but failed<br>",
        "x": "No Human Player"
      },
      "defaultValue": "x"
    }

  ],
  "postmatch": [
   { "name": "Played defense against team #",
      "code": "ta",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "dropped notes (>2)",
      "code": "dno",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
