import { LitElement, html } from "../lit-all.min.js";

class Tables extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>Tableaux</h2>
      <p>
        Utilisez les éléments <code>&lt;thead&gt;</code> et <code>&lt;tbody&gt;</code> quand vous
        fabriquez une <code>table</code>.
      </p>

      <h3>Tableau standard</h3>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Age</th>
            <th>Sexe</th>
            <th>Ville</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dave Gamache</td>
            <td>26</td>
            <td>Male</td>
            <td>San Francisco</td>
          </tr>
          <tr>
            <td>Dwayne Johnson</td>
            <td>42</td>
            <td>Male</td>
            <td>Paris</td>
          </tr>
        </tbody>
      </table>

      <h3>Tableau pleine largeur</h3>
      <table class="full-width">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Age</th>
            <th>Sexe</th>
            <th>Ville</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dave Gamache</td>
            <td>26</td>
            <td>Male</td>
            <td>San Francisco</td>
          </tr>
          <tr>
            <td>Dwayne Johnson</td>
            <td>42</td>
            <td>Male</td>
            <td>Paris</td>
          </tr>
        </tbody>
      </table>

      <pre><code class="code-example-body prettyprint">&lt;table class="full-width"&gt;
&lt;thead&gt;
&lt;tr&gt;
    &lt;th&gt;Nom&lt;/th&gt;
    &lt;th&gt;Age&lt;/th&gt;
    &lt;th&gt;Sexe&lt;/th&gt;
    &lt;th&gt;Ville&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
    &lt;td&gt;Dave Gamache&lt;/td&gt;
    &lt;td&gt;26&lt;/td&gt;
    &lt;td&gt;Male&lt;/td&gt;
    &lt;td&gt;San Francisco&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
    &lt;td&gt;Dwayne Johnson&lt;/td&gt;
    &lt;td&gt;42&lt;/td&gt;
    &lt;td&gt;Male&lt;/td&gt;
    &lt;td&gt;Paris&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
</code></pre>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-tables", Tables);
