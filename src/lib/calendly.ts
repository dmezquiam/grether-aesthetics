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
    window.Calendly.initPopupWidget({ 
      url: 'https://calendly.com/dmezquiam' 
    });
  } else {
    console.error('Calendly script not loaded');
  }
};
