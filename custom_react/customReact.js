function customRender(reactElement, mainContainer) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  mainContainer.appendChild(domElement);
  */
  // Now we have to make it more modular
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

const reactElement = {
  // A react like component which contains type,properties/attributes of that type , and a text of that type which is children
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to me visit google",
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
