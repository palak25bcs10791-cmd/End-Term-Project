# SpendWise | Vanilla JS Finance Tracker

## 📌 Project Overview
SpendWise is a high-performance, interactive personal finance dashboard built entirely with **Vanilla JavaScript**. It allows users to track their income and expenses, visualize their progress toward a savings goal, and manage their financial data through a clean, modern interface.

This project was developed for the **Web Dev II (Batch 2029) Final Project**, focusing on core JavaScript fundamentals and advanced DOM manipulation.

---

## 🎯 Problem Statement
Managing daily expenses often feels chaotic. Many existing tools are either too complex or require accounts. SpendWise provides a lightweight, browser-based solution that:
1. Logs transactions instantly.
2. Visualizes "Savings Progress" against a target goal.
3. Persists data across sessions without a backend.
4. Offers filtering to help users analyze spending habits.

---

## ✨ Features Implemented
* **Dynamic Dashboard:** Real-time calculation of total balance (positive/negative).
* **Interactive Savings Goal:** A visual progress bar that updates dynamically as the balance changes.
* **Customizable Goals:** Users can set and update their financial targets on the fly.
* **Smart Filtering:** Category-based views (All, Income, Expenses) to organize history.
* **Persistent Storage:** Uses `LocalStorage` to ensure data isn't lost on page refresh.
* **Real-time Feedback:** A "Toast" notification system for user actions (Add/Delete).
* **Responsive UI:** Designed using Flexbox and Grid for a seamless mobile/desktop experience.

---

## 🧠 DOM & JavaScript Concepts Used
To meet the "Depth of DOM Manipulation" requirement, this project utilizes:
* **Dynamic Element Creation:** Creating and injecting `<li>` elements using `document.createElement`.
* **Event Delegation:** Managing delete actions and filter toggles via a single event listener on parent containers (optimized performance).
* **State Management:** Maintaining a "Source of Truth" array that synchronizes with the DOM via an `updateUI()` render function.
* **Browser APIs:** Integration of `LocalStorage` for data persistence and `Date.now()` for unique ID generation.
* **Conditional Rendering:** Dynamically applying CSS classes (`income-border` vs `expense-border`) based on transaction types.

---

## 🛠️ Technology Stack
* **HTML5:** Semantic structure for accessibility.
* **CSS3:** Custom properties (variables), Flexbox, Grid, and Keyframe animations.
* **Vanilla JavaScript (ES6+):** Arrow functions, Array methods (`reduce`, `filter`, `forEach`), and Template Literals.

---

## 🚀 Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone [INSERT_YOUR_GITHUB_LINK_HERE]