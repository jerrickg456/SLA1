import { useReducer, useState, useRef, useEffect } from 'react'



const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 }
    case 'DECREMENT': return { count: state.count - 1 }
    case 'RESET':     return { count: 0 }
    default:          return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(
    counterReducer,
    undefined,
    () => ({ count: parseInt(localStorage.getItem('counter') ?? '0', 10) })
  )

  useEffect(() => {
    localStorage.setItem('counter', state.count)
  }, [state.count])

  return (
    <section style={styles.card}>
      <h2>Task 1 &amp; 5 — Counter (useReducer + localStorage)</h2>
      <p style={styles.countDisplay}>{state.count}</p>
      <div style={styles.row}>
        <button style={styles.btn} onClick={() => dispatch({ type: 'INCREMENT' })}>+ Increment</button>
        <button style={styles.btn} onClick={() => dispatch({ type: 'DECREMENT' })}>− Decrement</button>
        <button style={{ ...styles.btn, background: '#e74c3c' }} onClick={() => dispatch({ type: 'RESET' })}>↺ Reset</button>
      </div>
      <p style={styles.hint}>Counter value is saved in localStorage and restored on page reload.</p>
    </section>
  )
}


function LivePreview() {
  const [text, setText] = useState('')

  return (
    <section style={styles.card}>
      <h2>Task 2 — Live Text Preview (useState)</h2>
      <input
        style={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing…"
      />
      <div style={styles.preview}>
        {text || <span style={{ color: '#aaa' }}>Your text will appear here…</span>}
      </div>
    </section>
  )
}



function FocusInput() {
  const inputRef = useRef(null)

  return (
    <section style={styles.card}>
      <h2>Task 3 — Focus Input (useRef)</h2>
      <div style={styles.row}>
        <input ref={inputRef} style={styles.input} placeholder="Click the button to focus me" />
        <button style={styles.btn} onClick={() => inputRef.current.focus()}>Focus</button>
      </div>
    </section>
  )
}



function DarkLightToggle() {
  const [isDark, setIsDark] = useState(false)

  const themeStyles = {
    background: isDark ? '#1e1e2e' : '#f0f4f8',
    color:      isDark ? '#cdd6f4' : '#2d3436',
    border:     isDark ? '1px solid #45475a' : '1px solid #dfe6e9',
    borderRadius: '10px',
    padding: '1.5rem',
  }

  return (
    <section style={themeStyles}>
      <h2>Task 4 — Dark / Light Mode Toggle (useState)</h2>
      <p>Current mode: <strong>{isDark ? '🌙 Dark' : '☀️ Light'}</strong></p>
      <label style={styles.switchLabel}>
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setIsDark((prev) => !prev)}
          style={{ marginRight: '0.5rem', width: '18px', height: '18px', cursor: 'pointer' }}
        />
        Switch to {isDark ? 'Light' : 'Dark'} mode
      </label>
    </section>
  )
}



export default function App() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>React Task 2</h1>
      <Counter />
      <LivePreview />
      <FocusInput />
      <DarkLightToggle />
    </div>
  )
}



const styles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '640px',
    margin: '0 auto',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  title: {
    textAlign: 'center',
    color: '#2d3436',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #dfe6e9',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  countDisplay: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0.5rem 0',
    color: '#6c5ce7',
  },
  row: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  btn: {
    padding: '0.5rem 1.1rem',
    background: '#6c5ce7',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.95rem',
  },
  input: {
    flex: 1,
    padding: '0.55rem 0.8rem',
    border: '1px solid #b2bec3',
    borderRadius: '6px',
    fontSize: '1rem',
    outline: 'none',
  },
  preview: {
    marginTop: '0.75rem',
    padding: '0.75rem',
    background: '#f8f9fa',
    border: '1px dashed #b2bec3',
    borderRadius: '6px',
    minHeight: '2.5rem',
    fontSize: '1.1rem',
  },
  hint: {
    marginTop: '0.6rem',
    fontSize: '0.82rem',
    color: '#636e72',
  },
  switchLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '1rem',
  },
}
