import { LitElement, html } from "../lit-all.min.js";

class Alerts extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>Alertes</h2>

      <p class="error">
        <strong>Attention :</strong> Je suis une alerte importante qui utilise la classe
        <code>.error</code>.
      </p>
      <p class="warning">
        <strong>Attention :</strong> Je suis une alerte qui utilise la classe <code>.warning</code>.
      </p>
      <p class="success">
        <strong>Youpi :</strong> Je suis une alerte qui utilise la classe <code>.success</code>.
      </p>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-alerts", Alerts);
