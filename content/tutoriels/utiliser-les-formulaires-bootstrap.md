---
title: 'Utiliser des formulaires Bootstrap & personnalisés - SF Cheatsheet'
description: 'Comment utiliser des formulaires Bootstrap & personnalisés dans Symfony'
displayName: 'Utiliser des formulaires Bootstrap & personnalisés'
tags: ["bootstrap", "forms", "formulaires", "template"]
---

# Utiliser les formulaires Bootstrap & personnalisés
#### **Documentation de cet article**
- [Form Bootstrap 5 (en)](https://symfony.com/doc/current/form/bootstrap5.html)
- [Customiser les formulaires avec des templates](https://symfony.com/doc/current/form/create_custom_field_type.html#creating-the-form-type-template)

Comment utiliser les formulaires Bootstrap, Tailwind ou créer ses propres templates de formulaire dans Symfony ?

## Qu'est-ce qu'une template de formulaire dans Symfony ?
Par défaut, les formulaires Symfony viennent avec le style de base des formulaires, normal. Pour éviter de vous répéter à ajouter manuellement chaque classe dans chaque partie du formulaire, et ça dans toute votre application, Symfony propose des templates de formulaire, qui vont ajouter automatiquement vos classes à vos formulaires, pratique !

## Ajouter la template de formulaire Bootstrap
Bootstrap est tellement répandu dans le monde du développement, et surtout dans le développement backend, que Symfony propose une intégration officielle des formulaires Bootstrap.

::tip{type='alert-info'}
Vous devez avoir Boostrap disponible dans votre projet, que ça soit par CDN ou par Webpack Encore, veillez à disposer de Bootstrap
::

Rendez-vous dans le fichier `config/packages/twig.yaml` et rajoutez l'entrée `form_themes:` dans l'entrée `twig`. Si ce n'est pas très clair voici à quoi ça devrait ressembler

```yaml
twig:
    default_path: '%kernel.project_dir%/templates'
    form_themes:
```

Ajoutez maintenant la valeur `['bootstrap_5_layout.html.twig']` à `form_themes`, comme ceci

```yaml
twig:
    default_path: '%kernel.project_dir%/templates'
    form_themes: ['bootstrap_5_layout.html.twig']
```

Et voilà ! Rendez-vous sûr vers un de vos formulaires et admirez ! De beaux formulaires Bootstrap !

## Créer votre propre template de formulaire

À venir, en attendant voir [créer une template de formulaire (en)](https://symfony.com/doc/current/form/create_custom_field_type.html#creating-the-form-type-template)