
A webpage that allows a superhero and villain to battle.
The project contains HTML, CSS, and two JavaScript files. The index.html file contains two drop-down widgets listing 
the names of superheroes and supervillains. 

The index.js file contains the following:
Two constants, heroes and villains, that contain a list of SuperHero and SuperVillain objects.
A registerHandlers() function registers change event handlers for the two drop-down widgets.
A selectionChanged() function that is called when a hero or villain is selected. 
The function calls the selected hero's battle() method with the selected villain and displays the winner's alias in the winner paragraph.

I Created three classes and, Added the following to hero.js:
Created a SuperHuman class with properties name and powerLevel and a constructor that has name and powerLevel parameters.
Created SuperHero and SuperVillain classes that extend the SuperHuman class. Both classes have a constructor that has name, alias, and powerLevel parameters, and the constructor calls the parent class's constructor with the given name and powerLevel.
Also, add a battle() method to the SuperHero class that has a SuperVillain parameter. battle()  returns true if the hero's powerLevel is >= the villain's powerLevel, false otherwise. Also, Add a getEvilChuckle() method to the SuperVillain class that returns the string "Ha ha ha!".

