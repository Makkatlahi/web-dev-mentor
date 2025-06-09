# WebDev Mentor Challenges

Welcome to **WebDev Mentor Challenges**!  
This repository is a collection of frontend coding challenges, each organized in its own folder and accessible from a single, responsive home page.

## Features

- **Centralized Home Page:** Easily browse and launch all challenges from `home.html`.
- **Dynamic Loading:** Challenges open in an embedded iframe, so you never leave the home page.
- **Responsive Design:** Works well on both desktop and mobile devices.
- **Scalable:** Add new challenges as you grow your skills.

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Makkatlahi/web-dev-mentor_challenges.git
   cd web-dev-mentor_challenges
   ```

2. **Open `home.html` in your browser.**

3. **Click any challenge button to view the challenge in the embedded frame.**

## Project Structure

```
web-dev-mentor_challenges/
│
├── home.html           # Main landing page
├── home.css            # Styles for the home page
├── script.js           # JavaScript for dynamic challenge loading
│
├── qr-code/            # Challenge 1 folder
│   └── index.html
│   └── style.css
│   └── ...
│
├── blog-preview-card/  # Challenge 2 folder
│   └── index.html
│   └── style.css
│   └── ...
│
├── ...                 # More challenge folders as you add them
```

## Adding a New Challenge

1. **Create a new folder** in the project root (e.g., `my-new-challenge/`).
2. **Add your challenge files** (`index.html`, `style.css`, etc.) to this folder.
3. **Update `home.html`**  
   Add a new button inside the `.buttons` section:
   ```html
   <button class="btn btn-5" type="button">Challenge #5</button>
   ```
4. **Update `script.js`**  
   Add a new condition for your button:
   ```javascript
   else if (btn.classList.contains("btn-5")) {
     url = "my-new-challenge/index.html";
   }
   ```

## Contributing

Feel free to fork this repository and submit pull requests with new challenges or improvements!

## License

This project is open source and free to use for learning and personal development.

---

Happy coding!
