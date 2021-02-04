const ga4_measurement_id = 'G-47KP9JTKFX';

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', ga4_measurement_id);

const GA4 = {
  reportEvent: gtag,
};

window.addEventListener('load', (event) => {
  GA4.reportEvent('event', 'start_page_visited');
});
