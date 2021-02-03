function reportPageLoaded() {
  console.log("page loaded");
}

function linkClicked() {
  console.log("link clicked");
}

window.addEventListener('load', (event) => {
    reportPageLoaded();
});
