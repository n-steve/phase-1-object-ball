function gameObject(){
    const welcome = "Welcome to the NBA Game"
    return {
 home: {
     teamName: "Brooklyn Nets",
     colors: ["Black","White"],
     players:{
         'Alan Anderson':{
             number: 0,
             shoe: 16,
             points: 22,
             rebound: 12,
             assists: 12,
             steals: 3,
             blocks: 1,
             slamDunks: 1,
         },
         'Reggie Evans':{
            number: 30,
            shoe: 14,
            points: 12,
            rebound: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
        },
        'Brook Lopez':{
            number: 11,
            shoe: 17,
            points: 17,
            rebound: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
        },
        'Mason Plumlee':{
            number: 1,
            shoe: 19,
            points: 26,
            rebound: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
        },
        'Jason Terry':{
            number: 31,
            shoe: 15,
            points: 19,
            rebound: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
        },
    },
},
away: {
     teamName: "Charlotte Hornets",
     colors: ["Turquoise", "Purple"],
     players:{
         'Jeff Adrien':{
             number: 4,
             shoe: 18,
             points: 10,
             rebound: 1,
             assists: 1,
             steals: 2,
             blocks: 7,
             slamDunks: 2,
         },
         'Bismak Biyombo':{
            number: 0,
            shoe: 16,
            points: 12,
            rebound: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
        },
        'DeSagna Diop':{
            number: 2,
            shoe: 14,
            points: 24,
            rebound: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
        },
        'Ben Gordon':{
            number: 8,
            shoe: 15,
            points: 33,
            rebound: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
        },
        'Brendan Haywood':{
            number: 33,
            shoe: 15,
            points: 6,
            rebound: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
        }
    }
}
    }
}

function numPointsScores(nameOfPlayer){
    for (const dude in match){
      for(const person in match[dude].players){
        if(nameOfPlayer === person){
          return match[dude].players[nameOfPlayer].points
        }
      }
    }
  }
  

// . dot means hardcoded meaning the exact location where it is.
// [] bracket notation is the variable. so if const [variable] = home.players  return variable would return the players in the home team. 


/*Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function.
Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
Think about how you will find the shoe size of the correct player. How can you check and see if a player's name matches the name that has been passed into the function as an argument?
Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
Build a function, teamNames, that operates on the game object to return an array of the team names.
Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function:*/