import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works"
import "./scripts/header"
import "./scripts/smoothScroll"
import "./scripts/parallax-hero"
import "./scripts/mobile-menu"