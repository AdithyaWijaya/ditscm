(function() {
  const imgUrl = "https://i.pinimg.com/736x/dd/0e/ae/dd0eae4117ac6547443d5e27cd571f7c.jpg";

  // Backdrop overlay
  const backdrop = document.createElement("div");
  backdrop.style.position = "fixed";
  backdrop.style.top = "0";
  backdrop.style.left = "0";
  backdrop.style.width = "100%";
  backdrop.style.height = "100%";
  backdrop.style.background = "rgba(0, 0, 0, 0.6)";
  backdrop.style.zIndex = "9998";
  backdrop.style.opacity = "0";
  backdrop.style.transition = "opacity 0.3s ease";
  backdrop.onclick = () => {
    popup.style.opacity = "0";
    popup.style.transform = "translate(-50%, -50%) scale(0.9)";
    backdrop.style.opacity = "0";
    setTimeout(() => {
      popup.remove();
      backdrop.remove();
    }, 300);
  };

  // Popup container
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%) scale(0.9)";
  popup.style.background = "#fff";
  popup.style.padding = "15px";
  popup.style.borderRadius = "12px";
  popup.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.3)";
  popup.style.zIndex = "9999";
  popup.style.maxWidth = "90%";
  popup.style.maxHeight = "90vh";
  popup.style.overflowY = "auto";
  popup.style.opacity = "0";
  popup.style.transition = "all 0.3s ease";

  // Image
  const img = document.createElement("img");
  img.src = imgUrl;
  img.style.maxWidth = "100%";
  img.style.height = "auto";
  img.style.display = "block";
  img.style.borderRadius = "8px";

  // Close button
  const close = document.createElement("button");
  close.innerHTML = "&times;";
  close.style.position = "absolute";
  close.style.top = "-12px";
  close.style.right = "-12px";
  close.style.width = "36px";
  close.style.height = "36px";
  close.style.borderRadius = "50%";
  close.style.border = "none";
  close.style.background = "linear-gradient(135deg, #ff6b6b, #ee5a5a)";
  close.style.color = "#fff";
  close.style.fontSize = "22px";
  close.style.fontWeight = "bold";
  close.style.cursor = "pointer";
  close.style.boxShadow = "0 4px 15px rgba(238, 90, 90, 0.4)";
  close.style.transition = "all 0.2s ease";
  close.style.lineHeight = "1";
  close.onmouseover = function() {
    this.style.transform = "scale(1.1)";
    this.style.background = "linear-gradient(135deg, #ff5252, #ff1744)";
    this.style.boxShadow = "0 6px 20px rgba(255, 23, 68, 0.5)";
  };
  close.onmouseout = function() {
    this.style.transform = "scale(1)";
    this.style.background = "linear-gradient(135deg, #ff6b6b, #ee5a5a)";
    this.style.boxShadow = "0 4px 15px rgba(238, 90, 90, 0.4)";
  };
  close.onclick = function() {
    popup.style.opacity = "0";
    popup.style.transform = "translate(-50%, -50%) scale(0.9)";
    backdrop.style.opacity = "0";
    setTimeout(() => {
      popup.remove();
      backdrop.remove();
    }, 300);
  };

  popup.appendChild(close);
  popup.appendChild(img);

  document.body.appendChild(backdrop);
  document.body.appendChild(popup);

  // Trigger animation
  requestAnimationFrame(() => {
    setTimeout(() => {
      popup.style.opacity = "1";
      popup.style.transform = "translate(-50%, -50%) scale(1)";
      backdrop.style.opacity = "1";
    }, 10);
  });

  // Desktop override
  if (window.innerWidth > 500) {
    popup.style.maxWidth = "400px";
  }
})();