const express = require('express');
const app = express();
const port = 3000;

// Step 1: Define the data structure for athletes
class Athlete {
    constructor(name, pote) {
        this.name = name;
        this.pote = pote;
    }
}

class Team {
  constructor(name, group) 
  {
      this.name = name;
      this.group = group;
  }
}

// Step 2: Generate 24 athletes with random quality scores
function generateAthletes() {
    // let athletes = [];
    // for (let i = 0; i < 24; i++) {
    //     athletes.push(new Athlete(`Athlete${i}`, Math.floor(Math.random() * 6)));
    // }

    let athletes = [
        new Athlete('Pedro ivo', 5), new Athlete('Jhonatan', 5), new Athlete('Cleyson', 5), new Athlete('Tarcísio', 5),
        new Athlete('Ygor campos', 4), new Athlete('Beto', 4), new Athlete('monguinha', 4), new Athlete('Anderson', 4),
        new Athlete('rangel', 3), new Athlete('Osi', 3), new Athlete('caian', 3), new Athlete('Dimitri', 3),
        new Athlete('Igor', 2), new Athlete('Romildo', 2), new Athlete('teteu', 2), new Athlete('alef', 2),
        new Athlete('Marcelo', 1), new Athlete('malandro', 1), new Athlete('luan', 1), new Athlete('maneu', 1),
        new Athlete('Cássio', 0), new Athlete('dudu', 0), new Athlete('Danilo', 0), new Athlete('de bru', 0)
      ];
    return athletes;
}

// Step 3: Divide athletes into 6 groups based on their quality scores
function divideIntoGroups(athletes) {
  // var teams = new Team
    const teams = new Team();
    let groups = [[], [], [], [], [], []];
    for (let athlete of athletes) {
        groups[athlete.pote].push(athlete);
    }
    return groups;
}

// // Step 4: Form 4 teams from these groups
// function formTeams(groups) {
//     let teams = [[], [], [], []];
//     for (let group of groups) {
//         for (let i = 0; i < 4; i++) {
//             teams[i].push(group[i]);
//         }
//     }
//     return teams;
// }



// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Form 4 teams from these groups
function formTeams(groups) {
  let teams = [[], [], [], []];
  for (let group of groups) {
    shuffleArray(group); // Shuffle the athletes in the group
    for (let i = 0; i < 4; i++) {
      teams[i].push(group[i]);
    }
  }
  return teams;
}

// Step 5: Set up a basic Express.js server
app.get('/teams', (req, res) => {
    let athletes = generateAthletes();
    let groups = divideIntoGroups(athletes);
    let teams = formTeams(groups);
    let finalTeams = [
      // new Team("team 1", teams[0]),
      // new Team("team 2", teams[1]),
      // new Team("team 3", teams[2]),
      // new Team("team 4", teams[3])
    ];


    teams
      .forEach((team) => {
        finalTeams.push(new Team(team.findIndex, team));
        console.log("index team " + team.findIndex);
      });

    console.log(finalTeams);

    res.json(finalTeams);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});