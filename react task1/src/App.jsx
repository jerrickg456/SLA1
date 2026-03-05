import Layout from './components/Layout'
import Button from './components/Button'
import UserCard from './components/UserCard'

function App() {
  const handleClick = () => alert('Button clicked!')

  return (
    <Layout
      headerTitle="My React App"
      headerSubtitle="Built with reusable components"
      footerText="© 2026 React Task 1. All rights reserved."
    >
      <h2 style={{ color: '#3730a3' }}>Welcome</h2>
      <p style={{ marginBottom: '24px', color: '#4b5563' }}>
        This page is built using reusable React components.
      </p>

      <div style={{ marginBottom: '32px' }}>
        <Button label="Click Me" onClick={handleClick} />
      </div>

      <h3 style={{ color: '#3730a3', marginBottom: '16px' }}>Team Members</h3>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <UserCard name="Jerrick Austin Manuel G" age={19} />
      </div>
    </Layout>
  )
}

export default App
