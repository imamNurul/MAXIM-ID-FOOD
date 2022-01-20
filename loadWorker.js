if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw.js")
        .then(function(registration) {
            console.log("Service Worker /sw.js Registered");
        })


    // navigator.serviceWorker.register('/firebase-messaging-sw.js')
    //     .then(function(registration) {
    //         console.log('Registration successful, scope is:', registration.scope);
    //     }).catch(function(err) {
    //         console.log('Service worker registration failed, error:', err);
    //     });


    navigator.serviceWorker.ready.then(
        function(registration) {
            console.log("Service Worker Ready");
        });
}