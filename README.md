# Calculator

A clean, modern web calculator built with pure **HTML**, **CSS**, and **JavaScript**. No frameworks or libraries required.

## Features

- Basic arithmetic operations: addition (`+`), subtraction (`−`), multiplication (`×`), division (`÷`)
- Decimal point support
- Clear (`C`) button
- Toggle sign (`±`)
- Percentage (`%`)
- Error handling for division by zero
- Keyboard support (numbers, operators, Enter, Escape)
- Responsive design that works on mobile and desktop
- Smooth button animations and modern dark theme

## Project Structure
calculator/
├── index.html      # Markup & structure
├── styles.css      # Styling & layout
├── script.js       # Calculator logic
└── README.md       # This file

Technical Overview
HTML
Semantic structure with a display area and a grid of buttons. Buttons use data-action and data-value attributes for clean event handling.
CSS
CSS Grid for the button layout
Flexbox for centering the calculator
Custom dark theme with subtle gradients
Hover and active states for tactile feedback
Media query for smaller screens
JavaScript
A simple Calculator class manages state:
currentValue – what’s shown on the display
previousValue – the first operand
operator – the pending operation
shouldResetDisplay – flag used after an operator or equals is pressed
Key methods: appendNumber(), appendDecimal(), setOperator(), calculate(), reset(), toggleSign(), percent().
Floating-point rounding is applied to reduce common precision issues (e.g. 0.1 + 0.2).
Browser Support
Works in all modern browsers that support ES6 classes and CSS Grid.
Customization Ideas
Change the color scheme in styles.css
Add more operations (square root, power, etc.)
Implement a history log
Add scientific mode
Persist last result in localStorage
License
MIT License – feel free to use, modify, and share.
