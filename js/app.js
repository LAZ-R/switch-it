/* ================================= LONGUEUR =================================

  1 cm = 0,01 m (centimètre)
  1 km = 1000 m (kilomètre)
  1 in = 0,025 4 m (inch / pouce)
  1 ft = 0,304 8 m (feet / pied)
  1 mi = 1 609,344 m (mile)
  1 M = 1 852 m (nautique / mille marin)

*/

const metre = 1;

const centimetre = 0.01 * metre;
const convertirCentimetreEnMetre = (valeur) => { return valeur * centimetre; }
const convertirMetreEnCentimetre = (valeur) => { return valeur / centimetre; }

const kilometre = 1000 * metre;
const convertirKilometreEnMetre = (valeur) => { return valeur * kilometre; }
const convertirMetreEnKilometre = (valeur) => { return valeur / kilometre; }

const inch = 0.0254 * metre;
const convertirInchEnMetre = (valeur) => { return valeur * inch; }
const convertirMetreEnInch = (valeur) => { return valeur / inch; }

const feet = 0.3048 * metre;
const convertirFeetEnMetre = (valeur) => { return valeur * feet; }
const convertirMetreEnFeet = (valeur) => { return valeur / feet; }

const mile = 1609.344 * metre;
const convertirMileEnMetre = (valeur) => { return valeur * mile; }
const convertirMetreEnMile = (valeur) => { return valeur / mile; }

const nautique = 1852 * metre;
const convertirNautiqueEnMetre = (valeur) => { return valeur * nautique; }
const convertirMetreEnNautique = (valeur) => { return valeur / nautique; }

const LONGUEUR = {
  centimetre: 'centimetre',
  metre: 'metre',
  kilometre: 'kilometre',
  inch: 'inch',
  feet: 'feet',
  mile: 'mile',
  nautique: 'nautique',
}

const getLengthValuesByInput = (input) => {
  let valeurEnMetre = 0;

  switch (input.unite) {
    case LONGUEUR.centimetre:
      valeurEnMetre = convertirCentimetreEnMetre(input.valeur);
      break;
    case LONGUEUR.metre:
      valeurEnMetre = input.valeur;
      break;
    case LONGUEUR.kilometre:
      valeurEnMetre = convertirKilometreEnMetre(input.valeur);
      break;
    case LONGUEUR.inch:
      valeurEnMetre = convertirInchEnMetre(input.valeur);
      break;
    case LONGUEUR.feet:
      valeurEnMetre = convertirFeetEnMetre(input.valeur);
      break;
    case LONGUEUR.mile:
      valeurEnMetre = convertirMileEnMetre(input.valeur);
      break;
    case LONGUEUR.nautique:
      valeurEnMetre = convertirNautiqueEnMetre(input.valeur);
      break;
  }

  return {
    centimetre: input.unite == LONGUEUR.centimetre ? input.valeur : Number(convertirMetreEnCentimetre(valeurEnMetre).toFixed(8)),
    metre:      input.unite == LONGUEUR.metre      ? input.valeur : Number(valeurEnMetre.toFixed(8)),
    kilometre:  input.unite == LONGUEUR.kilometre  ? input.valeur : Number(convertirMetreEnKilometre(valeurEnMetre).toFixed(8)),
    inch:       input.unite == LONGUEUR.inch       ? input.valeur : Number(convertirMetreEnInch(valeurEnMetre).toFixed(8)),
    feet:       input.unite == LONGUEUR.feet       ? input.valeur : Number(convertirMetreEnFeet(valeurEnMetre).toFixed(8)),
    mile:       input.unite == LONGUEUR.mile       ? input.valeur : Number(convertirMetreEnMile(valeurEnMetre).toFixed(8)),
    nautique:   input.unite == LONGUEUR.nautique   ? input.valeur : Number(convertirMetreEnNautique(valeurEnMetre).toFixed(8)),
  }
}

//console.table(getLengthValuesByInput({ valeur: 30, unite: LONGUEUR.centimetre }));
//console.table(getLengthValuesByInput({ valeur: 1.81, unite: LONGUEUR.metre }));
//console.table(getLengthValuesByInput({ valeur: 15, unite: LONGUEUR.kilometre }));
//console.table(getLengthValuesByInput({ valeur: 1.81, unite: LONGUEUR.inch }));
//console.table(getLengthValuesByInput({ valeur: 1.81, unite: LONGUEUR.feet }));
//console.table(getLengthValuesByInput({ valeur: 1.81, unite: LONGUEUR.mile }));
//console.table(getLengthValuesByInput({ valeur: 1.81, unite: LONGUEUR.nautique }));

