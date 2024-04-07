# mongoProject
Lien de l'application : https://mongoproject.netlify.app/

Description de l'application CRUD :

Notre application permet aux utilisateurs de gérer des tâches. Voici ce que les utilisateurs peuvent faire :

Créer une tâche : Les utilisateurs peuvent ajouter une nouvelle tâche avec un titre, une date, une description et leur nom d'utilisateur.

Voir toutes les tâches : Les utilisateurs peuvent voir toutes les tâches existantes avec leurs détails.

Voir une tâche individuelle : Les utilisateurs peuvent voir les détails d'une tâche spécifique en sélectionnant son identifiant.

Mettre à jour une tâche : Les utilisateurs peuvent modifier les détails d'une tâche existante.

Supprimer une tâche : Les utilisateurs peuvent supprimer une tâche existante.

Rechercher des tâches par utilisateur : Les utilisateurs peuvent filtrer les tâches par nom d'utilisateur pour voir uniquement les tâches associées à cet utilisateur (on a utilisé l'index pour le username).

Guide de l'API :

Notre API expose les points de terminaison suivants :

POST /tasks : Crée une nouvelle tâche avec les détails fournis dans le corps de la requête.

GET /tasks : Récupère toutes les tâches existantes.

GET /tasks/:id : Récupère les détails d'une tâche spécifique en fonction de son identifiant.

PUT /tasks/:id : Met à jour les détails d'une tâche existante en fonction de son identifiant et des données fournies dans le corps de la requête.

DELETE /tasks/:id : Supprime une tâche existante en fonction de son identifiant.

GET /tasks/username/:username : Récupère toutes les tâches associées à un utilisateur spécifique en fonction de son nom d'utilisateur.

Pour utiliser l'API, les clients envoient des requêtes HTTP aux points de terminaison appropriés avec les données requises, et l'API renvoie des réponses HTTP avec les résultats ou les messages appropriés.

Résumé des Performances :

Notre application est conçue pour être performante grâce à quelques stratégies clés :

Indexation sur le champ "username" : En utilisant un index sur le champ "username" dans la base de données MongoDB Atlas, on a optimisez les performances des recherches de tâches par nom d'utilisateur. Cela permet des recherches rapides et efficaces, en réduisant le temps nécessaire pour récupérer les données.

Utilisation de MongoDB Atlas : MongoDB Atlas est une base de données cloud entièrement gérée qui offre des performances fiables et évolutives. En utilisant MongoDB  comme base de données pour notre  application, on a  bénéficiez de la capacité à ajuster dynamiquement les performances en fonction des besoins de notre application, ainsi que de la redondance et de la disponibilité élevées offertes par la plateforme cloud.

Architecture de l'application :

Backend (Express.js) : Express.js est utilisé pour créer le serveur HTTP qui gère les requêtes et les réponses de l'API. Les routes sont définies pour chaque point de terminaison de l'API (CRUD) pour effectuer des opérations sur les tâches. Mongoose est utilisé pour interagir avec la base de données MongoDB Atlas.

Frontend (React.js) : React.js est utilisé pour créer l'interface utilisateur de l'application. Les composants React sont utilisés pour afficher les tâches, ajouter de nouvelles tâches, afficher les détails des tâches individuelles et modifier ou supprimer des tâches existantes. Axios est utilisé pour effectuer des requêtes HTTP vers l'API Express.js.

membres de l’équipe :
Mohamed Maghzaoui et Ramla Argui 


