export function initTextEl() {

    class Text extends HTMLElement {

        constructor() {
            super();
            this.render();
        }

        render() {

            const shadow = this.attachShadow({mode: 'open'});

            const div = document.createElement("div");
            const style = document.createElement("style");
            const type = this.getAttribute("type") as string;
            const content = this.innerHTML;

            div.classList.add("text");

            if(type == "title") {

                style.innerHTML = `
                    .text {
                        width: 100%;
                    }

                    .title {
                        margin: 0;
                        padding: 10px 0;
                        font-family: 'Poppins', sans-serif;
                        font-size: 45px;
                        font-weight: bold;
                    }
                `;

                div.innerHTML = `
                    <h1 class="title">${content}</h1>
                `;

            } else if(type == "subtitle") {

                style.innerHTML = `
                    .text {
                        width: 100%;
                    }

                    .subtitle {
                        margin: 0;
                        padding: 10px 0;
                        font-family: 'Poppins', sans-serif;
                        font-size: 38px;
                        font-weight: bold;
                    }
                `;

                div.innerHTML = `
                    <h1 class="subtitle">${content}</h1>
                `;

            } else if(type == "large") {

                style.innerHTML = `
                    .text {
                        width: 100%;
                    }

                    .large {
                        padding: 10px 0;
                        font-family: 'Poppins', sans-serif;
                        font-size: 22px;
                        font-weight: medium;
                    }
                `;

                div.innerHTML = `
                    <h1 class="large">${content}</h1>
                `;

            } else if(type == "body") {

                style.innerHTML = `
                    .text {
                        width: 100%;
                    }

                    .text-body {
                        margin: 0;
                        padding: 10px 0;
                        font-size: 18px;
                        font-weight: 400;
                    }
                `;

                div.innerHTML = `
                    <h1 class="text-body">${content}</h1>
                `;
            }

            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }

    customElements.define("text-el", Text);
}