const onLongueurInput = (value, id) => {
  const data = getLengthValuesByInput({ valeur: Number(value), unite: id });

  document.getElementById(LONGUEUR.centimetre).value = data.centimetre;
  document.getElementById(LONGUEUR.metre).value = data.metre;
  document.getElementById(LONGUEUR.kilometre).value = data.kilometre;
  document.getElementById(LONGUEUR.inch).value = data.inch;
  document.getElementById(LONGUEUR.feet).value = data.feet;
  document.getElementById(LONGUEUR.mile).value = data.mile;
  document.getElementById(LONGUEUR.nautique).value = data.nautique;
}
window.onLongueurInput = onLongueurInput;

/* ================================== MASSE ==================================

  1 g = 0,001 kg (gramme)
  1 t = 1 000 kg (tonne)
  1 oz = 0,0283495 kg (ounce)
  1 lb = 0,45359237 kg (pound)

*/

const kilogramme = 1;

const gramme = 0.001 * kilogramme;
const convertirGrammeEnKilogramme = (valeur) => { return valeur * gramme; }
const convertirKilogrammeEnGramme = (valeur) => { return valeur / gramme; }

const tonne = 1000 * kilogramme;
const convertirTonneEnKilogramme = (valeur) => { return valeur * tonne; }
const convertirKilogrammeEnTonne = (valeur) => { return valeur / tonne; }

const ounce = 0.0283495 * kilogramme;
const convertirOunceEnKilogramme = (valeur) => { return valeur * ounce; }
const convertirKilogrammeEnOunce = (valeur) => { return valeur / ounce; }

const pound = 0.45359237 * kilogramme;
const convertirPoundEnKilogramme = (valeur) => { return valeur * pound; }
const convertirKilogrammeEnPound = (valeur) => { return valeur / pound; }

const MASSE = {
  gramme: 'gramme',
  kilogramme: 'kilogramme',
  tonne: 'tonne',
  ounce: 'ounce',
  pound: 'pound',
}

const getMassValuesByInput = (input) => {
  let valeurEnKilogramme = 0;

  switch (input.unite) {
    case MASSE.gramme:
      valeurEnKilogramme = convertirGrammeEnKilogramme(input.valeur);
      break;
    case MASSE.kilogramme:
      valeurEnKilogramme = input.valeur;
      break;
    case MASSE.tonne:
      valeurEnKilogramme = convertirTonneEnKilogramme(input.valeur);
      break;
    case MASSE.ounce:
      valeurEnKilogramme = convertirOunceEnKilogramme(input.valeur);
      break;
    case MASSE.pound:
      valeurEnKilogramme = convertirPoundEnKilogramme(input.valeur);
      break;
  }

  return {
    gramme:     input.unite == MASSE.gramme     ? input.valeur : Number(convertirKilogrammeEnGramme(valeurEnKilogramme).toFixed(8)),
    kilogramme: input.unite == MASSE.kilogramme ? input.valeur : Number(valeurEnKilogramme.toFixed(8)),
    tonne:      input.unite == MASSE.tonne      ? input.valeur : Number(convertirKilogrammeEnTonne(valeurEnKilogramme).toFixed(8)),
    ounce:      input.unite == MASSE.ounce      ? input.valeur : Number(convertirKilogrammeEnOunce(valeurEnKilogramme).toFixed(8)),
    pound:      input.unite == MASSE.pound      ? input.valeur : Number(convertirKilogrammeEnPound(valeurEnKilogramme).toFixed(8)),
  }
}

//console.table(getMassValuesByInput({ valeur: 50, unite: MASSE.gramme }));
//console.table(getMassValuesByInput({ valeur: 106, unite: MASSE.kilogramme }));
//console.table(getMassValuesByInput({ valeur: 1.3, unite: MASSE.tonne }));
//console.table(getMassValuesByInput({ valeur: 50, unite: MASSE.ounce }));
//console.table(getMassValuesByInput({ valeur: 100, unite: MASSE.pound }));

const onMasseInput = (value, id) => {
  const data = getMassValuesByInput({ valeur: Number(value), unite: id });

  document.getElementById(MASSE.gramme).value = data.gramme;
  document.getElementById(MASSE.kilogramme).value = data.kilogramme;
  document.getElementById(MASSE.tonne).value = data.tonne;
  document.getElementById(MASSE.ounce).value = data.ounce;
  document.getElementById(MASSE.pound).value = data.pound;
}
window.onMasseInput = onMasseInput;

/* ================================= VITESSE =================================

  1 km/h =   0,277 778 m/s (kilomètres par heure)
  1 mph  =    0,447 04 m/s (miles par heure)
  1 kn   =    0,514444 m/s (noeuds) - Un nœud est égal à un mille marin par heure, soit 1,852 km/h
  c      = 299 792 458 m/s

*/

