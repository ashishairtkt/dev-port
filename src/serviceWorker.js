import { Workbox } from "workbox-window";

const wb = new Workbox("/service-worker.js");

export const register = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      wb.register()
        .then((registration) => {
          console.log("ServiceWorker registration successful:", registration);
        })
        .catch((error) => {
          console.error("ServiceWorker registration failed:", error);
        });
    });
  }
};

export const unregister = async () => {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.ready;
    registration.unregister();
  }
};
