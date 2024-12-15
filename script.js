// Allgemeine Variablen
let canvas = document.getElementById("SnakeGame");
let ctx = canvas.getContext("2d");

// Snake erstellen
let grid = 16;
let count = 0;

let snake_with = 10
let snake = {
    x: 160,
    y: 160,  
};