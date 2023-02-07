---
title: "Récupérer l'utilisateur actuel - SF Cheatsheet"
description: "Récupérer et utiliser l'utilisateur actuel dans Symfony depuis un controller"
displayName: "Récupérer et utiliser l'utilisateur actuel"
tags: ["authentification", "auth", "security", "user", "utilisateur", "auteur", "createur"]
---

# Récupérer et utiliser l'utilisateur actuel
#### **Documentation de cet article**
- [Sécurité Symfony (en)](https://symfony.com/doc/current/security.html)
- [AbstractController (en)](https://symfony.com/doc/current/best_practices.html#make-your-controller-extend-the-abstractcontroller-base-controller)

Récupérer et utiliser l'utilisateur actuellement connecté dans votre application Symfony

## Prérequis
Pour récupérer l'utilisateur actuel, vous aurez besoin d'un système d'utilisateur en place, évidemment. Si ce n'est pas déjà fait, vous pouvez vous rendre [ici](/tutoriels/creer-un-systeme-utilisateur) pour savoir comment ajouter un système d'utilisateur à votre application Symfony.

## Pourquoi récupérer l'utilisateur courant ?
Vous pouvez avoir besoin de l'utilisateur courant pour plusieurs raisons, mais une principalement : renseigner un auteur, un créateur, possesseur d'une entité. Si votre site, par exemple, propose de créer des articles, il serait bon de pouvoir l'attitrer à celui qui l'a créée. Vous pourriez simplement mettre un champ de type texte et l'utilisateur renseignerait son pseudo, mais dans ce cas s'il change de pseudo, l'article ne se mettra pas à jour automatiquement, ce qui risque d'induire en erreur ou pire, si cliquer sur son pseudo redirige vers son profil via son pseudo, mais qu'il change de pseudo, la redirection ne fonctionnera plus, vous avez l'idée.

## Comment récupérer l'utilisateur ?
Rien de plus simple, en fait ça se fait en 3 mots.
```php
$this->getUser();
```
Vous pourriez alors vous demander : _mais d'où sort cette méthode ? Quel this ?_. Et bien on doit encore une fois cette magie à l'`AbstractController`. Il va chercher pour vous l'utilisateur courant dans le bundle de sécurité de Symfony et vous le retourne sous forme d'objet représentant l'utilisateur actuellement connecté.

::tip{type="alert-warning"}
Cette méthode récupère l'utilisateur **connecté**. Assurez-vous donc qu'il y ait forcément un utilisateur connecté, sinon Symfony renverra une erreur. Si vous n'êtes pas sûr d'avoir un utilisateur connecté, mais que vous voulez quand même utiliser celui-ci au possible, vous pouvez ajouter une condition `if ($this->getUser) { ... }`. Il renverra `true` si un utilisateur est actuellement connecté. 
::

## Que faire de cet utilisateur ?
Reprenons le cas où vous voudriez spécifier l'auteur d'un article. Voici ce que l'on doit faire :

1. Ajouter un champ pour l'auteur de notre entité
2. Modifier notre base de donnée
3. Ajouter l'auteur avant de persister l'entité

C'est parti, commençons par ajouter notre champ, pour cela vous pouvez ajouter un champ à une entité existante avec la commande [`make:entity`](/codex/console/make-entity), puis en rentrant en nom une entité qui existe déjà. Alors, Symfony va vous proposer de rajouter des champs à cette entité existante.

```shell
/votre-projet-symfony$ symfony console make:entity

 Class name of the entity to create or update (e.g. OrangeChef):
 > Article

 Your entity already exists! So let's add some new fields!

 New property name (press <return> to stop adding fields):
```

On va ajouter le champ, vous pourriez être tenté de mettre `user`, car c'est un utilisateur que l'on veut mettre, mais Symfony ne veut pas car `user` est réservé. Je vous propose de mettre donc ce qui correspond le mieux à votre besoin, pour moi, ça sera `auteur`. Il va maintenant vous demander le type du champ, et c'est là qu'arrive le premier piège. On veut une relation avec un utilisateur, qui est donc une instance de l'entité `User`. On ne va donc pas dire à Symfony que l'on désire un champ `string`, mais bel et bien une relation.

```shell
 Field type (enter ? to see all types) [string]:
 > relation
```

Il vous demande directement à quelle entité relier le champ, facile, pour nous c'est `User`, généré par Symfony lors de la création du système d'utilisateurs.

Boum ! Il vous demande sort un gros pavé avec 4 relations `ManyToOne`, `OneToMany` (l'inverse), `ManyToMany` et `OneToOne`. Il vous donne même des phrases illustrants la relation pour vous aider. Ici, on veut qu'un Article ait un auteur mais qu'un Auteur puisse avoir plusieurs Articles. On se creuse donc la tête et grâce à l'aide précieuse de Symfony, on choisit `ManyToOne` : chaque Article à exactement un auteur et chaque Auteur à (ou peut avoir) plusieurs articles, parfait.

```shell
What class should this entity be related to?:
 > User

What type of relationship is this?
 ------------ -------------------------------------------------------------------- 
  Type         Description                                                         
 ------------ -------------------------------------------------------------------- 
  ManyToOne    Each Article relates to (has) one User.                             
               Each User can relate to (can have) many Article objects.            
                                                                                   
  OneToMany    Each Article can relate to (can have) many User objects.            
               Each User relates to (has) one Article.                             
                                                                                   
  ManyToMany   Each Article can relate to (can have) many User objects.            
               Each User can also relate to (can also have) many Article objects.  
                                                                                   
  OneToOne     Each Article relates to (has) exactly one User.                     
               Each User also relates to (has) exactly one Article.                
 ------------ -------------------------------------------------------------------- 

 Relation type? [ManyToOne, OneToMany, ManyToMany, OneToOne]:
 > ManyToOne
```

Il vous demande ensuite si le champs fraîchement créé peut être `null`, autrement dit si un Article doit forcément avoir Auteur, pour nous, c'est oui, mais ça peut dépendre de votre utilisation.

```shell
 Is the Article.auteur property allowed to be null (nullable)? (yes/no) [yes]:
 > no
```

Il vous demande ensuite si vous voulez ajouter une propriété `articles` à votre utilisateur pour accéder à tous les articles d'un auteur grâce à `$user->getArticles()`. C'est très pertinent et assez pratique, donc oui, mais encore une fois, vous choisissez. Si vous avez choisi oui, il vous demandera comment appeler la propriété dans `User`. De base, il propose le nom de votre classe au pluriel, ce qui fait l'affaire.

```shell
 Do you want to add a new property to User so that you can access/update Article objects from it - e.g. $user->getArticles()? (yes/no) [yes]:
 > 

 A new property will also be added to the User class so that you can access the related Article objects from it.

 New field name inside User [articles]:
 > 
```

Enfin, il vous sort encore une fois un petit pavé pour vous demander si vous voulez automatiquement supprimer, dans mon cas, tous les articles d'un utilisateur si l'utilisateur en question est supprimé de la base de donnée. Ca peut être utile, mais je vous conseille de mettre non dans la plupart des cas.

Nous en avons fini avec la première étape ! Après un gros effort, un peu de réconfort. On génère les migrations avec `symfony console make:migration` et on les valide avec `symfony console doctrine:migrations:migrate`.

Et on passe déjà à la troisième étape, ajouter l'auteur lors de la création d'un article, car ce n'est pas automatique.

Pour ma part, j'ai utilisé la commande `make:crud` pour générer un crud pour mes articles. Je vais donc me rendre dans la méthode qui sert à créer un article, et elle ressemble à ceci.

```php
 #[Route('/new', name: 'app_article_new', methods: ['GET', 'POST'])]
public function new(Request $request, ArticleRepository $articleRepository): Response
{
    $article = new Article();
    $form = $this->createForm(ArticleType::class, $article);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        // On "persist" (sauvegarde en base de donnée) l'article ici
        $articleRepository->save($article, true);

        return $this->redirectToRoute('app_article_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->renderForm('article/new.html.twig', [
        'article' => $article,
        'form' => $form,
    ]);
}
```

Comme je l'ai commenté on voit que la sauvegarde de l'article se fait ici. On va donc venir préciser l'auteur de l'article ici. Plus qu'à reprendre la commande du début pour récupérer l'utilisateur courant : `$this->getUser();`, et la placer.

```php
 #[Route('/new', name: 'app_article_new', methods: ['GET', 'POST'])]
public function new(Request $request, ArticleRepository $articleRepository): Response
{
    $article = new Article();
    $form = $this->createForm(ArticleType::class, $article);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        // On "persist" (sauvegarde en base de donnée) l'article ici
        $article->setAuteur($this->getUser());
        $articleRepository->save($article, true);

        return $this->redirectToRoute('app_article_index', [], Response::HTTP_SEE_OTHER);
    }

    return $this->renderForm('article/new.html.twig', [
        'article' => $article,
        'form' => $form,
    ]);
}
```

Et voilà ! On insère dans le champ `auteur`, grâce au _setter_ Symfony l'utilisateur courant, grâce à notre méthode hérité de l'`AbstractController`. Vous avez maintenant un système d'auteur fonctionnel en 10 minutes !