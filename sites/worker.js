/**
 * Static-asset Worker for the portfolio.
 *
 * The app is a client-side React Router SPA: every route is rendered in the
 * browser and the Convex backend is reached directly from the client, so the
 * Worker only has to serve the built files from the ASSETS binding. SPA
 * fallback (unknown paths -> index.html) is declared in the deploy manifest.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
