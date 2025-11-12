// 🔹 Lien de la photo de profil — change simplement l'URL ci-dessous
const profilePic = document.getElementById("profilePic");
profilePic.src = "https://media.discordapp.net/attachments/1438259584564203642/1438259606680768612/2baea284131e03ae59c5483011ab2e4d.webp?ex=69163b23&is=6914e9a3&hm=c83ee496f43835a76d4fda0df6a0b32df5f3ab4cdea911ee7c86d56067edb39d&=&format=webp"; // 🔧 Mets ici ton lien d'image

// 🔹 Tableau des vouches : tu peux modifier le message et le username ici
const vouches = [
  { user: "@kairo", message: "200$ deal +rep" },
  { user: "@CHEM55", message: "vouch" },
  { user: "@a0ra", message: "legit++" },
  { user: "@realB", message: "nice account" },
  { user: "@Mss_", message: "fast delivery" },
  { user: "@.vv.", message: "70$ legit" },
];

// 🔹 Génération des vouches
const vouchesContainer = document.getElementById("vouches");
const notification = document.getElementById("notification");

vouches.forEach((item) => {
  const div = document.createElement("div");
  div.className = "vouch";
  div.innerHTML = `
    <div class='vouch-icon'>↑</div>
    <div>
      <div class='vouch-username'>${item.user}</div>
      <div class='vouch-message'>${item.message}</div>
    </div>
  `;
  vouchesContainer.appendChild(div);
});

// 🔹 Bouton “Add Vouch” = affiche une notif
document.getElementById("addVouchBtn").addEventListener("click", () => {
  showNotification("Adding a vouch is not available right now.");
});

// 🔹 Notification moderne
function showNotification(text) {
  notification.textContent = text;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2500);
}
