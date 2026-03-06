(function() {
  const imgUrl = "https://i.pinimg.com/736x/dd/0e/ae/dd0eae4117ac6547443d5e27cd571f7c.jpg";

  // Backdrop overlay
  const backdrop = document.createElement("div");
  backdrop.style.position = "fixed";
  backdrop.style.top = "0";
  backdrop.style.left = "0";
  backdrop.style.width = "100%";
  backdrop.style.height = "100%";
  backdrop.style.background = "rgba(0, 0, 0, 0.85)";
  backdrop.style.zIndex = "9998";
  backdrop.style.opacity = "0";
  backdrop.style.transition = "opacity 0.3s ease";
  backdrop.onclick = () => {
    popup.style.opacity = "0";
    backdrop.style.opacity = "0";
    setTimeout(() => {
      popup.remove();
      backdrop.remove();
    }, 300);
  };

  // Popup container - hampir memenuhi layar
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#000";
  popup.style.padding = "0";
  popup.style.zIndex = "9999";
  popup.style.maxWidth = "95%";
  popup.style.maxHeight = "95vh";
  popup.style.overflow = "hidden";
  popup.style.opacity = "0";
  popup.style.transition = "opacity 0.3s ease";

  // Image - tanpa border
  const img = document.createElement("img");
  img.src = imgUrl;
  img.style.maxWidth = "100%";
  img.style.maxHeight = "95vh";
  img.style.display = "block";
  img.style.objectFit = "contain";

  // Close button - di depan gambar pojok kanan atas
  const close = document.createElement("button");
  close.innerHTML = "&times;";
  close.style.position = "absolute";
  close.style.top = "10px";
  close.style.right = "10px";
  close.style.width = "40px";
  close.style.height = "40px";
  close.style.borderRadius = "50%";
  close.style.border = "none";
  close.style.background = "rgba(255, 255, 255, 0.2)";
  close.style.color = "#fff";
  close.style.fontSize = "28px";
  close.style.fontWeight = "bold";
  close.style.cursor = "pointer";
  close.style.backdropFilter = "blur(5px)";
  close.style.transition = "all 0.2s ease";
  close.style.lineHeight = "1";
  close.style.zIndex = "10000";
  close.onmouseover = function() {
    this.style.background = "rgba(255, 255, 255, 0.4)";
    this.style.transform = "scale(1.1)";
  };
  close.onmouseout = function() {
    this.style.background = "rgba(255, 255, 255, 0.2)";
    this.style.transform = "scale(1)";
  };
  close.onclick = function(e) {
    e.stopPropagation();
    popup.style.opacity = "0";
    backdrop.style.opacity = "0";
    setTimeout(() => {
      popup.remove();
      backdrop.remove();
    }, 300);
  };

  popup.appendChild(img);
  popup.appendChild(close);

  document.body.appendChild(backdrop);
  document.body.appendChild(popup);

  // Trigger animation
  requestAnimationFrame(() => {
    setTimeout(() => {
      popup.style.opacity = "1";
      backdrop.style.opacity = "1";
    }, 10);
  });
})();
