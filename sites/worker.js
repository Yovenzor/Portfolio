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
    const url = new URL(request.url);

    /* The default language lives at its own URL, so the bare origin sends
       crawlers and visitors to /es with a real server-side redirect instead of
       a client-side one. */
    if (url.pathname === "/") {
      url.pathname = "/es";
      return Response.redirect(url.toString(), 308);
    }

    return env.ASSETS.fetch(request);
  },
};
