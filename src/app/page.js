import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const apps = [
    {
      id: 1,
      name: "Echo Me",
      description: "A powerful voice echoing application.", // Placeholder description
      icon: "EM" // Placeholder for icon if we don't have one
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/logo.png"
          alt="The App Library Logo"
          width={120}
          height={120}
          className={styles.logo}
          priority
        />
        <h1 className={styles.title}>The App Library</h1>
        <p className={styles.subtitle}>Curated collection of our finest apps</p>
      </header>

      <main className={styles.grid}>
        {apps.map((app) => (
          <div key={app.id} className={styles.card}>
            <div className={styles.appIconPlaceholder}>
              {app.icon}
            </div>
            <div className={styles.appContent}>
              <h2 className={styles.appName}>{app.name}</h2>
              <p className={styles.appDescription}>{app.description}</p>
            </div>
            <div className={styles.arrow}>
              →
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
