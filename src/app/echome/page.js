import Link from 'next/link';

export default function EchoMeSupport() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem',
      background: 'var(--background)'
    }}>
      <h1 style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>Echo Me Support</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        Contact <a href="mailto:theapplibrary@gmail.com" style={{ color: 'var(--primary-accent)', textDecoration: 'underline' }}>theapplibrary@gmail.com</a> for support.
      </p>
      <Link href="/" style={{ marginTop: '2rem', color: '#666', textDecoration: 'none' }}>
        ← Back to Library
      </Link>
      <Link href="/echome/privacypolicy" style={{ marginTop: '1rem', color: '#999', fontSize: '0.9rem', textDecoration: 'underline' }}>
        Privacy Policy
      </Link>
    </div>
  );
}
