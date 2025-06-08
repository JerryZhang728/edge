import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './edge';

// Wix Custom Element definition
class EdgeAILanding extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    
    // Add styles to shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        width: 100%;
      }
    `;
    this.shadowRoot.appendChild(style);
    
    // Render React component
    ReactDOM.render(
      <React.StrictMode>
        <LandingPage />
      </React.StrictMode>,
      mountPoint
    );
  }

  disconnectedCallback() {
    // Cleanup when element is removed
    ReactDOM.unmountComponentAtNode(this.shadowRoot);
  }
}

// Register the custom element
customElements.define('edge-ai-landing', EdgeAILanding); 