import { LitElement, html } from "../lit-all.min.js";

class Code extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>Code</h2>
      <p>
        La stylisation de code est basique. Entourez votre code d'une balise
        <code>&lt;code&gt;</code> et il sera affiché comme <code>ceci</code>. <br />
        Pour des blocs de code, entourez l'élément <code>&lt;code&gt;</code> avec un élément
        <code>&lt;pre&gt;</code>.
      </p>

      <p>
        Pour utiliser une coloration syntaxique, la librairie
        <a href="https://highlightjs.org/">HighlightJS</a> fait des merveilles !
      </p>

      <pre><code>.une-classe {
  background-color: red;
}</code></pre>

      <pre><code class="html">&lt;pre&gt;&lt;code&gt;
.une-classe {
  background-color: red;
}&lt;/code&gt;&lt;/pre&gt;
</code></pre>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-code", Code);
