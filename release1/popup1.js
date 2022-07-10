document.addEventListener("DOMContentLoaded", function () {
    try {
      const clickButton = document.querySelector("#click");
      clickButton.addEventListener("click", function () {
        //alert("Button was pressed");
        let msg = document.querySelector("#msg");
        let val = `Hello ${msg.value}`;
        msg.value = "";
        //alert(val);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, val);
        });
      });
    } catch (e) {
      console.log(e);
    }
  });
  