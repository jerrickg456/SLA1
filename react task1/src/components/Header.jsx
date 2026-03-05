function Header({ title, subtitle }) {
  return (
    <header style={{ backgroundColor: '#4f46e5', color: '#fff', padding: '20px 40px' }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      {subtitle && <p style={{ margin: '6px 0 0' }}>{subtitle}</p>}
    </header>
  )
}

export default Header
