chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.indexOf("youtube.com") != -1) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
