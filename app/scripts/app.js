(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Snow Feed';

  app.locations = [
    {
      'name': 'Ruhestein',
      'webcam': 'http://www.skilift-ruhestein.de/pics/webcam.jpg',
      'weatherNow': 'http://api.openweathermap.org/data/2.5/weather?q=Ruhestein,de&lang=de',
      'weather3Days': null
    },
    {
      'name': 'Seibels Eckle',
      'webcam': 'http://www.seibelseckle.de/seibelseckle-webcam-lift.jpg?dummy=8484744',
      'weatherNow': null,
      'weather3Days': null
    },
    {
      'name': 'Vogelskopf',
      'webcam': 'http://www.vogelskopf.de/webcam/Vogelskopf_R1.jpg',
      'weatherNow': 'http://api.openweathermap.org/data/2.5/weather?q=Vogelskopf,de&lang=de',
      'weather3Days': null
    },
    {
      'name': 'Zufluch',
      'webcam': 'http://www.vogelskopf.de/webcam/Zuflucht_R1.jp'
    },
    {
      'name': 'Kniebis',
      'webcam': 'http://www.itunds.de/nachtloipe_webcam/skicam.jpg',
      'weatherNow': 'http://api.openweathermap.org/data/2.5/weather?q=Kniebis,de&lang=de',
      'weather3Days': null
    }
  ];

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    //console.log('Our app is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
