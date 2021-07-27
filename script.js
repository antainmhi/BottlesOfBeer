function lyrics(){

    for (var numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--) {
        var bottleWord = "bottle";
       if (numberOfBottles <= 0) {
          bottleWord = "bottles";
          document.getElementById("demo").innerHTML += "No more " + bottleWord + " of beer on the wall. <br>"; 
          document.getElementById("demo").innerHTML +="No more " + bottleWord + " of beer,<br>";
          document.getElementById("demo").innerHTML +="Go to the store and buy some more, <br> 99 bottles of beer on the wall";
       }
       else if (numberOfBottles == 1 ) {
           bottleWord = "bottle";
           document.getElementById("demo").innerHTML += numberOfBottles + " " + bottleWord + " of beer on the wall <br>";
           document.getElementById("demo").innerHTML +=numberOfBottles + " " + bottleWord + " of beer,<br>";
           document.getElementById("demo").innerHTML +="Take one down, pass it around,<br>";
       }
       else if (numberOfBottles >= 2) {
           bottleWord = "bottles";
           document.getElementById("demo").innerHTML +=numberOfBottles + " " + bottleWord + " of beer on the wall <br>";
           document.getElementById("demo").innerHTML +=numberOfBottles + " " + bottleWord + " of beer, <br>";
           document.getElementById("demo").innerHTML +="Take one down, pass it around, <br>";
     
       }
           
    }

    document.getElementById("demo").innerHTML += text;

}
