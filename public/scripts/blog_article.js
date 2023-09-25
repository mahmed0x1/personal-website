hljs.highlightAll();
const links = document.links;
for (const link of links) {
  if (link.parentElement.tagName.toLowerCase() === "p") {
    link.setAttribute("target", "_blank");
  }
}
