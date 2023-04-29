//Header Unit Table constant
var uT11 = "Name";
var uT12 = "M";
var uT13 = "WS";
var uT14 = "BS";
var uT15 = "S";
var uT16 = "T";
var uT17 = "W";
var uT18 = "A";
var uT19 = "Ld";
var uT110 = "Sv";
//Header Weapons Table constant
var wT11 = "Weapon";
var wT12 = "Range";
var wT13 = "Type";
var wT14 = "S";
var wT15 = "AP";
var wT16 = "D";
var wT17 = "Ability";


function headerTableConst()
//info within this function used for all selection for table inout
{
    document.getElementById("uT11").innerHTML = uT11;
    document.getElementById("uT12").innerHTML = uT12;
    document.getElementById("uT13").innerHTML = uT13;
    document.getElementById("uT14").innerHTML = uT14;
    document.getElementById("uT15").innerHTML = uT15;
    document.getElementById("uT16").innerHTML = uT16;
    document.getElementById("uT17").innerHTML = uT17;
    document.getElementById("uT18").innerHTML = uT18;
    document.getElementById("uT19").innerHTML = uT19;
    document.getElementById("uT110").innerHTML = uT110;

    document.getElementById("wT11").innerHTML = wT11;
    document.getElementById("wT12").innerHTML = wT12;
    document.getElementById("wT13").innerHTML = wT13;
    document.getElementById("wT14").innerHTML = wT14;
    document.getElementById("wT15").innerHTML = wT15;
    document.getElementById("wT16").innerHTML = wT16;
    document.getElementById("wT17").innerHTML = wT17;
}

function clearOut()
//for clear out of all table data all factions
{
        //Set all fields to empty, experiment further with using class or variables
        document.getElementById("uT21").innerHTML = "";
        document.getElementById("uT22").innerHTML = "";
        document.getElementById("uT23").innerHTML = "";
        document.getElementById("uT24").innerHTML = "";
        document.getElementById("uT25").innerHTML = "";
        document.getElementById("uT26").innerHTML = "";
        document.getElementById("uT27").innerHTML = "";
        document.getElementById("uT28").innerHTML = "";
        document.getElementById("uT29").innerHTML = "";
        document.getElementById("uT210").innerHTML = "";
        //
        document.getElementById("wT21").innerHTML = "";
        document.getElementById("wT22").innerHTML = "";
        document.getElementById("wT23").innerHTML = "";
        document.getElementById("wT24").innerHTML = "";
        document.getElementById("wT25").innerHTML = "";
        document.getElementById("wT26").innerHTML = "";
        document.getElementById("wT27").innerHTML = "";
        //
        document.getElementById("wT31").innerHTML = "";
        document.getElementById("wT32").innerHTML = "";
        document.getElementById("wT33").innerHTML = "";
        document.getElementById("wT34").innerHTML = "";
        document.getElementById("wT35").innerHTML = "";
        document.getElementById("wT36").innerHTML = "";
        document.getElementById("wT37").innerHTML = "";
        //
        document.getElementById("uT11").innerHTML = "";
        document.getElementById("uT12").innerHTML = "";
        document.getElementById("uT13").innerHTML = "";
        document.getElementById("uT14").innerHTML = "";
        document.getElementById("uT15").innerHTML = "";
        document.getElementById("uT16").innerHTML = "";
        document.getElementById("uT17").innerHTML = "";
        document.getElementById("uT18").innerHTML = "";
        document.getElementById("uT19").innerHTML = "";
        document.getElementById("uT110").innerHTML = "";
        //
        document.getElementById("wT11").innerHTML = "";
        document.getElementById("wT12").innerHTML = "";
        document.getElementById("wT13").innerHTML = "";
        document.getElementById("wT14").innerHTML = "";
        document.getElementById("wT15").innerHTML = "";
        document.getElementById("wT16").innerHTML = "";
        document.getElementById("wT17").innerHTML = "";
}

