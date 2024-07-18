import { LitElement, html } from "../lit-all.min.js";

class Utilities extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>Utilitaires</h2>
      <p>
        Skeleton A11y possède plusieurs classes qui servent à aider le design sans avoir à les
        redéfinir vous-même.
      </p>

      <table class="full-width">
        <thead>
          <tr>
            <th>Classe</th>
            <th>Utilisation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>.full-width</code></td>
            <td>Fait prendre toute la largeur du conteneur à un élément.</td>
          </tr>
          <tr>
            <td><code>.max-full-width</code></td>
            <td>
              Fait prendre au maximum toute la largeur du conteneur à un élément (utile pour les
              images).
            </td>
          </tr>
          <tr>
            <td><code>.m-t-[0|1]</code></td>
            <td>Applique une marge supérieure de 0 ou 1rem.</td>
          </tr>
          <tr>
            <td><code>.m-b-[0|1]</code></td>
            <td>Applique une marge inférieure de 0 ou 1rem.</td>
          </tr>
          <tr>
            <td><code>.text-error</code></td>
            <td>Affiche un texte avec la couleur d'erreur.</td>
          </tr>
          <tr>
            <td><code>.text-success</code></td>
            <td>Affiche un texte avec la couleur de succès.</td>
          </tr>
          <tr>
            <td><code>.no-padding</code></td>
            <td>Supprime les paddings sur une colonne.</td>
          </tr>
          <tr>
            <td><code>.sr-only</code></td>
            <td>Cache du texte pour qu'il ne soit lisible que pour les lecteurs d'écrans.</td>
          </tr>
        </tbody>
      </table>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-utilities", Utilities);
