const notification = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado con éxito:", registration);

        // Solicitar permiso para mostrar notificaciones
        Notification.requestPermission().then((perm) => {
          if (perm === "granted") {
            document.addEventListener("visibilitychange", () => {
              if (document.visibilityState === "hidden") {
                // Enviar una notificación al salir de la página
                registration.showNotification("Hey! come back", {
                  body: "Don't forget to contact me!",
                  tag: "Come back",
                  icon: "",
                  vibrate: [400, 150, 400],
                });
              } else {
                registration.getNotifications().then((notifications) => {
                  notifications.forEach((notification) => {
                    notification.close();
                  });
                });
              }
            });
          }
        });
      })
      .catch((error) => {
        console.error("Error al registrar el Service Worker:", error);
      });
  }
};

module.exports = notification;
