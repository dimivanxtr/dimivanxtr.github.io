const ga_measurement_id = 'UA-188835275';  //v4:   'G-47KP9JTKFX'

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', ga_measurement_id, 'auto');

function reportPageLoaded() {
  console.log("page loaded");
}

function linkClicked() {
  console.log("link clicked");
}

window.addEventListener('load', (event) => {
  reportPageLoaded();
  ga('send', 'pageview');
});
