export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PIKE</h3>
            <p className="text-muted-foreground text-sm">
              Elevate your game with premium footwear designed for performance and style.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>New Arrivals</li>
              <li>Running</li>
              <li>Lifestyle</li>
              <li>Sale</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Size Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Stay Loop</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers and once-in-a-lifetime deals.
            </p>
            {/* Newsletter input could go here */}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Pike Shoes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
