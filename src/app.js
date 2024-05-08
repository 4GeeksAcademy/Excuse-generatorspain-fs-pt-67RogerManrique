/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let excuse = document.getElementById("excuse");

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let randomwho = who[Math.floor(who.length * Math.random())];
  let randomAction = action[Math.floor(action.length * Math.random())];
  let randomWhat = what[Math.floor(what.length * Math.random())];
  let randomWhen = when[Math.floor(when.length * Math.random())];

  const excuseMessage = `${randomwho} ${randomAction} ${randomWhat} ${randomWhen} `;

  excuse.innerHTML = excuseMessage;
};
