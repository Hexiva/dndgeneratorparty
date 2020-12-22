function generate(array) {
  var genNum = Math.floor(Math.random() * array.length);
  var gen = array[genNum];
  return gen;
}

function surNameGen (){
  var nameSyl1First = ["Els", "Sar", "Dan", "Khor", "Wor", "Ray", "Tas", "Yrr", "Ul", "Iss", "Or", "Pa", "Al", "Sey", "For", "Gar", "Hal", "Ja", "Kel", "Vi", "Ber", "Nah", "My", "Nar", "Shan", "Ill", "Lar", "Tay", "Jil", "Her", "Bar", "Kan", "Las", "Vey", "Zar", "Zil", "Wis", "Sir", "Pras", "Ell", "Ash",];
  var nameSyl2First = ["i", "iy", "an", "ol", "il", "el", "al", "hal","ra"]
  var nameSurStyleArray = ["title", "compound", "english",]
  var surNameStyle = generate (nameSurStyleArray);
  if (surNameStyle === "title"){
     var titleArray = ["Beloved", "Idealistic", "Adored", "Brutal", "Brave", "Lost", "Fallen", "Dark", "Immortal", "Deathless", "Storyteller", "Dreamer", "Cold", "Lone", "Cursed", "Scourge", "Berserker", "Light", "Red", "Pale", "Tall", "Ashen", "Grey", "Horned", "Winged", "Great", "Lion-hearted", "Peaceful", "Confessor", "Pious", "Heretic", "Bear", "Falcon", "Hawk", "Tiger", "Slayer", "Serpent", "Rat", "Weasel", "Traitor", "Betrayer", "Wolf"]
     var surname = "the " + generate (titleArray);
  } else  if (surNameStyle === "compound"){
       var surArray1 = ["Iron", "Red", "Blue", "Green", "Black", "Dark", "Leaf", "White", "Ash", "Ruby", "Gold", "Silver", "Jet", "Ice", "Bark", "Slate", "Stone", "Snow", "Fire", "Hawk", "Falcon", "Lace", "Cinder", "Ember"]
       var surArray2 = ["glow", "side", "beard", "willow", "arrow", "light", "jewel", "sword", "dagger", "blade", "shine", "cut", "night", "flame", "tree", "singer", "night", "tiger", "castle", "saddle", "blood", "feather", "scale", "dragon",]
       var surname = generate (surArray1) + generate (surArray2);
    } else {
      var surnameEndArray = ["as", "us", "os", "i", "ii", "o", "an", "ian", "ak", "at", "ec",]
      var surname = generate (nameSyl1First) + generate (nameSyl2First) + generate (surnameEndArray);
    }
return surname;
}

function subSpecGen(race){
  if (race === "Dwarf") {
    var subRaceArray = ["Hill", "Mountain", "Duergar"]
    var subRace = " (" + generate (subRaceArray) +")";
  } else if (race=== "Elf"){
    var subRaceArray = ["Eladrin", "Sea Elf", "Shadar-Kai", "Wood Elf", "Drow"]
    var subRace = " (" + generate (subRaceArray) +")";
  } else if (race=== "Gnome"){
    var subRaceArray = ["Forest", "Rock","Deep"]
    var subRace = " (" + generate (subRaceArray) +")";
  } else if (race==="Halfling") {
    var subRaceArray = ["Lightfoot", "Stout",]
    var subRace = " (" + generate (subRaceArray) +")";
  } else if (race==="Halfling") {
    var subRaceArray = ["Lightfoot", "Stout",]
    var subRace = " (" + generate (subRaceArray) +")";
  } else if (race==="Dragonborn") {
    var subRaceArray = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"]
    var subRace = " (" + generate (subRaceArray) +")";
  } else if (race==="Genasi") {
    var subRaceArray = ["Fire", "Air", "Water", "Earth"]
    var subRace = " (" + generate (subRaceArray) +")";
  } else if (race==="Gith") {
    var subRaceArray = ["zerai", "yanki"]
    var subRace = generate (subRaceArray);
  } else {
    var subRace = "";
  }
  return subRace;
}

