function handleRoute(route) {
  const h1El = document.querySelector(".titulo") as HTMLElement;

  const routes = [
    {
      path: /\/url1/,
      handler: () => (h1El.textContent = "url 1"),
    },
    {
      path: /\/url2/,
      handler: () => (h1El.textContent = "url 2"),
    },
    {
      path: /\/buscar\/./,
      handler: () => (h1El.textContent = "buscar"),
    },
  ];

  for (const i of routes) {
    if (i.path.test(route)) {
      i.handler();
    }
  }
}

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}

(function main() {
  const boton1 = document.querySelector(".button-1") as HTMLElement;
  const boton2 = document.querySelector(".button-2") as HTMLElement;
  const boton3 = document.querySelector(".buscar") as HTMLElement;

  boton1.addEventListener("click", () => {
    goTo("/url1");
  });
  boton2.addEventListener("click", () => {
    goTo("/url2");
  });
  boton3.addEventListener("click", () => {
    goTo("/buscar/termo");
  });
})();
