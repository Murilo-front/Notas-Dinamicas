export function alertaErro(errorMsg: string) {
  const errorAlert = document.querySelector(".errorAlert") as HTMLDivElement;
  const errorText = document.querySelector(".errorMsg") as HTMLParagraphElement;
  errorText.innerHTML = errorMsg;
  errorAlert!.style.opacity = "1";
  errorAlert!.classList.add("errorOn");
  setTimeout(() => {
    errorAlert!.classList.remove("errorOn");
    errorText.innerHTML = "";
    errorAlert!.style.opacity = "0";
  }, 5000);
}
