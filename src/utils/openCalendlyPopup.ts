const CALENDLY_URL =
  'https://calendly.com/bismarkconsulting-info/walkthrough?hide_gdpr_banner=1&background_color=ffffff&text_color=0c1742&primary_color=c9a227';

export function openCalendlyPopup() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }
}
