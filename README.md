# React Flow Graph Visualization Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An interactive graph visualization tool built with **React Flow**, **Redux**, and **TypeScript**. This application allows users to create, customize, and manipulate graph elements with **undo/redo functionality**.

![App Screenshot](https://via.placeholder.com/800x500.png?text=React+Flow+Graph+Visualization)

---

## Features

- 🎨 **Graph Visualization**: Initialize a graph with 10 draggable nodes and interconnected edges.
- 🖌️ **Node Customization**: Change node colors using a color picker and adjust font sizes (12px-24px).
- ⏪⏩ **Undo/Redo**: Track and revert changes to node positions, colors, and font sizes.
- 🧩 **State Management**: Built with **Redux** for efficient state management.
- 🚀 **Smooth Animations**: Enjoy smooth transitions and interactions.
- 📱 **Fully Responsive**: The graph adapts to all screen sizes seamlessly.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-flow-app.git
   cd react-flow-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage

### Basic Interaction Guide

#### Node Dragging:
- Click and drag any node to reposition it.

#### Node Selection:
- Click on a node to select it for customization.

#### Color Customization:
- Select a node.
- Use the color picker in the right panel to change the node's color.

#### Font Size Adjustment:
- Select a node.
- Use the number input in the right panel to adjust the font size (12px-24px).

#### Undo/Redo:
- Use the Undo and Redo buttons in the top-left corner.

---

## Available Scripts

In the project directory, you can run:

| Script         | Description                                   |
|----------------|-----------------------------------------------|
| `npm start`    | Starts the development server.                |
| `npm build`    | Builds the app for production.                |
| `npm test`     | Launches the test runner.                     |
| `npm lint`     | Runs ESLint on all source files.              |
| `npm lint:fix` | Attempts to fix linting errors automatically. |
---

## Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | Core React library |
| react-dom | ^18.2.0 | DOM rendering for React |
| react-flow-renderer | ^11.7.0 | Graph visualization |
| redux | ^4.2.1 | State management |
| react-redux | ^8.1.3 | React-Redux integration |
| react-color | ^2.19.3 | Color picker component |
| font-awesome | ^6.4.0 | Icon library |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ^5.0.4 | Type checking |
| @typescript-eslint/parser | ^5.62.0 | ESLint TypeScript parser |
| @typescript-eslint/eslint-plugin | ^5.62.0 | ESLint TypeScript rules |
| eslint-plugin-react | ^7.33.2 | React-specific linting rules |
| @testing-library/jest-dom | ^5.17.0 | Jest DOM testing utilities |
| react-scripts | ^5.0.1 | Create React App scripts |

---

## Deployment

To deploy this project to production:

1. Create a production build:
   ```bash
   npm run build
   ```
2. Deploy the **build** folder to your preferred hosting service:
   - **Vercel**
   - **Netlify**
   - **AWS Amplify**

### Deploy with Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the project:
   ```bash
   vercel
   ```

---

---


**Happy Coding! 🚀**

---

---

