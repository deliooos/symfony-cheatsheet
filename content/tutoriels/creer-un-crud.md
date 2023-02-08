---
title: 'Créer un CRUD - SF Cheatsheet'
description: "Créer automatiquement un CRUD (create, read, update, delete) avec Symfony à partir d'une entité"
displayName: 'Créer une CRUD'
tags: ["crud", "create", "delete", "read", "update", "console", "formulaire"]
---

# symfony console make:crud
#### **Documentation de cet article**
- [Maker Bundle (en)](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)
- [make:crud](/codex/console/make-crud)

Créer automatiquement un CRUD (create, read, update, delete) avec Symfony à partir d'une entité.

::tip{type='alert-error'}
Ce tutoriel est une extension à l'entrée du [Codex](/codex) sur la commande [make:crud](/codex/console/make-crud). Si vous n'avez pas jeté un coup d'œil à celui-ci, je vous invite à le faire
::

## Créer le CRUD

_**Référez-vous à cet article : [symfony console make:crud](/codex/console/make-crud)**_

## Comprendre ce qui a été créé
Comme vous pouvez vous en douter, un CRUD est un sacré morceaux d'une application. Symfony créé beaucoup de fichiers assez denses en contenu alors c'est parti. Listons d'abord les fichiers créés puis expliquons-les un par un.
- Un controller
- Une classe de formulaire Symfony
- 6 templates :
    - une page d'accueil, avec la liste de tous les éléments de votre table
    - une page de création (new)
    - une page d'édition (edit)
    - une page de visualisation (read)
    - un formulaire pour l'ajout et la suppression
    - un formulaire de suppression (remove)

## Le controller
Symfony à tout d'abord créé un Controller, avec dedans la logique de toutes les parties du CRUD.
Avant de s'aventurer dans les méthodes, remarquons que notre classe possède une annotation `#[Route(/votre-route)]` (pour moi c'est `/boutique`)

```php
#[Route('/boutique')]
class ShopController extends AbstractController
```

Cette annotation, nous la connaissons déjà, car on l'utilise pour créer nos routes, mais d'habitude, elle se trouve au dessus de nos méthodes et non de notre classe. C'est assez simple, ça veut dire que toutes les routes à l'intérieur de cette classe commenceront par, dans mon cas pour l'exemple, `shop`. (Ex.: si vous avez une méthode avec l'annotation suivante dans votre classe `#[Route('/nouveau-produit')]`, la route ne sera pas `127.0.0.1:8000/nouveau-produit` mais bien `127.0.0.1:8000/boutique/nouveau-produit`)

Nous avons ensuite dans le Controller **5** méthodes. 
- Une méthode `index` (à la route `/` donc pour rappel `127.0.0.1:8000/votre-route` et non `127.0.0.1:8000`). Cette méthode affiche par défaut toutes les entrées de votre table, vous propose d'éditer ou de supprimer chaque entrée individuelle et d'ajouter une nouvelle entrée.
- Une méthode `new`. Cette méthode affiche un formulaire d'ajout d'article.
- Une méthode `/{id}`. Cette méthode détecte un `id` sur la route `127.0.0.1:8000/votre-route/{id}` et si une entrée de votre table correspond, affiche l'entrée en question.
- Une méthode `/{id}/edit`. Cette méthode détecte un `id` sur la route `127.0.0.1:8000/votre-route/{id}/edit` et si une entrée de votre table correspond, affiche un formulaire d'édition de l'entrée en question
- Une méthode `/{id}`. Vous pourriez vous dire que c'est la même que celle permettant d'afficher un article mais celle-ci n'accepte comme requête HTTP que `POST`, là ou l'affiche accepte `GET`. Cette route va servir à supprimer l'entrée de la base de donnée détecté par `{id}`

## Les templates
Comme nous avons parlé des méthodes, qui rendent des templates, parlons de ces templates. Chacune des méthodes expliqués au-dessus affiche sa template. Je ne vais pas détailler chaque template car elles font précisement ce que les Controllers décrivent. Il y a seulement quelques trucs à savoir. Symfony a généré une template `_form.html.twig`. Cette template commence par un `_` ! C'est une convention pour dire que c'est un "partial", une partie de template utilisé à plusieurs endroits. On utilise un partial, parce que le formulaire va servir pour la création **et** l'édition de vos données. Si vous voulez modifier ce formulaire, rendez-vous donc ici. Egalement, on retrouve un `_delete_form.html.twig`. Vous l'avez, c'est, lui aussi, un partial, qui va cette fois servir à supprimer la donnée renseignée. Il va faire ceci en pointant vers la route `app_votre-controller_delete` avec l'`id` de la donnée actuelle.

## La classe de formulaire
Enfin Symfony a créé un [formulaire Symfony](/tutoriels/les-formulaires-symfony) représentant l'entité choisie pour le CRUD. Rien de spécial à ce niveau-là, si ce n'est que c'est ce formulaire qui va servir dans les template de création et d'édition de votre entité. Je vous conseille de modifier ce formulaire pour rajouter les types de champs, éventuellement des contraintes, du style, des attributs, etc... Si vous voulez en savoir plus, rendez-vous sur mon [tutoriel sur les formulaires Symfony](/tutoriels/les-formulaires-symfony).