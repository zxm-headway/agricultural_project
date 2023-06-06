(function () {   
  var testElement = document.createElement("div");

  testElement.style.fontSize = "1rem";

  document.body.appendChild(testElement);

  var fontSize = parseFloat(window.getComputedStyle(testElement).fontSize);
  document.body.removeChild(testElement);

  document.documentElement.style.setProperty(
    "--browser-font-size",
    fontSize + "px"
  );
})();
