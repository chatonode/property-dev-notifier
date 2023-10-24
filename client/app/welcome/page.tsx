const Home = () => {
  return (
    <main className="main">
      <aside
        className="sidebar"
        style={{ backgroundColor: 'var(--background-color)' }}
      >
        <h2 style={{ color: 'var(--primary-color)' }}>Latest News</h2>
        <ul>
          <li>
            <a href="#" style={{ color: 'var(--accent-color)' }}>
              New Product Launch
            </a>
          </li>
          <li>
            <a href="#" style={{ color: 'var(--accent-color)' }}>
              Company Announcements
            </a>
          </li>
          <li>
            <a href="#" style={{ color: 'var(--accent-color)' }}>
              Industry Insights
            </a>
          </li>
        </ul>
      </aside>
      <section className="content">
        <h2 style={{ color: 'var(--primary-color)' }}>
          Welcome to Our Website
        </h2>
        <p style={{ color: 'var(--text-color)' }}>
          Welcome to our website. We are a leading company in the field of
          technology solutions.
        </p>
        <p style={{ color: 'var(--text-color)' }}>
          Our mission is to provide innovative and cutting-edge solutions to our
          clients. Explore our services to learn more.
        </p>
        <h2 style={{ color: 'var(--primary-color)' }}>Our Services</h2>
        <ul>
          <li>
            <strong style={{ color: 'var(--text-color)' }}>
              Web Development:
            </strong>
            Custom web solutions tailored to your needs.
          </li>
          <li>
            <strong style={{ color: 'var(--text-color)' }}>
              App Development:
            </strong>
            Mobile app development for iOS and Android.
          </li>
          <li>
            <strong style={{ color: 'var(--text-color)' }}>Consulting:</strong>
            Expert consulting services for technology projects.
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Home
