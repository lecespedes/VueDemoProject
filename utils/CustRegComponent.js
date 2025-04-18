// utils/registerComponent.js
export function enhanceComponent(component) {
    // Inject styles if present
    if (component.styles) {
      const styleTag = document.createElement('style');
      styleTag.textContent = component.styles;
      styleTag.setAttribute('data-component', component.name || 'anonymous');
      // Avoid duplicates
      if (!document.querySelector(`style[data-component="${styleTag.getAttribute('data-component')}"]`)) {
        document.head.appendChild(styleTag);
        console.log(`Injected styles for ${component.name || 'component'}`);
      }
    }
    return component;
  }
  
  export function RegGblComponent(app) {
    const originalComponent = app.component;
    app.component = (name, component) => {
      // Enhance component (inject styles)
      const enhancedComponent = enhanceComponent(component);
      // Call original
      return originalComponent.call(app, name, enhancedComponent);
    };
  }