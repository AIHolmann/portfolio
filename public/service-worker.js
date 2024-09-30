self.addEventListener("push", function (event) {
  const options = {
    body: event.data ? event.data.text() : "Notificación sin datos.",
    vibrate: [200, 100, 200],
  };

  event.waitUntil(
    self.registration.showNotification("Título de la Notificación", options)
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
});
