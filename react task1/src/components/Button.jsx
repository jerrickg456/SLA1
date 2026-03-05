function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 24px',
        backgroundColor: '#4f46e5',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      {label}
    </button>
  )
}

export default Button
