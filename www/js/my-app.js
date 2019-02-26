var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },

    {
      path: '/maincourse/',
      url: 'maincourse.html',

    },

    {
      path: '/food/',
      url: 'food.html',

    },

    {
      path: '/appetizers/',
      url: 'appetizers.html',

    },

    {
      path: '/desserts/',
      url: 'desserts.html',

    },

    {
      path: '/sidedishes/',
      url: 'sidedishes.html',

    },

    {
      path: '/drinks/',
      url: 'drinks.html',

    },

    {
      path: '/guests/',
      url: 'guests.html',
    },
    {
      path: '/venue/',
      url: 'venue.html',
    },
    {
      path: '/events/',
      url: 'events.html',
    },
    {
      path: '/index/',
      url: 'index.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

var swiper = app.swiper.create('.swiper-container', {
    speed: 200,
    spaceBetween: 50
});


