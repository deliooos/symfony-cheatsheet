---
title: 'Créer et utiliser un Controller - SF Cheatsheet'
description: "Créer un Controller automatiquement grâce au Maker Bundle de Symfony et l'utiliser"
displayName: 'Créer et utiliser un Controller'
tags: ["controller", "mvc", "make"]
---

# Créer et utiliser un Controller Symfony

#### **Documentation de cet article**
- [make:controller](/codex/console/make-controller)

Créer facilement un **Controller** grâce au [maker bundle](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html) de Symfony et l'utiliser

## Qu'est-ce qu'un **Controller** dans Symfony ?

Un **Controller**, en règle générale, est un élément clé de [l'architecture MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur), c'est le cerveau de votre architecture, c'est lui qui va gérer la relation entre vos modèles, AKA, la base de donnée et vos vues AKA les templates, en implémentant éventuellement de la logique métier notamment à travers le [Service Container](https://symfony.com/doc/current/service_container.html). Symfony ne déroge pas à ces conventions si ce n'est qu'il vous offre un moyen simple de générer un **Controller** avec une méthode de base et sa vue !

## Créer un controller avec Symfony

Pour créer un **Controller** Symfony, vous allez devoir utiliser la commande suivante :

```shell
symfony console make:controller
```

Il va vous poser une seule question : _comment souhaitez-vous nommer votre Controller ?_

Répondez tout simplement avec le nom que vous souhaitez donner à votre **Controller**, veillez à renseigner un nom parlant pour ne pas vous perdre par la suite, et en _PascalCase_ (majuscule en début de chaque mot).

::tip{type='alert-warning'}
Il y a une petite particularité à prendre en compte : vous remarquerez si vous parlez Anglais que Symfony vous donner un exemple finissant par "Controller", c'est une convention d'avoir comme suffixe à ses noms de **Controller** ... _Controller_ ! Si vous ne précisez pas ce suffixe, Symfony l'ajoutera automatiquement pour vous, je vous conseille donc de laisser faire Symfony en ne rajoutant pas ce suffixe pour éviter les erreurs de syntaxe.
::

## Utiliser mon Controller

Lorsque vous aurez créé votre **Controller**, dans mon cas je l'ai nommé `Home`, Symfony vous diras que c'est bon, il a créé le **Controller** dans `src/Controller/HomeController.php` et il créé même une "template", automatiquement liée à ce **Controller** dans `templates/home/index.html.twig`, il le créé dans un fichier `home` car c'est le nom que j'ai choisi pour mon **Controller**.

```shell
 created: src/Controller/HomeController.php
 created: templates/home/index.html.twig
```

De base votre **Controller** devrait ressembler à quelque chose comme ça :

```php[HomeController.php]
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
```

Voyons ensembles à quoi correspondent ces lignes.

- `namespace` spécifie le namespace dans lequel se trouve votre **Controller**, basique pour un framework orienté objet
- la série de `use` ajoute les bases nécessaires au fonctionnement primitif du **Controller**
- on déclare ensuite la `class`, avec son nom, pour moi _Home_, suffixée de _Controller_ et on précise qu'elle étend de l'`AsbstractController`, ce qui va nous donner plus tard accès à certaines méthodes souvent utilisés au sein d'un **Controller** Symfony

On passe ensuite au cœur du **Controller**, passons l'annotation, balisée par `#[...]`, et expliquons la méthode `index`, fraîchement créé pour nous. Elle se nomme `index`, c'est assez logique car c'est "l'index" de notre classe `HomeController`, la méthode de base. Vous pouvez la renommer comme vous le souhaitez mais `index` convient bien en général. Si vous étiez amené à créé une méthode dans votre **Controller** pour créer un article, vous auriez pu nommer votre méthode `new` ou `create`.
Bien, on voit ensuite que cette méthode retourne une `Response`, c'est un élément clé d'un **Controller** Symfony, ça indique que Symfony retourne ... une réponse HTTP !

Maintenant voyons ce que la méthode retourne. On appelle la méthode `render`. Cette méthode nous est fournie par l'`AbstractController` ! Je vous l'avais dit, c'est pratique. `render`, va rendre une vue ou template **Twig**, elle prend en premier paramètre le chemin de la vue à partir de votre dossier `templates` et en second paramètre un tableau. Ce tableau va vous servir à injecter des variables dans votre vue. Encore une fois c'est un concept clé de Symfony, vous pouvez passer d'autres choses ! De base il passe une chaîne de caractère disant `'HomeController'` mais vous pourriez passer par exemple une variable php contenant une simple chaîne de caractère, un tableau ou même une classe !

Enfin, voyons l'annotation que l'on a laissé de côté jusqu'ici. C'est elle qui va définir la route de votre méthode, et donc de votre vue. Vous pouvez retrouver un tutoriel plus détaillé sur le routing [ici](/tutoriels/routing), mais voici un petit aperçu. Entre la parenthèse de l'annotation `Route`, on retrouve généré par Symfony 2 paramètres :
- En premier, vous allez spécifier le chemin : par exemple si vous renseignez `'/'`, la route pointera sur `localhost:8000`. Si vous renseignez `'/home'`, la route pointera sur `localhost:8000/home`, aussi simple que ça !
- un nom : `name: 'nom'`. Par convention, ce nom commence toujours par `app`, un underscore et le nom que vous voulez donner (ex.:`app_creer_utilisateur`). Ce nom vous servira pour renseigner la route à différent endroit sans préciser le chemin absolu, susceptible de changer, contrairement au nom !