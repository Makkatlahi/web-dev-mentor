# WebDev Mentor

A collection of frontend challenges built with HTML, CSS (SCSS), and JavaScript. All challenges are accessible from a single, responsive home page.

## Features

- **Central Home Page:** Browse and launch all challenges from one place.
- **Dynamic Loading:** Challenges open in an embedded iframe, so you never leave the home page.
- **Responsive Design:** Works well on desktop and mobile devices.
- **SCSS Styling:** Uses Sass for organized, maintainable styles.
- **Easy to Extend:** Add new challenges as your skills grow.

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Makkatlahi/web-dev-mentor.git
   cd web-dev-mentor
   ```

2. **Open `index.html` in your browser.**

3. **Click any challenge button to view the challenge in the embedded frame.**

## Project Structure

```
web-dev-mentor/
│
├── index.html           # Main landing page (home page)
├── main.scss            # Main SCSS file for styling
├── main.css             # Compiled CSS from SCSS
├── script.js            # JavaScript for dynamic challenge loading
│
├── qr-code/             # Challenge 1 folder
│   └── index.html
│   └── style.css
│   └── ...
│
├── blog-preview-card/   # Challenge 2 folder
│   └── index.html
│   └── style.css
│   └── ...
│
├── ...                  # More challenge folders as you add them
```

## Adding a New Challenge

1. **Create a new folder** in the project root (e.g., `my-new-challenge/`).
2. **Add your challenge files** (`index.html`, `style.css`, etc.) to this folder.
3. **Update `index.html`**  
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

## Development

- **SCSS:** Edit `main.scss` and compile to `main.css` using your preferred Sass compiler.
- **Live Server:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for live reloading.

## License

This project is open source and free to use for learning and personal development.

---

Happy coding!
