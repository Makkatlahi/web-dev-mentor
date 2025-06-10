const buttonElements = document.querySelectorAll(".btn");
const frameElement = document.getElementById("challenge-frame");

const handleClick = (e) => {
  let url = "";
  const clickedButtonEl = e.currentTarget;

  if (clickedButtonEl.classList.contains("btn-1")) {
    url = "src/qr-code/index.html";
  } else if (clickedButtonEl.classList.contains("btn-2")) {
    url = "src/blog-preview-card/index.html";
  } else if (clickedButtonEl.classList.contains("btn-3")) {
    url = "src/social-links-profile/index.html";
  } else if (clickedButtonEl.classList.contains("btn-4")) {
    url = "src/recipe-page/index.html";
  } else if (clickedButtonEl.classList.contains("btn-5")) {
    url = "src/product-preview-component/index.html";
  }

  if (url && frameElement) {
    frameElement.src = url;
    frameElement.style.display = "block";
  }
};

buttonElements.forEach((btn) => btn.addEventListener("click", handleClick));
