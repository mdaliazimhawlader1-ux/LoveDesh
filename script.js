const button = document.querySelector("button");
const container = document.querySelector(".container");

button.onclick = function () {
  let name = prompt("তোমার নাম লিখো:");
  let post = prompt("কি পোস্ট করতে চাও?");

  if (name && post) {
    container.innerHTML += `
      <div class="post">
        <h3>${name}</h3>
        <p>${post}</p>
      </div>
    `;
  }
};
