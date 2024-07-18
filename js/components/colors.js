import { LitElement, html } from "../lit-all.min.js";

class Colors extends LitElement {
  #colors = [
    {
      var: "--ske-main-color",
      desc: "Couleur principale du thème.",
    },
    {
      var: "--ske-main-color-darker",
      desc: "Couleur principale du thème en version plus foncée.",
    },
    {
      var: "--ske-light-txt",
      desc: "Couleur des textes sur fond foncé.",
    },
    {
      var: "--ske-dark-bg",
      desc: "Couleur des fonds foncés.",
    },
    {
      var: "--ske-dark-txt",
      desc: "Couleur des textes sur fond clair.",
    },
    {
      var: "--ske-light-bg",
      desc: "Couleur des fonds clairs.",
    },
    {
      var: "--ske-border-color",
      desc: "Couleur des bordures.",
    },
    {
      var: "--ske-alert-bg",
      desc: "Couleur de fond des alertes d'erreur.",
    },
    {
      var: "--ske-alert-txt",
      desc: "Couleur de texte des alertes d'erreur.",
    },
    {
      var: "--ske-warning-bg",
      desc: "Couleur de fond des alertes d'avertissement.",
    },
    {
      var: "--ske-warning-txt",
      desc: "Couleur de texte des alertes d'avertissement.",
    },
    {
      var: "--ske-success-bg",
      desc: "Couleur de fond des alertes de succès.",
    },
    {
      var: "--ske-success-txt",
      desc: "Couleur de texte des alertes de succès.",
    },
  ];

  constructor() {
    super();
  }

  render() {
    return html`<h2>Couleurs</h2>

      <p>
        Skeleton A11y utilise des variables CSS globales pour gérer les couleurs du thème. Les
        couleurs d'origine sont accessibles, mais il est aussi très simple de modifier le thème.<br />
        Il suffit de redéfinir la variable dans le <code>:root</code> de l'application.
      </p>

      <pre><code>:root { 
  --ske-main-color: #32d548;
}</code></pre>

      <table class="full-width table-colors">
        <thead>
          <tr>
            <th><span class="sr-only">Couleur</span></th>
            <th>Variable</th>
            <th>Utilisation</th>
          </tr>
        </thead>
        <tbody>
          ${this.#colors.map(
            (color) => html`<tr>
              <td><span class="swatch" style="background: var(${color.var})"></span></td>
              <td><code>${color.var}</code></td>
              <td>${color.desc}</td>
            </tr>`
          )}
        </tbody>
      </table>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-colors", Colors);
