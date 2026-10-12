export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="logo" href="/">LEVEL<span>UP</span> GAMING</a>
        <p>Tu próxima partida comienza aquí.</p>
        <small>© {new Date().getFullYear()} LevelUp Gaming. Proyecto académico.</small>
      </div>
    </footer>
  )
}
