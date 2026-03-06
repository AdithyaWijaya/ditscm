(function() {
  const imgUrl = "https://i.pinimg.com/736x/dd/0e/ae/dd0eae4117ac6547443d5e27cd571f7c.jpg"; // ganti dengan link gambar

  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#fff";
  popup.style.padding = "10px";
  popup.style.border = "2px solid black";
  popup.style.zIndex = "9999";

  const img = document.createElement("img");
  img.src = imgUrl;
  img.style.maxWidth = "400px";

  const close = document.createElement("button");
  close.innerText = "Close";
  close.style.display = "block";
  close.style.marginTop = "10px";
  close.onclick = () => popup.remove();

  popup.appendChild(img);
  popup.appendChild(close);

  document.body.appendChild(popup);
})();