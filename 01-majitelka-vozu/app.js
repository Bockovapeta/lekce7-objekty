// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..

let auto = {
    znacka: 'Ford',
    barva: 'modrá',
    rokVyroby: 2015,
    spz: '1B2 3456',
};


// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
auto.majitel = {};
auto.majitel.jmeno = "Petra";
auto.majitel.prijmeni = "Bočková";



// Přepiš značku na Škoda

auto["znacka"] = "Škoda";

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.

let majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni;
let znacka = auto.znacka;
let spz = auto.spz;


document.querySelector('#majitelka').innerHTML = majitelka;
document.querySelector('#znacka').innerHTML = znacka;
document.querySelector('#spz').innerHTML = spz;





/*

let poleCisel = [12, 78, 18, 40];
console.log(poleCisel);

// zavoláme funkci porovnání
poleCisel.sort(porovnej);
//mělo by vypsat už seřazené číselné pole
console.log(poleCisel);

// seřazení od největšího po nejmenší, obrátíme operátor na <
function porovnej(cis1, cis2) {
    if (cis1 > cis2) {
        return 1;
    } else {
        return -1;
    }
};


let poleOsob = [
    { jmeno: 'Vanda', vek: 12 },
    { jmeno: 'Hubert', vek: 78 },
    { jmeno: 'Amalie', vek: 18 },
    { jmeno: 'Olivie', vek: 40 }
];


console.log(poleOsob);

// zavoláme funkci seřazení
poleOsob.sort(porovnejObj);
//mělo by vypsat už seřazené číselné pole
console.log(poleOsob);

//funkce seřazení objektů v poli dle věku od nejmenšího po největší
function porovnejObj(obj1, obj2) {
    if (obj1.vek > obj2.vek) {
        return 1;
    } else {
        return -1;
    }
};

*/