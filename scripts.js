function generate(array) {
  var genNum = Math.floor(Math.random() * array.length);
  var gen = array[genNum];
  return gen;
}

function extraDescGen (species, pronoun1, pronoun2, pronoun3){
  if (species === "Tiefling") {
    var hornTypeArray = ["horns that spiral backwards like a ram's", "horns that curve upward like a bull's", "horns that curve back around the skull like a crown", "horns that curve downwards around the face like a black dragon's", "horns that point outward to the sides and slightly upward like a steer's", ]
    var hornTextArray = ["ridged", "grooved","smooth"]
    var hornLengthArray= ["long","short", "medium-length"]
    var hornType = generate (hornTypeArray);
    var hornText = generate(hornTextArray);
    var hornLength = generate(hornLengthArray);
    var extraDesc = pronoun1 + " has " + hornLength + ", " + hornText + " " + hornType;
    extraDesc = extraDesc.charAt(0).toUpperCase() + extraDesc.slice(1);
  } else if (species === "Satyr") {
    var furColorArray = ["brown", "grey", "white", "dark brown", "reddish brown", "black",]
    var furColor = generate(furColorArray);
    var extraDesc = pronoun3 + " lower half resembles that of a goat, and is covered in " + furColor + " fur";
    extraDesc = extraDesc.charAt(0).toUpperCase() + extraDesc.slice(1);
  } else if (species === "Yuan-Ti Pureblood"){
    var snakeTraitArray = ["a scattering of scales all over " + pronoun3 + " skin", "slit pupil's like a snake's", "a slight greenish tint to " + pronoun3 + " skin", "sharp teeth", "markings on " + pronoun3 + " skin like a ball python's"]
    var extraDesc = pronoun1 + " has " + generate (snakeTraitArray);
    extraDesc = extraDesc.charAt(0).toUpperCase() + extraDesc.slice(1);
  } else if (species === "Centaur"){
    var horseArray = ["spotted", "bay", "black", "brown","buckskin", "chesnut", "cremello", "dun", "grey", "overo","palomino", "piebald", "roan", "skewbald", "tobiano"]
    var extraDesc = pronoun3 + " lower half resembles that of a " + generate (horseArray) + " horse";
    extraDesc = extraDesc.charAt(0).toUpperCase() + extraDesc.slice(1);
  } else if (species === "Minotaur") {
    var cowArray = ["brown", "white", "black", "black-and-white"]
    var extraDesc = pronoun3 + " head resembles that of a " + generate(cowArray) + " bull";
    extraDesc = extraDesc.charAt(0).toUpperCase() + extraDesc.slice(1);
  } else {
    var extraDesc = "";
  }
  return extraDesc;
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
  } else if (race==="Shifter") {
    var subRaceArray = ["Beasthide", "Longtooth", "Swiftstride", "Wildhunt", "Cliffwalk", "Razorclaw"];
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

function setSpecVal (subSpec, species) {
console.log(subSpec);
    if (subSpec === "Duergar") {
    var specVal = "Duergar";
  } else if (subSpec === "Drow") {
    var specVal = "Drow";
  } else if (species === "Genasi" && subSpec === " (Fire)") {
    var specVal = "Fire";
  } else if (species === "Genasi" && subSpec === " (Water)") {
    var specVal = "Water";
  } else if (species === "Genasi" && subSpec === " (Earth)") {
    var specVal = "Earth";
  } else if (species === "Genasi" && subSpec === " (Air)") {
    var specVal = "Air";
  } else if (species === "Shifter") {
    var specVal = subSpec;
  } else if (species === "Half-Elf") {
    var specVal = "HalfElf";
  } else if (species === "Half-Orc") {
    var specVal = "HalfOrc";
  } else if (species === "Yuan-Ti Pureblood") {
    var specVal = "YuanTiPureblood";
  } else {
    var specVal = species;
  }
  return specVal;
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



    var classArray = ["Barbarian", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer","MultiClass","MultiClass",]
    var raceArray = ["Dragonborn","Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling", "Dragonborn","Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling","Dragonborn","Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling","Leonin", "Satyr", "Aarakocra", "Genasi", "Goliath", "Aasimar", "Bugbear", "Firbolg", "Goblin", "Hobgoblin", "Kenku", "Kobold", "Lizardfolk", "Orc", "Tabaxi", "Triton", "Yuan-Ti Pureblood", "Changeling", "Kalashtar", "Shifter", "Warforged", "Gith", "Centaur", "Loxodon", "Minotaur", "Locathah", "Grung"]
    var backArray = ["Acolyte", "Anthropologist", "Athlete",  "Charlatan", "City Watch/Investigator",  "Cloistered Scholar","Courtier", "Criminal", "Spy", "Entertainer", "Faction Agent", "Failed Merchant", "Far Traveller", "Fisher", "Folk Hero", "Gambler", "Gladiator", "Guild Artisan", "Haunted One", "Hermit", "Inheritor", "Knight", "Knight of the Order", "Marine", "Mercenary Veteran", "Noble", "Outlander", "Pirate",  "Sage", "Sailor", "Selesnya Initiate",  "Shipwright", "Smuggler", "Soldier", "Urban Bounty Hunter", "Urchin", "Acolyte", "Anthropologist", "Athlete",  "Charlatan", "City Watch/Investigator",  "Cloistered Scholar","Courtier", "Criminal", "Spy", "Entertainer", "Faction Agent", "Failed Merchant", "Far Traveller", "Fisher", "Folk Hero", "Gambler", "Gladiator", "Guild Artisan", "Haunted One", "Hermit", "Inheritor", "Knight", "Knight of the Order", "Marine", "Mercenary Veteran", "Noble", "Outlander", "Pirate",  "Sage", "Sailor", "Selesnya Initiate",  "Shipwright", "Smuggler", "Soldier", "Urban Bounty Hunter", "Urchin", "Acolyte", "Anthropologist", "Athlete",  "Charlatan", "City Watch/Investigator",  "Cloistered Scholar","Courtier", "Criminal", "Spy", "Entertainer", "Faction Agent", "Failed Merchant", "Far Traveller", "Fisher", "Folk Hero", "Gambler", "Gladiator", "Guild Artisan", "Haunted One", "Hermit", "Inheritor", "Knight", "Knight of the Order", "Marine", "Mercenary Veteran", "Noble", "Outlander", "Pirate",  "Sage", "Sailor", "Selesnya Initiate",  "Shipwright", "Smuggler", "Soldier", "Urban Bounty Hunter", "Urchin", "Acolyte", "Anthropologist", "Athlete",  "Charlatan", "City Watch/Investigator",  "Cloistered Scholar","Courtier", "Criminal", "Spy", "Entertainer", "Faction Agent", "Failed Merchant", "Far Traveller", "Fisher", "Folk Hero", "Gambler", "Gladiator", "Guild Artisan", "Haunted One", "Hermit", "Inheritor", "Knight", "Knight of the Order", "Marine", "Mercenary Veteran", "Noble", "Outlander", "Pirate",  "Sage", "Sailor", "Selesnya Initiate",  "Shipwright", "Smuggler", "Soldier", "Urban Bounty Hunter", "Urchin", "Uthgardt Tribe Member", "Volstrucker Agent", "Waterdhavian Noble","Azorius Functionary","Boros Legionnaire", "Celebrity Adventurer's Scion", "Dimir Operative", "Clan Crafter", "Faceless","Golgari Agent", "Grinner", "Gruul Anarch","Izzet Engineer","Orzhov Representative", "Rakdos Cultist","Plaintiff",  "Rival Intern", ]
    var lawArray = ["Lawful", "Neutral", "Chaotic",]
    var goodArray = ["Good", "Neutral", "Good", "Neutral", "Good", "Neutral", "Evil"]
    var genderArray = ["Male", "Female", "Male", "Female", "Male", "Female", "Nonbinary",]

    var humanSkinArray = ["dark brown", "pale", "brown", "tanned", "light brown", "black", "very dark"]
    var humanEyeArray = ["dark brown", "brown", "red-brown", "golden-brown", "light brown", "black","dark brown", "brown", "red-brown", "golden-brown", "light brown", "black","dark brown", "brown", "red-brown", "golden-brown", "light brown", "black", "blue", "green", "hazel", "grey",]
    var humanHairColorArray = ["brown", "dark brown", "light brown", "black","brown", "dark brown", "light brown", "black","brown", "dark brown", "light brown", "black","brown", "dark brown", "light brown", "black","brown", "dark brown", "light brown", "black", "brown", "dark brown", "light brown", "black", "brown", "dark brown", "light brown", "black", "brown", "dark brown", "light brown", "black", "blond", "white", "grey", "ginger","brown", "dark brown", "light brown", "black", "blond", "white", "grey", "ginger","brown", "dark brown", "light brown", "black", "blond", "white", "grey", "ginger", "scarlet", "blue", "green", "purple", "rainbow", "pastel rainbow", "pink", "pastel blue", "mint", "lavender",]
    var humanBodyArray = ["fat", "chubby", "muscular", "skinny", "lean","average-weight"]
    var humanHeightArray = ["tall", "short", "average-height", "very tall", "very short"]

    var Dragonborn = {
      skinArray: ["error"],
      eyeArray: ["red", "gold", "amber", "orange"],
      hairArray: ["error"],
      type: "scales",
    }

    var Dwarf = {
      skinArray: humanSkinArray,
      eyeArray: humanEyeArray,
      hairArray: humanHairColorArray,
      type: "skin",
    }

    var Duergar = {
      skinArray: ["grey", "light grey", "dark grey"],
      eyeArray: ["amber", "grey", "dull amber"],
      hairArray: ["white"],
      type: "skin",
    }

    var Elf = {
      skinArray: humanSkinArray,
      eyeArray: humanEyeArray.concat("purple", "silver", "gold"),
      hairArray: humanHairColorArray,
      type: "skin",
    }

    var HalfElf = {
      skinArray: humanSkinArray,
      eyeArray: humanEyeArray.concat("purple", "silver", "gold"),
      hairArray: humanHairColorArray,
      type: "skin",
    }

    var Drow = {
      skinArray: ["grey", "light grey", "dark grey"],
      eyeArray: ["red", "violet", "yellow", "grey", "amber"],
      hairArray: ["white", "pale blonde", "light pink", "pale blue",],
      type: "skin",
    }

    var Gnome = {
      skinArray: humanSkinArray,
      eyeArray: humanEyeArray,
      hairArray: humanHairColorArray,
      type: "skin",
    }

    var Halfling = {
      skinArray: humanSkinArray,
      eyeArray: humanEyeArray,
      hairArray: humanHairColorArray,
      type: "skin",
    }

    var HalfOrc = {
      skinArray: humanSkinArray.concat("green", "light green", "grey", "greyish brown", "light grey", "dark green", "greyish green"),
      eyeArray: humanEyeArray.concat("yellow"),
      hairArray: humanHairColorArray,
      type: "skin",
    }

    var Human = {
      skinArray: humanSkinArray,
      eyeArray: humanEyeArray,
      hairArray: humanHairColorArray,
      type: "skin",
    }

    var Tiefling = {
      skinArray: humanSkinArray.concat("brick red", "ruddy", "pink",),
      eyeArray: humanEyeArray.concat("black", "red", "gold", "yellow", "ruby", "silver", "white"),
      hairArray: humanHairColorArray,
      type: "skin",
    }

    var Leonin = {
      skinArray: ["golden", "tawny", "golden-brown", "pale gold","dark brown", "brown", "black", "white"],
      eyeArray: ["brown", "orange", "amber", "orange-brown", "yellow", "pale yellow"],
      hairArray: ["golden", "tawny", "golden-brown", "pale gold","dark brown", "brown", "black", "white"],
      type: "fur",
    }

    var Aarakocra = {
      skinArray: ["golden brown", "reddish brown", "grey", "grey-brown", "white", "tropical", "dark brown", "black"],
      eyeArray: ["black"],
      hairArray: ["error"],
      type: "feathers",
    }

    var Satyr = {
      skinArray: humanSkinArray,
      eyeArray: humanEyeArray,
      hairArray: humanHairColorArray,
      type: "skin",
    }

    var Air = {
      skinArray: ["blue", "light blue", "white", "silver", "grey"],
      eyeArray: ["blue", "light blue", "white", "silver", "grey"],
      hairArray: ["blue", "light blue", "white", "silver", "grey"],
      type: "skin",
    }

    var Fire = {
      skinArray: ["orange", "scarlet", "dark red", "amber", "gold"],
      eyeArray: ["orange", "scarlet", "dark red", "amber", "gold", "bright yellow", "pale yellow"],
      hairArray: ["orange", "scarlet", "amber", "gold", "black"],
      type: "skin",
    }

var Earth = {
  skinArray: ["brown", "dark brown", "grey", "silver", "green", "leaf green", "light brown", "forest green"],
  eyeArray:  ["brown", "dark brown", "grey", "silver", "green", "leaf green", "light brown", "forest green"],
  hairArray:  ["brown", "dark brown", "grey", "silver", "green", "leaf green", "light brown", "forest green"],
  type: "skin",
}

var Water = {
  skinArray: ["blue", "light blue", "dark blue", "seafoam green",],
  eyeArray: ["blue", "light blue", "dark blue", "seafoam green",],
  hairArray: ["blue", "light blue", "dark blue", "seafoam green",],
  type: "skin",
}

var Goliath = {
  skinArray: ["grey", "light grey", "dark grey", "brown", "grey-brown",],
  eyeArray: ["green", "blue", "blue-green"],
  hairArray: ["black", "dark brown"],
  type: "skin",
}

var Aasimar = {
  skinArray: humanSkinArray.concat("marble-white", "obsidian-black", "silver", "gold",),
  eyeArray: humanEyeArray.concat("pale yellow", "white", "silver", "gold", "glowing blue", "silver", "purple", "lavender", "glowing green"),
  hairArray: humanHairColorArray,
  type: "skin",
}

var Bugbear = {
  skinArray: ["golden yellow", "pale gold", "greyish yellow", "ginger", "orange-brown", "dark orange-brown"],
  eyeArray: ["yellow", "pale yellow", "deep yellow","yellow-green", "pale green", "red"],
  hairArray: ["error"],
  type: "fur",
}

var Firbolg = {
  skinArray: ["light grey", "grey", "dark grey"],
  eyeArray: ["grey", "pale grey", "white"],
  hairArray: humanHairColorArray.concat("blond", "blond", "ginger", "ginger", "ginger", "ginger", "ginger", "ginger", "ginger", "ginger"),
  type: "skin",
}

var Goblin = {
  skinArray: ["light grey", "grey", "green", "pale orange", "jade"],
  eyeArray: ["yellow", "red", "orange", "amber"],
  hairArray: ["black", "dark brown",],
  type: "skin",
}

var Hobgoblin = {
  skinArray: ["red-orange", "orange", "dark orange", "amber",],
  eyeArray: ["brown", "dark brown", "yellow"],
  hairArray: ["black", "dark brown","reddish brown", "grey", "grey-brown"],
  type: "skin",
}

var Kenku = {
  skinArray: ["black"],
  eyeArray: ["black"],
  hairArray: ["error",],
  type: "feathers",
}

var Lizardfolk = {
  skinArray: ["green", "light green", "dark green", "yellow-green", "teal", "grey-green", "brown", "dark brown", "green-brown", "light brown"],
  eyeArray: ["red", "green", "gold", "orange", "blue"],
  hairArray: ["error"],
  type: "scales",
}

var Orc = {
  skinArray: ["corpse-white", "green", "dark green", "bright green", "light green", "pale green", "green-brown", "grey", "green-grey"],
  eyeArray: ["yellow", "pale yellow", "amber", "red", "orange", "grey", "green", "yellow-green", "dark green", "black", "brown"],
  hairArray: ["black","brown", "red", "white", "grey"],
  type: "skin",
}

var Tabaxi = {
  skinArray: ["white", "black", "tuxedo", "black and white", "brown tabby", "ginger tabby", "cream tabby", "cream with brown accents", "grey tabby", "orange with black stripes", "white with black stripes", "yellow with leopard-spots", "yellow with cheetah-spots", "calico", "tortieshell", "solid brown", "golden", "golden-brown", "grey with black spots",],
  eyeArray: ["yellow", "green", "yellow-green", "blue"],
  hairArray: ["error"],
  type: "fur",
}

var Triton = {
  skinArray: ["silver", "silver-blue", "silver-green", "green", "pale green", "grey", "green-grey", "dark green", "blue", "pale blue", "dark blue", "blue-grey", "white"],
  eyeArray: ["yellow", "green", "yellow-green", "blue", "silver", "black", "dark blue", "dark green", ],
  hairArray: ["black", "navy blue", "forest green", "pale green", "pale blue", "green", "blue", "silver", "grey", "brown","green-brown", "grey-green"],
  type: "skin",
}

var YuanTiPureblood = {
  skinArray: humanSkinArray,
  eyeArray: humanEyeArray.concat("yellow-green", "yellow"),
  hairArray: humanHairColorArray,
  type: "skin",
}

var Changeling = {
  skinArray: ["marble-white", "pale grey",],
  eyeArray:  ["white"],
  hairArray: ["white", "pale grey", "pale blond", "pale green", "pale pink", "pale blue"],
  type: "skin",
}

var Kalashtar = {
  skinArray: humanSkinArray,
  eyeArray: humanEyeArray,
  hairArray: humanHairColorArray,
  type: "skin",
}

var Beasthide = {
  skinArray: humanSkinArray.concat("grey"),
  eyeArray: humanEyeArray,
  hairArray: humanHairColorArray,
  ancestryArray: ["boar", "bear", "cockroach","rhino", "elephant"],
  type: "skin",
}

var Longtooth = {
  skinArray: humanSkinArray,
  eyeArray: humanEyeArray.concat("golden"),
  hairArray: humanHairColorArray,
  ancestryArray: ["wolf", "dog", "hyena","lion", "coyote","tiger"],
  type: "skin",
}

var Swiftstride = {
  skinArray: humanSkinArray.concat("striped"),
  eyeArray: humanEyeArray.concat("golden", "yellow-green"),
  hairArray: humanHairColorArray.concat("striped"),
  ancestryArray: ["cat", "lynx", "leopard", "rat", "weasel", "coyote", "fox"],
  type: "skin",
}

var Wildhunt = {
  skinArray: humanSkinArray.concat("striped", "grey"),
  eyeArray: humanEyeArray.concat("golden", "yellow-green"),
  hairArray: humanHairColorArray.concat("striped"),
  ancestryArray: ["wolf", "cat", "lynx", "spider", "owl", "eagle", "hawk", "egret"],
  type: "skin",
}

var Cliffwalk = {
  skinArray: humanSkinArray,
  eyeArray: humanEyeArray.concat("golden"),
  hairArray: humanHairColorArray.concat("white"),
  ancestryArray: ["goat", "spider", "lizard",],
  type: "skin",
}

var Razorclaw = {
  skinArray: humanSkinArray,
  eyeArray: humanEyeArray,
  hairArray: humanHairColorArray,
  ancestryArray: ["tiger", "sloth", "cat","eagle"],
  type: "skin",
}

var Warforged = {
  skinArray: ["silver", "gold", "bronze", "copper", "steel", "iron", "brass", "tin", "aluminium", "carved granite", "carved marble", "carved quartz", "carved limestone"],
  eyeArray: ["red", "blue", "green", "teal", "violet", "pink", "orange", "lime", "yellow"],
  hairArray: ["error"],
  type: "armor",
}

var Gith = {
  skinArray: ["yellow", "golden-brown", "yellow-green","green"],
  eyeArray: ["yellow", "grey", "black"],
  hairArray: ["dark red", "black"],
  type: "skin",
}

var Centaur = {
  skinArray: humanSkinArray,
  eyeArray: humanEyeArray,
  hairArray: humanHairColorArray,
  type: "skin",
}

var Loxodon = {
  skinArray: ["grey"],
  eyeArray: ["brown", "light brown", "yellowish brown", "hazel", "green"],
  hairArray: ["error"],
  type: "skin",
}

var Minotaur = {
  skinArray: humanSkinArray,
  eyeArray: humanEyeArray,
  hairArray: humanHairColorArray,
  type: "skin",
}

var Locathah = {
  skinArray: ["ochre", "olive-green", "parchment", "rusty brown", "salmon-colored"],
  eyeArray: ["brown", "yellow-brown", "pale yellow", "grey", "pale grey", "black", "dark brown"],
  hairArray: ["error"],
  type: "scales",
}

var Grung = {
  skinArray: ["green", "blue", "purple", "red", "orange", "gold"],
  eyeArray: ["red"],
  hairArray: ["error"],
  type: "skin",
}

var Kobold = {
  skinArray: ["red", "orange-red", "rusty", "dark red", "reddish brown", "brown", "black"],
  eyeArray: ["burnt orange", "amber", "red", "dark red"],
  hairArray: ["error"],
  type: "scales",
}



//BACKGROUND TRAITS ETCETERA

var General = {
  traits: ["I  can find common ground between the fiercest enemies, empathizing with them and always working toward peace.", "I  see omens in  every event and action. The gods try to speak to  us, we just need to listen.", "Nothing can shake my optimistic attitude.", "I fall in and out of love easily, and am always pursuing someone.", "I  have a joke for every occasion, especially occasions where humor is inappropriate.", "Flattery is my preferred trick for getting what I want.","Sarcasm and insults are  my weapons of choice.", "I  always have a plan for what to do when things go wrong.", "I am always calm, no  matter what the situation. I never raise my voice or let my emotions control me.", "I would rather make a  new friend than a  new enemy","I  am incredibly slow to trust. Those who seem the fairest often have the most to hide.","Nobody stays angry at me or around me for long, since I can defuse any amount of tension.","I'll settle for nothing less than perfection.", "When I set my mind to something, I follow through no matter what gets in my way.", "I  believe that anything worth doing is worth doing right. I can't help it-I'm a perfectionist.","I'm fu ll of witty aphorisms and have a proverb for every occasion."],
  ideals: ["Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings.", "Friendship. Material goods come and go. Bonds of friendship last forever.", "Aspiration. I'm determined to  make something of myself.", "Honesty. Art should reflect the soul; it should come from within and reveal who we really are."],
  bonds: ["I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.","A powerful person killed someone I  love. Some day soon, I'll  have my revenge.", "Someone I loved died because of a mistake I  made. That will never happen again."],
  flaws: ["I judge others harshly, and myself even more severely.", "I am  inflexible in  my thinking.", "I  am suspicious of strangers and expect the worst of them.","Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.","I  can't resist a pretty face."]
}

var Acolyte = {
  traits: ["I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.", "I quote (or misquote) sacred texts and proverbs in almost every situation.", "I  am tolerant of other faiths and respect the worship of other gods.", "I  am intolerant of other faiths and condemn the worship of other gods.", "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.", "I've spent so long in the temple that I  have little practical experience dealing with people in the outside world."],
  ideals: ["Power. I  hope to one day rise to the top of my fa ith's religious hierarchy."],
  bonds: ["I would die to recover an ancient relic of my faith that was lost long ago.","I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.", "I owe my life to the priest who took me in when my parents died.", "I will do anything to protect the temple where I served","I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."],
  flaws: ["I put too much trust  in those who wield power within my temple's hierarchy.", "My piety sometimes leads me to blindly trust those that profess faith in my god."]
}

var Charlatan = {
  special: ["I cheat at games of chance.", "I shave coins or forge documents.", "I  insinuate myself into people's lives to prey on their weakness and secure their fortunes.","I put on new identities like clothes.", "I run sleight-of-hand cons on street corners.", "I convince people that worthless junk is worth their hard-earned money."],
  equipment: ["ten false potion bottles filled with colored water", "a set of weighted dice", "a deck of marked cards", "a signet ring of an imaginary duke"],
  traits: ["I  can find common ground between the fiercest enemies, empathizing with them and always working toward peace.", "I  see omens in  every event and action. The gods try to speak to  us, we just need to listen.", "Nothing can shake my optimistic attitude."],
  ideals: ["Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings.","Fairness. I  never target people who can't afford to lose a few coins.", "Charity. I distribute the money I acquire to the people who really need it.", "Charity. I distribute the money I acquire to the people who really need it.", "Creativity. I  never run the same con twice."],
  bonds: ["I  fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.", "I owe everything to my mentor - a horrible person who's probably rotting in jail somewhere.", "Somewhere out there, I  have a child who doesn't know me. I'm  making the world better for him or her.", "I  swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."],
  flaws: ["I judge others harshly, and myself even more severely.", "I am  inflexible in  my thinking.", "I  am suspicious of strangers and expect the worst of them.","Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.","I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in...", "I'm convinced that no one could ever fool  me the way I fool others.", "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.", "I can't resist swindling people who are more powerful than me.", "I  hate to admit it and will hate myself for  it, but I'll run and preserve my own hide if the going gets tough."]
}

var Lawful = {
  ideals: ["Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.","I have a strong sense of fair play and always try to find the most equitable solution to arguments.","Fairness. No one should get preferential treatment before the law, and no one is above the law.", "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization.",]
}

var Good = {
  ideals: ["Charity. I  always try to help those in  need, no matter what the personal cost.", "Redemption. There's a spark of good in everyone.", "Respect. People deserve to be treated with dignity and respect."],
  bonds: ["Everything I do is  for the common people.","I protect those who cannot protect themselves."],
  traits: ["If someone is in trouble, I'm always ready to lend help."]
}

var Chaotic = {
  traits: ["I'm a born gambler who can't resist taking a risk for a potential payoff.", "I lie about almost everything,  even when there's no good reason to.", "I  keep multiple holy symbols on  me and invoke whatever deity might come in useful at any given moment.", "I  pocket anything I  see that might have some value.", "I  don't  pay attention to the risks in a situation. Never tell me the odds.", "The best way to get me to do something is to tell me  I can't do it.","I  blow up at the slightest insult.",],
  ideals: ["Change. We must help bring about the changes the gods are constantly working in the world.", "Independence. I  am a free spirit-no one tells me what to do.", "Freedom. Chains are  meant to be broken,  as  are those who would forge them.", "Creativity. The world is  in need of new ideas and bold action.","Freedom. Tyrants must not be allowed to oppress the people."],
  flaws: ["If there's a plan, I'II forget it. If I don't forget it, I'II ignore it.", "I have trouble keeping my true fe elings hidden. My sharp tongue lands me in trouble.", "Despite my best efforts, I  am unreliable to my friends."]
}

var Evil = {
  ideals: ["Greed. I will do whatever it takes to become wealthy.",],
  flaws: ["Secretly, I  believe that things would be better if I  were a tyrant lording over the land."]
}

var Neutral = {
  ideals: ["People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care.", "People. I like seeing the smiles on  people's faces when I  perform. That's all that matters.",]
}

var Criminal = {
  special: ["Blackmailer", "Burglar", "Enforcer", "Fence", "Highway robber", "Hired killer", "Pickpocket", "Smuggler"],
  traits: ["The first thing I do in a  new place is  note the locations of everything valuable-or where such things could be hidden.",],
  ideals: ["Honor. I don't steal from others in the trade.","Charity. I  steal from  the wealthy so that I can help people in need.",],
  bonds: ["I'm trying to pay off an old debt I owe to a generous benefactor.", "My ill-gotten gains go to support my family.", "Something important was taken from me, and I aim to steal it back.","I will become the greatest thief that ever lived.","I'm guilty of a terrible crime. I  hope I can redeem myself for it.",],
  flaws: ["When I  see something valuable, I can't think about anything but how to steal it.", "When faced with a choice between money and my friends, I  usually choose the money.", "I  have a 'tell' that reveals when I'm lying.","I turn tail and run when things look bad.", "An innocent person is in prison for a crime that I committed. I'm okay with that."],
}

var Entertainer = {
  equipment: ["bagpipes", "drum", "dulcimer", "flute", "lute", "lyre", "horn", "pan flute", "shawm", "viol", "violin", "guitar"],
  special: ["Actor", "Dancer", "Fire-eater", "Jester", "Juggler", "Instrumentalist", "Poet", "Singer", "Storyteller", "Tumbler"],
  traits: ["I know a story relevant to almost every situation.", "Whenever I come to a new place, I collect local rumours and spread gossip.", "I'm a hopeless romantic, always searching for that 'special someone.'","I love a good insult, even one directed at me.", "I get bitter if I'm not the center of attention", "I change my mood or my mind as quickly as I change key in a song."],
  ideals: ["Beauty. When I  perform, I  make the world better than it was.","Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are.","Greed. I'm only in it for the money and fame.", ],
  bonds:  ["My instrument is my most treasured possession, and it reminds me of someone I  love.", "Someone stole my precious instrument, and someday I'll get it back.", "I want to be famous, whatever it takes.", "I  idolize a hero of the old tales and measure my deeds against that person's.", "I will do anything to  prove myself superior to my hated rival.", "I would do  anything for the other members of my old troupe.",],
  flaws: ["I'll do anything to win fame  and renown.", "I'm a sucker for a pretty face.", "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.", "I once satirized a noble who still wants my head. It was a mistake that I  will likely repeat.",]
}

var FolkHero = {
  equipment: ["alchemist's supplies", "brewer's supplies", "calligrapher's supplies", "carpenter's tools", "cartographer's tools", "cobbler's tools", "cook's utensils", "glassblower's tools", "jeweler's tools", "leatherworker's tools", "mason's tools", "painter's supplies", "potter's tools", "smith's tools", "tinker's tools", "weaver's tools", "woodcarver's tools", ],
  special: ["I stood up to a tyrant's agents.", "I saved people during a natural disaster.", "I stood alone against a terrible monster.", "I  stole from a corrupt merchant to help the poor.","I led a militia to fight off an invading army.","I  broke into a tyrant's castle and stole weapons to arm the people.","I trained the peasantry to use farm implements as weapons against a tyrant's soldiers.","A lord  rescinded an  unpopular decree after I  led a symbolic act of protest against it.", "A " + generate(["celestial", "fey", "metallic dragon", "genie",]) + " gave me a blessing or revealed my secret origin.", "Recruited into a lord's army, I  rose to leadership and was commended for my heroism."],
  traits: ["I judge people by their actions, not their words.","If someone is in trouble, I'm always ready to lend help.", "I'm confident in my own abilities and do what I can to instill confidence in others.", "Thinking is for other people. I prefer action.","I misuse long words in an attempt to sound smarter.","I  get bored easily. When am  I going to get on with my destiny?"],
  ideals: ["Might. If I become strong, I can take what I want­what I deserve.","Sincerity. There's no  good in pretending to be something I'm  not.", "Destiny. Nothing and no one can steer me away from my higher calling."],
  bonds: ["I have a family,  but I  have no idea where they are. One day, I  hope to see them again.","I worked the land, I  love the land, and I will protect the land.","A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.","My tools are symbols of my past life, and I carry them so that I will never forget my roots.","I wish my childhood sweetheart had come with me to pursue my destiny."],
  flaws: ["The tyrant who rules my land will stop at nothing to see my killed.","I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.", "The people who knew me when I was young know my shameful secret, so I can never go home again.","I have a weakness for the vices of the city, especially hard drink.","  have trouble trusting in my allies."]
}

var GuildArtisan = {
  special: ["Alchemists and apothecaries","Armorers, locksmiths, and finesmiths","Brewers, distillers, and vintners","Calligraphers, scribes, and scriveners","Carpenters, roofers, and plasterers","Cartographers, surveyors, and chart·makers","Cobblers and shoemakers","Cooks and bakers","Glassblowers and glaziers","Jewelers and gem cutters","Leatherworkers, skinners, and tanners","Masons and stonecutters","Painters, limners, and sign-makers","Potters and tile-makers","Shipwrights and sailmakers","Smiths and metal-forgers", "Tinkers, pewterers, and casters","Wagon-makers and wheelwrights","Weavers and dyers", "Woodcarvers, coopers, and bowyers"],
  traits: ["I'm a snob who looks down on those who can't appreciate fine art.","I always want to know how things work and what makes people tick.","I'm  rude to people who lack my commitment to hard work and fair play.","I  like to talk at length about my profession.","I don't part with my money easily and will haggle tirelessly to get the best deal possible.","I'm well known for my work, and I want to  make sure everyone appreciates it. I'm  always taken aback when people haven't heard of me."],
  ideals: ["Generosity. My talents were given to me  so that I could use them to benefit the world.","Freedom. Everyone should be free to pursue his or her own livelihood.","Greed. I'm only in  it for the money.","Aspiration. I work hard to be the best there  is  at my craft."],
  bonds: ["The workshop where I  learned my trade is the most important place in the world to me.", "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.", "I owe my guild a great debt for forging me into the person I am today.", "I  pursue wealth to secure someone's love.", "One day  I will return to my guild and prove that I  am the greatest artisan of them all.", "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."],
  flaws: ["I'll do anything to get my hands on something rare or priceless.", "I'm quick to assume that someone is trying to cheat me.", "No one must ever learn that I  once stole money from guild coffers.", "I'm never satisfied with what I  have - I always want more.", "I would kill to acquire a noble title.", "I'm  horribly jealous of anyone who can outshine my handiwork. Everywhere I  go, I'm  surrounded by rivals."],
}

var Hermit = {
  special: ["'I was searching fo r spiritual enlightenment.'", "'I  was partaking of communal living in  accordance with the dictates of a religious order.'", "'I  was exiled for a crime I didn't commit.'", "'I  retreated from society after a life-altering event.'", "'I  needed a quiet place to work on  my art, literature, music, or manifesto.'", "'I needed to commune with nature, far from civilization.'", "'I was the caretaker of an  ancient ruin or relic.'", "'I  was  a pilgrim in  search of a person, place, or relic of spiritual significance.'"]
}

    var char1 = {
      name: nameGen(),
      surname: surNameGen(),
      classX: generate(classArray),
      subClass: "error",
      gender: generate(genderArray),
      background: generate(backArray),
      species: generate(raceArray),
      subSpec: "error",
      specVal: "error",
      alignment: generate (lawArray)+ " "  + generate (goodArray),
      skinColor: "error",
      eyeColor: "error",
      hairColor: "error",
      description: "error",
      extraDesc: "",
      prounoun1: "",
      pronoun2: "",
      pronoun3: "",
      pronoun4: "",
      bodyType: generate(humanBodyArray),
      height: generate(humanHeightArray),
      ifMulticlass:"no",
    }

if (char1.gender==="Male") {
  char1.pronoun1 = "he";
  char1.pronoun2 = "him";
  char1.pronoun3 = "his";
  char1.pronoun4 = "himself";
} else if (char1.gender==="Female") {
  char1.pronoun1 = "she";
  char1.pronoun2 = "her";
  char1.pronoun3 = "her";
  char1.pronoun4 = "herself";
} else {
  char1.pronoun1 = "xe";
  char1.pronoun2 = "xir";
  char1.pronoun3 = "xir";
  char1.pronoun4 = "xirself";
}



char1.extraDesc = extraDescGen(char1.species,char1.pronoun1,char1.pronoun2, char1.pronoun3);
console.log(char1.extraDesc);

char1.subClass = subClassGen(char1.classX);

if (char1.classX==="MultiClass") {
  char1.ifMulticlass = "yes";
  var multiClassArray = [];
  var multiClassArray = classArray.concat(multiClassArray);
  var index = multiClassArray.indexOf("MultiClass");
  multiClassArray.splice(index, 1);
  console.log(multiClassArray);
  multiClassArray.splice(index, 1);
  console.log(multiClassArray);
  var class1 = generate(multiClassArray);
  var index = multiClassArray.indexOf(class1);
  multiClassArray.splice(index, 1);
  var class2 = generate(multiClassArray);
  var subclass1 = subClassGen(class1);
  var subclass2 = subClassGen(class2);
  char1.classX = class1 + " / " + class2;
  char1.subClass = subclass1 + " / " + subclass2;
}

char1.subSpec = subSpecGen(char1.species);
if (char1.alignment === "Neutral Neutral"){
  char1.alignment = "True Neutral";
}


char1.specVal = setSpecVal(char1.subSpec, char1.species);

console.log(char1.specVal);

var specVal2 = char1.specVal.toString();
var specVal3 = eval(specVal2);

char1.skinColor = generate(specVal3.skinArray);
char1.eyeColor = generate(specVal3.eyeArray);
char1.hairColor = generate(specVal3.hairArray);


if (char1.skinColor === "tropical") {
  var tropicalArray = ["scarlet", "green", "blue", "yellow", "purple", "black", "white", "grey",]
  var colorNumArray = ["one", "two", "three"]
  var colorNum = generate(colorNumArray);
  if (colorNum === "one") {
    char1.skinColor = generate (tropicalArray);
  } else if (colorNum === "two") {
    var color1 = generate (tropicalArray);
    var index = tropicalArray.indexOf(color1);
    tropicalArray.splice(index, 1);
    var color2 = generate (tropicalArray);
    char1.skinColor = color1 + " and " + color2;
  } else {
    var color1 = generate (tropicalArray);
    var index = tropicalArray.indexOf(color1);
    tropicalArray.splice(index, 1);
    var color2 = generate (tropicalArray);
    var index = tropicalArray.indexOf(color2);
    tropicalArray.splice(index, 1);
    var color3  = generate (tropicalArray);
    char1.skinColor = color1 + ", " + color2 + " and " + color3;
}}

if (char1.species === "Dragonborn") {
  char1.skinColor = char1.subSpec;
}


if (char1.hairColor === "error") {
  char1.description = char1.pronoun1 + " is " + char1.height + " and " + char1.bodyType + ", with " + char1.skinColor + " " + specVal3.type + " and " + char1.eyeColor + " eyes.";
} else {
  char1.description = char1.pronoun1 + " is " + char1.height + " and " + char1.bodyType + ", with " + char1.skinColor + " " + specVal3.type + ", " + char1.eyeColor + " eyes, and " + char1.hairColor + " hair.";
}

char1.description = char1.description.charAt(0).toUpperCase() + char1.description.slice(1);


console.log(char1.description);




if (char1.ifMulticlass === "no"){
  var index = classArray.indexOf(char1.classX);
  classArray.splice(index, 1);
}




var char2 = {
  name: nameGen(),
  surname: surNameGen(),
  classX: generate(classArray),
  subClass: "error",
  gender: generate(genderArray),
  background: generate(backArray),
  species: generate(raceArray),
  subSpec: "error",
  specVal: "error",
  alignment: generate (lawArray)+ " "  + generate (goodArray),
  skinColor: "error",
  eyeColor: "error",
  hairColor: "error",
  description: "error",
  extraDesc: "",
  prounoun1: "",
  pronoun2: "",
  pronoun3: "",
  pronoun4: "",
  bodyType: generate(humanBodyArray),
  height: generate(humanHeightArray),
  ifMulticlass:"no",
}

if (char2.gender==="Male") {
char2.pronoun1 = "he";
char2.pronoun2 = "him";
char2.pronoun3 = "his";
char2.pronoun4 = "himself";
} else if (char2.gender==="Female") {
char2.pronoun1 = "she";
char2.pronoun2 = "her";
char2.pronoun3 = "her";
char2.pronoun4 = "herself";
} else {
char2.pronoun1 = "xe";
char2.pronoun2 = "xir";
char2.pronoun3 = "xir";
char2.pronoun4 = "xirself";
}



char2.extraDesc = extraDescGen(char2.species,char2.pronoun1,char2.pronoun2, char2.pronoun3);
console.log(char2.extraDesc);

char2.subClass = subClassGen(char2.classX);

if (char2.classX==="MultiClass") {
char2.ifMulticlass = "yes";
var multiClassArray = [];
var multiClassArray = classArray.concat(multiClassArray);
var index = multiClassArray.indexOf("MultiClass");
multiClassArray.splice(index, 1);
console.log(multiClassArray);
multiClassArray.splice(index, 1);
console.log(multiClassArray);
var class1 = generate(multiClassArray);
var index = multiClassArray.indexOf(class1);
multiClassArray.splice(index, 1);
var class2 = generate(multiClassArray);
var subclass1 = subClassGen(class1);
var subclass2 = subClassGen(class2);
char2.classX = class1 + " / " + class2;
char2.subClass = subclass1 + " / " + subclass2;
}

char2.subSpec = subSpecGen(char2.species);
if (char2.alignment === "Neutral Neutral"){
char2.alignment = "True Neutral";
}


char2.specVal = setSpecVal(char2.subSpec, char2.species);

console.log(char2.specVal);

var specVal2 = char2.specVal.toString();
var specVal3 = eval(specVal2);

char2.skinColor = generate(specVal3.skinArray);
char2.eyeColor = generate(specVal3.eyeArray);
char2.hairColor = generate(specVal3.hairArray);


if (char2.skinColor === "tropical") {
var tropicalArray = ["scarlet", "green", "blue", "yellow", "purple", "black", "white", "grey",]
var colorNumArray = ["one", "two", "three"]
var colorNum = generate(colorNumArray);
if (colorNum === "one") {
char2.skinColor = generate (tropicalArray);
} else if (colorNum === "two") {
var color1 = generate (tropicalArray);
var index = tropicalArray.indexOf(color1);
tropicalArray.splice(index, 1);
var color2 = generate (tropicalArray);
char2.skinColor = color1 + " and " + color2;
} else {
var color1 = generate (tropicalArray);
var index = tropicalArray.indexOf(color1);
tropicalArray.splice(index, 1);
var color2 = generate (tropicalArray);
var index = tropicalArray.indexOf(color2);
tropicalArray.splice(index, 1);
var color3  = generate (tropicalArray);
char2.skinColor = color1 + ", " + color2 + " and " + color3;
}}

if (char2.species === "Dragonborn") {
char2.skinColor = char2.subSpec;
}


if (char2.hairColor === "error") {
char2.description = char2.pronoun1 + " is " + char2.height + " and " + char2.bodyType + ", with " + char2.skinColor + " " + specVal3.type + " and " + char2.eyeColor + " eyes.";
} else {
char2.description = char2.pronoun1 + " is " + char2.height + " and " + char2.bodyType + ", with " + char2.skinColor + " " + specVal3.type + ", " + char2.eyeColor + " eyes, and " + char2.hairColor + " hair.";
}

char2.description = char2.description.charAt(0).toUpperCase() + char2.description.slice(1);


console.log(char2.description);




if (char2.ifMulticlass === "no"){
var index = classArray.indexOf(char2.classX);
classArray.splice(index, 1);
}

var char3 = {
  name: nameGen(),
  surname: surNameGen(),
  classX: generate(classArray),
  subClass: "error",
  gender: generate(genderArray),
  background: generate(backArray),
  species: generate(raceArray),
  subSpec: "error",
  specVal: "error",
  alignment: generate (lawArray)+ " "  + generate (goodArray),
  skinColor: "error",
  eyeColor: "error",
  hairColor: "error",
  description: "error",
  extraDesc: "",
  prounoun1: "",
  pronoun2: "",
  pronoun3: "",
  pronoun4: "",
  bodyType: generate(humanBodyArray),
  height: generate(humanHeightArray),
  ifMulticlass:"no",
}

if (char3.gender==="Male") {
char3.pronoun1 = "he";
char3.pronoun2 = "him";
char3.pronoun3 = "his";
char3.pronoun4 = "himself";
} else if (char3.gender==="Female") {
char3.pronoun1 = "she";
char3.pronoun2 = "her";
char3.pronoun3 = "her";
char3.pronoun4 = "herself";
} else {
char3.pronoun1 = "xe";
char3.pronoun2 = "xir";
char3.pronoun3 = "xir";
char3.pronoun4 = "xirself";
}



char3.extraDesc = extraDescGen(char3.species,char3.pronoun1,char3.pronoun2, char3.pronoun3);
console.log(char3.extraDesc);

char3.subClass = subClassGen(char3.classX);

if (char3.classX==="MultiClass") {
char3.ifMulticlass = "yes";
var multiClassArray = [];
var multiClassArray = classArray.concat(multiClassArray);
var index = multiClassArray.indexOf("MultiClass");
multiClassArray.splice(index, 1);
console.log(multiClassArray);
multiClassArray.splice(index, 1);
console.log(multiClassArray);
var class1 = generate(multiClassArray);
var index = multiClassArray.indexOf(class1);
multiClassArray.splice(index, 1);
var class2 = generate(multiClassArray);
var subclass1 = subClassGen(class1);
var subclass2 = subClassGen(class2);
char3.classX = class1 + " / " + class2;
char3.subClass = subclass1 + " / " + subclass2;
}

char3.subSpec = subSpecGen(char3.species);
if (char3.alignment === "Neutral Neutral"){
char3.alignment = "True Neutral";
}


char3.specVal = setSpecVal(char3.subSpec, char3.species);

console.log(char3.specVal);

var specVal2 = char3.specVal.toString();
var specVal3 = eval(specVal2);

char3.skinColor = generate(specVal3.skinArray);
char3.eyeColor = generate(specVal3.eyeArray);
char3.hairColor = generate(specVal3.hairArray);


if (char3.skinColor === "tropical") {
var tropicalArray = ["scarlet", "green", "blue", "yellow", "purple", "black", "white", "grey",]
var colorNumArray = ["one", "two", "three"]
var colorNum = generate(colorNumArray);
if (colorNum === "one") {
char3.skinColor = generate (tropicalArray);
} else if (colorNum === "two") {
var color1 = generate (tropicalArray);
var index = tropicalArray.indexOf(color1);
tropicalArray.splice(index, 1);
var color2 = generate (tropicalArray);
char3.skinColor = color1 + " and " + color2;
} else {
var color1 = generate (tropicalArray);
var index = tropicalArray.indexOf(color1);
tropicalArray.splice(index, 1);
var color2 = generate (tropicalArray);
var index = tropicalArray.indexOf(color2);
tropicalArray.splice(index, 1);
var color3  = generate (tropicalArray);
char3.skinColor = color1 + ", " + color2 + " and " + color3;
}}

if (char3.species === "Dragonborn") {
char3.skinColor = char3.subSpec;
}


if (char3.hairColor === "error") {
char3.description = char3.pronoun1 + " is " + char3.height + " and " + char3.bodyType + ", with " + char3.skinColor + " " + specVal3.type + " and " + char3.eyeColor + " eyes.";
} else {
char3.description = char3.pronoun1 + " is " + char3.height + " and " + char3.bodyType + ", with " + char3.skinColor + " " + specVal3.type + ", " + char3.eyeColor + " eyes, and " + char3.hairColor + " hair.";
}

char3.description = char3.description.charAt(0).toUpperCase() + char3.description.slice(1);


console.log(char3.description);




if (char3.ifMulticlass === "no"){
var index = classArray.indexOf(char3.classX);
classArray.splice(index, 1);
}

var char4 = {
  name: nameGen(),
  surname: surNameGen(),
  classX: generate(classArray),
  subClass: "error",
  gender: generate(genderArray),
  background: generate(backArray),
  species: generate(raceArray),
  subSpec: "error",
  specVal: "error",
  alignment: generate (lawArray)+ " "  + generate (goodArray),
  skinColor: "error",
  eyeColor: "error",
  hairColor: "error",
  description: "error",
  extraDesc: "",
  prounoun1: "",
  pronoun2: "",
  pronoun3: "",
  pronoun4: "",
  bodyType: generate(humanBodyArray),
  height: generate(humanHeightArray),
  ifMulticlass:"no",
}

if (char4.gender==="Male") {
char4.pronoun1 = "he";
char4.pronoun2 = "him";
char4.pronoun3 = "his";
char4.pronoun4 = "himself";
} else if (char4.gender==="Female") {
char4.pronoun1 = "she";
char4.pronoun2 = "her";
char4.pronoun3 = "her";
char4.pronoun4 = "herself";
} else {
char4.pronoun1 = "xe";
char4.pronoun2 = "xir";
char4.pronoun3 = "xir";
char4.pronoun4 = "xirself";
}



char4.extraDesc = extraDescGen(char4.species,char4.pronoun1,char4.pronoun2, char4.pronoun3);
console.log(char4.extraDesc);

char4.subClass = subClassGen(char4.classX);

if (char4.classX==="MultiClass") {
char4.ifMulticlass = "yes";
var multiClassArray = [];
var multiClassArray = classArray.concat(multiClassArray);
var index = multiClassArray.indexOf("MultiClass");
multiClassArray.splice(index, 1);
console.log(multiClassArray);
multiClassArray.splice(index, 1);
console.log(multiClassArray);
var class1 = generate(multiClassArray);
var index = multiClassArray.indexOf(class1);
multiClassArray.splice(index, 1);
var class2 = generate(multiClassArray);
var subclass1 = subClassGen(class1);
var subclass2 = subClassGen(class2);
char4.classX = class1 + " / " + class2;
char4.subClass = subclass1 + " / " + subclass2;
}

char4.subSpec = subSpecGen(char4.species);
if (char4.alignment === "Neutral Neutral"){
char4.alignment = "True Neutral";
}


char4.specVal = setSpecVal(char4.subSpec, char4.species);

console.log(char4.specVal);

var specVal2 = char4.specVal.toString();
var specVal3 = eval(specVal2);

char4.skinColor = generate(specVal3.skinArray);
char4.eyeColor = generate(specVal3.eyeArray);
char4.hairColor = generate(specVal3.hairArray);


if (char4.skinColor === "tropical") {
var tropicalArray = ["scarlet", "green", "blue", "yellow", "purple", "black", "white", "grey",]
var colorNumArray = ["one", "two", "three"]
var colorNum = generate(colorNumArray);
if (colorNum === "one") {
char4.skinColor = generate (tropicalArray);
} else if (colorNum === "two") {
var color1 = generate (tropicalArray);
var index = tropicalArray.indexOf(color1);
tropicalArray.splice(index, 1);
var color2 = generate (tropicalArray);
char4.skinColor = color1 + " and " + color2;
} else {
var color1 = generate (tropicalArray);
var index = tropicalArray.indexOf(color1);
tropicalArray.splice(index, 1);
var color2 = generate (tropicalArray);
var index = tropicalArray.indexOf(color2);
tropicalArray.splice(index, 1);
var color3  = generate (tropicalArray);
char4.skinColor = color1 + ", " + color2 + " and " + color3;
}}

if (char4.species === "Dragonborn") {
char4.skinColor = char4.subSpec;
}


if (char4.hairColor === "error") {
char4.description = char4.pronoun1 + " is " + char4.height + " and " + char4.bodyType + ", with " + char4.skinColor + " " + specVal3.type + " and " + char4.eyeColor + " eyes.";
} else {
char4.description = char4.pronoun1 + " is " + char4.height + " and " + char4.bodyType + ", with " + char4.skinColor + " " + specVal3.type + ", " + char4.eyeColor + " eyes, and " + char4.hairColor + " hair.";
}

char4.description = char4.description.charAt(0).toUpperCase() + char4.description.slice(1);


console.log(char4.description);




if (char4.ifMulticlass === "no"){
var index = classArray.indexOf(char4.classX);
classArray.splice(index, 1);
}

var char5 = {
  name: nameGen(),
  surname: surNameGen(),
  classX: generate(classArray),
  subClass: "error",
  gender: generate(genderArray),
  background: generate(backArray),
  species: generate(raceArray),
  subSpec: "error",
  specVal: "error",
  alignment: generate (lawArray)+ " "  + generate (goodArray),
  skinColor: "error",
  eyeColor: "error",
  hairColor: "error",
  description: "error",
  extraDesc: "",
  prounoun1: "",
  pronoun2: "",
  pronoun3: "",
  pronoun4: "",
  bodyType: generate(humanBodyArray),
  height: generate(humanHeightArray),
  ifMulticlass:"no",
}

if (char5.gender==="Male") {
char5.pronoun1 = "he";
char5.pronoun2 = "him";
char5.pronoun3 = "his";
char5.pronoun4 = "himself";
} else if (char5.gender==="Female") {
char5.pronoun1 = "she";
char5.pronoun2 = "her";
char5.pronoun3 = "her";
char5.pronoun4 = "herself";
} else {
char5.pronoun1 = "xe";
char5.pronoun2 = "xir";
char5.pronoun3 = "xir";
char5.pronoun4 = "xirself";
}



char5.extraDesc = extraDescGen(char5.species,char5.pronoun1,char5.pronoun2, char5.pronoun3);
console.log(char5.extraDesc);

char5.subClass = subClassGen(char5.classX);

if (char5.classX==="MultiClass") {
char5.ifMulticlass = "yes";
var multiClassArray = [];
var multiClassArray = classArray.concat(multiClassArray);
var index = multiClassArray.indexOf("MultiClass");
multiClassArray.splice(index, 1);
console.log(multiClassArray);
multiClassArray.splice(index, 1);
console.log(multiClassArray);
var class1 = generate(multiClassArray);
var index = multiClassArray.indexOf(class1);
multiClassArray.splice(index, 1);
var class2 = generate(multiClassArray);
var subclass1 = subClassGen(class1);
var subclass2 = subClassGen(class2);
char5.classX = class1 + " / " + class2;
char5.subClass = subclass1 + " / " + subclass2;
}

char5.subSpec = subSpecGen(char5.species);
if (char5.alignment === "Neutral Neutral"){
char5.alignment = "True Neutral";
}


char5.specVal = setSpecVal(char5.subSpec, char5.species);

console.log(char5.specVal);

var specVal2 = char5.specVal.toString();
var specVal3 = eval(specVal2);

char5.skinColor = generate(specVal3.skinArray);
char5.eyeColor = generate(specVal3.eyeArray);
char5.hairColor = generate(specVal3.hairArray);


if (char5.skinColor === "tropical") {
var tropicalArray = ["scarlet", "green", "blue", "yellow", "purple", "black", "white", "grey",]
var colorNumArray = ["one", "two", "three"]
var colorNum = generate(colorNumArray);
if (colorNum === "one") {
char5.skinColor = generate (tropicalArray);
} else if (colorNum === "two") {
var color1 = generate (tropicalArray);
var index = tropicalArray.indexOf(color1);
tropicalArray.splice(index, 1);
var color2 = generate (tropicalArray);
char5.skinColor = color1 + " and " + color2;
} else {
var color1 = generate (tropicalArray);
var index = tropicalArray.indexOf(color1);
tropicalArray.splice(index, 1);
var color2 = generate (tropicalArray);
var index = tropicalArray.indexOf(color2);
tropicalArray.splice(index, 1);
var color3  = generate (tropicalArray);
char5.skinColor = color1 + ", " + color2 + " and " + color3;
}}

if (char5.species === "Dragonborn") {
char5.skinColor = char5.subSpec;
}


if (char5.hairColor === "error") {
char5.description = char5.pronoun1 + " is " + char5.height + " and " + char5.bodyType + ", with " + char5.skinColor + " " + specVal3.type + " and " + char5.eyeColor + " eyes.";
} else {
char5.description = char5.pronoun1 + " is " + char5.height + " and " + char5.bodyType + ", with " + char5.skinColor + " " + specVal3.type + ", " + char5.eyeColor + " eyes, and " + char5.hairColor + " hair.";
}

char5.description = char5.description.charAt(0).toUpperCase() + char5.description.slice(1);


console.log(char5.description);




if (char5.ifMulticlass === "no"){
var index = classArray.indexOf(char5.classX);
classArray.splice(index, 1);
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
    $(".description").text(char1.description + " " + char1.extraDesc);

    $("#char2").show();
    $(".name2").text(char2.name + " "+ char2.surname);
    $(".class2").text(char2.classX);
    $(".subclass2").text(" (" + char2.subClass + ")");
    $(".gender2").text(char2.gender);
    $(".background2").text(char2.background);
    $(".species2").text(char2.species);
    $(".alignment2").text(char2.alignment);
    $(".subrace2").text(char2.subSpec);
    $(".description2").text(char2.description + " " + char2.extraDesc);


    $("#char3").show();
    $(".name3").text(char3.name + " "+ char3.surname);
    $(".class3").text(char3.classX);
    $(".subclass3").text(" (" + char3.subClass + ")");
    $(".gender3").text(char3.gender);
    $(".background3").text(char3.background);
    $(".species3").text(char3.species);
    $(".alignment3").text(char3.alignment);
    $(".subrace3").text(char3.subSpec);
    $(".description3").text(char3.description + " " + char3.extraDesc);


    $("#char4").show();
    $(".name4").text(char4.name + " "+ char4.surname);
    $(".class4").text(char4.classX);
    $(".subclass4").text(" (" + char4.subClass + ")");
    $(".gender4").text(char4.gender);
    $(".background4").text(char4.background);
    $(".species4").text(char4.species);
    $(".alignment4").text(char4.alignment);
    $(".subrace4").text(char4.subSpec);
    $(".description4").text(char4.description + " " + char4.extraDesc);

    $("#char5").show();
    $(".name5").text(char5.name + " "+ char5.surname);
    $(".class5").text(char5.classX);
    $(".subclass5").text(" (" + char5.subClass + ")");
    $(".gender5").text(char5.gender);
    $(".background5").text(char5.background);
    $(".species5").text(char5.species);
    $(".alignment5").text(char5.alignment);
    $(".subrace5").text(char5.subSpec);
    $(".description5").text(char5.description + " " + char5.extraDesc);


    event.preventDefault();
  })



});
