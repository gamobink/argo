"use strict";

module.exports = {
    input: "./src/client/app/root.module.js",
    output: {
        file: "./build/app.bundle.js",
        format: "iife",
        name: "app"
    },
    external: [
        "angular",
        "d3",
        "techan"
    ],
    globals: {
        angular: "angular",
        d3: "d3",
        techan: "techan"
    }
};
