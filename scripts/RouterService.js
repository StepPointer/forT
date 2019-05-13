window.onload =  () => {
    const Router = function(name, routes){
      return {
          name: name,
          routes: routes
      }
    };

    const dynamicView = document.getElementById('dynamic-view');
    let router = new Router('router', [
        {
          path: '/',
          name: 'home'
        },
        {
          path: '/about-us',
          name: 'About us'
        },
        {
          path: '/statutory-law',
          name: 'Statutory law'
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
            //load home page
            // dynamicView.innerHTML = 'HomePage';
            break;
        }
        case '/about-us': {
            // dynamicView.innerHTML = 'about';
            break;
        }

        case '/statutory-law': {
            // dynamicView.innerHTML = 'HomePage';
            break;
        }
        case '/events': {
            // dynamicView.innerHTML = 'HomePage';
            break;
        }
        case '/join': {
            // dynamicView.innerHTML = 'HomePage';
            break;
        }
        default: {
            // dynamicView.innerHTML = 'HomePage';
            break;
        }
    }
};