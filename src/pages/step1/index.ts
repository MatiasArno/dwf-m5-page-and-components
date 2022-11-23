export function initStep1(params: any) {

    const div = document.createElement("div");

    div.innerHTML = `
        <text-el type="title">Necesitamos algunos datos más</text-el>

        <input-el label="Email" type="text"></input-el>

        <input-el label="Comida favorita" type="text"></input-el>

        <input-el label="Alguna de estas tres opciones" type="options"></input-el>

        <button-el label="Continuar" type="normal" class="btn-continue"></button-el>

        <button-el label="Volver" type="outlined" class="btn-back"></button-el>
    `;

    const btnContinueEl = div.querySelector(".btn-continue") as HTMLElement;
    const btnBackEl = div.querySelector(".btn-back") as HTMLElement;

    btnContinueEl.addEventListener("click", () => params.goTo("/thankyou"));
    btnBackEl.addEventListener("click", () => params.goTo("/welcome"));

    return div;
}