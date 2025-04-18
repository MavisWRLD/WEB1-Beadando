export default function Nav({ setPage }) {
    return (
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setPage('counter')}>Számláló</button>
        <button onClick={() => setPage('rps')}>Kő-Papír-Olló</button>
      </nav>
    )
  }
  