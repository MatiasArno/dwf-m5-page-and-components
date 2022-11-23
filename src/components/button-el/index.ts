export function initButtonEl() {

    class Button extends HTMLElement {

        constructor() {
            super();
            this.render();
        }

        render() {

            const button = document.createElement("button");
            const type = this.getAttribute("type") as string;
            const label = this.getAttribute("label") as string;

            if(type == "normal") {

                button.style.width = "100%";
                button.style.height = "50.4px";
                button.style.borderRadius = "4px";
                button.style.border = "none";
                button.style.backgroundColor = "#9CBBE9";
                button.innerHTML = label;
                button.style.fontSize = "22px";
                button.style.fontWeight = "500";
                button.style.margin = "12px 0";

            } else if(type == "outlined") {

                button.style.width = "100%";
                button.style.height = "50.4px";
                button.style.borderRadius = "4px";
                button.style.border = "2px solid black";
                button.style.backgroundColor = "white";
                button.innerHTML = label;
                button.style.fontSize = "22px";
                button.style.fontWeight = "500";  
                button.style.margin = "12px 0";
            }

            this.appendChild(button);
        }
    }

    customElements.define("button-el", Button);
}