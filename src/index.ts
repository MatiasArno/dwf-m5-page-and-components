import {initRouter}     from "./router";
import {initHeaderEl}   from "./components/header-el";
import {initFooterEl}   from "./components/footer-el";
import {initTextEl}     from "./components/text-el";
import {initInputEl}    from "./components/input-el";
import {initButtonEl}   from "./components/button-el";

function main() {

    const root = document.querySelector(".root") as HTMLElement;

    initRouter(root);
    initHeaderEl();
    initTextEl();
    initInputEl();
    initButtonEl();
    initFooterEl();
}

main();