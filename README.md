# WIK-DPS-TP01

## Comment créer un site avec le moins de dépendance possible

### Téléchargement des outils de travail

Pour commencer il faut installer le notre IDE pour programmer : Visual Studio Code, que vous pourrez télécharger avec le lien suivant : https://code.visualstudio.com/download  
Ensuite vous pourrez télécharger NodeJS via le lien suivant : https://nodejs.org/fr/download/  

Enfin nous pourrons commencer le projet.  

### Début du projet 

Dans un premier pour démarrer un projet quelconque, nous pouvons créer un répertoire GitHub que l'on retrouve sur ce lien : https://github.com/ ensuite il suffit de créer un repository.  
Une fois le répertoire créé copier le lien qui se trouve ici : 
![alt text](https://github.com/BaptisteRdt/DevOps/blob/main/Images/TP1/image1.png)
![alt text](https://github.com/BaptisteRdt/DevOps/blob/main/Images/TP1/image2.png)  

Une fois le lien copié, vous pourrez le cloner sur votre espace de travail avec les commandes suivantes : 
```shell
git clone leLienCopié repertoire
``` 

Votre environnement de travail est fin prêt !  


### Le code

Pour débuter lancer la suite de ces commandes dans un terminal :

```shell
npm init -y
npm i typescript --save-dev
npm i @types/node --save-dev
npx tsc --init --rootDir src __outDir build \ --esModuleInterop --resolveJsonModule --lib es6 \
mkdir src
```  

Ensuite dans le fichier **app.js** dans le répertoire **src** on importe http avec la ligne ``import http from "http";``. 
Puis avec la fonction ``.createServer(function (req, res){};`` de http on créé une var qui va contenir l'url avec ``req.url``
Puis si l'url est égale au /ping on renvoie le header dans la console. Sinon on renvoie une erreur 404. 

Pour le bon fonctionnement de la page, on réalise un try catch. Si la page trouve une erreur on affiche une page erreur 500. 

Ensuite pour que la page écoute sur le port 3000 on utilise la fonction ``.listen();``

# Merci ! 