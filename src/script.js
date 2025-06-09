const buttonElements = document.querySelectorAll(".btn");
const frameElement = document.getElementById("challenge-frame");

const handleClick = (e) => {
  let url = "";
  const clickedButtonEl = e.currentTarget;

  if (clickedButtonEl.classList.contains("btn-1")) {
    url = "qr-code/index.html";
  } else if (clickedButtonEl.classList.contains("btn-2")) {
    url = "blog-preview-card/index.html";
  } else if (clickedButtonEl.classList.contains("btn-3")) {
    url = "social-links-profile/index.html";
  } else if (clickedButtonEl.classList.contains("btn-4")) {
    url = "recipe-page/index.html";
  }

  if (url && frameElement) {
    frameElement.src = url;
    frameElement.style.display = "block";
  }
};

buttonElements.forEach((btn) => btn.addEventListener("click", handleClick));
