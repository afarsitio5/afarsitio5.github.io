class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Andrade Roman Arturo Fabian 1.`;
  }
} 
customElements.define(
  "mi-footer", MiFooter);
