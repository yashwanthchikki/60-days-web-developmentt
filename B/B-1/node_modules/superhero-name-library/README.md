# superhero-name-library

### Installation
```npm i superhero-name-library ```

### Usage
``` const superhero = require('superhero-name-library') ```

### API
1.  ```superhero.random()```
	returns a random superhero name
	
2. ```superhero.allNames()```
	returns an array containing all names 
	
3. ```superhero.allNames(n)```
	returns an array containing first 'n' names 

4.  ```superhero.rawList ```
	  returns entire json
	  
5.  ```superhero.getByInitialLetter(char)```
	returns an array containing all superhero names starting from char
	**Eg:**   superhero.getByInitialLetter("x")  ===> [ 'X-23', 'X-Man' ]

6. ```superhero.getSuperHeroById(id)```
	returns a superhero with matching id     (id should be a number between 1 - 731) 
