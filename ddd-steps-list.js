import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/d-d-d/d-d-d.js';
import './ddd-steps-list-item.js';

/**
 * `ddd-steps-list`
 * A step list component for PSU design system
 */
class DddStepsList extends LitElement {
  static get tag() {
    return 'ddd-steps-list';
  }

  static get properties() {
    return {
      dddPrimary: {
        type: Number,
        reflect: true,
        attribute: 'ddd-primary'
      }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --ddd-steps-primary-color: var(--ddd-theme-default-primaryColor, var(--ddd-theme-default-blue));
      }
      
      .steps-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 24px;
      }
      
      @media (max-width: 768px) {
        .steps-container {
          flex-direction: column;
        }
      }
    `;
  }

  constructor() {
    super();
    this.dddPrimary = 5;
  }

  updated(changedProperties) {
    if (changedProperties.has('dddPrimary')) {
      this._updateStepColors();
    }
    
    this._validateChildren();
    this._updateStepNumbers();
  }

  firstUpdated() {
    this._validateChildren();
    this._updateStepNumbers();
    this._updateStepColors();
  }

  _validateChildren() {
    Array.from(this.children).forEach(child => {
      if (child.tagName.toLowerCase() !== 'ddd-steps-list-item') {
        this.removeChild(child);
      }
    });
  }

  _updateStepNumbers() {
    const steps = Array.from(this.children).filter(
      child => child.tagName.toLowerCase() === 'ddd-steps-list-item'
    );
    
    steps.forEach((step, index) => {
      step.step = index + 1;
    });
  }

  _updateStepColors() {
    if (this.dddPrimary) {
      this.style.setProperty(
        '--ddd-steps-primary-color', 
        `var(--ddd-theme-default-accent${this.dddPrimary}Color, var(--ddd-theme-default-blue))`
      );
    }
  }

  render() {
    return html`
      <div class="steps-container">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
  }

  _handleSlotChange() {
    this._validateChildren();
    this._updateStepNumbers();
  }
}

customElements.define(DddStepsList.tag, DddStepsList);