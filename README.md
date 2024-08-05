
# 1v1 Pig Game 🐷

## Introduction
Welcome to the 1v1 Pig Game! This is a turn-based dice game where two players compete to be the first to score 100 points. The game is built using HTML, CSS, and JavaScript and runs seamlessly in the Chrome browser.

## Game Rules
1. **Objective**: The first player to reach 100 points wins the game.
2. **Turn-Based Play**: Players take turns rolling a dice.
3. **Roll Dice**: 
    - If a player rolls any number other than 1, it is added to their temporary score.
    - If a player rolls a 1, their temporary score is lost, and the turn switches to the other player.
4. **Hold**:
    - A player can choose to "Hold" their score, adding the temporary score to their total score.
    - The turn then switches to the other player.
5. **New Game**: The game can be reset at any time, setting all scores and player names to their initial values.

## Game Features
- **Two-Player Mode**: Players take turns by switching active player status.
- **Interactive UI**: Includes three main buttons - New Game, Roll Dice, and Hold.
  - **New Game Button**: Resets scores and player names to their initial values.
  - **Roll Dice Button**: Rolls the dice displayed on the UI.
  - **Hold Button**: Adds the dice score to the current player's score unless a 1 is rolled, in which case the active player switches.
- **Dynamic Gameplay**: Players can press Roll Dice repeatedly, with each roll score added to a temporary score. If a 1 is rolled, the score is lost. Pressing Hold adds the accumulated score to the active player's total.
- **Winning Condition**: The first player to score 100 or more points wins the game.

## Technical Details
- **Technology Stack**: Developed using HTML, CSS, and JavaScript.
- **State Management**: Utilized JavaScript variables to handle scores, active player status, and dice rolls.
- **Responsive Design**: Ensured the game runs smoothly on the Chrome browser with an intuitive and interactive UI.

## How to Run the Game
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/pig-game.git
    ```
2. Open the `index.html` file in your Chrome browser to start the game.

## Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.


## Contact
For any questions or suggestions, please contact me at (mailto:shivamrana.cpp@gmail.com).


🌟 "Building mini projects like this Pig game is a fantastic way to sharpen your web development skills, push your boundaries, and turn your ideas into reality. Keep coding and stay curious!" 🌟

---

Happy coding!

```
