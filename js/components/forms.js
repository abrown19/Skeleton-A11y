import { LitElement, html } from "../lit-all.min.js";

class Forms extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<h2>Formulaires</h2>
      <p>
        Tous les champs, listes de sélection et boutons sont normalisés afin d'avoir une hauteur
        commune, pour pouvoir les empiler ou les placer à côtés les uns des autres. <br />
        Les champs occupent toute la largeur disponible.
      </p>

      <p>
        La classe <code>.form-group</code> permet de regrouper les éléments d'un champ (label,
        champ, messages d'erreurs ou de descriptions) et d'y ajouter un espace. <br />
        La classe <code>.form-descr</code> est utilisée pour diminuer la taille et la graisse d'un
        texte descriptif. Associée à <code>.text-error</code> elle peut être utilisée pour les
        messages d'erreur.
      </p>

      <h3>Champ standard</h3>
      <div class="docs-example-forms">
        <fieldset>
          <legend>Contacter notre service</legend>

          <div class="row">
            <div class="col form-group">
              <label for="mail">
                Votre adresse email <span class="text-error">(Obligatoire)</span>
              </label>
              <input type="email" placeholder="test@mail.com" id="mail" required />
            </div>
            <div class="col form-group">
              <label for="sujet">Sujet de l'email</label>
              <select id="sujet">
                <option value="Option 1">Questions</option>
                <option value="Option 2">Remarques</option>
                <option value="Option 3">Demande de remboursement</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col form-group">
              <label for="commande">
                Numéro de commande <span class="form-descr">(désactivé)</span>
              </label>
              <input type="number" value="155266" id="commande" disabled />
            </div>
            <div class="col form-group">
              <label for="destinataire">
                Destinataire <span class="form-descr">(lecture seule)</span>
              </label>
              <input type="email" id="destinataire" value="boss@mail.com" readonly />
            </div>
          </div>

          <div class="form-group">
            <label for="message">
              Message <br role="none" />
              <span class="form-descr">Ce message sera envoyé à l'employeur</span>
            </label>
            <textarea placeholder="Bonjour Skeleton, je souhaite ..." id="message"></textarea>
          </div>

          <div class="form-group">
            <input type="checkbox" id="copie" />
            <label for="copie">M'envoyer une copie</label>
          </div>

          <div class="row row-end">
            <input class="button-primary" type="submit" value="Envoyer" />
          </div>
        </fieldset>
      </div>

      <pre><code class="html">&lt;!-- Code du formulaire ci-dessus --&gt;
