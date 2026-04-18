
import { Link } from 'react-router-dom';
import { Feather, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold">
              <div className="gradient-poetry rounded-lg p-2">
                <Feather className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Versify
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A creative platform for poets, writers, and word artists to share their craft with the world.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/discover" className="text-muted-foreground hover:text-foreground transition-colors">
                  Discover Poems
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/poets" className="text-muted-foreground hover:text-foreground transition-colors">
                  Featured Poets
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-muted-foreground hover:text-foreground transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Create */}
          <div>
            <h3 className="font-semibold mb-4">Create</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/create" className="text-muted-foreground hover:text-foreground transition-colors">
                  Write a Poem
                </Link>
              </li>
              <li>
                <Link to="/record" className="text-muted-foreground hover:text-foreground transition-colors">
                  Record Audio
                </Link>
              </li>
              <li>
                <Link to="/upload-video" className="text-muted-foreground hover:text-foreground transition-colors">
                  Upload Video
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-muted-foreground hover:text-foreground transition-colors">
                  Analysis Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-2 mb-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Versify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;