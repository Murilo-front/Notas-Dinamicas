export function alertaErro(errorMsg) {
    const errorAlert = document.querySelector(".errorAlert");
    const errorText = document.querySelector(".errorMsg");
    errorText.innerHTML = errorMsg;
    errorAlert.style.opacity = "1";
    errorAlert.classList.add("errorOn");
    setTimeout(() => {
        errorAlert.classList.remove("errorOn");
        errorText.innerHTML = "";
        errorAlert.style.opacity = "0";
    }, 5000);
}
//# sourceMappingURL=errorAlert.js.map