const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");          // <-- Needed for frontend
const fs = require("fs");
const extractPRData = require("./github");
const reviewPR = require("./rules");

const app = express();

// Middleware
app.use(bodyParser.json());            // <-- Parse JSON POST bodies
app.use(cors());                        // <-- Allow frontend requests

// Test route
app.get("/", (req, res) => {
  res.send("PR Reviewer Tool Backend Running");
});

// Webhook route (receives GitHub PRs)
app.post("/webhook", (req, res) => {
  const pr = extractPRData(req.body);
  const feedback = reviewPR(pr);

  const review = {
    pr,
    feedback,
    status: "PENDING"
  };

  fs.writeFileSync("reviews.json", JSON.stringify(review, null, 2));
  console.log("Review saved:", review);

  res.sendStatus(200);
});

// Instructor frontend routes
app.get("/review", (req, res) => {
  try {
    const review = JSON.parse(fs.readFileSync("reviews.json", "utf-8"));
    res.json(review);
  } catch (err) {
    res.json({ pr: {}, feedback: [], status: "NO REVIEW" });
  }
});

app.post("/review", (req, res) => {
  try {
    const review = JSON.parse(fs.readFileSync("reviews.json", "utf-8"));
    review.status = req.body.status;               // <-- Updates status
    fs.writeFileSync("reviews.json", JSON.stringify(review, null, 2));
    res.sendStatus(200);
    console.log("Review status updated to:", review.status);
  } catch (err) {
    res.sendStatus(500);
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
