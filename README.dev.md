 # 👋 Bonjour développeur !

Nous vous présentons notre nouvelle plateforme de commerce électronique pour débutants, intégrant Stripe pour des paiements sécurisés et un service d'e-mails automatiques pour une meilleure expérience client. Elle inclut l'inscription, la gestion des commandes, et une interface de gestion des produits. Ce modèle est idéal pour démarrer votre site e-commerce.

## 📚 Exigences en matière de connaissances
Pour utiliser et adapter ce modèle, vous devez connaître :
- HTML, CSS, JavaScript
- Node.js, Express.js
- EJS, SQLite
- Google reCAPTCHA v3
- Stripe

## 📌 Ressources utiles
- Mailtrap

## ⚠️ Avertissement - Variables d'environnement
Ne modifiez pas `SQLITE_DB` et `SESSION_SECRET` pour éviter les dysfonctionnements.

## 🔨 Prochaines étapes
Personnalisez ce modèle et assurez-vous qu'il soit responsive pour les mobiles.

## 📂 Où trouver les ressources ?
**Variables d'environnement**  
Accédez aux variables d'environnement dans les paramètres en cliquant sur l'icône d'engrenage en haut à droite. Ces paramètres peuvent ne pas être disponibles sur mobile ; activez le mode bureau.

**Fichiers principaux**
- Styles : `public/css`
- Logique frontend : `public/js/`
- Base de données : `database/sqlite.js`
- Routes API : `routes/`
- Fonctions utilitaires : `util/`

## 🔑 Google reCAPTCHA v3
Générez vos clés SITE et SECRET pour Google reCAPTCHA et intégrez-les dans le projet.

## 💳 Stripe et 📧 SMTP
**Stripe**
- Créez un compte et renseignez `STRIPE_SECRET_KEY` et `STRIPE_PUBLISHABLE_KEY`.
- Configurez les webhooks via Stripe.

**SMTP**
Nodemailer est configuré pour envoyer des e-mails automatiques. Exemple basé sur Mailtrap.

## 🔧 Top 48 commandes terminal

1. **`admin:createadminuser`** : Crée un compte admin.
2. **`admin:deleteadminuser`** : Supprime un compte admin.
3. **`admin:resetpassword`** : Réinitialise le mot de passe d'un utilisateur.
4. **`admin:listusers`** : Affiche la liste de tous les utilisateurs enregistrés.
5. **`admin:banuser`** : Bannit un utilisateur spécifique.
6. **`admin:unbanuser`** : Débannit un utilisateur spécifique.
7. **`admin:updateuserrole`** : Met à jour le rôle d'un utilisateur.
8. **`admin:viewlogs`** : Affiche les logs d'administration.
9. **`admin:sendnotification`** : Envoie une notification à tous les utilisateurs.
10. **`admin:clearsessions`** : Efface toutes les sessions utilisateur actives.
11. **`admin:backupdatabase`** : Effectue une sauvegarde de la base de données.
12. **`admin:restorebackup`** : Restaure une sauvegarde de la base de données.
13. **`admin:optimize`** : Optimise la base de données pour de meilleures performances.
14. **`admin:deleteuser`** : Supprime un utilisateur spécifique.
15. **`admin:deactivateuser`** : Désactive un compte utilisateur.
16. **`admin:activateuser`** : Réactive un compte utilisateur désactivé.
17. **`admin:importusers`** : Importe des utilisateurs depuis un fichier CSV.
18. **`admin:exportusers`** : Exporte la liste des utilisateurs vers un fichier CSV.
19. **`admin:reset2fa`** : Réinitialise l'authentification à deux facteurs pour un utilisateur.
20. **`admin:generateapikey`** : Génère une nouvelle clé API pour un utilisateur.
21. **`admin:revokeapikey`** : Révoque une clé API pour un utilisateur.
22. **`admin:viewapikeys`** : Affiche toutes les clés API actives.
23. **`admin:cleardatabase`** : Vide la base de données de toutes les entrées.
24. **`admin:runmaintenance`** : Lance des tâches de maintenance sur le serveur.
25. **`admin:checkupdates`** : Vérifie les mises à jour disponibles pour le système.
26. **`admin:installupdates`** : Installe les mises à jour disponibles.
27. **`admin:rebootserver`** : Redémarre le serveur.
28. **`admin:shutdownserver`** : Éteint le serveur.
29. **`admin:restartservice`** : Redémarre un service spécifique.
30. **`admin:status`** : Affiche le statut actuel du serveur et des services.
31. **`admin:diskusage`** : Affiche l'utilisation du disque.
32. **`admin:memoryusage`** : Affiche l'utilisation de la mémoire.
33. **`admin:cpuusage`** : Affiche l'utilisation du CPU.
34. **`admin:networkstats`** : Affiche les statistiques réseau.
35. **`admin:logins`** : Affiche les tentatives de connexion récentes.
36. **`admin:failedauth`** : Affiche les tentatives d'authentification échouées.
37. **`admin:systeminfo`** : Affiche les informations système.
38. **`admin:timezone`** : Configure le fuseau horaire du serveur.
39. **`admin:language`** : Configure la langue du système.
40. **`admin:reloadconfig`** : Recharge la configuration du serveur.
41. **`admin:clearcache`** : Vide le cache du serveur.
42. **`admin:rebuildindex`** : Reconstruit les index de la base de données.
43. **`admin:troubleshoot`** : Lance des diagnostics de dépannage.
44. **`admin:testemail`** : Envoie un email de test pour vérifier la configuration SMTP.
45. **`admin:testnotification`** : Envoie une notification de test pour vérifier la configuration.
46. **`admin:testwebhook`** : Envoie un webhook de test pour vérifier la configuration.
47. **`admin:resetconfig`** : Réinitialise la configuration aux valeurs par défaut.
48. **`admin:cleanup`** : Effectue un nettoyage des fichiers temporaires et obsolètes.

## 🔨 Note importante
Les fichiers modifiés depuis le terminal ne seront pas sauvegardés ni synchronisés.

## ⛑️ Besoin d'aide ?
Rejoignez notre communauté Discord dans le canal `#spaces-general` ou envoyez-nous un ticket pour toute assistance technique.

Bonne programmation !