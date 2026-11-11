import { renderToStaticMarkup } from "react-dom/server";
import { LanguageProvider } from "./src/i18n";
import { Footer } from "./src/components/Footer";

const html = renderToStaticMarkup(
  <LanguageProvider>
    <Footer />
  </LanguageProvider>,
);
console.log(html.replace(/></g, ">\n<"));
