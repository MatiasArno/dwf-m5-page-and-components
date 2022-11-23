export function initHome(params: any) {

    const div = document.createElement("div");

    div.innerHTML = `
        <text-el type="title">Te damos la bienvenida a esta página</text-el>

        <text-el type="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem a accusantium nostrum corrupti placeat harum, vel perferendis iste esse ratione quos, in eius cum doloremque? Explicabo molestias aut molestiae ratione.</text-el>

        <text-el type="large" class="large">Para continuar ingresá tu nombre</text-el>

        <input-el label="Nombre" type="text"></input-el>

        <button-el label="Comenzar" type="normal" class="btn-start"></button-el>
    `;

    const btnEl = div.querySelector(".btn-start") as HTMLElement;
    btnEl.addEventListener("click", () => params.goTo("/step-1"));

    return div;    
}