export function removeDom() {
  const main = document.querySelector("main");
  let mainChildren = main.childNodes;

  while (mainChildren.length > 0) {
    main.removeChild(mainChildren[0]);
  }
}

export function removeAllDom() {
  const content = document.getElementById("content");
  let contentChildren = content.childNodes;

  while (contentChildren.length > 0) {
    content.removeChild(contentChildren[0]);
  }
}