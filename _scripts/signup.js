document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation des champs
    if (!username || !email || !password || !confirmPassword) {
        alert('Tous les champs sont obligatoires!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas!');
        return;
    }

    alert('Inscription réussie!');
    // Ici, tu pourrais envoyer les données à un serveur ou les enregistrer dans une base de données
});
