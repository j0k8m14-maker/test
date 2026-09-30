const button = document.querySelector("#helloBtn");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "🎉 잘 작동합니다! 이제 GitHub Pages로 배포해 보세요.";
});
