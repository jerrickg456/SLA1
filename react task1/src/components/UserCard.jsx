function UserCard({ name, age }) {
  return (
    <div
      style={{
        border: '1px solid #e0e7ff',
        borderRadius: '10px',
        padding: '20px 28px',
        maxWidth: '260px',
        backgroundColor: '#eef2ff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <h3 style={{ margin: '0 0 8px', color: '#3730a3' }}>{name}</h3>
      <p style={{ margin: 0, color: '#6366f1' }}>Age: {age}</p>
    </div>
  )
}

export default UserCard