//////////////////////////////////////////////////ELDAR//////////////////////////////////////////////////
function farseerStat()
//function for specific unit input
{  
    document.getElementById("farSeer").disabled = true;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Guardian
    document.getElementById("uT21").innerHTML = "Farseer";
    document.getElementById("uT22").innerHTML = "7";
    document.getElementById("uT23").innerHTML = "2+";
    document.getElementById("uT24").innerHTML = "2+";
    document.getElementById("uT25").innerHTML = "3";
    document.getElementById("uT26").innerHTML = "3";
    document.getElementById("uT27").innerHTML = "5";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "9";
    document.getElementById("uT210").innerHTML = "6+";
    //Shuriken P
    document.getElementById("wT21").innerHTML = "Shuriken Pistol";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "-1";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "Shuriken";
    //Witch Blade
    document.getElementById("wT31").innerHTML = "Witch Blade";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "U";
    document.getElementById("wT35").innerHTML = "-1";
    document.getElementById("wT36").innerHTML = "2";
    document.getElementById("wT37").innerHTML = "2 + Success";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function howlingBansheeStat()
//function for specific unit input
{  
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = true;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Howling Banshee
    document.getElementById("uT21").innerHTML = "Howling Banshee";
    document.getElementById("uT22").innerHTML = "8";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "3";
    document.getElementById("uT26").innerHTML = "3";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "3";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "4+";
    //Shuriken P
    document.getElementById("wT21").innerHTML = "Shuriken Pistol";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "-1";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "Shuriken";
    //Banshee Blade
    document.getElementById("wT31").innerHTML = "Banshee Blade";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "+!";
    document.getElementById("wT35").innerHTML = "-4";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "-";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function warpSpiderStat()
//function for specific unit input
{  
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = true;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Warp Spider
    document.getElementById("uT21").innerHTML = "Warp Spider";
    document.getElementById("uT22").innerHTML = "12";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "3";
    document.getElementById("uT26").innerHTML = "3";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "3+";
    //Death Spinner
    document.getElementById("wT21").innerHTML = "Death Spinner";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Assult 6";
    document.getElementById("wT24").innerHTML = "-2";
    document.getElementById("wT25").innerHTML = "-1";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "Blast";
    //Power Blade
    document.getElementById("wT31").innerHTML = "Power Blade";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "+1";
    document.getElementById("wT35").innerHTML = "-3";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "Additional Attack";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function guardianStat()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = true;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //Farseer
    document.getElementById("uT21").innerHTML = "Guardian";
    document.getElementById("uT22").innerHTML = "7";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "3";
    document.getElementById("uT26").innerHTML = "3";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "1";
    document.getElementById("uT29").innerHTML = "7";
    document.getElementById("uT210").innerHTML = "4+";
    //Shuriken C
    document.getElementById("wT21").innerHTML = "Shuriken";
    document.getElementById("wT22").innerHTML = "18in";
    document.getElementById("wT23").innerHTML = "Assult";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "-1";
    document.getElementById("wT26").innerHTML = "0";
    document.getElementById("wT27").innerHTML = "Shuriken";
    //Witch Blade
    document.getElementById("wT31").innerHTML = "Witch Blade";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "+2";
    document.getElementById("wT35").innerHTML = "-3";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "Additional Attack";
}

function wraithGuardStat()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = true;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Wraith Guard
        document.getElementById("uT21").innerHTML = "Wraith Guard";
        document.getElementById("uT22").innerHTML = "4";
        document.getElementById("uT23").innerHTML = "4";
        document.getElementById("uT24").innerHTML = "5";
        document.getElementById("uT25").innerHTML = "5";
        document.getElementById("uT26").innerHTML = "1";
        document.getElementById("uT27").innerHTML = "4";
        document.getElementById("uT28").innerHTML = "1";
        document.getElementById("uT29").innerHTML = "10";
        document.getElementById("uT210").innerHTML = "3+";
        //Wraith Cannon
        document.getElementById("wT21").innerHTML = "Wraith Cannon";
        document.getElementById("wT22").innerHTML = "12in";
        document.getElementById("wT23").innerHTML = "Small Arms";
        document.getElementById("wT24").innerHTML = "4";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "0";
        document.getElementById("wT27").innerHTML = "Destroyer";
        //Scythes
        document.getElementById("wT31").innerHTML = "D-Scythes";
        document.getElementById("wT32").innerHTML = "8";
        document.getElementById("wT33").innerHTML = "Small Arms";
        document.getElementById("wT34").innerHTML = "x2";
        document.getElementById("wT35").innerHTML = "6+";
        document.getElementById("wT36").innerHTML = "4+";
        document.getElementById("wT37").innerHTML = "Inferno";
}

function waveSerpantStat()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = true;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Wave Serpant
        document.getElementById("uT21").innerHTML = "Wave Serpant";
        document.getElementById("uT22").innerHTML = "18";
        document.getElementById("uT23").innerHTML = "6+";
        document.getElementById("uT24").innerHTML = "3+";
        document.getElementById("uT25").innerHTML = "6";
        document.getElementById("uT26").innerHTML = "7";
        document.getElementById("uT27").innerHTML = "13";
        document.getElementById("uT28").innerHTML = "3";
        document.getElementById("uT29").innerHTML = "8";
        document.getElementById("uT210").innerHTML = "3+";
        //Twin Bright Lance
        document.getElementById("wT21").innerHTML = "Twin Bright Lance";
        document.getElementById("wT22").innerHTML = "36in";
        document.getElementById("wT23").innerHTML = "Heavy 2";
        document.getElementById("wT24").innerHTML = "6";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "2";
        document.getElementById("wT27").innerHTML = "-";
        //Sunburst
        document.getElementById("wT31").innerHTML = "Sunburst";
        document.getElementById("wT32").innerHTML = "48in";
        document.getElementById("wT33").innerHTML = "Heavy 2D2";
        document.getElementById("wT34").innerHTML = "4";
        document.getElementById("wT35").innerHTML = "-1";
        document.getElementById("wT36").innerHTML = "1";
        document.getElementById("wT37").innerHTML = "Blast";
}

function shiningSpearStat()
//function for specific unit input
{  
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = true;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Shining Spear
    document.getElementById("uT21").innerHTML = "Shining Spear";
    document.getElementById("uT22").innerHTML = "16";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "3";
    document.getElementById("uT26").innerHTML = "4";
    document.getElementById("uT27").innerHTML = "2";
    document.getElementById("uT28").innerHTML = "3";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "3+";
    //Star Lance
    document.getElementById("wT21").innerHTML = "Star Lance";
    document.getElementById("wT22").innerHTML = "16in";
    document.getElementById("wT23").innerHTML = "Assult 1";
    document.getElementById("wT24").innerHTML = "8";
    document.getElementById("wT25").innerHTML = "-4";
    document.getElementById("wT26").innerHTML = "2";
    document.getElementById("wT27").innerHTML = "-";
    //Paragon Saber
    document.getElementById("wT31").innerHTML = "Paragon Saber";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "+1";
    document.getElementById("wT35").innerHTML = "-4";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "Charge";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function swoopingHawkStat()
//function for specific unit input
{  
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = true;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Swooping Hawk
    document.getElementById("uT21").innerHTML = "Swooping Hawk";
    document.getElementById("uT22").innerHTML = "14";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "3";
    document.getElementById("uT26").innerHTML = "3";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "4+";
    //Hawks Talons
    document.getElementById("wT21").innerHTML = "Hawks Talons";
    document.getElementById("wT22").innerHTML = "24in";
    document.getElementById("wT23").innerHTML = "Assult 4";
    document.getElementById("wT24").innerHTML = "5";
    document.getElementById("wT25").innerHTML = "-1";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "6 Auto Wound";
    //Lasblaster
    document.getElementById("wT31").innerHTML = "Lasblaster";
    document.getElementById("wT32").innerHTML = "24";
    document.getElementById("wT33").innerHTML = "Assult 4";
    document.getElementById("wT34").innerHTML = "4";
    document.getElementById("wT35").innerHTML = "0";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "6 Auto Wound";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function firePrismStat()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = true;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Fire Prism
        document.getElementById("uT21").innerHTML = "Fire Prism";
        document.getElementById("uT22").innerHTML = "16";
        document.getElementById("uT23").innerHTML = "6+";
        document.getElementById("uT24").innerHTML = "3+";
        document.getElementById("uT25").innerHTML = "8";
        document.getElementById("uT26").innerHTML = "7";
        document.getElementById("uT27").innerHTML = "17";
        document.getElementById("uT28").innerHTML = "3";
        document.getElementById("uT29").innerHTML = "8";
        document.getElementById("uT210").innerHTML = "3+";
        //Prism Cannon
        document.getElementById("wT21").innerHTML = "Prism Cannon";
        document.getElementById("wT22").innerHTML = "60in";
        document.getElementById("wT23").innerHTML = "Heavy 3";
        document.getElementById("wT24").innerHTML = "6";
        document.getElementById("wT25").innerHTML = "-2";
        document.getElementById("wT26").innerHTML = "2";
        document.getElementById("wT27").innerHTML = "Blast";
        //Focused Lance
        document.getElementById("wT31").innerHTML = "Focused Lance";
        document.getElementById("wT32").innerHTML = "60in";
        document.getElementById("wT33").innerHTML = "Heavy 2";
        document.getElementById("wT34").innerHTML = "14";
        document.getElementById("wT35").innerHTML = "-5";
        document.getElementById("wT36").innerHTML = "3D3";
        document.getElementById("wT37").innerHTML = "-";
}

function warWalkerStat()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = true;
    document.getElementById("clearOut").disabled = false;
        //War Walker
        document.getElementById("uT21").innerHTML = "War Walker";
        document.getElementById("uT22").innerHTML = "10";
        document.getElementById("uT23").innerHTML = "3+";
        document.getElementById("uT24").innerHTML = "3+";
        document.getElementById("uT25").innerHTML = "5";
        document.getElementById("uT26").innerHTML = "6";
        document.getElementById("uT27").innerHTML = "6";
        document.getElementById("uT28").innerHTML = "3";
        document.getElementById("uT29").innerHTML = "8";
        document.getElementById("uT210").innerHTML = "3+";
        //Bright Lance
        document.getElementById("wT21").innerHTML = "Bright Lance";
        document.getElementById("wT22").innerHTML = "36in";
        document.getElementById("wT23").innerHTML = "Heavy 1";
        document.getElementById("wT24").innerHTML = "8";
        document.getElementById("wT25").innerHTML = "-4";
        document.getElementById("wT26").innerHTML = "D3+3";
        document.getElementById("wT27").innerHTML = "-";
        //Shuriken
        document.getElementById("wT31").innerHTML = "Shuriken";
        document.getElementById("wT32").innerHTML = "24in";
        document.getElementById("wT33").innerHTML = "Heavy 3";
        document.getElementById("wT34").innerHTML = "16";
        document.getElementById("wT35").innerHTML = "-1";
        document.getElementById("wT36").innerHTML = "2";
        document.getElementById("wT37").innerHTML = "Shuriken";
}

