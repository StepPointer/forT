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

    switch (currentPath) {
        case '/': {
            dynamicView.load("pages/home-page/HomePage.html");
            break;
        }
        case '/about': {
            dynamicView.load("pages/About.html");
            break;
        }
        case '/documents': {
            dynamicView.load("pages/Documents.html");
            break;
        }
        case '/events': {
            dynamicView.load("pages/Events.html");
            break;
        }
        case '/join': {
            dynamicView.load("pages/Join.html");
            break;
        }
        default: {
            dynamicView.load("pages/Home.html");
            break;
        }
    }
};