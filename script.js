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
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const locations = [
    {
        name:"town square",
        "button text": ["Go to store","Go to cave","Fight dragons"],
        "button functions": [goStore, goCave , fightDragons],
        text:  "You are in the town square.you see a sign that says \"store\"."

    },

    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)","buy weapon (30 gold)","Go to town square"],
        "button functions": [buyHealth,buyWeapon,goTown],
        text: "You enter the store." 

    }
]

//initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragons;

function update (locations){
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
    text.innerText = locations.text;
 

}

function goTown(){
   update(locations[0]);

}

function goStore() {
    update(locations[1]);
   
}


function goCave(){
    console.log("Going to cave.")
}

function fightDragons(){
    console.log("Fighting dragons.")
}


function buyHealth(){

}

function buyWeapon(){

}

function goTown(){

}

