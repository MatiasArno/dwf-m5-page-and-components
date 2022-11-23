export function initInputEl() {

    class InputField extends HTMLElement {

        constructor() {
            super();
            this.render();
        }

        render() {

            const shadow = this.attachShadow({mode: 'open'});

            const div = document.createElement("div");
            const style = document.createElement("style");
            const type = this.getAttribute("type") as string;
            const label = this.getAttribute("label") as string;

            div.classList.add("input-container");

            if(type == "text") {

                style.innerHTML = `
                    * {
                        margin: 0;
                    }
                    
                    .input-container {
                        display: flex;
                        flex-direction: column;
                        padding: 10px 0;
                    }

                    .input--label {
                        font-size: 18px;
                        font-weight: 400px
                    }

                    .input--field {
                        height: 45px;
                        border: 2px solid black;
                        border-radius: 4px; 
                    }
                `;

                div.innerHTML = `
                    <label class="input--label">${label}</label>

                    <input type="text" class="input--field"></input>
                `;

            } else if(type == "options") {

                style.innerHTML = `
                    * {
                        margin: 0;
                    }

                    .input-container {
                        display: flex;
                        flex-direction: column;
                    }

                    .input--label {
                        font-size: 18px;
                        font-weight: 400px
                    }

                    .input--field {
                        height: 45px;
                        border: 2px solid black;
                        border-radius: 4px; 
                    }
                `;

                div.innerHTML = `
                    <label class="input--label">${label}</label>

                    <input list="objects" class="input--field">
                    <datalist id="objects">
                        <option value="Piedra" />
                        <option value="Papel" />
                        <option value="Tijera" />
                    </datalist>
                `;
            }

            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }

    customElements.define("input-el", InputField);
}