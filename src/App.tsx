import { useState, useEffect } from 'react'
import logoUrl from './assets/logo.png'
import heroBgUrl from './assets/hero_bg.png'
import aboutUsUrl from './assets/about_us.png'
import card1Url from './assets/card_1.png'
import card2Url from './assets/card_2.png'
import card3Url from './assets/card_3.png'
import card4Url from './assets/card_4.png'
import './style/light.css'
import './App.css'

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

function App() {
  useScrollAnimation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="light app-container">
      <header className={`top-app-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="top-app-bar-content">
          <img src={logoUrl} alt="SOMSAVI Logo" className="logo" />
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-background" style={{ backgroundImage: `url(${heroBgUrl})` }}>
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <h1 className="display-large animate-on-scroll">SOMSAVI AGRO INDUSTRIES LLP.</h1>
            <h2 className="title-medium animate-on-scroll" style={{ transitionDelay: '0.15s' }}>FARM TO HOME</h2>
            <button className="m3-filled-button animate-on-scroll" onClick={scrollToProducts} style={{ transitionDelay: '0.3s' }}>
              Explore Our Products
            </button>
          </div>
        </section>

        {/* ABOUT SECTION (Chunk 2) */}
        <section id="about" className="about-section">
          <div className="about-grid">
            <div className="about-content animate-on-scroll">
              <h2 className="headline-medium">Elevate Flavors, Savor Authenticity</h2>
              <p className="body-large">
                At SOMSAVI, we prioritize the selection of raw materials from our selective growers' fields with lower use of synthetic fertilizer and pesticides. Our commitment to using only the finest raw materials and adhering to the highest processing standards is a testament to our dedication to providing our customers with exceptional quality products.
              </p>
            </div>
            <div className="about-visual animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <img src={aboutUsUrl} alt="SOMSAVI raw materials selection" className="rounded-medium" />
            </div>
          </div>
        </section>
        
        {/* PRODUCTS SECTION (Chunk 3) */}
        <section id="products" className="products-section surface-container">
          <div className="section-header animate-on-scroll">
            <h2 className="display-medium section-title">Product Offerings</h2>
            <p className="body-large section-subtitle">Discover our diverse range of premium quality agricultural products.</p>
          </div>
          <div className="products-grid">
            {/* Card 1 */}
            <div className="m3-card animate-on-scroll" style={{ transitionDelay: '0s' }}>
              <div className="m3-card-image">
                <img src={card1Url} alt="Premium Blended Spices" />
              </div>
              <div className="m3-card-content">
                <h3 className="title-large m3-card-title">Premium Blended Spices</h3>
                <p className="body-medium card-desc">Blends designed for classical Indian dishes, free from preservatives and artificial flavor enhancers.</p>
                <ul className="product-list body-medium">
                  <li>Grinding Masala</li>
                  <li>Chicken/Mutton Masala</li>
                  <li>Biryani Masala</li>
                </ul>
              </div>
            </div>
            {/* Card 2 */}
            <div className="m3-card animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
              <div className="m3-card-image">
                <img src={card2Url} alt="Cereals, Pulses & Flour" />
              </div>
              <div className="m3-card-content">
                <h3 className="title-large m3-card-title">Cereals, Pulses & Flour</h3>
                <p className="body-medium card-desc">Premium quality grains grown with special agronomic practices.</p>
                <ul className="product-list body-medium">
                  <li>Wheat</li>
                  <li>Basmati rice</li>
                  <li>Chickpeas</li>
                  <li>Gram flour</li>
                </ul>
              </div>
            </div>
            {/* Card 3 */}
            <div className="m3-card animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="m3-card-image">
                <img src={card3Url} alt="Farm Fresh Produce" />
              </div>
              <div className="m3-card-content">
                <h3 className="title-large m3-card-title">Farm Fresh Produce</h3>
                <p className="body-medium card-desc">Farm-to-home organic and natural products.</p>
                <ul className="product-list body-medium">
                  <li>Spinach</li>
                  <li>Fenugreek</li>
                  <li>Okra</li>
                  <li>Cherry tomato</li>
                  <li>Broccoli</li>
                </ul>
              </div>
            </div>
            {/* Card 4 */}
            <div className="m3-card animate-on-scroll" style={{ transitionDelay: '0.45s' }}>
              <div className="m3-card-image">
                <img src={card4Url} alt="Premium Dry Fruits" />
              </div>
              <div className="m3-card-content">
                <h3 className="title-large m3-card-title">Premium Dry Fruits</h3>
                <p className="body-medium card-desc">Nutritious snacks packed with essential nutrients.</p>
                <ul className="product-list body-medium">
                  <li>Super Jumbo Dates</li>
                  <li>Walnuts</li>
                  <li>Figs</li>
                  <li>Almonds</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER & CONTACT SECTION (Chunk 4) */}
        <footer id="contact" className="footer-section">
          <div className="footer-content animate-on-scroll">
            <h2 className="headline-small">Get in Touch</h2>
            <div className="contact-details">
              <p className="body-large"><strong>Email:</strong> somsaviagro@gmail.com</p>
              <p className="body-large"><strong>Phone/WhatsApp:</strong> +91-7738455099</p>
              <p className="body-large">
                <strong>Office Address:</strong><br />
                Shop No 2, Krushi Utpanna Bazar Samati (KUBS),<br />
                Jalgaon Road, Phulambri, Tal- Phulambri,<br />
                Dist. C. Sambhajinagar - 431111
              </p>
            </div>
            
            <a href="https://wa.me/917738455099" target="_blank" rel="noopener noreferrer" className="m3-tonal-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="wa-icon">
                <path d="M12.031 0C5.385 0 0 5.385 0 12.03c0 2.12.553 4.181 1.6 6.008L.527 23.473l5.59-1.464a11.966 11.966 0 0 0 5.914 1.559h.005c6.645 0 12.032-5.385 12.032-12.032 0-3.22-1.254-6.249-3.531-8.528A11.986 11.986 0 0 0 12.031 0zm0 21.564c-1.803 0-3.57-.484-5.116-1.402l-.367-.217-3.805.997.997-3.805-.218-.367A10.021 10.021 0 0 1 2.005 12.03C2.005 6.49 6.492 2.002 12.034 2.002c2.68 0 5.197 1.045 7.094 2.94 1.895 1.896 2.94 4.415 2.94 7.093 0 5.541-4.488 10.029-10.037 10.029zm5.503-7.53c-.302-.15-1.786-.881-2.062-.981-.277-.101-.478-.152-.68.151-.201.303-.781.981-.957 1.182-.176.202-.353.227-.655.076-1.614-.805-2.857-1.488-3.957-3.32-.176-.294.175-.275.608-.949.076-.118.151-.303.076-.454-.075-.152-.68-1.643-.932-2.25-.246-.593-.496-.513-.68-.522-.176-.009-.377-.009-.579-.009-.202 0-.528.075-.805.378-.277.303-1.057 1.033-1.057 2.52 0 1.488 1.082 2.924 1.233 3.126.151.202 2.13 3.252 5.158 4.56.721.312 1.282.498 1.721.638.723.23 1.381.197 1.898.119.578-.087 1.786-.73 2.038-1.436.252-.705.252-1.31.176-1.437-.076-.126-.277-.202-.579-.353z" />
              </svg>
              Message Us on WhatsApp
            </a>
            
            <p className="body-medium closing-note">Thank you for your time.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
