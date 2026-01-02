import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';

export default function EchoMeSupport() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/logo_banner.png"
          alt="The App Library Banner"
          width={600}
          height={200}
          className={styles.banner}
          priority
          style={{ width: "100%", height: "auto" }}
        />
      </header>

      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>Echo Me - Affirmations App</h1>
      </div>

      <main style={{ 
        width: '100%', 
        maxWidth: '800px', 
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '20px',
        padding: '2rem',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
          Contact <a href="mailto:theapplibrary@gmail.com" style={{ color: 'var(--primary-accent)', textDecoration: 'underline' }}>theapplibrary@gmail.com</a> for support.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <Link href="/echome/privacypolicy" style={{ color: '#999', fontSize: '0.9rem', textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
        </div>
      </main>

      <Link href="/" style={{
        marginTop: '3rem',
        padding: '0.75rem 2rem',
        background: 'var(--foreground)',
        color: 'var(--background)',
        borderRadius: '30px',
        fontWeight: 600,
        textDecoration: 'none',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease'
      }}>
        Home
      </Link>
    </div>
  );
}
