const ga4_measurement_id = 'G-FTWPD52FDZ';

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', ga4_measurement_id);

const addWindowLoadListener = (fn) => {
  if (document.readyState === 'complete') {
    fn();
  } else {
    window.addEventListener('load', (event) => {
      fn();
    });
  }
};

const GA4 = {
  reportEvent() {
    const args = arguments;    
    addWindowLoadListener(() => gtag.apply(null, args))
  }
};

GA4.reportEvent('event', 'page_visited');