const metreParSeconde = 1;

const kilometreParHeure = 0.277778 * metreParSeconde;
const convertirKilometreParHeureEnMetreParSeconde = (valeur) => { return valeur * kilometreParHeure; }
const convertirMetreParSecondeEnKilometreParHeure = (valeur) => { return valeur / kilometreParHeure; }

const mileParHeure = 0.44704 * metreParSeconde;
const convertirMileParHeureEnMetreParSeconde = (valeur) => { return valeur * mileParHeure; }
const convertirMetreParSecondeEnMileParHeure = (valeur) => { return valeur / mileParHeure; }

const noeud = 0.514444 * metreParSeconde;
const convertirNoeudEnMetreParSeconde = (valeur) => { return valeur * noeud; }
const convertirMetreParSecondeEnNoeud = (valeur) => { return valeur / noeud; }

const celerite = 299792458 * metreParSeconde;
const convertirCeleriteEnMetreParSeconde = (valeur) => { return valeur * celerite; }
const convertirMetreParSecondeEnCelerite = (valeur) => { return valeur / celerite; }

const VITESSE = {
  metreParSeconde: 'metreParSeconde',
  kilometreParHeure: 'kilometreParHeure',
  mileParHeure: 'mileParHeure',
  noeud: 'noeud',
  celerite: 'celerite',
}

const getSpeedValuesByInput = (input) => {
  let valeurEnMetreParSeconde = 0;

  switch (input.unite) {
    case VITESSE.metreParSeconde:
      valeurEnMetreParSeconde = input.valeur;
      break;
    case VITESSE.kilometreParHeure:
      valeurEnMetreParSeconde = convertirKilometreParHeureEnMetreParSeconde(input.valeur);
      break;
    case VITESSE.mileParHeure:
      valeurEnMetreParSeconde = convertirMileParHeureEnMetreParSeconde(input.valeur);
      break;
    case VITESSE.noeud:
      valeurEnMetreParSeconde = convertirNoeudEnMetreParSeconde(input.valeur);
      break;
    case VITESSE.celerite:
      valeurEnMetreParSeconde = convertirCeleriteEnMetreParSeconde(input.valeur);
      break;
  }

  return {
    metreParSeconde:   input.unite == VITESSE.metreParSeconde   ? input.valeur : Number(valeurEnMetreParSeconde.toFixed(8)),
    kilometreParHeure: input.unite == VITESSE.kilometreParHeure ? input.valeur : Number(convertirMetreParSecondeEnKilometreParHeure(valeurEnMetreParSeconde).toFixed(8)),
    mileParHeure:      input.unite == VITESSE.mileParHeure      ? input.valeur : Number(convertirMetreParSecondeEnMileParHeure(valeurEnMetreParSeconde).toFixed(8)),
    noeud:             input.unite == VITESSE.noeud             ? input.valeur : Number(convertirMetreParSecondeEnNoeud(valeurEnMetreParSeconde).toFixed(8)),
    celerite:          input.unite == VITESSE.celerite          ? input.valeur : Number(convertirMetreParSecondeEnCelerite(valeurEnMetreParSeconde).toFixed(8)),
  }
}

//console.table(getSpeedValuesByInput({ valeur: 9, unite: VITESSE.metreParSeconde }));
//console.table(getSpeedValuesByInput({ valeur: 130, unite: VITESSE.kilometreParHeure }));
//console.table(getSpeedValuesByInput({ valeur: 60, unite: VITESSE.mileParHeure }));
//console.table(getSpeedValuesByInput({ valeur: 7, unite: VITESSE.noeud }));
//console.table(getSpeedValuesByInput({ valeur: 1, unite: VITESSE.celerite }));

const onVitesseInput = (value, id) => {
  const data = getSpeedValuesByInput({ valeur: Number(value), unite: id });

  document.getElementById(VITESSE.metreParSeconde).value = data.metreParSeconde;
  document.getElementById(VITESSE.kilometreParHeure).value = data.kilometreParHeure;
  document.getElementById(VITESSE.mileParHeure).value = data.mileParHeure;
  document.getElementById(VITESSE.noeud).value = data.noeud;
  document.getElementById(VITESSE.celerite).value = data.celerite;
}
window.onVitesseInput = onVitesseInput;

/* =============================== TEMPERATURE ===============================

  X °C = (X + 273,15) K (degrés Celsius)
  X °F = (((X - 32) / 1.8) + 273) K (degrés Fahrenheit)
*/

const convertirCelciusEnKelvin = (valeur) => { return (valeur + 273.15); }
const convertirKelvinEnCelcius = (valeur) => { return (valeur - 273.15); }

