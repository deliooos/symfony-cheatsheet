---
title: 'Variable globale Twig - SF Cheatsheet'
description: "Créer une variable Twig globale, utilisable partout"
displayName: 'Variable globale Twig'
tags: ["twig", "global", "variable"]
---

# Variable global Twig
#### **Documentation de cet article**
- [Twig (en)](https://symfony.com/doc/6.3/templates.html#templating-global-variables)

Créer une variable Twig globale, utilisable partout.

## Pourquoi et comment créer une variable globale Twig

Parfois, vous aurez besoin d'une variable globale Twig, c'est-à-dire une variable qui sera accessible partout dans vos templates. Par exemple, vous pourriez avoir besoin d'une variable contenant le nom de votre site, un lien de réseau social : une variable redondante.

Pour créer une variable twig, rendez-vous dans le fichier `config/packages/twig.yaml` et ajoutez la variable dans la section `globals` :

```yaml
twig:
    # ...
    globals:
        # ...
        site_name: 'Mon site'
```

Et voilà, vous pouvez maintenant utiliser la variable `site_name` dans vos templates Twig :

```twig
{# ... #}
    <title>{{ site_name }}</title>
{# ... #}
```

::tip{type='alert-warning'}
La section globals doit se trouver directement dans la section twig, et non dans une autre section. Faites attention à l'indentation, très importante en YAML.
::