import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const apps = [
    {
      id: 1,
      name: "Echo Me - Affirmations App",
      description: "Reflect Your Best Self with Echo Me.", 
      icon: "/echomeapp.png",
      url: "/echome"
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/logo.png"
          alt="The App Library Logo"
          width={300}
          height={253}
          className={styles.logo}
          priority
          style={{ height: "auto" }}
        />
        {/* Title removed as it is in the logo */}
        <p className={styles.subtitle}>Curated collection of our finest apps</p>
      </header>

      <main className={styles.grid}>
        {apps.map((app) => (
          <Link key={app.id} href={app.url} className={styles.card}>
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              width={60}
              height={60}
              className={styles.appIcon}
            />
            <div className={styles.appContent}>
              <h2 className={styles.appName}>{app.name}</h2>
              <p className={styles.appDescription}>{app.description}</p>
            </div>
            <div className={styles.arrow}>
              →
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