const convertirFahrenheitEnKelvin = (valeur) => { return ((valeur - 32) / 1.8) + 273.15; }
const convertirKelvinEnFahrenheit = (valeur) => { return (((valeur - 273.15) * 9/5) + 32); }

const TEMPERATURE = {
  kelvin: 'kelvin',
  celcius: 'celcius',
  fahrenheit: 'fahrenheit',
}

const getTemperatureValuesByInput = (input) => {
  let valeurEnKelvin = 0;

  switch (input.unite) {
    case TEMPERATURE.kelvin:
      valeurEnKelvin = input.valeur;
      break;
    case TEMPERATURE.celcius:
      valeurEnKelvin = convertirCelciusEnKelvin(input.valeur);
      break;
    case TEMPERATURE.fahrenheit:
      valeurEnKelvin = convertirFahrenheitEnKelvin(input.valeur);
      break;
  }

  return {
    kelvin:     input.unite == TEMPERATURE.kelvin     ? input.valeur : Number(valeurEnKelvin.toFixed(2)),
    celcius:    input.unite == TEMPERATURE.celcius    ? input.valeur : Number(convertirKelvinEnCelcius(valeurEnKelvin).toFixed(2)),
    fahrenheit: input.unite == TEMPERATURE.fahrenheit ? input.valeur : Number(convertirKelvinEnFahrenheit(valeurEnKelvin).toFixed(2)),
  }
}

//console.table(getTemperatureValuesByInput({ valeur: 0, unite: TEMPERATURE.kelvin }));
//console.table(getTemperatureValuesByInput({ valeur: 20, unite: TEMPERATURE.celcius }));
//console.table(getTemperatureValuesByInput({ valeur: 50, unite: TEMPERATURE.fahrenheit }));

const onTemperatureInput = (value, id) => {
  const data = getTemperatureValuesByInput({ valeur: Number(value), unite: id });

  document.getElementById(TEMPERATURE.kelvin).value = data.kelvin;
  document.getElementById(TEMPERATURE.celcius).value = data.celcius;
  document.getElementById(TEMPERATURE.fahrenheit).value = data.fahrenheit;
}
window.onTemperatureInput = onTemperatureInput;

/* ================================ SUPERFICIE ================================

  1 cm2 = 0.0001 m2
  1 sq in = 0.00064516 m2 (square inch)
  1 sq ft = 0.092903 m2 (square foot)
  1 a = 100 m2 (are)
  1 ha = 10 000 m2 (hectar)
  1 km2 = 1 000 000 m2 (hectar)
  1 sq mi = 259 000 000 m2 (hectar)
*/

const metre2 = 1;

const centimetre2 = 0.0001 * metre2;
const convertirCentimetre2EnMetre2 = (valeur) => { return valeur * centimetre2; }
const convertireMetre2EnCentimetre2 = (valeur) => { return valeur / centimetre2; }

const squareInch = 0.00064516 * metre2;
const convertirSquareInchEnMetre2 = (valeur) => { return valeur * squareInch; }
const convertireMetre2EnSquareInch = (valeur) => { return valeur / squareInch; }

const squareFeet = 0.092903 * metre2;
const convertirSquareFeetEnMetre2 = (valeur) => { return valeur * squareFeet; }
const convertireMetre2EnSquareFeet = (valeur) => { return valeur / squareFeet; }

const are = 100 * metre2;
const convertirAreEnMetre2 = (valeur) => { return valeur * are; }
const convertirMetre2EnAre = (valeur) => { return valeur / are; }

const hectar = 10000 * metre2;
const convertirHectarEnMetre2 = (valeur) => { return valeur * hectar; }
const convertirMetre2EnHectar = (valeur) => { return valeur / hectar; }

const kilometre2 = 1000000 * metre2;
const convertirKilometre2EnMetre2 = (valeur) => { return valeur * kilometre2; }
const convertireMetre2EnKilometre2 = (valeur) => { return valeur / kilometre2; }

const squareMile = 259000000 * metre2;
const convertirSquareMileEnMetre2 = (valeur) => { return valeur * squareMile; }
const convertireMetre2EnSquareMile = (valeur) => { return valeur / squareMile; }

const SUPERFICIE = {
  centimetre2: 'centimetre2',
  squareInch: 'squareInch',
  squareFeet: 'squareFeet',
  metre2: 'metre2',
  are: 'are',
  hectar: 'hectar',
  kilometre2: 'kilometre2',
  squareMile: 'squareMile',
}

