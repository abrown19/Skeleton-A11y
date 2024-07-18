import { LitElement, html } from "../lit-all.min.js";

class Lists extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>Listes</h2>
      <div class="row">
        <div class="col">
          <ul>
            <li>Les listes non ordonnées ont un style basique</li>
            <li>
              Elles utilisent un cercle pour la puce
              <ul>
                <li>Vous pouvez imbriquer vos listes !</li>
                <li>N'importe quel type de liste peut être imbriqué</li>
              </ul>
            </li>
            <li>Un élément de liste en plus</li>
          </ul>
        </div>
        <div class="col">
          <ol>
            <li>Les listes ordonnées ont aussi un style basique</li>
            <li>
              Elles utilisent un chiffre décimal
              <ul>
                <li>Vous pouvez imbriquer vos listes !</li>
                <li>N'importe quel type de liste peut être imbriqué</li>
              </ul>
            </li>
            <li>Dernier élément de liste</li>
          </ol>
        </div>
      </div>

      <pre><code class="html">&lt;!-- Skeleton A11y ne supporte pas les listes de plus de 2 niveaux --&gt;
&lt;ul&gt;
  &lt;li&gt;Elément 1&lt;/li&gt;
  &lt;li&gt;
    Elément 2
    &lt;ul&gt;
      &lt;li&gt;Elément 2.1&lt;/li&gt;
      &lt;li&gt;Elément 2.2&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Elément 3&lt;/li&gt;
&lt;/ul&gt;</code></pre>

      <dl>
        <dt>Liste de définition :</dt>
        <dd>Les éléments de liste font face à leur définition.</dd>
        <dt>Une deuxième définition :</dt>
        <dd>Lorem ipsum</dd>
        <dt>Une troisième définition plus longue :</dt>
        <dd>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </dd>
      </dl>

      <pre><code>&lt;dl&gt;
  &lt;dt&gt;Liste de définition : &lt;/dt&gt;
  &lt;dd&gt;Les éléments de liste font face à leur définition.&lt;/dd&gt;
  &lt;dt&gt;Une deuxième définition : &lt;/dt&gt;
  &lt;dd&gt;Lorem ipsum&lt;/dd&gt;
  &lt;dt&gt;Une troisième définition plus longue : &lt;/dt&gt;
  &lt;dd&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-lists", Lists);
