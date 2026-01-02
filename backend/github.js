function extractPRData(payload) {
  return {
    title: payload.pull_request?.title || "No title",
    branch: payload.pull_request?.head?.ref || "No branch",
    author: payload.pull_request?.user?.login || "No author",
    filesChanged: payload.pull_request?.changed_files || 0
  };
}

module.exports = extractPRData;
