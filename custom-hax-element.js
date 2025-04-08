import { LitElement, html, css } from 'lit';

/**
 * `custom-hax-element`
 * A very basic custom element for HAX
 */
class CustomHaxElement extends LitElement {
  
  static get tag() {
    return 'custom-hax-element';
  }

  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = "My HAX Element";
  }

  render() {
    return html`
      <div>
        <h2>${this.title}</h2>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(CustomHaxElement.tag, CustomHaxElement);