const getSurfaceValuesByInput = (input) => {
  let valeurEnMetre2 = 0;

  switch (input.unite) {
    case SUPERFICIE.centimetre2:
      valeurEnMetre2 = convertirCentimetre2EnMetre2(input.valeur);
      break;
    case SUPERFICIE.squareInch:
      valeurEnMetre2 = convertirSquareInchEnMetre2(input.valeur);
      break;
    case SUPERFICIE.squareFeet:
      valeurEnMetre2 = convertirSquareFeetEnMetre2(input.valeur);
      break;
    case SUPERFICIE.metre2:
      valeurEnMetre2 = input.valeur;
      break;
    case SUPERFICIE.are:
      valeurEnMetre2 = convertirAreEnMetre2(input.valeur);
      break;
    case SUPERFICIE.hectar:
      valeurEnMetre2 = convertirHectarEnMetre2(input.valeur);
      break;
    case SUPERFICIE.kilometre2:
      valeurEnMetre2 = convertirKilometre2EnMetre2(input.valeur);
      break;
    case SUPERFICIE.squareMile:
      valeurEnMetre2 = convertirSquareMileEnMetre2(input.valeur);
      break;
  }

  return {
    centimetre2: input.unite == SUPERFICIE.centimetre2 ? input.valeur : Number(convertireMetre2EnCentimetre2(valeurEnMetre2).toFixed(8)),
    squareInch:  input.unite == SUPERFICIE.squareInch  ? input.valeur : Number(convertireMetre2EnSquareInch(valeurEnMetre2).toFixed(8)),
    squareFeet:  input.unite == SUPERFICIE.squareFeet  ? input.valeur : Number(convertireMetre2EnSquareFeet(valeurEnMetre2).toFixed(8)),
    metre2:      input.unite == SUPERFICIE.metre2      ? input.valeur : Number(valeurEnMetre2.toFixed(8)),
    are:         input.unite == SUPERFICIE.are         ? input.valeur : Number(convertirMetre2EnAre(valeurEnMetre2).toFixed(8)),
    hectar:      input.unite == SUPERFICIE.hectar      ? input.valeur : Number(convertirMetre2EnHectar(valeurEnMetre2).toFixed(8)),
    kilometre2:  input.unite == SUPERFICIE.kilometre2  ? input.valeur : Number(convertireMetre2EnKilometre2(valeurEnMetre2).toFixed(8)),
    squareMile:  input.unite == SUPERFICIE.squareMile  ? input.valeur : Number(convertireMetre2EnSquareMile(valeurEnMetre2).toFixed(10)),
  }
}

//console.table(getSurfaceValuesByInput({ valeur: 100, unite: SUPERFICIE.centimetre2 }));
//console.table(getSurfaceValuesByInput({ valeur: 100, unite: SUPERFICIE.squareInch }));
//console.table(getSurfaceValuesByInput({ valeur: 100, unite: SUPERFICIE.squareFeet }));
//console.table(getSurfaceValuesByInput({ valeur: 100, unite: SUPERFICIE.metre2 }));
//console.table(getSurfaceValuesByInput({ valeur: 100, unite: SUPERFICIE.are }));
//console.table(getSurfaceValuesByInput({ valeur: 100, unite: SUPERFICIE.hectar }));
//console.table(getSurfaceValuesByInput({ valeur: 100, unite: SUPERFICIE.kilometre2 }));
//console.table(getSurfaceValuesByInput({ valeur: 100, unite: SUPERFICIE.squareMile }));

const onSuperficieInput = (value, id) => {
  const data = getSurfaceValuesByInput({ valeur: Number(value), unite: id });

  document.getElementById(SUPERFICIE.centimetre2).value = data.centimetre2;
  document.getElementById(SUPERFICIE.squareInch).value = data.squareInch;
  document.getElementById(SUPERFICIE.squareFeet).value = data.squareFeet;
  document.getElementById(SUPERFICIE.metre2).value = data.metre2;
  document.getElementById(SUPERFICIE.are).value = data.are;
  document.getElementById(SUPERFICIE.hectar).value = data.hectar;
  document.getElementById(SUPERFICIE.kilometre2).value = data.kilometre2;
  document.getElementById(SUPERFICIE.squareMile).value = data.squareMile;
}
window.onSuperficieInput = onSuperficieInput;

/* ================================== VOLUME ==================================

  1 cm3 = 0,000 001 m3
  1l = 0,001 m3
  1 gal US = 0,003 785 41 m3
*/

const metre3 = 1;

const centimetre3 = 0.000001 * metre3;
const convertirCentimetre3EnMetre3 = (valeur) => { return valeur * centimetre3; }
const convertireMetre3EnCentimetre3 = (valeur) => { return valeur / centimetre3; }

const litre = 0.001 * metre3;
const convertirLitreEnMetre3 = (valeur) => { return valeur * litre; }
const convertirMetre3EnLitre = (valeur) => { return valeur / litre; }

