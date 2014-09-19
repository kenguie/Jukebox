$(document).ready(function() {

//Write a method that lists the properties of a JavaScript object.

    function person(human, f_name, l_name, legs, arms, age, id_card, bag_color) {
        this.human = human; //bool
        this.f_name = f_name;
        this.l_name = l_name;
        this.legs = legs;
        this.arms = arms;
        this.age = age;
        this.id_card = id_card; //bool
        this.bag_color = bag_color;
    }
    
    var joker = new person(true, "Luke", "Vader", 2, 2, 28, true, "clear")
    
    for (var property in joker) {
        console.log(joker[property]);  
    };
 //---------------------------//
 
 //Object Multiplier  - not sure why we need 2 functions to do the different parts, I did it in one
 // question - if we do it in 2 steps, how do we bring the variable calculated out to use in function 2? done.
 
 
    function multiplier(n) {
        this.multiply = function() {
            n=n*1;
            n=n*n;
            console.log(n);
        };
        this.getCurrentValue = function() {
            console.log(n);
        };
    };
    
    
    var number = new multiplier(7);
    number.multiply();
    number.getCurrentValue();
    
/* // old code i started out with i just wanted to save
 function multiplier(n) {
        this.n=n;
        this.x=0;
        this.multiply = function(n) {
            x=n*1;
            x=x*n;
            console.log(x);
        };
        this.getCurrentValue = function(n) {
            console.log(n);
        };
    };
 
 */
    
    
    //console.log(n);
    /*for (var property in number) {
        console.log(number[property]);
    };*/
    
//--------------------------------------//
// Jukebox
    jukebox()

    function jukebox() {
        $(".jukebox").append("<h1>Welcome to Jukebox!</h1>");
        $(".jukebox").append("<p>Bohemian Rhapsody by Queen is currently playing.<br/> Would you like to change the song? <br/> Which song would you like?</p>");
        //$(".jukebox").append("<input type="text" placeholder="Enter song here" id="song">");
    };

    function record(artist,title) {
        this.artist = artist;
        this.title = title;
        $(".jukebox").append("<h5>This song is available: "+this.title+" written by "+this.artist);
    };
    
    var song1 = new record("Queen", "Bohemian Rhapsody");
    var song2 = new record("Five for Fighting", "100 Years");
    var song3 = new record("Offspring", "Gonna Go Far");
    var song4 = new record("Oasis", "Supersonic");
    var song5 = new record("Maroon5", "Won't Go Home Without You");
    
    $("#song").keydown(function(enter) {
        if (enter.keyCode==13) {
            console.log("enter is pressed.");
            var song = $("#song").val();
            console.log(song);
            ask(song);
        }
    });
    
    //var song = $("#song").val();
    //console.log(song);
    
    function ask(song) {
        if (song=="Queen" || song=="Bohemian Rhapsody") {
            $(".jukebox").append("<p>Queen's Bohemian Rhapsody is being played.</p>");
            $("#song").val("");
            $(".jukebox").append("<p>Would you like to change the song?</p>");
        } else if (song=="Five for Fighting" || song=="100 Years") {
            $(".jukebox").append("Five for Fighting's 100 Years is being played.");
            $("#song").val("");
            $(".jukebox").append("<p>Would you like to change the song?</p>");
        } else if (song=="Offspring" || song=="Gonna Go Far") {
            $(".jukebox").append("Offspring's Gonna Go Far is being played.");
            $("#song").val("");
            $(".jukebox").append("<p>Would you like to change the song?</p>");
        } else if (song=="Oasis" || song=="Supersonic") {
            $(".jukebox").append("Oasis' Supersonic is being played.");
            $("#song").val("");
            $(".jukebox").append("<p>Would you like to change the song?</p>");
        } else if (song=="Maroon5" || song=="Won't Go Home Without You") {
            $(".jukebox").append("Maroon5's Won't Go Home Without You is being played.");
            $("#song").val("");
            $(".jukebox").append("<p>Would you like to change the song?</p>");
        } else if (song==="") {
            $(".jukebox").append("<p>Playback Stopped.</p>");
        };
        
        
       /* switch (song) {
            case "Queen" || "Bohemian Rhapsody":
            $(".jukebox").append("Queen's Bohemian Rhapsody is being played.");
            console.log("Queen");
            break;
            case "Five for Fighting"||"100 Years":
            $(".jukebox").append("Five for Fighting's 100 Years is being played.");
            break;
            case "Offspring"||"Gonna Go Far":
            $(".jukebox").append("Offspring's Gonna Go Far is being played.");
            break;
            case "Oasis"||"Supersonic":
            $(".jukebox").append("Oasis' Supersonic is being played.");
            break;
            case "Maroon5"||"Won't Go Home Without You":
            $(".jukebox").append("Maroon5's Won't Go Home Without You is being played.");
            break;
            default:
            $(".jukebox").append("That's not one of the valid choices.");
        } */
    };
   
    
});



/*
 *
 *Object = jukebox
 *  should be able to tell what record is playing
 *  allow you to switch the current record
 *
 *Object = record
 *  title, artist,
 *  seperate or together
 *
 *  1. tell what song is playing - output song 1
 *  2. give a list of available songs
 *  3. ask for a choice to play - switch?
 *  4. play song.
 *  5. ask for another? if blank - stop.
 *
 *  Hooray that worked ... now: make it more dynamic with arrays
 *  
 *  Push choice into an array
    Split it up into artist and song
    Output.  
 *
 *
 * Create an object to represent a record player called
Jukebox. Create another object to represent a
Record. The Jukebox should be able to tell you
what Record is currently playing, and allow you to
switch the currently playing record. The currently
playing Record returned should be an object that
allows you to query for the title and artist of that
record as well as the title and artist combined
together into one string  */