export function initFooterEl() {

    class Footer extends HTMLElement {

        constructor() {
            super();
            this.render();
        }

        render() {

            const shadow = this.attachShadow({mode: 'open'});
            const div = document.createElement("div");
            const style = document.createElement("style");

            div.classList.add("footer");

            style.innerHTML = `
                .footer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 233px;
                    background-color: #FFA0EA;
                }

                .footer--title {
                    font-size: 22px;
                    font-weight: 500;
                }
            `;

            div.innerHTML = `
                <h1 class="footer--title">Footer</h1>
            `;

            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }

    customElements.define("footer-el", Footer);
}