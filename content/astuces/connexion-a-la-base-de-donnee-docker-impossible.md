---
title: 'Connexion à la base de donnée Docker impossible - SF Cheatsheet'
description: 'Problème pour se connecter à la base de donnée Docker'
displayName: 'Connexion à la base de donnée Docker impossible'
tags: ["docker", "docker compose", "compose", "bdd", "db", "connexion", "refuse"]
---

# Connexion à la base de donnée Docker impossible
#### **Documentation de cet article**
- [Documentation Docker Compose (en)](https://docs.docker.com/compose/gettingstarted/)

Lors de [l'initialisation d'un projet Symfony avec le binaire](/tutoriels/initialiser-un-projet), Symfony génère automatiquement un fichier `docker-compose.yml` et `docker-compose.override.yml`. Ces fichiers fonctionnent pour lancer une app Symfony avec Docker en plus de [symfony server:start](/codex/server-start) mais vous pourriez rencontrer des difficultés pour vous connecter à votre base de donnée vous-même, par exemple via phpMyAdmin, HeidiSQL ou quelconque client de gestion de base de donnée.

## D'où vient le problème et comment le régler
Votre client de gestion de base de donnée pourrait vous dire que le nom ou le port sont incorrects, que la base de donnée n'accepte pas les connexions ou encore que les identifiants sont incorrects. En fait, si vous n'avez rien touché à vos fichiers de configuration, ces problèmes peuvent être réglés très simplement avec une ligne. Rendez-vous dans le fichier `docker-compose.override.yml` et regardez la ligne précisant port de la base de donnée

```yaml
services:
###> doctrine/doctrine-bundle ###
  database:
    ports:
      - "5432" # <-- ici
###< doctrine/doctrine-bundle ###
```

Il précise un port pour la machine, mais pas de port pour Docker. Symfony à donc accès en interne au port, mais vu qu'aucune liaison n'est faite entre Docker et la machine, vous ne pouvez pas vous connecter, car le port 5432 ne redirige pas vers le container Docker. Pour assigner un port à Docker et le lier à celui exposé sur la machine, rajouter simplement `:5432` après le port déjà défini de la façon suivante :

```yaml
services:
###> doctrine/doctrine-bundle ###
  database:
    ports:
      - "5432:5432" # <-- encore ici
###< doctrine/doctrine-bundle ###
```

Et voilà, aucune magie derrière tout ça, si vous voulez en savoir plus, allez voir la [documentation Docker Compose](https://docs.docker.com/compose/gettingstarted/). N'oubliez pas de relancer Docker pour prendre les changer en compte en stoppant le terminal dans lequel tourne Docker en faisant `CTRL+C` ou si vous l'avez lancé avec le _daemon_ (-d), avec la commande `docker compose down`.