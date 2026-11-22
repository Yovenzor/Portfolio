## Overview

This project uses the following tech stack:
- Vite
- Typescript
- React Router v7 (all imports from `react-router` instead of `react-router-dom`)
- React 19 (for frontend components)
- Tailwind v4 (for styling)
- Shadcn UI (for UI components library)
- Lucide Icons (for icons)
- Convex (for the contact form backend & database)
- Framer Motion (for animations)

All relevant files live in the 'src' directory.

Use bun for the package manager.

## Setup

This project is set up already and running on a cloud environment, as well as a convex development in the sandbox.

## Environment Variables

The project is set up with project specific CONVEX_DEPLOYMENT and VITE_CONVEX_URL environment variables on the client side.

The convex server has a separate set of environment variables that are accessible by the convex backend.

Currently, these variables include auth-specific keys: JWKS, JWT_PRIVATE_KEY, and SITE_URL.


# No accounts on the site

The portfolio is fully public: there is no sign-in, no dashboard and no user
account surface. The Convex client only talks to the contact-form functions.
The auth files under `src/convex/` belong to the backend template and are not
reachable from the UI.

# Frontend Conventions

You will be using the Vite frontend with React 19, Tailwind v4, and Shadcn UI.

Generally, pages should be in the `src/pages` folder, and components should be in the `src/components` folder.

Shadcn primitives are located in the `src/components/ui` folder and should be used by default.

## Page routing

Your page component should go under the `src/pages` folder.

When adding a page, update the react router configuration in `src/main.tsx` to include the new route you just added.

## Shad CN conventions

Follow these conventions when using Shad CN components, which you should use by default.
- Remember to use "cursor-pointer" to make the element clickable
- For title text, use the "tracking-tight font-bold" class to make the text more readable
- Always make apps MOBILE RESPONSIVE. This is important
- AVOID NESTED CARDS. Try and not to nest cards, borders, components, etc. Nested cards add clutter and make the app look messy.
- AVOID SHADOWS. Avoid adding any shadows to components. stick with a thin border without the shadow.
- Avoid skeletons; instead, use the loader2 component to show a spinning loading state when loading data.


## Landing Pages

You must always create good-looking designer-level styles to your application. 
- Make it well animated and fit a certain "theme", ie neo brutalist, retro, neumorphism, glass morphism, etc

Use known images and emojis from online.

If the user is logged in already, show the get started button to say "Dashboard" or "Profile" instead to take them there.

## Responsiveness and formatting

Make sure pages are wrapped in a container to prevent the width stretching out on wide screens. Always make sure they are centered aligned and not off-center.

Always make sure that your designs are mobile responsive. Verify the formatting to ensure it has correct max and min widths as well as mobile responsiveness.

- Always create sidebars for protected dashboard pages and navigate between pages
- Always create navbars for landing pages
- On these bars, the created logo should be clickable and redirect to the index page

## Animating with Framer Motion

You must add animations to components using Framer Motion. It is already installed and configured in the project.

To use it, import the `motion` component from `framer-motion` and use it to wrap the component you want to animate.


### Other Items to animate
- Fade in and Fade Out
- Slide in and Slide Out animations
- Rendering animations
- Button clicks and UI elements

Animate for all components, including on landing page and app pages.

## Three JS Graphics

Your app comes with three js by default. You can use it to create 3D graphics for landing pages, games, etc.


## Colors

You can override colors in: `src/index.css`

This uses the oklch color format for tailwind v4.

Always use these color variable names.

Make sure all ui components are set up to be mobile responsive and compatible with both light and dark mode.

Set theme using `dark` or `light` variables at the parent className.

## Styling and Theming

When changing the theme, always change the underlying theme of the shad cn components app-wide under `src/components/ui` and the colors in the index.css file.

Avoid hardcoding in colors unless necessary for a use case, and properly implement themes through the underlying shad cn ui components.

