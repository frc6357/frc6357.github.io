var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "6357 Reefscape 🪸",
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
      "filename": "2024/realreal2025field.png",
      "clickRestriction": "one",
      "allowableResponses": "6 7 18 19 30 31 42 43 54 55 66 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
     { "name": "Leave Starting Zone",        
      "code": "al",
      "type": "bool"
    },
     { "name": "Coral Scores in trough",
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
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "ane",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "apf",
      "type": "radio",
      "choices": {
        "station": "Station<br>",
        "floor": "Floor<br>",
        "both": "Both<br>",
        "na": "Not Attempted"
      },
      "defaultValue": "na"
    },
     { "name": "Coral Scores in trough",
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
      "code": "tpf",
      "type": "radio",
      "choices": {
        "station": "Station<br>",
        "floor": "Floor<br>",
        "both": "Both<br>",
        "na": "Not Attempted"
      },
      "defaultValue": "na"
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
     { "name": "Fouls",
      "code": "fou",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Defense",
      "code": "def",
      "type":"radio",
      "choices": {
        "one": "protected one location<br>",
        "multiple": "protected multiple locations<br>",
        "team": "targeted specific team<br>",
        "na": "Not attempted"
      },
      "defaultValue": "na"
    },
    { "name": "Defense delayed opponent?",
      "code": "ide",
      "type": "bool"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "parked": "Parked<br>",
        "shallow": "shallow cage<br>",
        "deep": "deep cage<br>",
        "attempted": "Attempted climb but failed<br>",
        "na": "Not attempted"
      },
      "defaultValue": "na"
    }
  ],
   "postmatch": [
     { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Temporarily Immobilized",
      "code": "tei",
      "type": "bool"
    },
    { "name": "Permanently Immobilized",
      "code": "per",
      "type": "bool"
    }
   ]
}`;
