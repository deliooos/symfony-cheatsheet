---
title: 'new - SF Cheatsheet'
description: 'Initialise un projet Symfony'
displayName: 'new'
---

# symfony new
#### **Documentation de cet article**
- [Installer Symfony (en)](https://symfony.com/doc/current/setup.html)

Initialise un projet Symfony à l'intérieur d'un dossier

Commande complète
```shell
symfony new nom_du_projet --version="6.2.*" --webapp
```

- Changez _nom_du_projet_ par le nom que vous désirez.
- Le _flag_ `--version` est optionnel, mais fortement recommandé pour assurer la stabilité et la sécurité de votre projet. Vérifiez la dernière version recommandée [ici](https://symfony.com/doc/current/setup.html#creating-symfony-applications)
- Le _flag_ `--webapp` est optionnel. Si vous le spécifiez, Symfony créera pour vous la version complète de Symfony avec tous les composants nécessaires. Si vous choisissez de ne pas l'inclure, Symfony créera alors une version "squelette", avec seulement la base de Symfony, utile pour créer une API ou un microservice.