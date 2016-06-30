$(document).ready(function() {
    $('#settingButton').click(function() {
       settingSeed(); 
        
    }); 
    $('#frameButton').click(function() {
       frameSeed();
        
    });
    $('#themeButton').click(function() {
       themeSeed();
        
    });
    $('#habitButton').click(function() {
        cultivateHabits();
    });
     $('#myonoffswitch').change(function() {
        switchTest();
    });
    
    // Tooltip only Text
    $('.masterTooltip').hover(function(){
            // Hover over code
            var title = $(this).attr('title');
            $(this).data('tipText', title).removeAttr('title');
            $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function() {
            // Hover out code
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
    }).mousemove(function(e) {
            var mousex = e.pageX + 20; //Get X coordinates
            var mousey = e.pageY + 10; //Get Y coordinates
            $('.tooltip')
            .css({ top: mousey, left: mousex })
    });
});

var maxTimerNormal = 30; //when switched back from mini to normal, the highest timer setting
var maxTimerMini = 5; //mini mode highest timer setting
var maxTimer = 30; //default highest timer setting

function frameSeed(){

    alert('This app will provide you with a certain category of song to write.');
    alert('Roll the dice to generate the category of song to begin composing');

    var toneName;
    var tone = (Math.floor( Math.random() * 11) + 1);
    console.log(tone);

    if (tone === 1) {
        toneName = 'song of my leaving';
    } else if (tone === 2) {
        toneName = 'song of disdain';
    } else if (tone === 3) {
        toneName = 'political/protest song';
    } else if (tone === 4) {
        toneName = 'religious song';
    } else if (tone === 5) {
        toneName = 'song of despair';
    } else if (tone === 6) {
        toneName = 'song of the mist';
    } else if (tone === 7) {
        toneName = 'song of love';
    } else if (tone === 8) {
        toneName = 'song of origins';    
    } else if (tone === 9) {
        toneName = 'the blues';
    } else if (tone === 10) {
        toneName = 'song of the legal process gone wrong';
    } else {
        toneName = 'song of the darkness and nighttime';
    } 

    var el3 = document.getElementById('frame');
    el3.innerHTML = 'The tone of the song is '+ toneName + '.';
 

}


function themeSeed(){

    alert('This app will provide you with a certain theme to use in a new song.');
    alert('Roll the dice to generate the theme to use while composing');

    var themeName;
    var theme = (Math.floor( Math.random() * 24) + 1);
    console.log(theme);

    if (theme === 1) {
        themeName = 'Creativity';
    } else if (theme === 2) {
        themeName = 'Curiosity';
    } else if (theme === 3) {
        themeName = 'Judgement';
    } else if (theme === 4) {
        themeName = 'Love of Learning';
    } else if (theme === 5) {
        themeName = 'Perspective';
    } else if (theme === 6) {
        themeName = 'Bravery';
    } else if (theme === 7) {
        themeName = 'Perseverance';
    } else if (theme === 8) {
        themeName = 'Honesty';    
    } else if (theme === 9) {
        themeName = 'Zest';
    } else if (theme === 10) {
        themeName = 'Love';
    } else if (theme === 11) {
        themeName = 'Kindness';
    } else if (theme === 12) {
        themeName = 'Social Intelligence';
    } else if (theme === 13) {
        themeName = 'Teamwork';
    } else if (theme === 14) {
        themeName = 'Fairness';
    } else if (theme === 15) {
        themeName = 'Leadership';
    } else if (theme === 16) {
        themeName = 'Forgiveness';
    } else if (theme === 17) {
        themeName = 'Humility';    
    } else if (theme === 18) {
        themeName = 'Prudence';
    } else if (theme === 19) {
        themeName = 'Self-Regulation';
    } else if (theme === 20) {
        themeName = 'Appreciation of Beauty and Excellence';    
    } else if (theme === 21) {
        themeName = 'Gratitude';
    } else if (theme === 22) {
        themeName = 'Hope';    
    } else if (theme === 23) {
        themeName = 'Humor';
    } else {
        themeName = 'Spirituality';
    } 

    var el3 = document.getElementById('theme');
    el3.innerHTML = 'The theme of the song is '+ themeName + '.';
 

}


// setting button
function settingSeed() {

    function stateSelector() {

      var bucket = 
          [ "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District Of Columbia",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ];
      
      function getRandomFromBucket() {
            var randomIndex = Math.floor(Math.random()*bucket.length);
            return bucket.splice(randomIndex, 1)[0];
            }
      var stateName = getRandomFromBucket();
        
        var el = document.getElementById('settingPlace');
        el.innerHTML = 'You have drawn '+ stateName + '.';

     }
                     


    alert('This app will provide you with a specific setting for a song to begin writing.');

    alert('As far as setting, you can decide if you want your setting to be chosen from a list of the 100 largest cities in the U.S. or from a list of 50 U.S. states');
    var listChoice = prompt('Do you want selection from list of cities or states? Enter "cities" or "states"');

    alert('Click OK to roll the dice and generate a song setting');


    if (listChoice.toUpperCase() === "CITIES") {
        citySelector();
    } else if (listChoice.toUpperCase() === "STATES") {
        stateSelector();
    }



                     


    function citySelector() {
        var bucket = ['New York, New York', 
     'Los Angeles, California' ,
     'Chicago, Illinois' ,
     'Houston, Texas' ,
     'Philadelphia, Pennsylvania',
     'Phoenix, Arizona' ,
     'San Diego, California' ,
     'San Antonio, Texas' ,
     'Dallas, Texas' ,
     'Detroit, Michigan' ,
     'San Jose, California' ,
     'Indianapolis, Indiana' ,
     'Jacksonville, Florida' ,
     'San Francisco, California' ,
     'Columbus, Ohio',
     'Austin, Texas' ,
     'Memphis, Tennessee' ,
     'Baltimore, Maryland' ,
     'Charlotte, North Carolina' ,
     'Fort Worth, Texas' ,
     'Boston, Massachusetts' ,
     'Milwaukee, Wisconsin' ,
     'El Paso, Texas' ,
     'Washington, District of Columbia' ,
     'Nashville-Davidson, Tennessee' ,
     'Seattle, Washington' ,
     'Denver, Colorado' ,
     'Las Vegas, Nevada' ,
     'Portland, Oregon' ,
     'Oklahoma City, Oklahoma' ,
     'Tucson, Arizona' ,
     'Albuquerque, New Mexico' ,
     'Atlanta, Georgia' ,
     'Long Beach, California' ,
     'Kansas City, Missouri' ,
     'Fresno, California' ,
     'New Orleans, Louisiana' ,
     'Cleveland, Ohio' ,
     'Sacramento, California' ,
     'Mesa, Arizona' ,
     'Virginia Beach, Virginia' ,
     'Omaha, Nebraska' ,
     'Colorado Springs, Colorado' ,
     'Oakland, California' ,
     'Miami, Florida' ,
     'Tulsa, Oklahoma' ,
     'Minneapolis, Minnesota' ,
     'Honolulu, Hawaii' ,
     'Arlington, Texas' ,
     'Wichita, Kansas' ,
     'St. Louis, Missouri' ,
     'Raleigh, North Carolina' ,
     'Santa Ana, California' ,
     'Cincinnati, Ohio' ,
     'Anaheim, California' ,
     'Tampa, Florida' ,
     'Toledo, Ohio' ,
     'Pittsburgh, Pennsylvania' ,
     'Aurora, Colorado' ,
     'Bakersfield, California' ,
     'Riverside, California' ,
     'Stockton, California' ,
     'Corpus Christi, Texas' ,
     'Lexington-Fayette, Kentucky', 
     'Buffalo, New York' ,
     'St. Paul, Minnesota' ,
     'Anchorage, Alaska' ,
     'Newark, New Jersey' ,
     'Plano, Texas' ,
     'Fort Wayne, Indiana' ,
     'St. Petersburg, Florida' ,
     'Glendale, Arizona' ,
     'Lincoln, Nebraska' ,
     'Norfolk, Virginia' ,
     'Jersey City, New Jersey' ,
     'Greensboro, North Carolina' ,
     'Chandler, Arizona' ,
     'Birmingham, Alabama' ,
     'Henderson, Nevada' ,
     'Scottsdale, Arizona' ,
     'North Hempstead, New York' ,
     'Madison, Wisconsin' ,
     'Hialeah, Florida' ,
     'Baton Rouge, Louisiana' ,
     'Chesapeake, Virginia' ,
     'Orlando, Florida' ,
     'Lubbock, Texas' ,
     'Garland, Texas' ,
     'Akron, Ohio' ,
     'Rochester, New York' ,
     'Chula Vista, California' ,
     'Reno, Nevada' ,
     'Laredo, Texas' ,
     'Durham, North Carolina' ,
     'Modesto, California' ,
     'Huntington, New York' ,
     'Montgomery, Alabama' ,
     'Boise, Idaho' ,
     'Arlington, Virginia' ,
     'San Bernardino, California' 
    ];


        function getRandomFromBucket() {
            var randomIndex = Math.floor(Math.random()*bucket.length);
            return bucket.splice(randomIndex, 1)[0];
            }

        var cityName = getRandomFromBucket();
        var el = document.getElementById('settingPlace');
        el.innerHTML = 'You have drawn '+ cityName + '.';

     }


    alert('Roll the dice to generate the hour, day, and direction you are facing');

    var hour = (Math.floor( Math.random() * 24) + 1);
    console.log(hour);
    var dayOfTheWeek = (Math.floor( Math.random() * 7) + 1);
    console.log(dayOfTheWeek);
    var directionFacing = (Math.floor( Math.random() * 8) + 1);
    console.log(directionFacing);
    var hourName = '';
    var dayOfTheWeekName = '';
    var directionFacingName = '';


    if (hour > 0 && hour < 12) {
        hourName = hour + ' am';
    } else if ( (hour - 12) === 0){
        hourName = 'noon';
    } else {
        hourName = (hour - 12) + ' pm';
    } 

    if (dayOfTheWeek === 1) {
        dayOfTheWeekName = 'Monday';
    } else if (dayOfTheWeek === 2) {
        dayOfTheWeekName = 'Tuesday';
    } else if (dayOfTheWeek === 3) {
        dayOfTheWeekName = 'Wednesday';
    } else if (dayOfTheWeek === 4) {
        dayOfTheWeekName = 'Thursday';
    } else if (dayOfTheWeek === 5) {
        dayOfTheWeekName = 'Friday';
    } else if (dayOfTheWeek === 6) {
        dayOfTheWeekName = 'Saturday';
    } else {
        dayOfTheWeekName = 'Sunday';
    }


    if (directionFacing === 1) {
        directionFacingName = 'North';
    } else if (directionFacing === 2) {
        directionFacingName = 'Northeast';
    } else if (directionFacing === 3) {
        directionFacingName = 'East';
    } else if (directionFacing === 4) {
        directionFacingName = 'Southeast';
    } else if (directionFacing === 5) {
        directionFacingName = 'South';
    } else if (directionFacing === 6) {
        directionFacingName = 'Southwest';
    } else {
        directionFacingName = 'West';
    }


    var el2 = document.getElementById('settingOther');
    el2.innerHTML = 'It is '+ hourName + ' on a ' + dayOfTheWeekName + ' and you are facing ' + directionFacingName +'.';
}





function switchTest () {
    if(document.getElementById('myonoffswitch').checked) {
        maxTimer = maxTimerNormal;
        console.log("Normal");
    } else {
        maxTimer = maxTimerMini;
        console.log("Mini");
    }   
}



function cultivateHabits () {

    var session1 = '';
    var session2 = '';
    var session3 = '';
    var session4 = '';

    var score = 0;

    var hatSessionFunctionCounter = 1

    // introduction to game
    alert('For most of us, cultivating our songwriting requires 4 activities - or habits - that we need to perform on a daily basis.');
    alert('The four habits are: Writing, Performing, Listening, and Reading.');
    alert('Roll the dice to see which of your habits you will do first.');


    var dailyBucket = [];

    for (var i=1; i <= 4 ;i++) {
        dailyBucket.push(i);
    }

    function getRandomFromBucket() {
       var randomIndex = Math.floor(Math.random()*dailyBucket.length);
       return dailyBucket.splice(randomIndex, 1)[0];
    }

    // will pick a random number between 0 and 10, and can be called 10 times
    session1 = getRandomFromBucket();
    session2 = getRandomFromBucket();
    session3 = getRandomFromBucket();
    session4 = getRandomFromBucket();

    var hat1 = 'Writing';
    var hat2 = 'Performing';
    var hat3 = 'Listening';
    var hat4 = 'Reading';

    sessionAnnouncer(session1);

    function sessionAnnouncer(session) {
        if (session === 1) {
            alert('Next you will do a session with your '+ hat1 +' habit.');
            hatSession(hat1);
        } else if (session === 2) {
            alert('Next you will do a session with your '+ hat2 +' habit.');
            hatSession(hat2);
        } else if (session === 3) {
            alert('Next you will do a session with your '+ hat3 +' habit.');
            hatSession(hat3);
        } else if (session === 4) {
            alert('Next you will do a session with your '+ hat4 +' habit.');
            hatSession(hat4);
        } else {
            alert("You've cultivated all your habits today, congratulations");
        }
    }

    function hatSession(hat) {

        var timerLength;
        var scoreUp;
        var t = 0;
        do {
        alert('Roll the dice to see how long to your focused session of '+ hat + ' will be.');
        if (document.getElementById('myonoffswitch').checked || t > 0) {
          timerLength = (Math.floor( Math.random() * maxTimerNormal) + 1);  
        } else {
          timerLength = (Math.floor( Math.random() * maxTimer) + 1);
        } 
        alert('You rolled a ' + timerLength + ', so focus on your '+ hat + ' habit for ' + timerLength + ' minutes. Click OK when you are done with the timed session');
        if (document.getElementById('myonoffswitch').checked || t > 0) {
            score += 5;
            scoreUp = 5;  
        } else {
            score ++;
            scoreUp = 1;
        }
        var elScore = document.getElementById('score');
        elScore.innerHTML = score;
        $( "#log" ).append(hat + " session of " + timerLength + " minutes complete, score increased by " + scoreUp + ".</br>");
        t ++;
        var moreHat = prompt('Do you want to do another session of your ' + hat + ' habit? Yes or No?');
        } while (moreHat.toUpperCase() === 'YES' || moreHat.toUpperCase() === 'Y')
        hatSessionFunctionCounter ++;
        if (hatSessionFunctionCounter === 2) {
            sessionAnnouncer(session2);
        } else if (hatSessionFunctionCounter === 3) {
            sessionAnnouncer(session3);
        } else if (hatSessionFunctionCounter === 4) {
            sessionAnnouncer(session4);
        } else {
            alert("You've strengthened all your songwriting habits today, congratulations");  
            alert("Your Songfarmer score today is " + score);
        }
    }

}




function composeSession () {
    alert('This process will help you run a composing session');
    alert('Begin by free writing for 10 minutes. Keep the pen moving or keep letters appearing on the keyboard');
    alert("Don't try to rhyme, don't worry about punctuation, capitalization, or spelling.");
    alert("In fact, don't use the backspace if you are using the computer, and don't try to rhyme.");
    alert("Do follow the thread of your thoughts wherever they go, even write: 'I don't know what to say right now if that't what you are thinking");

}




