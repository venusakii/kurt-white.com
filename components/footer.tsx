export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4L7 7H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V7H13L10 4Z" fill="black"/>
                  <circle cx="10" cy="15" r="1" fill="black"/>
                </svg>
              </div>
              <span className="font-serif text-xl font-semibold">Kurt White</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted source for honest blender reviews and expert buying advice since 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Reviews</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Latest Reviews</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Top Rated</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Budget Picks</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Premium Models</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Buying Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Comparison Tool</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Kurt White. All rights reserved. | Affiliate Disclosure: We may earn commissions from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