const gallonUs = 0.00378541 * metre3;
const convertirGallonUsEnMetre3 = (valeur) => { return valeur * gallonUs; }
const convertirMetre3EnGallonUs = (valeur) => { return valeur / gallonUs; }

const VOLUME = {
  centimetre3: 'centimetre3',
  metre3: 'metre3',
  litre: 'litre',
  gallonUs: 'gallonUs',
}

const getVolumeValuesByInput = (input) => {
  let valeurEnMetre3 = 0;

  switch (input.unite) {
    case VOLUME.centimetre3:
      valeurEnMetre3 = convertirCentimetre3EnMetre3(input.valeur);
      break;
    case VOLUME.metre3:
      valeurEnMetre3 = input.valeur;
      break;
    case VOLUME.litre:
      valeurEnMetre3 = convertirLitreEnMetre3(input.valeur);
      break;
    case VOLUME.gallonUs:
      valeurEnMetre3 = convertirGallonUsEnMetre3(input.valeur);
      break;
  }

  return {
    centimetre3: input.unite == VOLUME.centimetre3 ? input.valeur : Number(convertireMetre3EnCentimetre3(valeurEnMetre3).toFixed(8)),
    metre3:      input.unite == VOLUME.metre3      ? input.valeur : Number(valeurEnMetre3.toFixed(8)),
    litre:       input.unite == VOLUME.litre       ? input.valeur : Number(convertirMetre3EnLitre(valeurEnMetre3).toFixed(8)),
    gallonUs:    input.unite == VOLUME.gallonUs    ? input.valeur : Number(convertirMetre3EnGallonUs(valeurEnMetre3).toFixed(8)),
  }
}

//console.table(getVolumeValuesByInput({ valeur: 10, unite: VOLUME.centimetre3 }));
//console.table(getVolumeValuesByInput({ valeur: 0.2, unite: VOLUME.metre3 }));
//console.table(getVolumeValuesByInput({ valeur: 1.5, unite: VOLUME.litre }));
//console.table(getVolumeValuesByInput({ valeur: 1, unite: VOLUME.gallonUs }));

const onVolumeInput = (value, id) => {
  const data = getVolumeValuesByInput({ valeur: Number(value), unite: id });

  document.getElementById(VOLUME.centimetre3).value = data.centimetre3;
  document.getElementById(VOLUME.metre3).value = data.metre3;
  document.getElementById(VOLUME.litre).value = data.litre;
  document.getElementById(VOLUME.gallonUs).value = data.gallonUs;
}
window.onVolumeInput = onVolumeInput;

/* ========================================================================= */
/* =============================== EXECUTION =============================== */
/* ========================================================================= */

const onMesureHeaderClick = (id, childNumber) => {
  const div = document.getElementById(id);
  const caret = document.getElementById(`${id}-caret`);

  if (div.classList.contains('closed')) {
    div.classList.remove('closed');
    caret.style.transform = 'rotate(180deg)';

    /*
      Top bloc = 4rem
      padding top : 1rem

      label: 18px
      margin label : .25 rem
      input : 
        border : 2px
        padding top .5rem
        text area : 23px
        padding bottom : .5rem
        border : 2px
      
      gap : 1.5rem

      padding bottom : 1rem
    */

    div.style.height = `calc(4rem + 2rem + (${childNumber} * (18px + .25rem + 4px + 1rem + 23px)) + (${childNumber - 1} * 1.5rem))`;

    /* setTimeout(() => {
      div.children[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 300); */

    
  } else {
    div.classList.add('closed');
    caret.style.transform = 'rotate(0deg)';
    div.style.height = '4rem';
  }
}
window.onMesureHeaderClick = onMesureHeaderClick;

