const fs = require("fs");
// reset HTML file in the Dist Folder
fs.writeFileSync(
    "./dist/index.html",
    "<p>type 'npm start' in the terminal to start the project</p>"
);
