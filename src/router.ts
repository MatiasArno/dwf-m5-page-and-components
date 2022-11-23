import {initHome} from "./pages/welcome";
import {initStep1} from "./pages/step1"; 
import {initThankyou} from "./pages/thankyou"; 

const routes = [
    {
        path: /\/welcome/,
        component: initHome
    },
    {
        path: /\/step-1/,
        component: initStep1
    },
    {
        path: /\/thankyou/,
        component: initThankyou
    }
];

export function initRouter(container: HTMLElement) {

    function goTo(path: string) {

        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route: string) {
    
        console.log(`handleRoute -->| ${route} |<--`);
        console.log(`Ruta actual -->| ${location.pathname} |<--`);
    
        for(const r of routes) {
    
            if(r.path.test(route)) {

                const el = r.component({goTo: goTo});
    
                if(container.firstChild) {
                    container.firstChild.remove();
                }
    
                container.appendChild(el);
            }
        }
    }

    location.pathname == "/" ? goTo("/welcome") : handleRoute(location.pathname);
    window.onpopstate = () => handleRoute(location.pathname);
}
