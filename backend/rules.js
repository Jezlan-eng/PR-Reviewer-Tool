function reviewPR(pr) {
  let feedback = [];

  if (pr.branch.startsWith("feature/")) {
    if (pr.filesChanged > 10) {
      feedback.push("Too many files for a feature branch");
    }
  }

  if (pr.branch.startsWith("hotfix/")) {
    if (pr.filesChanged > 3) {
      feedback.push("Hotfix should be small");
    }
  }

  if (feedback.length === 0) {
    feedback.push("PR looks good");
  }

  return feedback;
}

module.exports = reviewPR;
