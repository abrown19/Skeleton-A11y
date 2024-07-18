import { LitElement, html } from "../lit-all.min.js";

class Typography extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>Typographie</h2>
      <div class="row">
        <div class="col">
          <p>Toutes les tailles sont basées sur l'unité <code>rem</code>.</p>
          <p>
            La police de base est <span class="bold">Tahoma</span>, disponible sans aucun
            téléchargement et il est très simple de la changer pour s'adapter à tous les styles.
          </p>
          <p>
            Skeleton inclus des styles pour les
            <a href="#">liens</a>, <span class="bold">la mise en gras</span>,
            <span class="italic">l'italique</span>, et
            <span class="underline">le soulignement</span>.
          </p>
          <p>Chaque <span class="bold">titre</span> possède une taille unique.</p>
        </div>
        <div class="col">
          <h1>Titre 1</h1>
          <h2>Titre 2</h2>
          <h3>Titre 3</h3>
          <h4>Titre 4</h4>
          <h5>Titre 5</h5>
          <h6>Titre 6</h6>
        </div>
      </div>

      <pre><code class="html">&lt;!-- Titres --&gt;
&lt;h1&gt;Titre 1&lt;/h1&gt;
&lt;h2&gt;Titre 2&lt;/h2&gt;
&lt;h3&gt;Titre 3&lt;/h3&gt;
&lt;h4&gt;Titre 4&lt;/h4&gt;
&lt;h5&gt;Titre 5&lt;/h5&gt;
&lt;h6&gt;Titre 6&lt;/h6&gt;

&lt;!-- Texte standard --&gt;
&lt;p&gt;La police standard est à 16px pour une hauteur de ligne de 1.5 (24px)&lt;/p&gt;

&lt;!-- Autres styles de texte --&gt;
&lt;span class="bold"&gt;Gras&lt;/span&gt;
&lt;span class="italic"&gt;Italique&lt;/span&gt;
&lt;span class="underline"&gt;Souligné&lt;/span&gt;
</code></pre>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-typography", Typography);
