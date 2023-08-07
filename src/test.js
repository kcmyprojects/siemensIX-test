import { LitElement, html } from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
import '@siemens/ix-icons/dist/css/ix-icons.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
export class MyElement extends LitElement {
  // render the template into the main DOM tree -> light dom
  // see: https://lit.dev/docs/components/shadow-dom/#implementing-createrenderroot
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <ix-datetime-picker></ix-datetime-picker>
    `;
  }
}

window.customElements.define('my-element', MyElement);
