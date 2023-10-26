# Sujet 01 - Titanic

Réalisez une application _Node.js + Express_ permettant de faire des statistiques sur un Dataset spécifique : **Les passagers du Titanic**.

Le dataset en question est disponible à l'adresse suivante : https://raw.githubusercontent.com/hkacmaz/Titanic-Passenger-Survivors/master/train.csv

<p align="center">
  <img src="./images/titanic.png"/>
</p>

La signification des colonnes est la suivante :

- **PassengerId** : Identifiant du passager
- **Survived** : Survivant (0 = Non, 1 = Oui)
- **Pclass** : Classe du billet (1 = 1ère, 2 = 2ème, 3 = 3ème)
- **Name** : Nom du passager
- **Sex** : Sexe du passager
- **Age** : Age du passager
- **SibSp** : Nombre de frères et soeurs / époux / épouse à bord du Titanic
- **Parch** : Nombre de parents / enfants à bord du Titanic
- **Ticket** : Numéro du ticket
- **Fare** : Prix du ticket
- **Cabin** : Numéro de la cabine
- **Embarked** : Port d'embarquement (C = Cherbourg, Q = Queenstown, S = Southampton)

L'objectif de l'application et d'afficher les survivants du Titanic en fonction de leur sexe, leur age et la classe de leurs billets.

Vous apporterez un soin particulier au rendu des statistiques.

## Contraintes techniques

- Votre code sera versionné à l'aide de Git sur Github ou Gitlab.

- Utiliser Node.js et Express pour construire le back-end. Votre back-end sera déclaré en mode API

- Pour la partie front, faites le choix d'utiliser et un moteur de rendu comme pug ou twing. React peut-être également utiliser pour la partie "front".

- Vous devez également créer une persistance pour les données avec MySQL ou MongoDB avec Mongoose pour Node.js et l'intégrer à l'API ou à l'application.

- Il faudra également mettre en place une page de login pour consulter/lancer la création des statistiques.

- Vous devez faire la partie interface utilisateur à partir du chapitre qui suit ci-dessous.

- L'utilisation d'une librairie JavaScript comme Chart.js pour la réalisation des graphiques.

## Analyse des données & pages à réalisées

*Vous pouvez utiliser MongoDB, pour analyser les données. Suivez dans ce cas les étapes ci-dessous.*

1. Importez les données au format CSV à l'adresse suivante : https://raw.githubusercontent.com/hkacmaz/Titanic-Passenger-Survivors/master/train.csv

Puis tapez la ligne de commande suivante, notez l'option **headerline** qui indique les clés des valeurs du Dataset.

```bash
mongoimport --db titanic --collection passengers --type=csv --headerline --file train.csv --drop
```

2. Créez la page de login, page principale de l'application. Une fois connecté on sera redirigé vers la page pour lancer les analyses statistiques.

3. Créez la page de recherche à proprement parlée, elle comportera un menu principale permettant de se connecter et déconnecter.

```text
Sex : [] Age : [] Classe []
[Analyser]
```

Une fois la recherche effectuée vous redirigerez l'utilisateur vers une page proposant un graphique de votre choix pour expliciter chacun des résultats. Un bouton Reset permettra d'effacer la recherche et de revenir à la page précédente.

```text

Graphique

[Reset]

```

4. Améliorez maintenant l'analyse des données

Introduisez les éléments suivants dans la rechercher

- La moyenne

- L'écart type

5. Proposez une autre recherche sur l'analyse de ses données.