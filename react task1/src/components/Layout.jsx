import Header from './Header'
import Footer from './Footer'

function Layout({ headerTitle, headerSubtitle, footerText, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <main style={{ flex: 1, padding: '40px' }}>{children}</main>
      <Footer text={footerText} />
    </div>
  )
}

export default Layout
