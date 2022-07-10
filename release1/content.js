chrome.runtime.onMessage.addListener(function (message) {
    try {
      alert(message);
    } catch (e) {
      console.log(e);
    }
  });