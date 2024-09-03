let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monstorHealth;
let inventory= ["stick","dagger","sword"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.quesrySelector("#xpText");
const healthText = document.quesrySelector("#healthText");
const goldText = document.quesrySelector("#goldText");
const monsterStats = document.quesrySelector("#monsterStats");
const monsterNameText = document.quesrySelector("#monsterNameText");
const monsterHealthText = document.quesrySelector("#monsterHealthText");

//initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragons;