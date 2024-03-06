// Built in node modules
// https://www.youtube.com/watch?v=wM3TEvQn2hw

// Old way
// const fs = require("fs");

// Modern way
import * as fs from "fs";

// Imports everything

//import * as cowsay from "cowsay";

// const output = cowsay.say({ text: "mooooo" });
// console.log(output);

// Import selected things from node module

import { say } from "cowsay";

const output = say({ text: "mooooo" });
console.log(output);

// console.log("Hello world");
