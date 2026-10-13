# Page Actualités — GUC Gymnastique & Danse

## À ajouter au dépôt GitHub

- `news.html` à la racine, au même niveau que `index.html`
- `assets/css/news.css`
- `assets/js/news-data.js`
- `assets/js/news.js`
- remplacer votre `sitemap.xml` par celui fourni

## Ajouter une actualité

Ne modifiez pas `news.html`.
Ouvrez seulement `assets/js/news-data.js` puis copiez un bloc d'exemple.

Exemple :

```js
{
  date: "2026-11-14",
  endDate: "2026-11-15",
  type: "Stage",
  title: "Stage de gymnastique rythmique",
  summary: "Description courte du stage.",
  image: "assets/images/stage-gr.jpg",
  link: "inscription.html",
  linkLabel: "En savoir plus",
  featured: true,
  status: "Inscriptions ouvertes"
},
```

La page classe automatiquement les dates futures dans « À venir » et les dates passées dans « Archives ».

## Image

Mettez l'image dans `assets/images/`, puis utilisez son chemin dans `image`.
Si vous laissez `image: ""`, un visuel GUC neutre est affiché automatiquement.

## Menu

Ajoutez cette ligne dans le menu des autres pages :

```html
<a href="news.html">Actualités</a>
```

Idéalement juste avant `FAQ`.
