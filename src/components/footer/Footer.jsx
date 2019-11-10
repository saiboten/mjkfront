import React from "react";
import { Link } from "react-router-dom";

export const Footer = function() {
  return (
    <div class="footer-copyright">
      <footer>
        Laget av Tobias Rusås Olsen.
        <Link to="/om">Om musikkjulekalenderen</Link>
      </footer>
    </div>
  );
};