document.getElementById('main').innerHTML = `
  <h1><img src="medias/app-maskable-icons/app_icon_144.png" />Convertisseur</h1>
  <div id="longueurs" class="mesure-box closed longueurs">
    <div class="mesure-title" onclick="onMesureHeaderClick('longueurs', 7)">
      <img class="mesure-icon" src="medias/images/icons/ruler-horizontal-solid.svg" />
      <span>Longueur</span>
      <img id="longueurs-caret" class="caret" src="medias/images/icons/caret-down.svg" />
    </div>
    <div class="mesure-content">

      <div class="input-box">
        <label for="centimetre">centimètres</label>
        <div class="input-line">
          <input id="centimetre" oninput="onLongueurInput(event.target.value, 'centimetre')" type="number" />
          <span>cm</span>
        </div>
      </div>

      <div class="input-box">
        <label for="metre">mètres</label>
        <div class="input-line">
          <input id="metre" oninput="onLongueurInput(event.target.value, 'metre')" type="number" />
          <span>m</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="kilometre">kilomètres</label>
        <div class="input-line">
          <input id="kilometre" oninput="onLongueurInput(event.target.value, 'kilometre')" type="number" />
          <span>km</span>
        </div>
      </div>

      <div class="input-box">
        <label for="inch">inches</label>
        <div class="input-line">
          <input id="inch" oninput="onLongueurInput(event.target.value, 'inch')" type="number" />
          <span>in</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="feet">foot</label>
        <div class="input-line">
          <input id="feet" oninput="onLongueurInput(event.target.value, 'feet')" type="number" />
          <span>ft</span>
        </div>
      </div>

      <div class="input-box">
        <label for="mile">miles</label>
        <div class="input-line">
          <input id="mile" oninput="onLongueurInput(event.target.value, 'mile')" type="number" />
          <span>mi</span>
        </div>
      </div>

      <div class="input-box">
        <label for="nautique">nautiques (milles marins)</label>
        <div class="input-line">
          <input id="nautique" oninput="onLongueurInput(event.target.value, 'nautique')" type="number" />
          <span>M</span>
        </div>
      </div>
      
    </div>
  </div>

  <div id="masses" class="mesure-box closed masses">
    <div class="mesure-title" onclick="onMesureHeaderClick('masses', 5)">
      <img class="mesure-icon" src="medias/images/icons/weight-hanging-solid.svg" />
      <span>Masse</span>
      <img id="masses-caret" class="caret" src="medias/images/icons/caret-down.svg" />
    </div>

    <div class="mesure-content">

      <div class="input-box">
        <label for="gramme">grammes</label>
        <div class="input-line">
          <input id="gramme" oninput="onMasseInput(event.target.value, 'gramme')" type="number" />
          <span>g</span>
        </div>
      </div>

      <div class="input-box">
        <label for="kilogramme">kilogrammes</label>
        <div class="input-line">
          <input id="kilogramme" oninput="onMasseInput(event.target.value, 'kilogramme')" type="number" />
          <span>kg</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="tonne">tonnes</label>
        <div class="input-line">
          <input id="tonne" oninput="onMasseInput(event.target.value, 'tonne')" type="number" />
          <span>t</span>
        </div>
      </div>

      <div class="input-box">
        <label for="ounce">ounces</label>
        <div class="input-line">
          <input id="ounce" oninput="onMasseInput(event.target.value, 'ounce')" type="number" />
          <span>oz</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="pound">pounds</label>
        <div class="input-line">
          <input id="pound" oninput="onMasseInput(event.target.value, 'pound')" type="number" />
          <span>lb</span>
        </div>
      </div>
      
    </div>
  </div>

  <div id="vitesses" class="mesure-box closed vitesses">
    <div class="mesure-title" onclick="onMesureHeaderClick('vitesses', 5)">
      <img class="mesure-icon" src="medias/images/icons/gauge-high-solid.svg" />
      <span>Vitesse</span>
      <img id="vitesses-caret" class="caret" src="medias/images/icons/caret-down.svg" />
    </div>

    <div class="mesure-content">

      <div class="input-box">
        <label for="metreParSeconde">mètres par seconde</label>
        <div class="input-line">
          <input id="metreParSeconde" oninput="onVitesseInput(event.target.value, 'metreParSeconde')" type="number" />
          <span>m/s</span>
        </div>
      </div>

      <div class="input-box">
        <label for="kilometreParHeure">kilomètres par heure</label>
        <div class="input-line">
          <input id="kilometreParHeure" oninput="onVitesseInput(event.target.value, 'kilometreParHeure')" type="number" />
          <span>km/h</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="mileParHeure">miles par heure</label>
        <div class="input-line">
          <input id="mileParHeure" oninput="onVitesseInput(event.target.value, 'mileParHeure')" type="number" />
          <span>mph</span>
        </div>
      </div>

      <div class="input-box">
        <label for="noeud">noeuds</label>
        <div class="input-line">
          <input id="noeud" oninput="onVitesseInput(event.target.value, 'noeud')" type="number" />
          <span>kn</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="celerite">vitesse de la lumière</label>
        <div class="input-line">
          <input id="celerite" oninput="onVitesseInput(event.target.value, 'celerite')" type="number" />
          <span>c</span>
        </div>
      </div>
      
    </div>
  </div>

  <div id="temperatures" class="mesure-box closed temperatures">
    <div class="mesure-title" onclick="onMesureHeaderClick('temperatures', 3)">
      <img class="mesure-icon" src="medias/images/icons/temperature-half-solid.svg" />
      <span>Température</span>
      <img id="temperatures-caret" class="caret" src="medias/images/icons/caret-down.svg" />
    </div>

    <div class="mesure-content">

      <div class="input-box">
        <label for="kelvin">kelvins</label>
        <div class="input-line">
          <input id="kelvin" oninput="onTemperatureInput(event.target.value, 'kelvin')" type="number" />
          <span>K</span>
        </div>
      </div>

      <div class="input-box">
        <label for="celcius">degrés celcius</label>
        <div class="input-line">
          <input id="celcius" oninput="onTemperatureInput(event.target.value, 'celcius')" type="number" />
          <span>°C</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="fahrenheit">degrés fahrenheit</label>
        <div class="input-line">
          <input id="fahrenheit" oninput="onTemperatureInput(event.target.value, 'fahrenheit')" type="number" />
          <span>°F</span>
        </div>
      </div>
      
    </div>
  </div>

  <div id="superficies" class="mesure-box closed superficies">
    <div class="mesure-title" onclick="onMesureHeaderClick('superficies', 8)">
      <img class="mesure-icon" src="medias/images/icons/square-regular.svg" />
      <span>Superficie</span>
      <img id="superficies-caret" class="caret" src="medias/images/icons/caret-down.svg" />
    </div>
    <div class="mesure-content">

      <div class="input-box">
        <label for="centimetre2">centimètres carrés</label>
        <div class="input-line">
          <input id="centimetre2" oninput="onSuperficieInput(event.target.value, 'centimetre2')" type="number" />
          <span>cm²</span>
        </div>
      </div>

      <div class="input-box">
        <label for="squareInch">square inches</label>
        <div class="input-line">
          <input id="squareInch" oninput="onSuperficieInput(event.target.value, 'squareInch')" type="number" />
          <span>sq in</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="squareFeet">square foot</label>
        <div class="input-line">
          <input id="squareFeet" oninput="onSuperficieInput(event.target.value, 'squareFeet')" type="number" />
          <span>sq ft</span>
        </div>
      </div>

      <div class="input-box">
        <label for="metre2">mètres carrés</label>
        <div class="input-line">
          <input id="metre2" oninput="onSuperficieInput(event.target.value, 'metre2')" type="number" />
          <span>m²</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="are">are</label>
        <div class="input-line">
          <input id="are" oninput="onSuperficieInput(event.target.value, 'are')" type="number" />
          <span>a</span>
        </div>
      </div>

      <div class="input-box">
        <label for="hectar">hectars</label>
        <div class="input-line">
          <input id="hectar" oninput="onSuperficieInput(event.target.value, 'hectar')" type="number" />
          <span>ha</span>
        </div>
      </div>

      <div class="input-box">
        <label for="kilometre2">kilomètres carrés</label>
        <div class="input-line">
          <input id="kilometre2" oninput="onSuperficieInput(event.target.value, 'kilometre2')" type="number" />
          <span>km²</span>
        </div>
      </div>

      <div class="input-box">
        <label for="squareMile">square miles</label>
        <div class="input-line">
          <input id="squareMile" oninput="onSuperficieInput(event.target.value, 'squareMile')" type="number" />
          <span>sq mi</span>
        </div>
      </div>
      
    </div>
  </div>

  <div id="volumes" class="mesure-box closed volumes">
    <div class="mesure-title" onclick="onMesureHeaderClick('volumes', 4)">
      <img class="mesure-icon" src="medias/images/icons/cube-solid.svg" />
      <span>Volume</span>
      <img id="volumes-caret" class="caret" src="medias/images/icons/caret-down.svg" />
    </div>

    <div class="mesure-content">

      <div class="input-box">
        <label for="centimetre3">centimètres cubes</label>
        <div class="input-line">
          <input id="centimetre3" oninput="onVolumeInput(event.target.value, 'centimetre3')" type="number" />
          <span>cm³</span>
        </div>
      </div>

      <div class="input-box">
        <label for="metre3">mètres cubes</label>
        <div class="input-line">
          <input id="metre3" oninput="onVolumeInput(event.target.value, 'metre3')" type="number" />
          <span>m³</span>
        </div>
      </div>
      
      <div class="input-box">
        <label for="litre">litres</label>
        <div class="input-line">
          <input id="litre" oninput="onVolumeInput(event.target.value, 'litre')" type="number" />
          <span>l</span>
        </div>
      </div>

      <div class="input-box">
        <label for="gallonUs">gallons Us</label>
        <div class="input-line">
          <input id="gallonUs" oninput="onVolumeInput(event.target.value, 'gallonUs')" type="number" />
          <span>gal US</span>
        </div>
      </div>
      
    </div>
  </div>
`;

onLongueurInput(1, 'metre');
onMasseInput(1, 'kilogramme');
onVitesseInput(1, 'metreParSeconde');
onTemperatureInput(1, 'kelvin');
onSuperficieInput(1, 'metre2');
onVolumeInput(1, 'metre3');