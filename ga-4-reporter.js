const ga4_measurement_id = 'G-9TJ06WQS84';

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', ga4_measurement_id);

const GA4 = {
  reportEvent() {
    const args = arguments;
    
    if (document.readyState === 'complete') {
      gtag.apply(null, args);
    } else {
      window.addEventListener('load', (event) => {
        gtag.apply(null, args);
      });
    }
  }
};

window.addEventListener('load', (event) => {
  GA4.reportEvent('event', 'start_page_visited');
});
