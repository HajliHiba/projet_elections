const prompt = require('prompt-sync')();

let candidats = []

console.log(`
========================================
 GESTION DES ÉLECTIONS - MENU PRINCIPAL
========================================
1. Ajouter un nouveau candidat
2. Ajouter plusieurs candidats à la fois
3. Afficher la liste des candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher un candidat par nom
8. Afficher les statistiques de l'élection
9. Quitter
========================================`);




let choix;
do {

    choix = prompt('Votre choix : ');

        switch (choix) {
            case '1':
                ajouterCandidat();
                break;
            case '2':
                ajouterPlusieursCandidats();
                break;
            case '3':
                afficherListeCandidats();
                break;
            case '4':
                voterPourCandidat();
                break;
            case '5':
                modifierCandidat();
                break;
            case '6':
                supprimerCandidat();
                break;
            case '7':
                rechercherCandidat();
                break;
            case '8':
                afficherStatistiques();
                break;
            case '9':
                console.log('Au revoir !');
                break;
            default:
                console.log('Choix invalide, réessayez.');
        }

       

} while (choix !== '9');


function ajouterCandidat() {
    console.log("ajouter un candidat: ");
    let cin = prompt("ajouter le cin: ");
    let nom = prompt("ajouter le nom: ");
    let prenom = prompt("ajouter le prenom: ");
    let partiPolitique = prompt("ajouter la parti politique ou Indépendant: ");
    let age = Number(prompt("ajouter l'age: "));

    
   // function verifierCin() {
   //     for (let i = 0 ; i < candidats.length ; i++){
   //         if (candidats[i].cin === cin){
   //             console.log("cin existe déjà. ");
   //             return;
   //         }
   //     }
   // }

    let candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    };

    candidats.push(candidat);
    console.log("Candidat ajouté avec succès !");
}

function ajouterPlusieursCandidats() {
    console.log("Ajouter plusieurs candidats");
    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "));

    for (let i = 0; i < nombre; i++) {
        console.log(`Candidat ${i + 1}`);
        ajouterCandidat();
       }

    }


function afficherListeCandidats() {
    console.log("afficher les candidats");
    if (candidats.length==0){
        console.log("aucun candidat");
    }

}