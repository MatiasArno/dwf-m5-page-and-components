export function initThankyou(params: any) {

    const div = document.createElement("div");

    div.innerHTML = `
        <text-el type="title">Gracias</text-el>

        <text-el type="large">Toda la información que nos brindaste es muy importante</text-el>

        <button-el label="De nada" type="normal" class="btn-welcome"></button-el>
    `;

    const btnWelcomeEl = div.querySelector(".btn-welcome") as HTMLElement;
    btnWelcomeEl.addEventListener("click", () => params.goTo("/welcome"));

    return div;
}