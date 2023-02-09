---
title: 'Les formulaire Symfony - SF Cheatsheet'
description: "Générer, comprendre et manipuler les formulaires Symfony"
displayName: 'Les formulaires Symfony'
tags: ["forms", "formulaires", "data", "bdd", "db", "base de donnée", "database"]
---

# Les formulaires Symfony

#### **Documentation de cet article**
- [Les formulaire Symfony (en)](https://symfony.com/doc/current/forms.html)

Créer, comprendre, customiser et utiliser les puissants formulaires Symfony

## Que sont les formulaires Symfony et pourquoi les utiliser ?
Les formulaires Symfony sont des objets PHP qui permettent de créer des formulaires HTML, de les valider et de les traiter de façon facile, sécurisée et optimale. Ils sont basés sur le composant [Form](https://symfony.com/doc/current/components/form.html) de Symfony. Ils sont très puissants et permettent de créer des formulaires complexes très rapidement. C'est un composant très utilisé dans Symfony et il est donc important de bien le comprendre. Vous allez être amenés à utiliser les formulaires Symfony dans la plupart, si ce n'est la totalité de vos projets.

## Créer un formulaire
Il existe plusieurs façons de créer un formulaire Symfony. La plus simple est d'utiliser la commande `make:form` de Symfony. Cette commande va créer un formulaire vide avec les méthodes nécessaires pour le faire fonctionner. Elle va aussi créer un fichier de formulaire dans le dossier `templates/form` qui va permettre de générer le HTML du formulaire. Pour créer un formulaire, il suffit de taper la commande suivante dans votre terminal :

```shell
symfony console make:form
```

::tip{type='alert-info'}
Symfony va générer votre formulaire à partir de la structure de l'entité que vous lui aurez indiqué. Je vous conseille donc de créer et structure un maximum vos entités avant de créer vos formulaires.
::

Symfony va vous poser 2 questions :

```shell
The name of the form class (e.g. DeliciousPizzaType):
> 
```

Vous pouvez renseigner ce que vous souhaitez, mais je vous conseille de mettre le même nom que votre entité si cela ne génère aucune incohérence. Comme pour les [controllers](/codex/console/make-controller), Symfony va générer le nom de votre formulaire en ajoutant le suffixe `Type` à la fin du nom de votre entité. Encore une fois, si vous ne le faites pas, Symfony le fera pour vous. Pour éviter les erreurs de syntaxe, je vous conseille donc de laisser faire Symfony.

```shell
Enter the name of an entity or model class that the new form will be bound to (empty for none):
>
```

Ici, vous devez renseigner le nom de votre entité. Si vous avez déjà créé votre entité, vous pouvez simplement renseigner son nom. Si vous n'avez pas encore créé votre entité, vous pouvez laisser ce champ vide. Dans ce cas, Symfony va générer un formulaire vide. Vous pourrez ensuite ajouter les champs que vous souhaitez à votre formulaire.

Et voilà ! Vous avez maintenant un formulaire Symfony généré. Voyons désormais comment l'utiliser.

## Utiliser un formulaire
Tout d'abord, vous allez devoir générer votre formulaire, depuis votre Controller !

La méthode la plus simple et la plus utilisée pour générer un formulaire est la méthode `createForm()`, disponible grâce à l'`AbstractController`. Cette méthode va générer un formulaire à partir de la classe de formulaire que vous lui aurez indiqué en premier paramètre. Elle peut éventuellement prendre un deuxième paramètre, que l'on spécifiera dans la majorité des cas, l'entité qui lui est liée. Dans ce cas, lors de l'envoi du formulaire, les données du formulaire seront automatiquement injectées dans l'entité. 

::tip{type='alert-warning'}
Vous devez évidemment avoir créé votre entité avant de générer votre formulaire si vous souhaitez utiliser celle-ci. Comme ceci `$article = new Article();`
::

Pour un formulaire se nommant `ArticleType`, lié à l'entité `Article` la génération du formulaire devrait ressembler à ceci :

```php
$form = $this->createForm(ArticleType::class, $article);
```

::tip{type='alert-info'}
N'oubliez pas d'enregistrer votre formulaire dans une variable
::

Une fois le formulaire généré, vous allez devoir récupérer les infos qu'il récupère grâce à la _requête_. Pour cela, les formulaires Symfony possède une méthode `handleRequest` qui prend comme paramètre la requête. Ajouter donc cette ligne et votre code devrait ressembler à ceci :

```php
$form = $this->createForm(ArticleType::class, $article);
$form->handleRequest($request);
```

::tip{type='alert-info'}
N'oubliez pas d'importer la classe `Request` dans votre méthode
::

Enfin nous allons traiter les données du formulaire. Pour cela, nous allons utiliser la méthode `isSubmitted` et `isValid` de notre formulaire. Ces deux méthodes vont nous permettre de vérifier si le formulaire a été soumis et si les données sont valides, nous allons parler de la validation plus tard. Si c'est le cas, nous allons pouvoir traiter les données.

```php
if ($form->isSubmitted() && $form->isValid()) {
    // traiter le formulaire
}
```

Pour traiter le formulaire, Symfony utilise 2 méthodes, ces méthodes sont disponibles depuis l'`EntityManagerInterface` que vous devrez donc injecter dans votre méthode : 
- `persist` sauvegarde les données recueillies par le formulaire, il connait les données et leur position, car on lui a passé en deuxième paramètre l'entité lui étant lié. Il prend en paramètre l'entité créé, attention à ne pas mettre le formulaire.
- `flush` envoie les données à la base de donnée. Il ne prend lui pas de paramètre, si vous avez plusieurs formulaires _persists_ avant un `flush`, `flush` va tous les envoyer dans la base de donnée.

Ajoutez ces méthodes et votre code devrait ressembler à ceci :

```php
$article = new Article();

$form = $this->createForm(ArticleType::class, $article);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
    // $em est une convention de nom à donner à l'EntityManagerInterface
    $em->persist($article);
    $em->flush();
    
    // Autres actions...
}
```

Après ça, vous pouvez ajouter d'autres actions, comme la redirection vers une autre page, ou encore l'affichage d'un message de succès.

## Envoyer le formulaire à la template
Une fois que vous avez généré et géré votre formulaire, vous allez devoir l'afficher dans une template. Pour cela modifiez, dans votre Controller, la méthode `render`. Renommez la `renderForm` et ajoutez-y le formulaire en paramètre. Votre code devrait ressembler à ceci :

```php
return $this->renderForm('article/create.html.twig', [
    'form' => $form,
]);
```

Et voilà ! Votre formulaire est maintenant envoyé à votre template (ici `article/create.html.twig`) sous le nom de `form`. Vous pouvez donc l'afficher dans votre template.

Avant de continuer, voici la structure final de votre méthode :

```php
public function create(Request $request, EntityManagerInterface $em): Response
{
    $article = new Article();

    $form = $this->createForm(ArticleType::class, $article);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $em->persist($article);
        $em->flush();

        // Autres actions...
        return $this->redirectToRoute('article_index'); // Redirection vers la page d'accueil, par exemple
    }

    return $this->renderForm('article/create.html.twig', [
        'form' => $form,
    ]);
}
```

## Afficher un formulaire dans une template

::tip{type='alert-info'}
Veillez à bien injecter votre formulaire dans votre template
::

Pour afficher un formulaire dans une template, vous allez devoir utiliser la méthode `form()` de Twig. Cette méthode prend en paramètre le formulaire que vous souhaitez afficher. Votre code devrait ressembler à ceci :

```twig
{{ form(form) }}
```

Et voilà ! Vous avez maintenant votre formulaire rendu. Mais vous remarquez qu'il n'y a pas de bouton pour soumettre le formulaire... De base Symfony n'ajoute pas de bouton dans votre `FormType`, vous pouvez le faire, mais par convention on ajoute ce bouton directement dans la template. Nous allons donc devoir modifier la structure de notre template pour ajouter ce bouton et utiliser 3 functions.

- `form_start(form)` annonce le début du formulaire
- `form_end(form)` rend tous les champs du formulaire
- `form_widget(form)` annonce la fin du formulaire 

Tous les éléments entre `form_start()` et `form_end()` seront à l'intérieur de la balise HTML `form`. Vous l'avez deviné, nous allons donc ajouter notre bouton entre ces balises, après le widget. Et votre code devrait ressembler à ceci :

```php
{{ form_start(form) }}
    {{ form_widget(form) }}
    <button>Soumettre</button>
{{ form_end(form) }}
```

Et voilà votre formulaire est rendu et vous pouvez le soumettre !

## Personnaliser notre classe de formulaire
Rendez-vous dans votre `FormType`, localisé ici `src/Form/VotreFormType`.

On va s'intéresser au `builder` dans la méthode `buildForm`. Il utilise une méthode simple `add`, qui, comme son nom l'indique, ajoute un champ à votre formulaire. il prend 3 paramètres, le nom du champ, qui doit être le même que dans votre entité, le type de champs et un tableau de paramètres.

Voyons d'abord le type de champ, ce n'est pas obligatoire et par défaut, Symfony devine le type de champ grâce au type de votre champ d'entité. (ex: si vous avez un champ dans votre base de donnée de type `text`, Symfony générera automatiquement un champ HTML de type `text`). Vous pouvez cependant choisir vous-même le type de champs (ou le préciser pour être sûr) et vous en aurez de toute façon besoin pour l'étape suivante, le tableau de paramètres.
Je ne vais pas lister ici tous les champs disponibles, Symfony couvre tous les champs HTML de base et même plus comme le champ Symfony `UrlType` qui va automatiquement effectuer une vérification par _RegEx_ pour vérifier que le champ contient bien une URL.

- [Liste des champs Symfony (en)](https://symfony.com/doc/current/reference/forms/types.html)

Vous aurez ensuite accès à un tableau de paramètres, la partie la plus intéressante des formulaires ! Je vais reprendre mon exemple d'article en ajoutant le type Symfony `Text` à mon champs `titre`, ainsi qu'un tableau, pour l'instant vide, qui va accueillir les paramètres, comme ceci :

```php
 public function buildForm(FormBuilderInterface $builder, array $options): void
{
    $builder
        ->add('name', TextType::class, [])
        ->add('auteur')
    ;
}
```

::tip{type='alert-info'}
Vous retrouverez une liste des options disponibles pour chaque champ [ici (en)](https://symfony.com/doc/current/reference/forms/types.html), et [voici la page (en)](https://symfony.com/doc/current/reference/forms/types/text.html) du champ Symfony `Text`
::

Vous pouvez passer différentes options comme les attributs, si le champ est disabled, le label et j'en passe, je vais mettre ce que j'ai cité pour l'exemple

```php
  public function buildForm(FormBuilderInterface $builder, array $options): void
{
    $builder
        ->add('name', TextType::class, [
            'label' => 'Titre',
            'disabled' => true,
            'attr' => [
                'class' => 'form-control btn test',
            ],
        ])
        ->add('auteur')
    ;
}
```

Il y a un dernier paramètre sur lequel je voudrais dire 2 mots : `mapped`. Parfois, vous devez inclure des champs nécessaires au formulaire, mais qui ne restent pas en base de donnée, l'exemple parfait est une `checkbox` pour accepter les conditions d'utilisation, il est indispensable qu'elle soit coché pour continuer, mais il n'est pas nécessaire de la sauvegarder en base de donnée puisque l'utilisateur doit forcément accepter. C'est là que le paramètre `mapped` intervient, mettez le à `false` et votre champ ne sera pas comptabilisé lors du `flush`.

```php
   public function buildForm(FormBuilderInterface $builder, array $options): void
{
    $builder
        ->add('name', TextType::class, [
            'label' => 'Titre',
            'disabled' => true,
            'attr' => [
                'class' => 'form-control btn test',
            ],
            'mapped' => false, // <-- comme ceci
        ])
        ->add('auteur')
    ;
}
```

## Les contraintes (ou validation)
Les contraintes ! Ma partie préférée !
Symfony met en place pour vous un nombre conséquent de contraintes (autrement dit de validation), vous pouvez [les retrouver toutes ici (en)](https://symfony.com/doc/current/reference/constraints.html). Encore une fois, je ne vais pas m'attarder sur chacune d'entre elle, je vous laisse vous documenter mais je vais en ajouter quelques-unes pour vous donner un exemple.

- [NotBlank](https://symfony.com/doc/current/reference/constraints/NotBlank.html) s'assure que le champs ne soit ni vide, ni null, ni false, en bref qu'il contienne quelque chose.
- [Length](https://symfony.com/doc/current/reference/constraints/Length.html) s'assure, suivant vos directives, que le champ fasse un minimum et un maximum de caractères.

C'est parti, implémentons ces constraints en ajoutant au tableau la clé `constraints`, qui prend en valeur un tableau.

```php
public function buildForm(FormBuilderInterface $builder, array $options): void
{
    $builder
        ->add('name', TextType::class, [
            'label' => 'Titre',
            'disabled' => true,
            'attr' => [
                'class' => 'form-control btn test',
            ],
            'mapped' => false,
            'constraints' => []
        ])
        ->add('auteur')
    ;
}
```

On représente les `constraints` par des classes, prenant en paramètres des valeurs comme les conditions de la `constraint`, le message d'erreur à renvoyer etc... Je vais me réferrer à [la doc (en)](https://symfony.com/doc/current/reference/constraints.html) pour connaître et comprendre les différentes options et je les ajoute de la façon suivante :

```php
 public function buildForm(FormBuilderInterface $builder, array $options): void
{
    $builder
        ->add('name', TextType::class, [
            'label' => 'Titre',
            'disabled' => true,
            'attr' => [
                'class' => 'form-control btn test',
            ],
            'mapped' => false,
            'constraints' => [
                new NotBlank([
                    'message' => 'Veuillez entrer un nom,
                ]),
                new Length([
                    'min' => 3,
                    'minMessage' => 'Votre nom doit faire {{ limit }} caractères',
                ]),
            ],
            ]
        ])
        ->add('auteur')
    ;
}
```

Et voilà, maintenant, lorsque que vous soumettrez le formulaire, Symfony vérifiera les `constraints` et renverra des erreurs si besoin, c'est à ça que sert la méthode [`isValid`](http://localhost:3000/tutoriels/les-formulaires-symfony#utiliser-un-formulaire) vue plus haut.

## Aller plus loin
J'ajouterais peut-être du contenu à cet article plus tard, pour l'instant voici quelques liens pour aller plus loin avec les formulaires, en anglais... :

- [Les formulaires](https://symfony.com/doc/current/forms.html)
- [Les types Symfony de formulaires](https://symfony.com/doc/current/reference/forms/types.html)
- [Les contraintes](https://symfony.com/doc/current/reference/constraints.html)
- [Customiser le rendu des formulaires](https://symfony.com/doc/current/form/form_customization.html)