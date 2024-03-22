var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "6357 Crescendo",
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
      "defaultValue": "2024txdal",
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
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Trap Scores",
      "code": "wee",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Trap scores",
      "code": "nit",
      "type": "counter"
    },
    { "name": "Amplified speaker scores",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Shutteled Game Pieces",
      "code": "sgp",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "source": "Source<br>",
        "floor": "Floor<br>",
        "both": "Both<br>",
        "NA": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Scoring Position",
      "code": "spo",
      "type": "radio",
      "choices": {
        "at subwoofer": "Subwoofer<br>",
        "away from subwoofer": "Away<br>",
        "both": "Both<br>",
        "NA": "Not Attempted"
      },
      "defaultValue": "x"
    },
   { "name": "Missed notes",
      "code": "mn",
      "type": "counter"
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
    { "name": "If defense, explain defense",
      "code": "def",
      "type": "text",
      "size": 15,
      "maxSize": 55
    },
    { "name": "fouls",
      "code": "fou",
      "type": "counter"
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
      "code": "dn",
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
