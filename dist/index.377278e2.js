function handleRoute(route) {
    const h1El = document.querySelector(".titulo");
    const routes = [
        {
            path: /\/url1/,
            handler: ()=>h1El.textContent = "url 1"
        },
        {
            path: /\/url2/,
            handler: ()=>h1El.textContent = "url 2"
        },
        {
            path: /\/buscar\/./,
            handler: ()=>h1El.textContent = "buscar"
        }, 
    ];
    for (const i of routes)if (i.path.test(route)) i.handler();
}
function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
}
(function main() {
    const boton1 = document.querySelector(".button-1");
    const boton2 = document.querySelector(".button-2");
    const boton3 = document.querySelector(".buscar");
    boton1.addEventListener("click", ()=>{
        goTo("/url1");
    });
    boton2.addEventListener("click", ()=>{
        goTo("/url2");
    });
    boton3.addEventListener("click", ()=>{
        goTo("/buscar/termo");
    });
/* window.addEventListener("load", () => {
    handleRoute(location.pathname);
  }); */ })();

//# sourceMappingURL=index.377278e2.js.map
