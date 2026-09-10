# MJ Kozmetikus - Frontend Refactoring

This project is a modern, modular frontend refactoring of the MJ Kozmetikus website. It features semantic HTML, accessible UI components, and a clean CSS/JS architecture.

## Project Structure

```text
├── index.html          # Main landing page
├── src/
│   ├── assets/         # Static assets (images, icons)
│   ├── scripts/        # JavaScript modules
│   │   ├── components/ # Reusable UI components
│   │   ├── utils/      # Utility functions and data
│   │   └── main.js     # Entry point
│   └── styles/         # CSS stylesheets
│       ├── common.css  # Global styles and variables
│       └── pages/      # Page-specific stylesheets
```

## Setup & Local Development

This project uses native ES Modules, meaning it must be served via a local web server (e.g., Live Server in VS Code, Python's `http.server`, or Node's `http-server`).
Opening `index.html` directly from the file system (`file://` protocol) will result in CORS errors when loading ES Modules.

### Using VS Code Live Server
1. Install the "Live Server" extension in VS Code.
2. Open `index.html`.
3. Click "Go Live" in the bottom right corner.

### Using Python
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

## Code Style & Maintenance

- **HTML**: Use semantic HTML5 elements. Ensure all images have `alt` tags and interactive elements have appropriate ARIA attributes or use native elements (`<button>`, `<a>`).
- **CSS**: Shared styles should be placed in `src/styles/common.css`. Page-specific styles should be placed in `src/styles/pages/[page-name].css`. Avoid inline styles.
- **JavaScript**: Use ES6 modules (`import`/`export`). Keep functions small and modular. Document functions using JSDoc.
- **Formatting & Linting**: This project uses Prettier for code formatting and ESLint for linting. Please ensure your editor is configured to use these tools based on `.prettierrc` and `.eslintrc.json`.
