const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

/* Hardcoding the port now
//
// Throws an error if the PORT environment variable is missing.
//
if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

//
// Extracts the PORT environment variable.
//
const PORT = process.env.PORT;

//
// Registers a HTTP GET route for video streaming.
//
// Original code for this:
// https://medium.com/better-programming/video-stream-with-node-js-and-html5-320b3191a6b6
//
*/

app.get("/video", (req, res) => {

    // const path = "/Users/jasvindersinghchugh/Documents/Jas/Learning/BootstrappingMicroservices/my-new-project/video/myVideo.mp4";
    // const path = "../my-new-project/videos/myVideo.mp4";
    const videoPath = path.join("./videos", "myVideo.mp4");
    
    fs.stat(videoPath, (err, stats) => {
        if (err) {
            console.error("An error occurred ");
            res.sendStatus(500);
            return;
        }

        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        });
        fs.createReadStream(videoPath).pipe(res);
    });
});

//
// Starts the HTTP server.
//
app.listen(port, () => {
    console.log(`Microservice listening on port ${port}, point your browser at http://localhost:3000/video`);
});