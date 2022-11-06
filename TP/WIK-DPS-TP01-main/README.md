# WIK-DPS-TP02
# Conteneurisation d'un projet
Afin d'optimiser les processus liés à un projet une solution s'offre à tout développeur : **la conteneurisation**. 
Pour réaliser cela, plusieurs méthodes sont possibles, néanmoins la plus simple et la plus utilisée reste **Docker**.  
Docker fonctionne avec un système d'*images*, de *conteneurs* et enfin de *volumes*. Les images sont à la base de la conteneurisation Docker. Elles sont créées à partir d'un fichier dénommé **dockerfile.yaml**.

## Image 
Pour créer une image il suffit de remplir un fichier dockerfile.yaml où l'on y inscrit une suite d'instructions qui permettent d'automatiser le lancement d'un processus.  
L'image permettra de créer un conteneur par la suite.

### Création d'une image 
Positionnez-vous dans le répertoire de travail souhaité puis créez un fichier dénommé dockerfile avec l'extension yaml. Dans ce fichier on va inscrire les différentes commandes qui devront s'éxécuter pour le lancement du processus.  
Dans notre cas nous allons partir de **node** avec la commande *FROM* car c'est un projet typescript. 
Ensuite il faut préciser le répertoire de travail avec la commande *WORKDIR* où l'on inscrira **/app**.
Puis on lance plusieurs commandes nécessaires aux démarrages de notre application : *RUN* **npm i && npx tsc && useradd -ms /bin/bash testuser** (npm i : installe les packages nodes, npx tsc : lance le fichier tsconfig.json, useradd -ms /bin/bash testuser : spécifie qu'on utilisera un compte utilisateur)
*CMD* est la commande qui à utiliser en dernier, elle lance le fichier **node build/index.js**