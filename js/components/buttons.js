import { LitElement, html } from "../lit-all.min.js";

class Buttons extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>Boutons</h2>
      <p>
        Les boutons possèdent deux variantes. <br />
        La classe <code>.button</code> s'utilise pour afficher des boutons discrets, alors que la
        classe <code>.button-primary</code> permet de mettre en avant une action. <br />Les styles
        de boutons sont appliqués sur les éléments de base, mais n'importe quel élément peut être
        transformé via la classe choisie.
      </p>
      <div>
        <div>
          <a class="button" href="#">Lien en forme de bouton</a>
          <button>Elément button</button>
          <input type="submit" value="input type submit" />
          <input type="button" value="input type button" />
        </div>
        <div>
          <a class="button button-primary" href="#">Lien en forme de bouton</a>
          <button class="button-primary">Elément button</button>
          <input class="button-primary" type="submit" value="input type submit" />
          <input class="button-primary" type="button" value="input type button" />
        </div>
      </div>

      <pre><code class="html">&lt;!-- Boutons standards --&gt;
&lt;a class="button" href="#"&gt;Lien en forme de bouton&lt;/a&gt;
&lt;button&gt;Elément button&lt;/button&gt;
&lt;input type="submit" value="input type submit"&gt;
&lt;input type="button" value="input type button"&gt;

&lt;!-- Boutons accentués --&gt;
&lt;a class="button button-primary" href="#"&gt;Lien en forme de bouton&lt;/a&gt;
&lt;button class="button-primary"&gt;Elément button&lt;/button&gt;
&lt;input class="button-primary" type="submit" value="input type submit"&gt;
&lt;input class="button-primary" type="button" value="input type button"&gt;
</code></pre>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-buttons", Buttons);
