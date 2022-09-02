export function removeDom() {
  const main = document.querySelector("main");
  let mainChildren = main.childNodes;

  while (mainChildren.length > 0) {
    main.removeChild(mainChildren[0]);
  }
}
