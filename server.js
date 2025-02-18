import express from "express";  // Import Express
import path from "path";        // To resolve paths
import { fileURLToPath } from "url";  // To handle ES module paths

const app = express();
const port = 3000;

// To handle the __dirname issue with ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Route to serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});