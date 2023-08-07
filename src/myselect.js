import { LitElement, html } from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
import '@siemens/ix-icons/dist/css/ix-icons.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
export class MySelect extends LitElement {
  // render the template into the main DOM tree -> light dom
  // see: https://lit.dev/docs/components/shadow-dom/#implementing-createrenderroot
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <ix-select selected-indices="1">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
    `;
  }
}

window.customElements.define('my-select', MySelect);