function subClassGen(classX){
  if (classX === "Artificer") {
    var subClassArray = ["Alchemist", "Artillerist", "Battle Smith"]
    var subClass = generate(subClassArray);
  } else if (classX === "Barbarian") {
    var subClassArray = ["Ancestral Guardian", "Battlerager", "Berserker", "Storm Herald", "Totem Warrior", "Zealot"]
    var subClass = "Path of the " + generate(subClassArray);
  } else if (classX === "Bard") {
    var subClassArray = ["Glamour", "Lore", "Swords", "Valor", "Whispers"]
    var subClass = "College of " + generate(subClassArray);
  } else if (classX === "Cleric") {
    var subClassArray = ["Arcana", "Death", "Forge", "Grave", "Knowledge", "Life", "Light", "Nature", "Order", "Tempest", "Trickery", "War"]
    var subClass = generate(subClassArray) + " Domain";
  } else if (classX === "Druid") {
    var subClassArray = ["Dreams", "the Land", "the Moon", "the Shepherd", "Spores"]
    var subClass = "Circle of " + generate(subClassArray);
  } else if (classX === "Fighter") {
    var subClassArray = ["Arcane Archer", "Battle Master", "Cavalier", "Champion", "Echo Knight", "Eldritch Knight", "Purple Dragon Knight", "Samurai"]
    var subClass = generate(subClassArray);
  } else  if (classX === "Monk") {
    var subClassArray = ["Drunken Master", "Four Elements", "Kensei", "Long Death", "Open Hand", "Shadow", "Sun Soul"]
    var subClass = "Way of the " + generate(subClassArray);
  } else if (classX === "Paladin") {
    var subClassArray = ["the Ancients", "Conquest", "the Crown", "Devotion", "the Oathbreaker", "Redemption", "Vengeance"]
    var subClass = "Oath of " + generate(subClassArray);
  } else if (classX === "Ranger") {
    var subClassArray = ["Beast Master", "Gloom Stalker", "Horizon Walker", "Hunter", "Monster Slayer",]
    var subClass = generate(subClassArray);
  } else if (classX === "Rogue") {
    var subClassArray = ["Arcane Trickster", "Assassin", "Inquisitve", "Mastermind", "Scout", "Swashbuckler", "Thief"]
    var subClass = generate(subClassArray);
  } else if (classX === "Sorcerer") {
    var subClassArray = ["Divine Soul", "Draconic Bloodline", "Shadow Sorcery", "Storm Sorcery", "Wild Magic"]
    var subClass = generate(subClassArray);
  } else if (classX === "Warlock") {
    var subClassArray = ["Archfey", "Celestial", "Fiend", "Great Old One", "Hexblade", "Undying"]
    var subClass = "The " + generate(subClassArray);
  } else if (classX === "Wizard") {
    var subClassArray = ["Abjuration", "Bladesinging", "Chronurgy Magic", "Conjuration", "Divination", "Enchantment", "Evocation", "Graviturgy Magic", "Illusion", "Necromancy", "Transmutation", "War Magic"]
    var subClass = "School of " + generate(subClassArray);
  }
  return subClass;
}

function  nameGen (){
  var nameSyl1First = ["Els", "Sar", "Dan", "Khor", "Wor", "Ray", "Tas", "Yrr", "Ul", "Iss", "Or", "Pa", "Al", "Sey", "For", "Gar", "Hal", "Ja", "Kel", "Vi", "Ber", "Nah", "My", "Nar", "Shan", "Ill", "Lar", "Tay", "Jil", "Her", "Bar", "Kan", "Las", "Vey", "Zar", "Zil", "Wis", "Sir", "Pras", "Ell", "Ash",];
  var nameSyl2First = ["i", "iy", "an", "ol", "il", "el", "al", "hal","ra"]
  var nameSyl3First = ["a", "as", "us", "os", "ia", "na", "i","o", "an"]
  var nameFirstStyleArray = ["one","two",];
  var nameFirstStyle = generate (nameFirstStyleArray);


  if (nameFirstStyle === "one") {
     name = generate (nameSyl1First) + generate (nameSyl3First);
  } else {
     name = generate (nameSyl1First) + generate (nameSyl2First) + generate (nameSyl3First);
  }

  return name;
}



