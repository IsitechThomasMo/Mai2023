La blockchain est un type de base de données

# La blockchain

## Introduction

Base de données :
- Décentralisée,
- Sécurisée,
- Stockage et transfert,
- Transparente,
- Immuable (insupprimable, il faut déployer à nouveau)

Plus il y a de clients sur une base de données, plus la sécurité diminue

A chaque nouveau bloc, il y a une référence au bloc précédent, ce qui rend très compliquer de faire des modifs à un élément déployé

La validation des blocs se fait par consensus

Consensus :
- POW : Proof Of Work, Mécanisme utilisé par Bitcoin et qui consiste à résoudre des problèmes mathématiques complexes pour valider des transactions et créer de nouveaux blocs. Ceux qui résolvent ces problèmes sont des `mineurs`, le premier mineur qui résoud le fameux problème est rémunéré en BTC. Ce mécanisme est très coûteux en énergie et en puissance de calcul, mais offre l'avantage d'être très sécurisé. 
- POS : Proof Of Stake

Smart Contract : Application de BlockChain en entreprise

Domaines d'application :
- Cryptomonnaie
- Finance
- Santé
- Logistique
- Immobilier

La cryptomonnaie a permi notamment de faire du blanchiment d'argent

Si l'on perd sa clé privée, la phrase ne permet pas de la récupérer.

Un cryptowallet (comme MetaMask) conserve les clés privées sur son PC

Environnement pour les devs pour développer du code

Changer le nom, le stock et qu'on peut transférer facilement d'un wallet à un autre

Sur le dépôt Github d'Open Zeppelin:
- Trouver le standard (smart contract) qui permet de générer un jeton type Ethereum qui pourra servir de monnaie d'échange
- Définir son symbole et son stock
- Compiler et déployer le contrat sur un testnet
- Envoyer le stock initial sur votre wallet
- Faire apparaître le stock initial sur metamask
- Transférer le jeton à un collègue

Le RC20 est fongible, contrairement aux NFTs, c'est-à-dire qu'on peut avoir un demi RC20, contrairement aux NFTs qui ne peuvent être fractionner.

Dans une classe Personne, on trouve des champs, des méthodes

Une interface est un ensemble de méthodes

Consignes pour la suite :
- Installer et utiliser Truffle et Ganache
- Créer un smart contract qui une fois déployé tirera avantage des caractéristiques de la blockchain ETH
- Créer une application Web qui permet d'intéragir avec le contrat déployé
- Tenter de terminer de TP RPI (optionnel)

Fait en 1991 par M. Stuart and M. Stornetta
Merkle tree allows to have several doc in one block

RPOW Reusable Proof of Work in 2004, can be considered as an early prototype

2009 for first bitcoin transaction

Ethereum introduced smart contracts

-   `storage` - variable is a state variable (store on blockchain)
-   `memory` - variable is in memory and it exists while a function is being called
-   `calldata` - special data location that contains function arguments

https://solidity-by-example.org/