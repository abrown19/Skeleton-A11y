import { LitElement, html } from "../lit-all.min.js";

class Queries extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>@Media</h2>
      <p>
        Skeleton A11y utilise les directives CSS @media pour adapter l'affichage sur les différents
        écrans. Préférez configurer votre site pour mobile en premier (approche mobile first), puis
        inclure dans les directives @media les parties spécifiques aux plus grands terminaux.
      </p>

      <ul class="query-list">
        <li><strong>Bureau HD</strong>: 1200px</li>
        <li><strong>Bureau</strong>: 992px</li>
        <li><strong>Tablette</strong>: 768px</li>
        <li><strong>Phablette</strong>: 576px</li>
        <li><strong>Mobile</strong>: 0px</li>
      </ul>

      <pre><code class="css">/* CSS Mobile first */

/* Phablettes et + */
@media (min-width: 550px) {}

/* Tablettes et + */
@media (min-width: 750px) {}

/* Bureau et + */
@media (min-width: 1000px) {}

/* Bureau HD et + */
@media (min-width: 1200px) {}
</code></pre>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-queries", Queries);