$(document).ready(function() {
  $("form").submit(function(event) {



    var classArray = ["Barbarian", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer",]
    var raceArray = ["Dragonborn","Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling", "Leonin", "Satyr", "Aarakocra", "Genasi", "Goliath", "Aasimar", "Bugbear", "Firbolg", "Goblin", "Hobgoblin", "Kenku", "Kobold", "Lizardfolk", "Orc", "Tabaxi", "Triton", "Yuan-Ti Pureblood", "Changeling", "Kalashtar", "Shifter", "Warforged", "Gith", "Centaur", "Loxodon", "Minotaur", "Locathah", "Grung"]
    var backArray = ["Acolyte", "Anthropologist", "Athlete", "Azorius Functionary", "Boros Legionnaire", "Celebrity Adventurer's Scion", "Charlatan", "City Watch/Investigator", "Clan Crafter", "Cloistered Scholar","Courtier", "Criminal", "Spy", "Dimir Operative", "Entertainer", "Faceless", "Faction Agent", "Failed Merchant", "Far Traveller", "Fisher", "Folk Hero", "Gambler", "Gladiator", "Golgari Agent", "Grinner", "Gruul Anarch", "Guild Artisan", "Haunted One", "Hermit", "Inheritor", "Izzet Engineer", "Knight", "Knight of the Order", "Marine", "Mercenary Veteran", "Noble", "Orzhov Representative", "Outlander", "Pirate", "Plaintiff", "Rakdos Cultist", "Rival Intern", "Sage", "Sailor", "Selesnya Initiate",  "Shipwright", "Smuggler", "Soldier", "Urban Bounty Hunter", "Urchin", "Uthgardt Tribe Member", "Volstrucker Agent", "Waterdhavian Noble"]
    var lawArray = ["Lawful", "Neutral", "Chaotic",]
    var goodArray = ["Good", "Neutral", "Good", "Neutral", "Good", "Neutral", "Evil"]
    var genderArray = ["Male", "Female", "Male", "Female", "Male", "Female", "Nonbinary",]

    var char1 = {
      name: nameGen(),
      surname: surNameGen(),
      classX: generate(classArray),
      subClass: "error",
      gender: generate(genderArray),
      background: generate(backArray),
      species: generate(raceArray),
      subSpec: "error",
      alignment: generate (lawArray)+ " "  + generate (goodArray),
    }
char1.subClass = subClassGen(char1.classX);
char1.subSpec = subSpecGen(char1.species);
if (char1.alignment === "Neutral Neutral"){
  char1.alignment = "True Neutral";
}

var index = classArray.indexOf(char1.classX);
classArray.splice(index, 1);



var char2 = {
  name: nameGen(),
  surname: surNameGen(),
  classX: generate(classArray),
  subClass: "error",
  gender: generate(genderArray),
  background: generate(backArray),
  species: generate(raceArray),
  subSpec: "error",
  alignment: generate (lawArray)+ " "  + generate (goodArray),
}
char2.subClass = subClassGen(char2.classX);
char2.subSpec = subSpecGen(char2.species);
if (char2.alignment === "Neutral Neutral"){
char2.alignment = "True Neutral";
}
var index = classArray.indexOf(char2.classX);
classArray.splice(index, 1);

var char3 = {
  name: nameGen(),
  surname: surNameGen(),
  classX: generate(classArray),
  subClass: "error",
  gender: generate(genderArray),
  background: generate(backArray),
  species: generate(raceArray),
  subSpec: "error",
  alignment: generate (lawArray)+ " "  + generate (goodArray),
}
char3.subClass = subClassGen(char3.classX);
char3.subSpec = subSpecGen(char3.species);
if (char3.alignment === "Neutral Neutral"){
char3.alignment = "True Neutral";
}

var index = classArray.indexOf(char3.classX);
classArray.splice(index, 1);

var char4 = {
  name: nameGen(),
  surname: surNameGen(),
  classX: generate(classArray),
  subClass: "error",
  gender: generate(genderArray),
  background: generate(backArray),
  species: generate(raceArray),
  subSpec: "error",
  alignment: generate (lawArray)+ " "  + generate (goodArray),
}
char4.subClass = subClassGen(char4.classX);
char4.subSpec = subSpecGen(char4.species);
if (char4.alignment === "Neutral Neutral"){
char4.alignment = "True Neutral";
}
var index = classArray.indexOf(char4.classX);
classArray.splice(index, 1);

var char5 = {
  name: nameGen(),
  surname: surNameGen(),
  classX: generate(classArray),
  subClass: "error",
  gender: generate(genderArray),
  background: generate(backArray),
  species: generate(raceArray),
  subSpec: "error",
  alignment: generate (lawArray)+ " "  + generate (goodArray),
}
char5.subClass = subClassGen(char5.classX);
char5.subSpec = subSpecGen(char5.species);
if (char5.alignment === "Neutral Neutral"){
char5.alignment = "True Neutral";
}


    $("#char1").show();
    $(".name").text(char1.name + " "+ char1.surname);
    $(".class").text(char1.classX);
    $(".subclass").text(" (" + char1.subClass + ")");
    $(".gender").text(char1.gender);
    $(".background").text(char1.background);
    $(".species").text(char1.species);
    $(".alignment").text(char1.alignment);
    $(".subrace").text(char1.subSpec);

    $("#char2").show();
    $(".name2").text(char2.name + " "+ char2.surname);
    $(".class2").text(char2.classX);
    $(".subclass2").text(" (" + char2.subClass + ")");
    $(".gender2").text(char2.gender);
    $(".background2").text(char2.background);
    $(".species2").text(char2.species);
    $(".alignment2").text(char2.alignment);
    $(".subrace2").text(char2.subSpec);

    $("#char3").show();
    $(".name3").text(char3.name + " "+ char3.surname);
    $(".class3").text(char3.classX);
    $(".subclass3").text(" (" + char3.subClass + ")");
    $(".gender3").text(char3.gender);
    $(".background3").text(char3.background);
    $(".species3").text(char3.species);
    $(".alignment3").text(char3.alignment);
    $(".subrace3").text(char3.subSpec);

    $("#char4").show();
    $(".name4").text(char4.name + " "+ char4.surname);
    $(".class4").text(char4.classX);
    $(".subclass4").text(" (" + char4.subClass + ")");
    $(".gender4").text(char4.gender);
    $(".background4").text(char4.background);
    $(".species4").text(char4.species);
    $(".alignment4").text(char4.alignment);
    $(".subrace4").text(char4.subSpec);

    $("#char5").show();
    $(".name5").text(char5.name + " "+ char5.surname);
    $(".class5").text(char5.classX);
    $(".subclass5").text(" (" + char5.subClass + ")");
    $(".gender5").text(char5.gender);
    $(".background5").text(char5.background);
    $(".species5").text(char5.species);
    $(".alignment5").text(char5.alignment);
    $(".subrace5").text(char5.subSpec);



    event.preventDefault();
  })



});
