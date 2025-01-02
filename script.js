// Firebase-Konfiguration und Initialisierung
const firebaseConfig = {
    apiKey: "AIzaSyAFVS_tiUUPD-0afT3NheQ6w1SxrooZ3Y4",
    authDomain: "familien-einkaufsliste.firebaseapp.com",
    databaseURL: "https://familien-einkaufsliste-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "familien-einkaufsliste",
    storageBucket: "familien-einkaufsliste.firebasestorage.app",
    messagingSenderId: "849652238686",
    appId: "1:849652238686:web:610a2445392acebb3767cf"
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);
const database = firebase.database(); // Datenbank wird hier definiert

// Funktion addItem() kommt nach der Initialisierung von database
function addItem() {
    const newItem = document.getElementById("newItem").value;
    if (newItem) {
        database.ref('shoppingList').push(newItem) // Zugriff auf die database-Variable
            .then(() => console.log("Artikel erfolgreich hinzugefügt"))
            .catch((error) => console.error("Fehler beim Hinzufügen:", error));
        document.getElementById("newItem").value = "";
    } else {
        alert("Bitte einen Artikel eingeben.");
    }
}
