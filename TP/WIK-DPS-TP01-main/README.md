# WIK-DPS-TP01
## Consignes
- Mettre en place son environnement de développement et les bases du projet avec le moins de dépendances possible
- Développer une API qui retourne au format JSON les headers de la requête quand il y une requête HTTP GET sur /ping
- Le serveur doit écouter sur un port configurable via la variable d'environnement : PING_LISTEN_PORT
- Réponse vide avec un code 404 si quoi que ce soit d'autre que GET /ping ou un code 500 si c'est une erreur inconnue
## Gestion des dépendances
Dans un premier temps j'ai réalisé une API en utilisant la librairie Express pour créer un serveur web, cependant utiliser cette librairie m'a créé des dépendances.  
J'ai donc cherché un autre moyen de réaliser ce projet et j'ai finalement utilisé le module HTTP pour réduire mes dépendances.
## Fonctionnement de l'API
Pour créer un serveur web en utilisant le module HTTP on doit utiliser la fonction .createServer(), on ira ensuite spécifier une fonction qui sera exécutée à chaque fois que le serveur recevra une requête.  
Pour cette fonction j'ai utilisé un try/catch pour renvoyer un code 500 si une erreur inconnue est rencontrée lors de l'exécution du serveur.  
À l'intérieur de notre try j'ai utilisé un switch qui prend en paramètre l'URL de la requête. En utilisant un switch plutôt qu'un if/else on pourra à l'avenir gérer plusieurs URL diférentes.
