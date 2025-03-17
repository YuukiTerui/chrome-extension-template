# chrome-extension-template
A template for creating Chrome extensions with modern web technologies.

## Description
This repository provides a boilerplate template for developing Chrome extensions using modern web development tools and practices. It includes a basic setup for a Chrome extension with a popup, background script, and content scripts, all written in TypeScript. The template is designed to help developers quickly get started with building Chrome extensions, ensuring a structured and maintainable codebase.

## Features
- TypeScript: Write your extension code in TypeScript for better type safety and developer experience.
- Modular Architecture: Organized file structure to keep your code clean and maintainable.
- Modern JavaScript: Use ES6+ features and syntax.
- Build Tools: Pre-configured build tools to compile TypeScript and bundle your extension.
- Example Components: Includes example components and scripts to demonstrate common extension functionalities.

## Getting Started
Clone the repository:
```sh
git clone https://github.com/your-username/chrome-extension-template.git
cd chrome-extension-template
```
Install dependencies:
```sh
bun i
```
Build the extension:
```sh
bun run build
```
Load the extension in Chrome:
- Open Chrome and navigate to <a href="chrome://extensions/.">chrome://extensions/.</a>
- Enable "Developer mode" in the top right corner.
- Click "Load unpacked" and select the dist folder from this repository.

## Usage
- Modify the source code in the src directory to add your extension's functionality.
- Use bun run build to compile your TypeScript code and bundle the extension.
- Reload the extension in Chrome to see your changes.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License
This project is licensed under the MIT License.