&lt;fieldset&gt;
  &lt;legend&gt;Contacter notre service&lt;/legend&gt;

  &lt;div class="row"&gt;
    &lt;div class="col form-group"&gt;
      &lt;label for="mail"&gt;
        Votre adresse email &lt;span class="text-error"&gt;(Obligatoire)&lt;/span&gt;
      &lt;/label&gt;
      &lt;input type="email" placeholder="test@mail.com" id="mail" required /&gt;
    &lt;/div&gt;
    &lt;div class="col form-group"&gt;
      &lt;label for="sujet"&gt;Sujet de l'email&lt;/label&gt;
      &lt;select id="sujet"&gt;
       ...
      &lt;/select&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="row"&gt;
    &lt;div class="col form-group"&gt;
      &lt;label for="commande"&gt;
        Numéro de commande &lt;span class="form-descr"&gt;(désactivé)&lt;/span&gt;
      &lt;/label&gt;
      &lt;input type="number" value="155266" id="commande" disabled /&gt;
    &lt;/div&gt;
    &lt;div class="col form-group"&gt;
      &lt;label for="destinataire"&gt;
        Destinataire &lt;span class="form-descr"&gt;(lecture seule)&lt;/span&gt;
      &lt;/label&gt;
      &lt;input type="email" id="destinataire" value="boss@mail.com" readonly /&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="form-group"&gt;
    &lt;label for="message"&gt;
      Message &lt;br role="none" /&gt;
      &lt;span class="form-descr"&gt;Ce message sera envoyé à l'employeur&lt;/span&gt;
    &lt;/label&gt;
    &lt;textarea placeholder="Bonjour Skeleton, je souhaite ..." id="message"&gt;&lt;/textarea&gt;
  &lt;/div&gt;

  &lt;div class="form-group"&gt;
    &lt;input type="checkbox" id="copie" /&gt;
    &lt;label for="copie"&gt;M'envoyer une copie&lt;/label&gt;
  &lt;/div&gt;

  &lt;div class="row row-end"&gt;
    &lt;input class="button-primary" type="submit" value="Envoyer" /&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;</code></pre>

      <h3>Champ en erreur</h3>
      <p>
        Les erreurs doivent être signalées via <code>aria-invalid="true"</code> et les messages
        d'erreurs doivent être reliés via <code>aria-describedby</code>.
      </p>

      <div class="docs-example-forms">
        <fieldset>
          <legend>Contacter notre service <span class="text-error">(3 erreurs)</span></legend>

          <div class="row">
            <div class="col form-group">
              <label for="mail">
                Votre adresse email <span class="text-error">(Obligatoire)</span>
              </label>
              <input
                type="email"
                placeholder="test@mail.com"
                id="mail"
                required
                aria-invalid="true"
                aria-describedby="mail-msg" />
              <p id="mail-msg" class="text-error form-descr">L'adresse mail doit être remplie</p>
            </div>
            <div class="col form-group">
              <label for="sujet">Sujet de l'email</label>
              <select id="sujet" aria-describedby="sujet-msg">
                <option value="Option 1">Questions</option>
                <option value="Option 2">Remarques</option>
                <option value="Option 3">Demande de remboursement</option>
              </select>
              <p id="sujet-msg" class="text-success form-descr">Le sujet est correctement rempli</p>
            </div>
          </div>

          <div class="row row-bottom">
            <div class="col form-group">
              <label for="message">
                Message <br role="none" />
                <span class="form-descr">Ce message sera envoyé à l'employeur</span>
              </label>
              <textarea
                placeholder="Bonjour Skeleton, je souhaite ..."
                id="message"
                aria-invalid="true"
                aria-describedby="message-msg"></textarea>
              <p id="message-msg" class="text-error form-descr">Remplissez le corps du message</p>
            </div>
            <div class="col form-group">
              <input
                type="checkbox"
                id="condition"
                aria-invalid="true"
                aria-describedby="condition-msg" />
              <label for="condition">J'ai lu les conditions d'utilisation</label>
              <p id="condition-msg" class="text-error form-descr">
                La lecture des conditions d'utilisation est obligatoire
              </p>
            </div>
          </div>
        </fieldset>

        <pre><code>&lt;!-- Code du formulaire ci-dessus --&gt;
&lt;fieldset&gt;
  &lt;legend&gt;Contacter notre service &lt;span class="text-error"&gt;(3 erreurs)&lt;/span&gt;&lt;/legend&gt;

  &lt;div class="row"&gt;
    &lt;div class="col form-group"&gt;
      &lt;label for="mail"&gt;
        Votre adresse email &lt;span class="text-error"&gt;(Obligatoire)&lt;/span&gt;
      &lt;/label&gt;
      &lt;input
        type="email"
        placeholder="test@mail.com"
        id="mail"
        required
        aria-invalid="true"
        aria-describedby="mail-msg" /&gt;
      &lt;p id="mail-msg" class="text-error form-descr"&gt;L'adresse mail doit être remplie&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col form-group"&gt;
      &lt;label for="sujet"&gt;Sujet de l'email&lt;/label&gt;
      &lt;select id="sujet" aria-describedby="sujet-msg"&gt;
        &lt;option value="Option 1"&gt;Questions&lt;/option&gt;
        &lt;option value="Option 2"&gt;Remarques&lt;/option&gt;
        &lt;option value="Option 3"&gt;Demande de remboursement&lt;/option&gt;
      &lt;/select&gt;
      &lt;p id="sujet-msg" class="text-success form-descr"&gt;Le sujet est correctement rempli&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="row row-bottom"&gt;
    &lt;div class="col form-group"&gt;
      &lt;label for="message"&gt;
        Message &lt;br role="none" /&gt;
        &lt;span class="form-descr"&gt;Ce message sera envoyé à l'employeur&lt;/span&gt;
      &lt;/label&gt;
      &lt;textarea
        placeholder="Bonjour Skeleton, je souhaite ..."
        id="message"
        aria-invalid="true"
        aria-describedby="message-msg"&gt;&lt;/textarea&gt;
      &lt;p id="message-msg" class="text-error form-descr"&gt;Remplissez le corps du message&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col form-group"&gt;
      &lt;input
        type="checkbox"
        id="condition"
        aria-invalid="true"
        aria-describedby="condition-msg" /&gt;
      &lt;label for="condition"&gt;J'ai lu les conditions d'utilisation&lt;/label&gt;
      &lt;p id="condition-msg" class="text-error form-descr"&gt;
        La lecture des conditions d'utilisation est obligatoire
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;</code></pre>
      </div>`;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("demo-forms", Forms);
