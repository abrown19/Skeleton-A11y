import { LitElement, html } from "../lit-all.min.js";

class Grids extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>Grille</h2>
      <p>
        La grille possède 12 colonnes et est basée sur
        <a href="http://flexboxgrid.com/#top">Flexbox Grid</a>.
        <br />
        Il y a 4 préfixes selon la taille de l'écran : sm, md, lg et xl. L'absence de préfixe permet
        d'appliquer un format pour toutes les tailles.
      </p>

      <p>
        Pour que la grille fonctionne, l'élément parent doit avoir la classe
        <code>.container</code>.
      </p>

      <table class="full-width responsive-table">
        <thead>
          <tr>
            <th></th>
            <th>
              Toutes tailles<br />
              <small>&gt;0px</small>
            </th>
            <th>
              Petit<br />
              <small>≥576px</small>
            </th>
            <th>
              Medium<br />
              <small>≥768px</small>
            </th>
            <th>
              Large<br />
              <small>≥992px</small>
            </th>
            <th>
              Extra large<br />
              <small>≥1200px</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Largeur du conteneur</th>
            <td>Aucune (automatique)</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
          </tr>
          <tr>
            <th scope="row">Préfixe de la classe</th>
            <td><code>.col-</code></td>
            <td><code>.col-sm-</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
            <td><code>.col-xl-</code></td>
          </tr>
          <tr>
            <th scope="row">Nombre de colonnes</th>
            <td colspan="5">12</td>
          </tr>
          <tr>
            <th scope="row">Padding latéral</th>
            <td colspan="5">
              3rem (1.5rem à gauche et à droite de chaque colonne).
              <br />
              Utiliser
              <code>.no-padding</code> pour supprimer le padding.
            </td>
          </tr>
          <tr>
            <th scope="row">Imbrication</th>
            <td colspan="5">Oui</td>
          </tr>
          <tr>
            <th scope="row">Réordonnement des colonnes</th>
            <td colspan="5">
              Non, pour des raisons d'accessibilité l'ordre des colonnes est celui du HTML
            </td>
          </tr>
        </tbody>
      </table>

      <div class="small-screen-table-data">
        <h3>Largeur du conteneur</h3>
        <dl>
          <dt>Toutes tailles &gt;0px</dt>
          <dd>Aucune (automatique)</dd>
          <dt>Petit ≥576px</dt>
          <dd>540px</dd>
          <dt>Medium ≥768px</dt>
          <dd>720px</dd>
          <dt>Large ≥992px</dt>
          <dd>960px</dd>
          <dt>Extra large ≥1200px</dt>
          <dd>1140px</dd>
        </dl>

        <h3>Préfixe de la classe</h3>
        <dl>
          <dt>Toutes tailles &gt;0px</dt>
          <dd>.col-</dd>
          <dt>Petit ≥576px</dt>
          <dd>.col-sm-</dd>
          <dt>Medium ≥768px</dt>
          <dd>.col-md-</dd>
          <dt>Large ≥992px</dt>
          <dd>.col-lg-</dd>
          <dt>Extra large ≥1200px</dt>
          <dd>.col-xl-</dd>
        </dl>

        <h3>Autres informations</h3>
        <dl>
          <dt>Nombre de colonnes</dt>
          <dd>12</dd>
          <dt>Padding latéral</dt>
          <dd>
            3rem (1.5rem à gauche et à droite de chaque colonne). Utiliser<code>.no-padding</code>
            pour supprimer le padding.
          </dd>
          <dt>Imbrication</dt>
          <dd>Oui</dd>
          <dt>Ordre des colonnes</dt>
          <dd>Non, pour des raisons d'accessibilité l'ordre des colonnes est celui du HTML</dd>
        </dl>
      </div>

      <div class="grid-sample">
        <h3>Taille automatique</h3>
        <p>
          En utilisant la classe <code>.col</code> sans préfixe, les colonnes sont réparties
          équitablement.
        </p>
        <div class="row">
          <div class="col">
            <p>.col</p>
          </div>
          <div class="col">
            <p>.col</p>
          </div>
          <div class="col">
            <p>.col</p>
          </div>
          <div class="col">
            <p>.col</p>
          </div>
        </div>

        <pre><code>&lt;div class="container"&gt;
