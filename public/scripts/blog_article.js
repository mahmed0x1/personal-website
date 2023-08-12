hljs.highlightAll();
const links = document.links;
for (const link of links) {
  link.setAttribute("target", "_blank");
}
