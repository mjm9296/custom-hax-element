import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/d-d-d/d-d-d.js';

/**
 * `ddd-steps-list-item`
 * An individual step for the ddd-steps-list component
 */
class DddStepsListItem extends LitElement {
  static get tag() {
    return 'ddd-steps-list-item';
  }

  static get properties() {
    return {
      step: {
        type: Number,
        reflect: true
      },
      title: {
        type: String,
        reflect: true
      }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-white, #ffffff);
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        padding: 24px;
        max-width: 320px;
        transition: all 0.3s ease;
      }

      :host(:hover) {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .step-number {
        display: inline-block;
        width: 32px;
        height: 32px;
        background-color: var(--ddd-steps-primary-color, var(--ddd-theme-default-blue));
        color: var(--ddd-theme-default-white, #ffffff);
        border-radius: 50%;
        text-align: center;
        line-height: 32px;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 16px;
      }

      .step-title {
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 16px 0;
        color: var(--ddd-theme-default-headingColor, #222);
      }

      .step-content {
        color: var(--ddd-theme-default-bodyColor, #333);
        font-size: 16px;
      }

      @media (max-width: 768px) {
        :host {
          max-width: 100%;
        }
      }
    `;
  }

  constructor() {
    super();
    this.step = 1;
    this.title = 'Step Title';
  }

  render() {
    return html`
      <div class="step-item">
        <div class="step-number">${this.step}</div>
        <h3 class="step-title">${this.title}</h3>
        <div class="step-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define(DddStepsListItem.tag, DddStepsListItem);