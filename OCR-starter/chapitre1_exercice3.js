// Prédiction de résultat
/*
Affichez dans la console le résutat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne  :
- 4 et 5 sont toutes deux de type nombres :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/

let nummer1 =4;
let nummer2 =5;
let resultatnombres= nummer1+nummer2;
console.log("resultat nombres"+resultatnombres); //9

let chaine1=4;
let chaine2=5;
let resultatchaines= chaine1+chaine2;
console.log("resultat chaines"+ resultatchaines); //45

let chaine=4;
let nummer=5;
let resultatchainenombre= chaine+nummer;
console.log("resultat chaine et nombre"+resultatchainenombre); //45?

let guillemets= "4"+"5";
console.log("resultat guillemets"+ guillemets); //45, car "4" et "5" sont traitées comme des chaines de caractères et plus comme des nombres

