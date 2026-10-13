/*
ACTUALITÉS DU CLUB — FICHIER À MODIFIER

Pour ajouter une actualité :
1. Copiez un bloc { ... },
2. Collez-le dans NEWS,
3. Modifiez les valeurs,
4. Committez le fichier sur GitHub.

- date : AAAA-MM-JJ
- endDate : facultatif
- type : Stage, Événement, Compétition, Vie du club...
- image : chemin local ou URL ; "" si aucune image
- link : lien facultatif ; "" si aucun
- featured : true = mise en avant en grand
- status : texte court facultatif
*/
const NEWS = [

  {
    date: "2026-10-21",
    endDate: "2026-10-23",
    type: "Stage",
    title: "Stage de gymnastique rythmique",
    summary: "Deux journées pour progresser en technique corporelle, manipulation d’engins et chorégraphie. ATTENTION, inscription obligatoire - Date limite 18 octobre par sms ou guc.gym.danse@gmail.com",
    image: "/assets/images/Stage/StageOctobre_26.jpg",
    link: "inscription.html",
    linkLabel: "En savoir plus",
    featured: true,
    status: "Inscriptions ouvertes"
  }

];
