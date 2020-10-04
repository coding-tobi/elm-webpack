// Initialize the elm app
const elm = require("./elm/src/Main.elm").Elm;
elm.Main.init({
  node: document.getElementById("elm-app"),
});
