// Calendly integration utility
// Replace 'tu-usuario' with your actual Calendly username after creating your account

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const openCalendlyPopup = () => {
  if (window.Calendly) {
    // TODO: Replace this URL with your actual Calendly URL
    // Example: https://calendly.com/gretel-perez
    window.Calendly.initPopupWidget({ 
      url: 'https://calendly.com/tu-usuario' 
    });
  } else {
    console.error('Calendly script not loaded');
  }
};
