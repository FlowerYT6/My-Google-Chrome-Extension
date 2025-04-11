console.log("Background service worker is running!");
chrome.commands.onCommand.addListener((command) => {
    if (command === "flower") {
      chrome.tabs.create({ url:"http://0.0.0.0:8000/Code" });
    }
  });
  