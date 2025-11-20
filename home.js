const users = [
  { username: "xyz", slug: "xyz" },
  { username: "Myzu", slug: "index" },
];

const usersList = document.getElementById("usersList");

users.forEach((user, index) => {
  const rank = index + 1;
  const isAdmin = user.username.toLowerCase() === "xyz";

  const div = document.createElement("div");
  div.className = "user-card";

  // Rend toute la carte cliquable
  div.onclick = () => {
    window.location.href = `${user.slug}.html`;
  };

  div.innerHTML = `
    <div class="user-info">
      <div class="rank">#${rank}</div>

      <div class="username">
        ${user.username}
        ${isAdmin ? `<div class="admin-badge">ADMIN</div>` : ""}
      </div>
    </div>
  `;

  usersList.appendChild(div);
});

