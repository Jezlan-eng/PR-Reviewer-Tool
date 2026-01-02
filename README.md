# PR Reviewer Tool

**Author:** Samahath Jezlan  
**Course:** Computer Systems and Network Engineering  
**Assignment:** PR Reviewer Tool  

---

## Overview

The PR Reviewer Tool is a simple system to **automatically review GitHub pull requests** based on branch rules, and allow an instructor to **approve or reject** PRs.  

The tool includes:

- **Backend:** Node.js server handling webhooks, rules, and reviews
- **Frontend:** Simple dashboard to view PRs and approve/reject them
- **Reviews Storage:** `reviews.json` keeps track of PR details and status

---

## Features

1. Receives GitHub PR webhook data  
2. Extracts PR info: title, branch, author, files changed  
3. Applies branch rules:
   - `feature/` → must have ≤5 files changed  
   - `hotfix/` → must have ≤2 files changed  
4. Saves review as `PENDING`  
5. Instructor can **Approve / Reject** PR from frontend  
6. Updates `reviews.json` automatically  

---
## Folder structure
PR-Reviewer-Tool/
├── backend/
│ ├── server.js # Node.js server
│ ├── github.js # Extract PR info
│ ├── rules.js # Branch rules
│ └── reviews.json # Stores PR reviews
└── frontend/
└── index.html # Instructor dashboard


---

## Installation & Running

1. Open terminal in `backend` folder:
cd backend

2.Install dependencies:
npm install

3.Start the backend server:
node server.js

4.Open frontend in browser:
-->Open frontend/index.html
-->View PRs and click Approve / Reject

5.Test workflow:
-->Send a test webhook to: http://localhost:3000/webhook
-->Check reviews.json to see PR status updates

Author Contact
Samahath Jezlan
Email: jezlansamahath4@gmail.com


