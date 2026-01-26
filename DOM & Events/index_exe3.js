






const getRandomColor = function () {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]

    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}

function checkColor() {
    for (let i = 0; i < 5; i++) {  // כמה קופסאות את רוצה?
        const box = document.createElement("div");
        box.className = "box";  // כדי שה-CSS יחול עליה
        box.onmouseenter = function () {
            this.style.backgroundColor = getRandomColor();
        }
        const container = document.getElementById("container");
        container.appendChild(box)
        // צרי קופסה
        // תני לה class
        // תני לה אירוע onmouseenter
        // הוסיפי אותה ל-container
    }

}

checkColor();  // הפעלת הפונקציה