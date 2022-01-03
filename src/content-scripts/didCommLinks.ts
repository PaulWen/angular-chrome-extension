function checkForDidCommLinks() {
  const didCommLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll('a[href*="didcomm://"]');

  if (didCommLinks[0]) {
        alert("Found a DIDComm Link: " + didCommLinks[0].href);
  }
}

// whenever the DOM is updated check if a DidComm Link has been added dynamically
// this might be the case in the context of SPAs
let observer = new MutationObserver(mutations => {
    checkForDidCommLinks();
});
observer.observe(document, { childList: true, subtree: true });

checkForDidCommLinks();
