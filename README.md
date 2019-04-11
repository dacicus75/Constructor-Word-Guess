# Constructor-Word-Guess

* **Game Information**: This is a node.js based application with interactive prompts on the command-line. Test your knowledge of the common web developer terms.

1. The game requires `inquirer` npm package.


* **Letter.js**: Contains a constructor, Letter. This constructor displays a blank placeholder depending on whether or not the user has guessed the letter. 

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. 

* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`

* **Screenshot Images**
![wordconstructor1](https://user-images.githubusercontent.com/46613441/55924377-aec8c400-5bd7-11e9-9463-4011b1d5d75a.png)
![wordconstructor2](https://user-images.githubusercontent.com/46613441/55924460-f4858c80-5bd7-11e9-964e-528b9a79b4ff.png)