&lt;div class="row"&gt;
    &lt;div class="col"&gt;&lt;/div&gt;
    &lt;div class="col"&gt;&lt;/div&gt;
    &lt;div class="col"&gt;&lt;/div&gt;
    &lt;div class="col"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>

        <h3>Taille fixe</h3>
        <p>
          Pour forcer la taille des colonnes il suffit d'utiliser
          <code>col-[préfixe]-[taille]</code> (exemple : <code>col-sm-6</code>).
          <br />
          La taille doit être comprise entre 1 et 12, et une absence de préfixe permettra un
          affichage identique quel que soit le média utilisé.
        </p>

        <div class="row">
          <div class="col-6">
            <p>.col-6</p>
          </div>
          <div class="col-6">
            <p>.col-6</p>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <p>.col-4</p>
          </div>
          <div class="col-2">
            <p>.col-2</p>
          </div>
          <div class="col-4">
            <p>.col-4</p>
          </div>
          <div class="col-2">
            <p>.col-2</p>
          </div>
        </div>

        <p>Utilisez différents préfixes pour changer la disposition selon la taille de l'écran.</p>
        <div class="row">
          <div class="col-md-8 col-3">
            <p>.col-md-8.col-3</p>
          </div>
          <div class="col-md-4 col-9">
            <p>.col-md-4.col-9</p>
          </div>
        </div>

        <p>
          Il est possible de déplacer une colonne vers la droite en utilisant le préfixe
          <code>offset</code>.
        </p>
        <div class="row">
          <div class="col-offset-3 col-9">
            <p>.col-offset-3.col-9</p>
          </div>
        </div>

        <h3>Imbrication</h3>
        <p>Les lignes peuvent être imbriquées entre elles.</p>

        <div class="row">
          <div class="col-5">
            <div class="row" style="margin-bottom: 0">
              <div class="col">
                <p>.col-6</p>
              </div>
              <div class="col">
                <p>.col-6</p>
              </div>
            </div>
          </div>
          <div class="col-7">
            <div class="row" style="margin-bottom: 0">
              <div class="col-2">
                <p>.col-2</p>
              </div>
              <div class="col-10">
                <p>.col-10</p>
              </div>
            </div>
          </div>
        </div>

        <pre><code>&lt;div class="container"&gt;
&lt;div class="row"&gt;
    &lt;div class="col-5"&gt;
        &lt;div class="row"&gt;
            &lt;div class="col"&gt;&lt;/div&gt;
            &lt;div class="col"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-7"&gt;
        &lt;div class="row"&gt;
            &lt;div class="col-2"&gt;&lt;/div&gt;
            &lt;div class="col-10"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>

        <h3>Alignement et distribution</h3>
        <p>Il est possible de contrôler l'alignement d'une colonne dans sa ligne.</p>

        <div class="row row-start box">
          <div class="col-7">
            <p class="">.row.row-start</p>
          </div>
        </div>

        <div class="row row-center box">
          <div class="col-7">
            <p>.row.row-center</p>
          </div>
        </div>

        <div class="row row-end box">
          <div class="col-7">
            <p>.row.row-end</p>
          </div>
        </div>

        <div class="row row-top box">
          <div class="col">
            <p>.row.row-top</p>
          </div>
          <div class="col height-box"></div>
        </div>

        <div class="row row-middle box">
          <div class="col">
            <p>.row.row-middle</p>
          </div>
          <div class="col height-box"></div>
        </div>

        <div class="row row-bottom box">
          <div class="col">
            <p>.row.row-bottom</p>
          </div>
          <div class="col height-box"></div>
        </div>

        <p>Distribution des colonnes dans la ligne :</p>
        <div class="row row-around box">
          <div class="col-3">
            <p>.row.row-around</p>
          </div>
          <div class="col-3"></div>
        </div>

        <div class="row row-between box">
          <div class="col-3">
            <p>.row.row-between</p>
          </div>
          <div class="col-3"></div>
        </div>
        <pre><code>&lt;div class="container"&gt;
&lt;div class="row row-between"&gt;
    &lt;div class="col-3"&gt;&lt;/div&gt;
    &lt;div class="col-3"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-grids", Grids);