When styling, ensure buttons and clickable items have pointer-click on them (don't by default).

Always follow a set theme style and ensure it is tuned to the user's liking.

## Toasts

You should always use toasts to display results to the user, such as confirmations, results, errors, etc.

Use the shad cn Sonner component as the toaster. For example:

```
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}
```

Remember to import { toast } from "sonner". Usage: `toast("Event has been created.")`

## Dialogs

Always ensure your larger dialogs have a scroll in its content to ensure that its content fits the screen size. Make sure that the content is not cut off from the screen.

Ideally, instead of using a new page, use a Dialog instead. 

# Using the Convex backend

You will be implementing the convex backend. Follow your knowledge of convex and the documentation to implement the backend.

## The Convex Schema

You must correctly follow the convex schema implementation.

The schema is defined in `src/convex/schema.ts`.

Do not include the `_id` and `_creationTime` fields in your queries (it is included by default for each table).
Do not index `_creationTime` as it is indexed for you. Never have duplicate indexes.


## Convex Actions: Using CRUD operations

When running anything that involves external connections, you must use a convex action with "use node" at the top of the file.

You cannot have queries or mutations in the same file as a "use node" action file. Thus, you must use pre-built queries and mutations in other files.

You can also use the pre-installed internal crud functions for the database:

```ts
// in convex/users.ts
import { crud } from "convex-helpers/server/crud";
import schema from "./schema.ts";

export const { create, read, update, destroy } = crud(schema, "users");

// in some file, in an action:
const user = await ctx.runQuery(internal.users.read, { id: userId });

await ctx.runMutation(internal.users.update, {
  id: userId,
  patch: {
    status: "inactive",
  },
});
```


## Common Convex Mistakes To Avoid

When using convex, make sure:
- Document IDs are referenced as `_id` field, not `id`.
- Document ID types are referenced as `Id<"TableName">`, not `string`.
- Document object types are referenced as `Doc<"TableName">`.
- Keep schemaValidation to false in the schema file.
- You must correctly type your code so that it passes the type checker.
- You must handle null / undefined cases of your convex queries for both frontend and backend, or else it will throw an error that your data could be null or undefined.
- Always use the `@/folder` path, with `@/convex/folder/file.ts` syntax for importing convex files.
- This includes importing generated files like `@/convex/_generated/server`, `@/convex/_generated/api`
- Remember to import functions like useQuery, useMutation, useAction, etc. from `convex/react`
- NEVER have return type validators.


# Portfolio — Yovenzor Singh

The site is a personal portfolio (single scrolling page) plus case-study pages
at `/:lang/projects/:slug`. Every language has its own indexable URL prefix
(`/es`, `/en`, `/fr`, `/pt`, `/de`, `/ar`); the bare origin `/` redirects to
`/es`. Old `/projects/:slug` links redirect to their Spanish URL.

## Editing content (no layout changes needed)

- **Contact links, availability label, section list:** `src/content/site.ts`.
  Set `links.email`, `links.linkedin` and `links.cv` to real values. The CV is
  served from `public/assets/Curriculum.pdf`. Toggle `showAvailability` to
  show/hide the hero label.
- **All copy (bio, education, skills, projects, form, footer…):**
  `src/i18n/translations/` — one file per language. `es.ts` is the source of
  truth: change it first, then mirror the change in `en/fr/pt/de/ar`. Every
  file is typed against the Spanish dictionary, so a missing key fails the
  build. **Project `slug` values must stay identical across languages** (they
  are the URL). Add/remove project objects in all six files to add or remove a
  case study.

## Contact form — how submissions are handled

1. The form validates in the browser (translated messages), then calls the
   Convex mutation `contact.submitMessage` (`src/convex/contact.ts`).
2. The server re-validates, rate-limits (max 5 submissions per email per 24 h)
   and stores the message in the **`messages`** table — read it any time in the
   Convex dashboard under *Data → messages*.
3. `contactNotify.notify` (`src/convex/contactNotify.ts`, Node action) sends an
   e-mail notification through the platform integration gateway. To activate
   it, set the Convex environment variable **`CONTACT_NOTIFY_EMAIL`** (dashboard
   → *Settings → Environment Variables*) to the address that should receive
   inquiries. Until it is set, submission still works and messages are stored;
   only the e-mail notification is skipped.

## Languages

Spanish is the default (`/es`, also the `x-default`); six languages are
selectable from the navigation bar. **The URL is the source of truth**: the
language lives in the path, so `/de` and `/en/projects/rebt-pro` are real pages
that search engines can index. Switching language keeps the visitor on the same
page. Arabic switches `<html dir="rtl">` and typography automatically. Metadata
(`<title>`, description, canonical, `hreflang`, Open Graph, `og:url`) is
rebuilt per language *and per page* by `src/lib/seo.ts`, using the helpers in
`src/lib/locale.ts`.

## Deployment

- **Vercel:** `vercel.json` provides the SPA rewrite (`/(.*) → /index.html`).
- **Netlify / similar:** `netlify/_redirects` provides the same fallback (kept out of `public/` because Cloudflare Workers assets reject that rule as an infinite redirect; on Freebuff Sites the SPA fallback comes from `sites.manifest.json`).
- Set `VITE_CONVEX_URL` to the production Convex deployment and push the Convex
  functions (`npx convex deploy`).
