# function reviewer notes

## Architecture
This is a small browser-only JavaScript counter built with plain HTML, CSS, and JavaScript. `index.html` provides the DOM structure, `style.css` handles presentation, and `script.js` owns counter state and button interactions. It is run directly by opening `index.html`; there is no framework, build step, or backend.

## Conventions
- Keep application state in `script.js`; the counter is represented by the module-level `let count = 0`.
- Cache DOM elements with `document.querySelector()` using the IDs defined by the HTML, as shown by `#count`, `#decrease`, `#reset`, and `#increase` in `script.js`.
- Mutations to the counter must refresh the UI through `updateDisplay()`, which assigns `countDisplay.textContent = count`.
- Attach behavior directly with `addEventListener("click", ...)`; each control has a dedicated inline arrow-function handler in `script.js`.
- Preserve the simple separation of concerns described in `README.md`: markup in `index.html`, appearance in `style.css`, and state/event logic in `script.js`.
- The counter supports unrestricted incrementing and decrementing; only the reset action assigns `0`.

## Watch out for
- Flag counter changes that do not call `updateDisplay()`, since state and rendered text can otherwise diverge.
- Flag selectors or renamed element IDs that no longer match the cached selectors in `script.js`.
- Avoid introducing framework code, build tooling, or unnecessary abstractions for this intentionally beginner-friendly plain-browser project.
- Ensure event handlers are registered only after the referenced DOM elements exist; changing script placement or loading behavior can make the `querySelector()` results null.