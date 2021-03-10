/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

const version = '39';

self.__WB_MANIFEST = [
    { url: '/index.html', revision: version },
    { url: '/index.js', revision: version },
    { url: '/vendors.js', revision: version },
    { url: '/react.js', revision: version },
    { url: '/assets/icon_logo.png', revision: version },
    { url: '/assets/logo_small.png', revision: version },
    { url: '/assets/logo_big.png', revision: version },
    { url: '/assets/logo.png', revision: version },
    { url: '/assets/logo192.png', revision: version },
    { url: '/assets/logo512.png', revision: version },
    { url: '/assets/text-icon_white.png', revision: version },
    { url: '/assets/google-play.png', revision: version },
    { url: '/assets/manifest.json', revision: version },
    { url: '/assets/hero/landscape-1.jpg', revision: version },
    { url: '/assets/hero/home1.jpg', revision: version },
    { url: '/assets/hero/one-place.jpg', revision: version },
    { url: '/assets/hero/paperwork.jpg', revision: version },
    { url: '/assets/hero/coordination.jpg', revision: version },
    { url: '/assets/hero/demo1.jpg', revision: version },
    { url: '/assets/hero/landscape-1.webp', revision: version },
    { url: '/assets/hero/home1.webp', revision: version },
    { url: '/assets/hero/one-place.webp', revision: version },
    { url: '/assets/hero/paperwork.webp', revision: version },
    { url: '/assets/hero/coordination.webp', revision: version },
    { url: '/assets/hero/demo1.webp', revision: version },
    { url: '/assets/profile/Prateek.jpg', revision: version },
    { url: '/assets/profile/Prateek.webp', revision: version },
    { url: '/assets/profile/Yukti.jpg', revision: version },
    { url: '/assets/profile/Yukti.webp', revision: version },
];

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
    // Return false to exempt requests from being fulfilled by index.html.
    ({ request, url }: { request: Request; url: URL }) => {
        // If this isn't a navigation, skip.
        if (request.mode !== 'navigate') {
            return false;
        }

        // If this is a URL that starts with /_, skip.
        if (url.pathname.startsWith('/_')) {
            return false;
        }

        // If this looks like a URL for a resource, because it contains
        // a file extension, skip.
        if (url.pathname.match(fileExtensionRegexp)) {
            return false;
        }

        // Return true to signal that we want to use the handler.
        return true;
    },
    createHandlerBoundToURL('/index.html'),
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
    // Add in any other file extensions or routing criteria as needed.
    ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
    // Customize this strategy as needed, e.g., by changing to CacheFirst.
    new StaleWhileRevalidate({
        cacheName: 'images',
        plugins: [
            // Ensure that once this runtime cache reaches a maximum size the
            // least-recently used images are removed.
            new ExpirationPlugin({ maxEntries: 50 }),
        ],
    }),
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Any other custom service worker logic can go here.