function buttonEldar()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("howlingBanshee").disabled = false;
    document.getElementById("warpSpider").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("shiningSpear").disabled = false;
    document.getElementById("swoopingHawk").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("warWalker").disabled = false;
    document.getElementById("clearOut").disabled = true;
}

//////////////////////////////////////////////////ORKS//////////////////////////////////////////////////
function warBossStat()
//function for specific unit input
{  
    document.getElementById("warBoss").disabled = true;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //War Boss
    document.getElementById("uT21").innerHTML = "War Boss";
    document.getElementById("uT22").innerHTML = "5";
    document.getElementById("uT23").innerHTML = "2+";
    document.getElementById("uT24").innerHTML = "5+";
    document.getElementById("uT25").innerHTML = "6";
    document.getElementById("uT26").innerHTML = "6";
    document.getElementById("uT27").innerHTML = "6";
    document.getElementById("uT28").innerHTML = "5";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "4+";
    //Slugga
    document.getElementById("wT21").innerHTML = "Slugga";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol 1";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Big Choppa
    document.getElementById("wT31").innerHTML = "Big Choppa";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "4";
    document.getElementById("wT35").innerHTML = "-1";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "2xAttack";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function bigMekStat()
//function for specific unit input
{  
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = true;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Big Mek
    document.getElementById("uT21").innerHTML = "Big Mek";
    document.getElementById("uT22").innerHTML = "5";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "5+";
    document.getElementById("uT25").innerHTML = "5";
    document.getElementById("uT26").innerHTML = "4";
    document.getElementById("uT27").innerHTML = "4";
    document.getElementById("uT28").innerHTML = "3";
    document.getElementById("uT29").innerHTML = "7";
    document.getElementById("uT210").innerHTML = "4+";
    //Slugga
    document.getElementById("wT21").innerHTML = "Slugga";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol 1";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Kill Saw
    document.getElementById("wT31").innerHTML = "Kill Saw";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "x2";
    document.getElementById("wT35").innerHTML = "-4";
    document.getElementById("wT36").innerHTML = "D3";
    document.getElementById("wT37").innerHTML = "-1 Hit Roll";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function stormBoyStat()
//function for specific unit input
{  
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = true;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Storm Boy
    document.getElementById("uT21").innerHTML = "Storm Boy";
    document.getElementById("uT22").innerHTML = "12";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "5+";
    document.getElementById("uT25").innerHTML = "4";
    document.getElementById("uT26").innerHTML = "5";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "6";
    document.getElementById("uT210").innerHTML = "6+";
    //Slugga
    document.getElementById("wT21").innerHTML = "Slugga";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol 1";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Stikk Bombz
    document.getElementById("wT31").innerHTML = "Stikk Bombz";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "D6";
    document.getElementById("wT34").innerHTML = "3";
    document.getElementById("wT35").innerHTML = "0";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "Blast";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function burnaBoyStat()
{
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = true;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //Burna Boy
    document.getElementById("uT21").innerHTML = "Burna Boy";
    document.getElementById("uT22").innerHTML = "5";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "5+";
    document.getElementById("uT25").innerHTML = "4";
    document.getElementById("uT26").innerHTML = "5";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "6";
    document.getElementById("uT210").innerHTML = "6+";
    //Burna
    document.getElementById("wT21").innerHTML = "Burna";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Assult 6";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "Auto Hit";
    //None
    document.getElementById("wT31").innerHTML = "None";
    document.getElementById("wT32").innerHTML = "-";
    document.getElementById("wT33").innerHTML = "-";
    document.getElementById("wT34").innerHTML = "-";
    document.getElementById("wT35").innerHTML = "-";
    document.getElementById("wT36").innerHTML = "-";
    document.getElementById("wT37").innerHTML = "-";
}

function lootaBoyStat()
{
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = true;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Loota Boy
        document.getElementById("uT21").innerHTML = "Loota Boy";
        document.getElementById("uT22").innerHTML = "5";
        document.getElementById("uT23").innerHTML = "3+";
        document.getElementById("uT24").innerHTML = "5+";
        document.getElementById("uT25").innerHTML = "4";
        document.getElementById("uT26").innerHTML = "5";
        document.getElementById("uT27").innerHTML = "1";
        document.getElementById("uT28").innerHTML = "2";
        document.getElementById("uT29").innerHTML = "6";
        document.getElementById("uT210").innerHTML = "6+";
        //Deffgun
        document.getElementById("wT21").innerHTML = "Deffgun";
        document.getElementById("wT22").innerHTML = "48in";
        document.getElementById("wT23").innerHTML = "Dakka 3/2";
        document.getElementById("wT24").innerHTML = "7";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "2";
        document.getElementById("wT27").innerHTML = "-";
        //None
        document.getElementById("wT31").innerHTML = "None";
        document.getElementById("wT32").innerHTML = "-";
        document.getElementById("wT33").innerHTML = "-";
        document.getElementById("wT34").innerHTML = "-";
        document.getElementById("wT35").innerHTML = "-";
        document.getElementById("wT36").innerHTML = "-";
        document.getElementById("wT37").innerHTML = "-";
}

function warBikeStat()
{
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = true;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //War Bike
        document.getElementById("uT21").innerHTML = "War Bike";
        document.getElementById("uT22").innerHTML = "14";
        document.getElementById("uT23").innerHTML = "2+";
        document.getElementById("uT24").innerHTML = "5+";
        document.getElementById("uT25").innerHTML = "6";
        document.getElementById("uT26").innerHTML = "7";
        document.getElementById("uT27").innerHTML = "7";
        document.getElementById("uT28").innerHTML = "5";
        document.getElementById("uT29").innerHTML = "8";
        document.getElementById("uT210").innerHTML = "4+";
        //Kill Saw
        document.getElementById("wT31").innerHTML = "Kill Saw";
        document.getElementById("wT32").innerHTML = "M";
        document.getElementById("wT33").innerHTML = "Melee";
        document.getElementById("wT34").innerHTML = "x2";
        document.getElementById("wT35").innerHTML = "-4";
        document.getElementById("wT36").innerHTML = "D3";
        document.getElementById("wT37").innerHTML = "-1 Hit Roll";
        //Deffgun
        document.getElementById("wT21").innerHTML = "Deffgun";
        document.getElementById("wT22").innerHTML = "48in";
        document.getElementById("wT23").innerHTML = "Dakka 3/2";
        document.getElementById("wT24").innerHTML = "7";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "2";
        document.getElementById("wT27").innerHTML = "-";
}

function dreadnoughtStat()
//function for specific unit input
{  
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = true;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Dreadnought
    document.getElementById("uT21").innerHTML = "Dreadnought";
    document.getElementById("uT22").innerHTML = "6";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "6";
    document.getElementById("uT26").innerHTML = "7";
    document.getElementById("uT27").innerHTML = "8";
    document.getElementById("uT28").innerHTML = "4";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "3+";
    //Kill Saw
    document.getElementById("wT31").innerHTML = "Kill Saw";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "x2";
    document.getElementById("wT35").innerHTML = "-4";
    document.getElementById("wT36").innerHTML = "D3";
    document.getElementById("wT37").innerHTML = "-1 Hit Roll";
    //Burna
    document.getElementById("wT21").innerHTML = "Burna";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Assult 6";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "Auto Hit";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function buttonOrks()
{
document.getElementById("warBoss").disabled = false;
document.getElementById("bigMek").disabled = false;
document.getElementById("stormBoy").disabled = false;
document.getElementById("burnaBoy").disabled = false;
document.getElementById("lootaBoy").disabled = false;
document.getElementById("warBike").disabled = false;
document.getElementById("dreadnought").disabled = false;
document.getElementById("clearOut").disabled = false;
}

//////////////////////////////////////////////////ORKS//////////////////////////////////////////////////
function warBossStat()
//function for specific unit input
{  
    document.getElementById("warBoss").disabled = true;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //War Boss
    document.getElementById("uT21").innerHTML = "War Boss";
    document.getElementById("uT22").innerHTML = "5";
    document.getElementById("uT23").innerHTML = "2+";
    document.getElementById("uT24").innerHTML = "5+";
    document.getElementById("uT25").innerHTML = "6";
    document.getElementById("uT26").innerHTML = "6";
    document.getElementById("uT27").innerHTML = "6";
    document.getElementById("uT28").innerHTML = "5";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "4+";
    //Slugga
    document.getElementById("wT21").innerHTML = "Slugga";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol 1";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Big Choppa
    document.getElementById("wT31").innerHTML = "Big Choppa";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "4";
    document.getElementById("wT35").innerHTML = "-1";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "2xAttack";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function bigMekStat()
//function for specific unit input
{  
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = true;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Big Mek
    document.getElementById("uT21").innerHTML = "Big Mek";
    document.getElementById("uT22").innerHTML = "5";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "5+";
    document.getElementById("uT25").innerHTML = "5";
    document.getElementById("uT26").innerHTML = "4";
    document.getElementById("uT27").innerHTML = "4";
    document.getElementById("uT28").innerHTML = "3";
    document.getElementById("uT29").innerHTML = "7";
    document.getElementById("uT210").innerHTML = "4+";
    //Slugga
    document.getElementById("wT21").innerHTML = "Slugga";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol 1";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Kill Saw
    document.getElementById("wT31").innerHTML = "Kill Saw";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "x2";
    document.getElementById("wT35").innerHTML = "-4";
    document.getElementById("wT36").innerHTML = "D3";
    document.getElementById("wT37").innerHTML = "-1 Hit Roll";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function stormBoyStat()
//function for specific unit input
{  
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = true;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Storm Boy
    document.getElementById("uT21").innerHTML = "Storm Boy";
    document.getElementById("uT22").innerHTML = "12";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "5+";
    document.getElementById("uT25").innerHTML = "4";
    document.getElementById("uT26").innerHTML = "5";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "6";
    document.getElementById("uT210").innerHTML = "6+";
    //Slugga
    document.getElementById("wT21").innerHTML = "Slugga";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol 1";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Stikk Bombz
    document.getElementById("wT31").innerHTML = "Stikk Bombz";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "D6";
    document.getElementById("wT34").innerHTML = "3";
    document.getElementById("wT35").innerHTML = "0";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "Blast";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function burnaBoyStat()
{
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = true;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //Burna Boy
    document.getElementById("uT21").innerHTML = "Burna Boy";
    document.getElementById("uT22").innerHTML = "5";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "5+";
    document.getElementById("uT25").innerHTML = "4";
    document.getElementById("uT26").innerHTML = "5";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "6";
    document.getElementById("uT210").innerHTML = "6+";
    //Burna
    document.getElementById("wT21").innerHTML = "Burna";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Assult 6";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "Auto Hit";
    //None
    document.getElementById("wT31").innerHTML = "None";
    document.getElementById("wT32").innerHTML = "-";
    document.getElementById("wT33").innerHTML = "-";
    document.getElementById("wT34").innerHTML = "-";
    document.getElementById("wT35").innerHTML = "-";
    document.getElementById("wT36").innerHTML = "-";
    document.getElementById("wT37").innerHTML = "-";
}

function lootaBoyStat()
{
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = true;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Loota Boy
        document.getElementById("uT21").innerHTML = "Loota Boy";
        document.getElementById("uT22").innerHTML = "5";
        document.getElementById("uT23").innerHTML = "3+";
        document.getElementById("uT24").innerHTML = "5+";
        document.getElementById("uT25").innerHTML = "4";
        document.getElementById("uT26").innerHTML = "5";
        document.getElementById("uT27").innerHTML = "1";
        document.getElementById("uT28").innerHTML = "2";
        document.getElementById("uT29").innerHTML = "6";
        document.getElementById("uT210").innerHTML = "6+";
        //Deffgun
        document.getElementById("wT21").innerHTML = "Deffgun";
        document.getElementById("wT22").innerHTML = "48in";
        document.getElementById("wT23").innerHTML = "Dakka 3/2";
        document.getElementById("wT24").innerHTML = "7";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "2";
        document.getElementById("wT27").innerHTML = "-";
        //None
        document.getElementById("wT31").innerHTML = "None";
        document.getElementById("wT32").innerHTML = "-";
        document.getElementById("wT33").innerHTML = "-";
        document.getElementById("wT34").innerHTML = "-";
        document.getElementById("wT35").innerHTML = "-";
        document.getElementById("wT36").innerHTML = "-";
        document.getElementById("wT37").innerHTML = "-";
}

function warBikeStat()
{
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = true;
    document.getElementById("dreadnought").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //War Bike
        document.getElementById("uT21").innerHTML = "War Bike";
        document.getElementById("uT22").innerHTML = "14";
        document.getElementById("uT23").innerHTML = "2+";
        document.getElementById("uT24").innerHTML = "5+";
        document.getElementById("uT25").innerHTML = "6";
        document.getElementById("uT26").innerHTML = "7";
        document.getElementById("uT27").innerHTML = "7";
        document.getElementById("uT28").innerHTML = "5";
        document.getElementById("uT29").innerHTML = "8";
        document.getElementById("uT210").innerHTML = "4+";
        //Kill Saw
        document.getElementById("wT31").innerHTML = "Kill Saw";
        document.getElementById("wT32").innerHTML = "M";
        document.getElementById("wT33").innerHTML = "Melee";
        document.getElementById("wT34").innerHTML = "x2";
        document.getElementById("wT35").innerHTML = "-4";
        document.getElementById("wT36").innerHTML = "D3";
        document.getElementById("wT37").innerHTML = "-1 Hit Roll";
        //Deffgun
        document.getElementById("wT21").innerHTML = "Deffgun";
        document.getElementById("wT22").innerHTML = "48in";
        document.getElementById("wT23").innerHTML = "Dakka 3/2";
        document.getElementById("wT24").innerHTML = "7";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "2";
        document.getElementById("wT27").innerHTML = "-";
}

function dreadnoughtStat()
//function for specific unit input
{  
    document.getElementById("warBoss").disabled = false;
    document.getElementById("bigMek").disabled = false;
    document.getElementById("stormBoy").disabled = false;
    document.getElementById("burnaBoy").disabled = false;
    document.getElementById("lootaBoy").disabled = false;
    document.getElementById("warBike").disabled = false;
    document.getElementById("dreadnought").disabled = true;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Dreadnought
    document.getElementById("uT21").innerHTML = "Dreadnought";
    document.getElementById("uT22").innerHTML = "6";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "6";
    document.getElementById("uT26").innerHTML = "7";
    document.getElementById("uT27").innerHTML = "8";
    document.getElementById("uT28").innerHTML = "4";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "3+";
    //Kill Saw
    document.getElementById("wT31").innerHTML = "Kill Saw";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "x2";
    document.getElementById("wT35").innerHTML = "-4";
    document.getElementById("wT36").innerHTML = "D3";
    document.getElementById("wT37").innerHTML = "-1 Hit Roll";
    //Burna
    document.getElementById("wT21").innerHTML = "Burna";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Assult 6";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "Auto Hit";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function buttonOrks()
{
document.getElementById("warBoss").disabled = false;
document.getElementById("bigMek").disabled = false;
document.getElementById("stormBoy").disabled = false;
document.getElementById("burnaBoy").disabled = false;
document.getElementById("lootaBoy").disabled = false;
document.getElementById("warBike").disabled = false;
document.getElementById("dreadnought").disabled = false;
document.getElementById("clearOut").disabled = true;
}


//////////////////////////////////////////////////Marines//////////////////////////////////////////////////
function terminatorCaptainStat()
//function for specific unit input
{  
    document.getElementById("terminatorCaptain").disabled = true;
    document.getElementById("dreadnoughtM").disabled = false;
    document.getElementById("terminatorSquad").disabled = false;
    document.getElementById("assaultVetran").disabled = false;
    document.getElementById("scout").disabled = false;
    document.getElementById("assualtSquad").disabled = false;
    document.getElementById("landRaider").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Terminator Captain
    document.getElementById("uT21").innerHTML = "Terminator Captain";
    document.getElementById("uT22").innerHTML = "5";
    document.getElementById("uT23").innerHTML = "2+";
    document.getElementById("uT24").innerHTML = "2+";
    document.getElementById("uT25").innerHTML = "4";
    document.getElementById("uT26").innerHTML = "4";
    document.getElementById("uT27").innerHTML = "6";
    document.getElementById("uT28").innerHTML = "4";
    document.getElementById("uT29").innerHTML = "9";
    document.getElementById("uT210").innerHTML = "2+";
    //Storm Bolter
    document.getElementById("wT21").innerHTML = "Storm Bolter";
    document.getElementById("wT22").innerHTML = "124in";
    document.getElementById("wT23").innerHTML = "Rapid 1";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Power Fist
    document.getElementById("wT31").innerHTML = "Power Fist";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "x2";
    document.getElementById("wT35").innerHTML = "-3";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "-1 Hit Roll";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function dreadnoughtMStat()
//function for specific unit input
{  
    document.getElementById("terminatorCaptain").disabled = false;
    document.getElementById("dreadnoughtM").disabled = true;
    document.getElementById("terminatorSquad").disabled = false;
    document.getElementById("assaultVetran").disabled = false;
    document.getElementById("scout").disabled = false;
    document.getElementById("assualtSquad").disabled = false;
    document.getElementById("landRaider").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Dreadnought
    document.getElementById("uT21").innerHTML = "Dreadnought";
    document.getElementById("uT22").innerHTML = "6";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "6";
    document.getElementById("uT26").innerHTML = "7";
    document.getElementById("uT27").innerHTML = "8";
    document.getElementById("uT28").innerHTML = "4";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "3+";
    //Heavy Flamer
    document.getElementById("wT21").innerHTML = "Heavy Flamer";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Heavy 6";
    document.getElementById("wT24").innerHTML = "5";
    document.getElementById("wT25").innerHTML = "-1";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "Auto Hit";
    //Assualt Cannon
    document.getElementById("wT31").innerHTML = "Assualt Cannon";
    document.getElementById("wT32").innerHTML = "24";
    document.getElementById("wT33").innerHTML = "Heavy 6";
    document.getElementById("wT34").innerHTML = "6";
    document.getElementById("wT35").innerHTML = "-1";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "-1";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function terminatorSquadStat()
//function for specific unit input
{  
    document.getElementById("terminatorCaptain").disabled = false;
    document.getElementById("dreadnoughtM").disabled = false;
    document.getElementById("terminatorSquad").disabled = true;
    document.getElementById("assaultVetran").disabled = false;
    document.getElementById("scout").disabled = false;
    document.getElementById("assualtSquad").disabled = false;
    document.getElementById("landRaider").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Terminator Squad
    document.getElementById("uT21").innerHTML = "Terminator Squad";
    document.getElementById("uT22").innerHTML = "15";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "4";
    document.getElementById("uT26").innerHTML = "4";
    document.getElementById("uT27").innerHTML = "3";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "2+";
    //Assualt Cannon
    document.getElementById("wT31").innerHTML = "Assualt Cannon";
    document.getElementById("wT32").innerHTML = "24";
    document.getElementById("wT33").innerHTML = "Heavy 6";
    document.getElementById("wT34").innerHTML = "6";
    document.getElementById("wT35").innerHTML = "-1";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "-1";
    //Power Fist
    document.getElementById("wT31").innerHTML = "Power Fist";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "x2";
    document.getElementById("wT35").innerHTML = "-3";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "-1 Hit Roll";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function assaultVetranStat()
{
    document.getElementById("terminatorCaptain").disabled = false;
    document.getElementById("dreadnoughtM").disabled = false;
    document.getElementById("terminatorSquad").disabled = false;
    document.getElementById("assaultVetran").disabled = true;
    document.getElementById("scout").disabled = false;
    document.getElementById("assualtSquad").disabled = false;
    document.getElementById("landRaider").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //Assualt Vetran
    document.getElementById("uT21").innerHTML = "Assualt Vetran";
    document.getElementById("uT22").innerHTML = "6";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "4";
    document.getElementById("uT26").innerHTML = "4";
    document.getElementById("uT27").innerHTML = "2";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "3+";
    //Bolt Pistol
    document.getElementById("wT21").innerHTML = "Bolt Pistol";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol 1";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Frag Grenade
    document.getElementById("wT31").innerHTML = "Frag Grenade";
    document.getElementById("wT32").innerHTML = "6";
    document.getElementById("wT33").innerHTML = "D6";
    document.getElementById("wT34").innerHTML = "3";
    document.getElementById("wT35").innerHTML = "0";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "Blast";
}

function scoutStat()
{
    document.getElementById("terminatorCaptain").disabled = false;
    document.getElementById("dreadnoughtM").disabled = false;
    document.getElementById("terminatorSquad").disabled = false;
    document.getElementById("assaultVetran").disabled = false;
    document.getElementById("scout").disabled = true;
    document.getElementById("assualtSquad").disabled = false;
    document.getElementById("landRaider").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Scout
        document.getElementById("uT21").innerHTML = "Scout";
        document.getElementById("uT22").innerHTML = "6";
        document.getElementById("uT23").innerHTML = "3+";
        document.getElementById("uT24").innerHTML = "3+";
        document.getElementById("uT25").innerHTML = "4";
        document.getElementById("uT26").innerHTML = "4";
        document.getElementById("uT27").innerHTML = "1";
        document.getElementById("uT28").innerHTML = "1";
        document.getElementById("uT29").innerHTML = "7";
        document.getElementById("uT210").innerHTML = "4+";
        //Bolt Pistol
        document.getElementById("wT21").innerHTML = "Bolt Pistol";
        document.getElementById("wT22").innerHTML = "12in";
        document.getElementById("wT23").innerHTML = "Pistol 1";
        document.getElementById("wT24").innerHTML = "4";
        document.getElementById("wT25").innerHTML = "0";
        document.getElementById("wT26").innerHTML = "1";
        document.getElementById("wT27").innerHTML = "-";
        //Scout Rifle
        document.getElementById("wT31").innerHTML = "Scout Rifle";
        document.getElementById("wT32").innerHTML = "36";
        document.getElementById("wT33").innerHTML = "Heavy 1";
        document.getElementById("wT34").innerHTML = "4";
        document.getElementById("wT35").innerHTML = "-1";
        document.getElementById("wT36").innerHTML = "1";
        document.getElementById("wT37").innerHTML = "Look Out";
}

function assualtSquadStat()
{
    document.getElementById("terminatorCaptain").disabled = false;
    document.getElementById("dreadnoughtM").disabled = false;
    document.getElementById("terminatorSquad").disabled = false;
    document.getElementById("assaultVetran").disabled = false;
    document.getElementById("scout").disabled = false;
    document.getElementById("assualtSquad").disabled = true;
    document.getElementById("landRaider").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Assualt Squad
        document.getElementById("uT21").innerHTML = "Assualt Squad";
        document.getElementById("uT22").innerHTML = "6";
        document.getElementById("uT23").innerHTML = "3+";
        document.getElementById("uT24").innerHTML = "3+";
        document.getElementById("uT25").innerHTML = "4";
        document.getElementById("uT26").innerHTML = "4";
        document.getElementById("uT27").innerHTML = "2";
        document.getElementById("uT28").innerHTML = "1";
        document.getElementById("uT29").innerHTML = "7";
        document.getElementById("uT210").innerHTML = "3+";
        //Bolt Pistol
        document.getElementById("wT21").innerHTML = "Bolt Pistol";
        document.getElementById("wT22").innerHTML = "12in";
        document.getElementById("wT23").innerHTML = "Pistol 1";
        document.getElementById("wT24").innerHTML = "4";
        document.getElementById("wT25").innerHTML = "0";
        document.getElementById("wT26").innerHTML = "1";
        document.getElementById("wT27").innerHTML = "-";
        //None
        document.getElementById("wT21").innerHTML = "None";
        document.getElementById("wT22").innerHTML = "-";
        document.getElementById("wT23").innerHTML = "-";
        document.getElementById("wT24").innerHTML = "-";
        document.getElementById("wT25").innerHTML = "-";
        document.getElementById("wT26").innerHTML = "-";
        document.getElementById("wT27").innerHTML = "-";
}

function landRaiderStat()
//function for specific unit input
{  
    document.getElementById("terminatorCaptain").disabled = false;
    document.getElementById("dreadnoughtM").disabled = false;
    document.getElementById("terminatorSquad").disabled = false;
    document.getElementById("assaultVetran").disabled = false;
    document.getElementById("scout").disabled = false;
    document.getElementById("assualtSquad").disabled = false;
    document.getElementById("landRaider").disabled = true;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Land Raider
    document.getElementById("uT21").innerHTML = "Land Raider";
    document.getElementById("uT22").innerHTML = "10";
    document.getElementById("uT23").innerHTML = "6+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "8";
    document.getElementById("uT26").innerHTML = "8";
    document.getElementById("uT27").innerHTML = "9-16";
    document.getElementById("uT28").innerHTML = "6";
    document.getElementById("uT29").innerHTML = "9";
    document.getElementById("uT210").innerHTML = "2+";
    //Storm Bolter
    document.getElementById("wT21").innerHTML = "Storm Bolter";
    document.getElementById("wT22").innerHTML = "24in";
    document.getElementById("wT23").innerHTML = "Rapid 1";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "0";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Multi Melta
    document.getElementById("wT21").innerHTML = "Multi Melta";
    document.getElementById("wT22").innerHTML = "24in";
    document.getElementById("wT23").innerHTML = "Heavy 2";
    document.getElementById("wT24").innerHTML = "8";
    document.getElementById("wT25").innerHTML = "-4";
    document.getElementById("wT26").innerHTML = "D6";
    document.getElementById("wT27").innerHTML = "Auto Hit";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function buttonMarines()
{
document.getElementById("terminatorCaptain").disabled = false;
document.getElementById("dreadnoughtM").disabled = false;
document.getElementById("terminatorSquad").disabled = false;
document.getElementById("assaultVetran").disabled = false;
document.getElementById("scout").disabled = false;
document.getElementById("assualtSquad").disabled = false;
document.getElementById("landRaider").disabled = false;
document.getElementById("clearOut").disabled = true;
}

//////////////////////////////////////////////////TAU//////////////////////////////////////////////////
function tauCommanderStat()
//function for specific unit input
{  
    document.getElementById("tauCommander").disabled = true;
    document.getElementById("xv81").disabled = false;
    document.getElementById("stealthBattle").disabled = false;
    document.getElementById("fireWarrior").disabled = false;
    document.getElementById("devilFish").disabled = false;
    document.getElementById("xv88").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Tau Commander
    document.getElementById("uT21").innerHTML = "Tau Commander";
    document.getElementById("uT22").innerHTML = "10";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "2+";
    document.getElementById("uT25").innerHTML = "5";
    document.getElementById("uT26").innerHTML = "5";
    document.getElementById("uT27").innerHTML = "7";
    document.getElementById("uT28").innerHTML = "4";
    document.getElementById("uT29").innerHTML = "10";
    document.getElementById("uT210").innerHTML = "3+";
    //Fusion Blaster
    document.getElementById("wT21").innerHTML = "Fusion Blaster";
    document.getElementById("wT22").innerHTML = "18in";
    document.getElementById("wT23").innerHTML = "Assult 2";
    document.getElementById("wT24").innerHTML = "7";
    document.getElementById("wT25").innerHTML = "-4";
    document.getElementById("wT26").innerHTML = "2";
    document.getElementById("wT27").innerHTML = "Half Range+2";
    //Missile Pod
    document.getElementById("wT31").innerHTML = "Missile Pod";
    document.getElementById("wT32").innerHTML = "24in";
    document.getElementById("wT33").innerHTML = "Assult 2";
    document.getElementById("wT34").innerHTML = "7";
    document.getElementById("wT35").innerHTML = "-1";
    document.getElementById("wT36").innerHTML = "2";
    document.getElementById("wT37").innerHTML = "-";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function xv81Stat()
//function for specific unit input
{  
    document.getElementById("tauCommander").disabled = false;
    document.getElementById("xv81").disabled = true;
    document.getElementById("stealthBattle").disabled = false;
    document.getElementById("fireWarrior").disabled = false;
    document.getElementById("devilFish").disabled = false;
    document.getElementById("xv88").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //XV81 Crisis Battle Suit
    document.getElementById("uT21").innerHTML = "XV81 Crisis Battle Suit";
    document.getElementById("uT22").innerHTML = "10";
    document.getElementById("uT23").innerHTML = "5+";
    document.getElementById("uT24").innerHTML = "4+";
    document.getElementById("uT25").innerHTML = "5";
    document.getElementById("uT26").innerHTML = "5";
    document.getElementById("uT27").innerHTML = "4";
    document.getElementById("uT28").innerHTML = "3";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "3+";
    //Fusion Blaster
    document.getElementById("wT21").innerHTML = "Fusion Blaster";
    document.getElementById("wT22").innerHTML = "18in";
    document.getElementById("wT23").innerHTML = "Assult 2";
    document.getElementById("wT24").innerHTML = "7";
    document.getElementById("wT25").innerHTML = "-4";
    document.getElementById("wT26").innerHTML = "2";
    document.getElementById("wT27").innerHTML = "Half Range+2";
    //Missile Pod
    document.getElementById("wT31").innerHTML = "Missile Pod";
    document.getElementById("wT32").innerHTML = "24in";
    document.getElementById("wT33").innerHTML = "Assult 2";
    document.getElementById("wT34").innerHTML = "7";
    document.getElementById("wT35").innerHTML = "-1";
    document.getElementById("wT36").innerHTML = "2";
    document.getElementById("wT37").innerHTML = "-";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function stealthBattleStat()
//function for specific unit input
{  
    document.getElementById("tauCommander").disabled = false;
    document.getElementById("xv81").disabled = false;
    document.getElementById("stealthBattle").disabled = true;
    document.getElementById("fireWarrior").disabled = false;
    document.getElementById("devilFish").disabled = false;
    document.getElementById("xv88").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Stealth Battle Suit
    document.getElementById("uT21").innerHTML = "Stealth Battle Suit";
    document.getElementById("uT22").innerHTML = "8";
    document.getElementById("uT23").innerHTML = "5+";
    document.getElementById("uT24").innerHTML = "4+";
    document.getElementById("uT25").innerHTML = "4";
    document.getElementById("uT26").innerHTML = "4";
    document.getElementById("uT27").innerHTML = "2";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "8";
    document.getElementById("uT210").innerHTML = "3+";
    //Fusion Blaster
    document.getElementById("wT21").innerHTML = "Fusion Blaster";
    document.getElementById("wT22").innerHTML = "18in";
    document.getElementById("wT23").innerHTML = "Assult 2";
    document.getElementById("wT24").innerHTML = "7";
    document.getElementById("wT25").innerHTML = "-4";
    document.getElementById("wT26").innerHTML = "2";
    document.getElementById("wT27").innerHTML = "Half Range+2";
    //Power Fist
    document.getElementById("wT31").innerHTML = "Power Fist";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "x2";
    document.getElementById("wT35").innerHTML = "-3";
    document.getElementById("wT36").innerHTML = "1";
    document.getElementById("wT37").innerHTML = "-1 Hit Roll";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function fireWarriorStat()
{
    document.getElementById("tauCommander").disabled = false;
    document.getElementById("xv81").disabled = false;
    document.getElementById("stealthBattle").disabled = false;
    document.getElementById("fireWarrior").disabled = true;
    document.getElementById("devilFish").disabled = false;
    document.getElementById("xv88").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //Fire Warrior
    document.getElementById("uT21").innerHTML = "Fire Warrior";
    document.getElementById("uT22").innerHTML = "6";
    document.getElementById("uT23").innerHTML = "5+";
    document.getElementById("uT24").innerHTML = "4+";
    document.getElementById("uT25").innerHTML = "3";
    document.getElementById("uT26").innerHTML = "3";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "1";
    document.getElementById("uT29").innerHTML = "7";
    document.getElementById("uT210").innerHTML = "4+";
    //Pulse Rifle
    document.getElementById("wT21").innerHTML = "Pulse Rifle";
    document.getElementById("wT22").innerHTML = "36in";
    document.getElementById("wT23").innerHTML = "Rapid 1";
    document.getElementById("wT24").innerHTML = "5";
    document.getElementById("wT25").innerHTML = "-1";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "-";
    //Missile Pod
    document.getElementById("wT31").innerHTML = "Missile Pod";
    document.getElementById("wT32").innerHTML = "24in";
    document.getElementById("wT33").innerHTML = "Assult 2";
    document.getElementById("wT34").innerHTML = "7";
    document.getElementById("wT35").innerHTML = "-1";
    document.getElementById("wT36").innerHTML = "2";
    document.getElementById("wT37").innerHTML = "-";
}

function devilFishStat()
{
    document.getElementById("tauCommander").disabled = false;
    document.getElementById("xv81").disabled = false;
    document.getElementById("stealthBattle").disabled = false;
    document.getElementById("fireWarrior").disabled = false;
    document.getElementById("devilFish").disabled = true;
    document.getElementById("xv88").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Devil Fish
        document.getElementById("uT21").innerHTML = "Devil Fish";
        document.getElementById("uT22").innerHTML = "12";
        document.getElementById("uT23").innerHTML = "6+";
        document.getElementById("uT24").innerHTML = "4+";
        document.getElementById("uT25").innerHTML = "6";
        document.getElementById("uT26").innerHTML = "7";
        document.getElementById("uT27").innerHTML = "7-13";
        document.getElementById("uT28").innerHTML = "3";
        document.getElementById("uT29").innerHTML = "8";
        document.getElementById("uT210").innerHTML = "3+";
        //Seaker Missile
        document.getElementById("wT21").innerHTML = "Seaker Missile";
        document.getElementById("wT22").innerHTML = "72in";
        document.getElementById("wT23").innerHTML = "Heavy 1";
        document.getElementById("wT24").innerHTML = "7";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "1";
        document.getElementById("wT27").innerHTML = "-";
        //None
        document.getElementById("wT31").innerHTML = "None";
        document.getElementById("wT32").innerHTML = "-";
        document.getElementById("wT33").innerHTML = "-";
        document.getElementById("wT34").innerHTML = "-";
        document.getElementById("wT35").innerHTML = "-";
        document.getElementById("wT36").innerHTML = "-";
        document.getElementById("wT37").innerHTML = "-";
}

function xv88Stat()
{
    document.getElementById("tauCommander").disabled = false;
    document.getElementById("xv81").disabled = false;
    document.getElementById("stealthBattle").disabled = false;
    document.getElementById("fireWarrior").disabled = false;
    document.getElementById("devilFish").disabled = false;
    document.getElementById("xv88").disabled = true;
    document.getElementById("clearOut").disabled = false;
        //XV88 Broadside
        document.getElementById("uT21").innerHTML = "XV88 Broadside";
        document.getElementById("uT22").innerHTML = "5";
        document.getElementById("uT23").innerHTML = "5+";
        document.getElementById("uT24").innerHTML = "4+";
        document.getElementById("uT25").innerHTML = "5";
        document.getElementById("uT26").innerHTML = "5";
        document.getElementById("uT27").innerHTML = "8";
        document.getElementById("uT28").innerHTML = "3";
        document.getElementById("uT29").innerHTML = "8";
        document.getElementById("uT210").innerHTML = "2+";
        //Heavy Rail
        document.getElementById("wT21").innerHTML = "Heavy Rail";
        document.getElementById("wT22").innerHTML = "72in";
        document.getElementById("wT23").innerHTML = "Heavy 4";
        document.getElementById("wT24").innerHTML = "9";
        document.getElementById("wT25").innerHTML = "-4";
        document.getElementById("wT26").innerHTML = "D3+3";
        document.getElementById("wT27").innerHTML = "Wound";
        //Seaker Missile
        document.getElementById("wT21").innerHTML = "Seaker Missile";
        document.getElementById("wT22").innerHTML = "72in";
        document.getElementById("wT23").innerHTML = "Heavy 1";
        document.getElementById("wT24").innerHTML = "7";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "1";
        document.getElementById("wT27").innerHTML = "-";
}

function buttonTau()
{
    document.getElementById("tauCommander").disabled = false;
    document.getElementById("xv81").disabled = false;
    document.getElementById("stealthBattle").disabled = false;
    document.getElementById("fireWarrior").disabled = false;
    document.getElementById("devilFish").disabled = false;
    document.getElementById("xv88").disabled = false;
    document.getElementById("clearOut").disabled = true;
}

///////////////////////////////////////////////////LINKS///////////////////////////////////////////////////

function eldarLink()
{
    window.location.href = "EldarHome.html";
}

function orksLink()
{
    window.location.href = "OrksHome.html";
}

function spaceMarinesLink()
{
    window.location.href = "SpaceMarinesHome.html";
}

function tauLink()
{
    window.location.href = "TauHome.html";
}