window.onload =  () => {
    const Router = function(name, routes){
      return {
          name: name,
          routes: routes
      }
    };

    const dynamicView = $('#dynamic-view');
    let router = new Router('router', [
        {
          path: '/',
          name: 'home'
        },
        {
          path: '/about',
          name: 'About us'
        },
        {
          path: '/documents',
          name: 'Documents'
        },
        {
          path: '/events',
          name: 'Events'
        },
        {
          path: '/join',
          name: 'Join'
        }
    ]);

    // console.log(router, 'router');

    let currentPath = window.location.pathname;

    switch ('/about') {
        case '/': {
            dynamicView.load("pages/home-page/HomePage.html");
            break;
        }
        case '/about': {
            dynamicView.load("pages/about-page/AboutPage.html");
            break;
        }
        case '/documents': {
            dynamicView.load("pages/documents-page/DocumentsPage.html");
            break;
        }
        case '/events': {
            dynamicView.load("pages/events-page/EventsPage.html");
            break;
        }
        case '/join': {
            dynamicView.load("pages/join-page/JoinPage.html");
            break;
        }
        default: {
            dynamicView.load("pages/home-page/HomePage.html");
            break;
        }
    }
};