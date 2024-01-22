browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({
    currentWindow: true,
    active: true,
  })
  .then((tabs) => {
    for (const tab of tabs) {
      browser.tabs.sendMessage(tab.id, {"test": 10})
    }
  })
})