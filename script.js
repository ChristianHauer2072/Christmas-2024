const toggleSnowButton = document.getElementById('toggleSnow'); // Button für das Starten/Stoppen von Schneeflocken.
const toggleMusicButton = document.getElementById('toggleMusic'); // Button für das Starten/Stoppen der Musik.
const switchMusicButton = document.getElementById('switchMusic'); // Button für das Wechseln der Musik.
const music = document.getElementById('music'); // Audio-Element, das die Musik abspielt.

const icons = [ // Liste der Symbole, die auf der Seite angezeigt werden.
    'sleigh.png',
    'christmas.png',
    'star.png',
    'goldenstar.png',
    'tree.png',
    'merrychristmas.png'
];

const musicTracks = [ // Liste der verfügbaren Musikstücke.
    'christmas-music-ringing-the-starry-night-272617.mp3',
    'We-Wish-You-chosic.com_.mp3',
    'Deck-The-halls-Long-Version-chosic.com_.mp3'
];

let currentTrackIndex = 0; // Index des aktuellen Musikstücks.
let snowflakesEnabled = false; // Status, ob Schneeflocken aktiviert sind.
let snowflakes = []; // Array zur Speicherung der Schneeflockenelemente.

// Eventlistener für den Schneeflocken-Button
toggleSnowButton.addEventListener('click', () => {
    snowflakesEnabled = !snowflakesEnabled; // Status wechseln.
    if (snowflakesEnabled) {
        createSnowflakes(); // Schneeflocken erstellen.
        toggleSnowButton.innerText = 'Schneeflocken stoppen';
    } else {
        removeSnowflakes(); // Schneeflocken entfernen.
        toggleSnowButton.innerText = 'Schneeflocken starten';
    }
});

// Eventlistener für den Musik-Start/Stop-Button
toggleMusicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play(); // Musik abspielen.
        toggleMusicButton.innerText = 'Musik stoppen';
    } else {
        music.pause(); // Musik pausieren.
        toggleMusicButton.innerText = 'Musik starten';
    }
});

// Eventlistener für den Musikwechsel-Button
switchMusicButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length; // Nächstes Musikstück auswählen.
    music.src = musicTracks[currentTrackIndex]; // Musikquelle wechseln.
    music.play(); // Neue Musik automatisch abspielen.
    toggleMusicButton.innerText = 'Musik stoppen'; // Button-Text aktualisieren.
});

// Funktion zum Erstellen von Schneeflocken
function createSnowflakes() {
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div'); // Neues Div-Element.
        snowflake.className = 'snowflake'; // Klasse für Schneeflocken.
        snowflake.innerText = '❄'; // Schneeflocken-Symbol.
        snowflake.style.left = Math.random() * 100 + 'vw'; // Zufällige horizontale Position.
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Zufällige Größe.
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Zufällige Animationsdauer.
        document.querySelector('.snowflakes').appendChild(snowflake); // Schneeflocke hinzufügen.
        snowflakes.push(snowflake); // Schneeflocke speichern.
    }
}

// Funktion zum Entfernen aller Schneeflocken
function removeSnowflakes() {
    snowflakes.forEach(snowflake => {
        snowflake.remove(); // Element aus DOM entfernen.
    });
    snowflakes = []; // Array leeren.
}

// Funktion zum Erstellen festlicher Symbole
function createFestiveIcons() {
    const container = document.querySelector('.festive-icons'); // Container für Symbole.

    icons.forEach(icon => {
        const img = document.createElement('img'); // Neues Bild-Element.
        img.src = icon; // Bildquelle setzen.
        img.className = 'festive-icon'; // Klasse für das Styling.
        container.appendChild(img); // Symbol hinzufügen.
    });
}

// Funktion zur zufälligen Anzeige von Symbolen
function showRandomIcon() {
    const allIcons = document.querySelectorAll('.festive-icon'); // Alle Symbole auswählen.
    const randomIndex = Math.floor(Math.random() * allIcons.length); // Zufälligen Index wählen.
    const randomIcon = allIcons[randomIndex]; // Zufälliges Symbol auswählen.

    const { x, y } = getRandomPosition(); // Zufällige Position bestimmen.
    randomIcon.style.left = `${x}px`; // X-Position setzen.
    randomIcon.style.top = `${y}px`; // Y-Position setzen.
    randomIcon.style.opacity = 1; // Symbol sichtbar machen.

    setTimeout(() => {
        randomIcon.style.opacity = 0; // Nach 2 Sekunden unsichtbar machen.
    }, 2000);
}

// Funktion zur Bestimmung einer zufälligen Position
function getRandomPosition() {
    const x = Math.random() * window.innerWidth; // Zufällige horizontale Position.
    const y = Math.random() * window.innerHeight; // Zufällige vertikale Position.
    return { x, y };
}

// Initialisierung
createFestiveIcons(); // Symbole erstellen.
setInterval(showRandomIcon, 3000); // Alle 3 Sekunden ein zufälliges Symbol anzeigen.
