'use client'

import { useState } from 'react'
import './styles.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <div className="container">
      <div className="particles"></div>

      <nav className="nav">
        <div className="logo">⚔️ REALMS OF ETERNITY</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#gameplay">Gameplay</a>
          <a href="#classes">Classes</a>
          <a href="#subscribe">Newsletter</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="title">
            <span className="gradient-text">REALMS OF ETERNITY</span>
          </h1>
          <p className="subtitle">Every death makes you stronger. Every run reveals new secrets.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Play Now</button>
            <button className="btn btn-secondary">Watch Trailer</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">500K+</div>
              <div className="stat-label">Active Players</div>
            </div>
            <div className="stat">
              <div className="stat-value">∞</div>
              <div className="stat-label">Procedural Dungeons</div>
            </div>
            <div className="stat">
              <div className="stat-value">12</div>
              <div className="stat-label">Unique Classes</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <h2 className="section-title">Epic Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🗡️</div>
            <h3>Dynamic Combat</h3>
            <p>Master a fluid combat system with hundreds of abilities and combos</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔮</div>
            <h3>Permanent Progression</h3>
            <p>Unlock powerful meta-upgrades that persist through death</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏰</div>
            <h3>Endless Dungeons</h3>
            <p>Explore procedurally generated realms that never repeat</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Legendary Loot</h3>
            <p>Discover thousands of items with unique synergies</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Co-op Raids</h3>
            <p>Team up with friends for epic boss battles</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📜</div>
            <h3>Deep Lore</h3>
            <p>Uncover the mysteries of a shattered world</p>
          </div>
        </div>
      </section>

      <section id="gameplay" className="section gameplay-section">
        <div className="gameplay-content">
          <div className="gameplay-text">
            <h2 className="section-title">Die. Learn. Conquer.</h2>
            <p className="gameplay-description">
              In Realms of Eternity, death is not the end—it's the beginning. Each run through the ever-changing dungeons
              teaches you new strategies, unlocks powerful abilities, and brings you closer to uncovering the truth behind
              the Eternal Curse.
            </p>
            <ul className="gameplay-list">
              <li>⚔️ Fast-paced, skill-based combat</li>
              <li>🎲 RNG that rewards strategy over luck</li>
              <li>🏆 Challenging bosses with unique mechanics</li>
              <li>🔄 Meta-progression that feels meaningful</li>
            </ul>
          </div>
          <div className="gameplay-visual">
            <div className="game-mockup">
              <div className="mockup-header">
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
              </div>
              <div className="mockup-content">
                <div className="mockup-game">
                  <div className="game-ui">
                    <div className="health-bar">
                      <div className="bar-fill health"></div>
                    </div>
                    <div className="mana-bar">
                      <div className="bar-fill mana"></div>
                    </div>
                  </div>
                  <div className="game-text">🐉 BOSS ENCOUNTER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="section">
        <h2 className="section-title">Choose Your Legend</h2>
        <div className="classes-grid">
          <div className="class-card">
            <div className="class-icon">⚔️</div>
            <h3>Blade Master</h3>
            <p>Swift strikes and precise execution</p>
            <div className="class-stats">
              <span>ATK: ⭐⭐⭐⭐⭐</span>
              <span>DEF: ⭐⭐⭐</span>
            </div>
          </div>
          <div className="class-card">
            <div className="class-icon">🔥</div>
            <h3>Pyromancer</h3>
            <p>Unleash devastating elemental magic</p>
            <div className="class-stats">
              <span>MAG: ⭐⭐⭐⭐⭐</span>
              <span>DEF: ⭐⭐</span>
            </div>
          </div>
          <div className="class-card">
            <div className="class-icon">🛡️</div>
            <h3>Guardian</h3>
            <p>Unbreakable defense and protection</p>
            <div className="class-stats">
              <span>DEF: ⭐⭐⭐⭐⭐</span>
              <span>ATK: ⭐⭐⭐</span>
            </div>
          </div>
          <div className="class-card">
            <div className="class-icon">🏹</div>
            <h3>Shadow Hunter</h3>
            <p>Strike from the darkness unseen</p>
            <div className="class-stats">
              <span>AGI: ⭐⭐⭐⭐⭐</span>
              <span>ATK: ⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </section>

      <section id="subscribe" className="section subscribe-section">
        <div className="subscribe-content">
          <h2 className="section-title">Join the Adventure</h2>
          <p className="subscribe-text">
            Get exclusive updates, beta access, and special rewards
          </p>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="subscribe-input"
              required
            />
            <button type="submit" className="btn btn-primary">
              {subscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Game</h4>
            <a href="#">Download</a>
            <a href="#">Patch Notes</a>
            <a href="#">Roadmap</a>
          </div>
          <div className="footer-section">
            <h4>Community</h4>
            <a href="#">Discord</a>
            <a href="#">Reddit</a>
            <a href="#">Twitter</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Realms of Eternity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
