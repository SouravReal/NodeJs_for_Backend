
// const http = require("http")
import http from "http"

//Below 4 imports does the same thing
// const randomName = require("./randomName");
import {randomPercent} from "./randomName.js";
// import rName, { rName2, rName3 } from "./randomName.js";
// import {rName2, rName3} from "./randomName.js";

// console.log(randomPercent());

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("<H1>Home Page</H1>")
    } else if (req.url === "/about") {
        res.end(`<H1>The percent is ${randomPercent()}</H1>`)
    } else if (req.url === "/contact") {
        res.end("<H1>Contact Page</H1>")
    } else {
        res.end("<H1>Page ! Found.</H1>")
    }
});

server.listen(5000, () => {
    console.log("Server is working fine.");
})