# React + WebAssembly Fibonacci Calculator with Web Workers

This project demonstrates how to integrate **React**, **WebAssembly (Wasm)**, and **Web Workers** to optimize Fibonacci number calculations.

## Features:
- **React** handles the user interface, allowing users to input a number and calculate its Fibonacci sequence.
- **WebAssembly** (compiled from Rust) is used to perform the computationally intensive Fibonacci calculation efficiently.
- **Web Workers** are utilized to run the calculations in a separate thread, ensuring the UI remains responsive even during long-running computations.

## Technologies Used:
- **React** (Frontend)
- **Rust** (for compiling to Wasm)
- **WebAssembly (Wasm)**
- **Web Workers**

## How It Works:
1. The user inputs a number in the React UI.
2. The **Fibonacci calculation** is offloaded to **WebAssembly** for faster execution.
3. The heavy computation runs in a **Web Worker**, keeping the UI responsive.

This project demonstrates how combining **WebAssembly** and **Web Workers** can optimize computationally intensive tasks in a web app, ensuring fast and non-blocking user experiences.

Check out the code to learn how to leverage **Wasm** and **Web Workers** in a modern **React** app for efficient, non-blocking operations.

## Installation:
1. Clone this repository.
2. Install dependencies: `npm install`
3. Build and run the project: `npm start`
