# Quizania - Interactive Web Quiz

---

## Description
This project is an engaging and dynamic web-based quiz application. Designed to be both fun and informative, it allows users to test their general knowledge through a series of multiple-choice questions. The quiz features a clear user interface, a timer for each question, real-time feedback on answers, and a score-based result screen with dynamic background changes.

---

## Features
* **Intuitive User Interface:** Clean and responsive design for an optimal user experience across devices.
* **Start/Info Screen:** Provides clear quiz rules before the game begins.
* **Countdown Timer:** Each question has a time limit (e.g., 15 seconds) to encourage quick thinking.
* **Live Progress Bar:** A visual indicator shows the time remaining for the current question.
* **Instant Feedback:** Users receive immediate visual feedback (correct/incorrect icons and highlighting) upon selecting an answer.
* **Score Tracking:** Accurately tracks the user's score throughout the quiz.
* **Dynamic Question Loading:** Questions and options are loaded from a separate JavaScript array, making it easy to extend or modify quiz content without touching core logic.
* **Randomized Questions & Options:** Questions and their respective answer options are shuffled to ensure variety in each playthrough.
* **Themed Result Screen:** Displays the final score with a motivational message and changes the body's background color based on performance (excellent, good, or low score).
* **Replay/Quit Options:** Users can easily restart the quiz for another round or exit the game.
* **Custom Favicon:** A unique browser tab icon (`images/icon.ico`) enhances brand recognition.

---

## Technologies Used
* **HTML5:** Provides the foundational structure for the quiz application.
* **CSS3:** Handles all styling, layout, responsive design, and animations for a visually appealing experience.
* **JavaScript (ES6+):** Powers all interactive functionalities, including quiz logic, timer management, DOM manipulation, and dynamic content.
* **Font Awesome:** Utilized for various icons (e.g., checkmark, cross, crown).
* **Google Fonts:** Incorporated for custom typography to enhance readability and aesthetics.

---

## How to Run Locally

Follow these simple steps to get the Quizania game running on your local machine:

1.  **Clone the repository (or download the files):**
    If you're using Git, open your terminal or command prompt and run:
    ```bash
    git clone https://github.com/mohitgundal/Quiz-App.git
    ```
    
    Alternatively, you can just download the project files directly from GitHub as a ZIP archive.

2.  **Navigate to the project directory:**
    If you cloned the repository, change into the project folder:
    ```bash
    cd Quiz-App
    ```

3.  **Open `index.html`:**
    Locate the `index.html` file within the project directory and open it with your preferred web browser (e.g., Chrome, Firefox, Edge).
    No local server setup is required as this is a front-end only application.
   ---

## Project Structure
```plaintext
/
├── index.html        # The main HTML file, structuring the quiz layout and content.
├── style.css        # Contains all the CSS rules for styling the UI, animations, and responsive design.
├── script.js        # The core JavaScript file, handling the quiz logic, timers, score tracking, and user interactions.
├── questions.js     # A dedicated JavaScript file that stores all the quiz questions, options, and correct answers.
├── images/          # Directory for project-related image assets.
├── icon.png         # The custom favicon displayed in the browser tab.
└── README.md        # This file
```

## Contribution
Feel free to fork the repository, make improvements, and submit pull requests. Issues and feature requests are also welcome!


## License
This project is licensed under the MIT License — see the LICENSE file for details.


## Contact
Created by Mohit Gundal. Feel free to reach out for suggestions or collaborations!


## Thank you for checking out this project! 😊
---

Would you like me to help you customize this further, for example, adding badges, or writing a shorter summary?
