import { Link } from "react-router-dom";
import { Stethoscope, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg hero-gradient">
                <Stethoscope className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                NurseProcedures
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your comprehensive resource for evidence-based nursing procedures and clinical skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/procedures" className="transition-colors hover:text-primary">
                  All Procedures
                </Link>
              </li>
              <li>
                <Link to="/categories" className="transition-colors hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Popular Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/category/vital-signs" className="transition-colors hover:text-primary">
                  Vital Signs
                </Link>
              </li>
              <li>
                <Link to="/category/infection-control" className="transition-colors hover:text-primary">
                  Infection Control
                </Link>
              </li>
              <li>
                <Link to="/category/medication-administration" className="transition-colors hover:text-primary">
                  Medication Administration
                </Link>
              </li>
              <li>
                <Link to="/category/iv-therapy" className="transition-colors hover:text-primary">
                  IV Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/disclaimer" className="transition-colors hover:text-primary">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-primary">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} NurseProcedures. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive" /> for healthcare professionals
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 rounded-lg bg-muted/50 p-4">
          <p className="text-center text-xs text-muted-foreground">
            <strong>Disclaimer:</strong> This website is intended for educational purposes only and should not replace professional medical judgment or clinical protocols. Always follow your institution's policies and consult with qualified healthcare providers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
