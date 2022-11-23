export function initHeaderEl() {

    class Header extends HTMLElement {

        constructor() {
            super();
            this.render();
        }

        render() {

            const shadow = this.attachShadow({mode: 'open'});
            const div = document.createElement("div");
            const style = document.createElement("style");

            div.classList.add("header");

            style.innerHTML = `
                .header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 60px;
                    background-color: #FF8282;
                }

                .header--title {
                    font-size: 22px;
                    font-weight: 500;
                }
            `;

            div.innerHTML = `
                <h1 class="header--title">Header</h1>
            `;

            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }

    customElements.define("header-el", Header);
}