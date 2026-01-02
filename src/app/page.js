import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const apps = [
    {
      id: 1,
      name: "Echo Me - Affirmations App",
      description: "Reflect Your Best Self", 
      icon: "/echomeapp.png",
      url: "/echome"
    }
  ];

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
        {/* Title removed as it is in the logo */}
      </header>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>App Portfolio</h2>
      </div>

      <main className={styles.grid}>
        {apps.map((app) => (
          <Link key={app.id} href={app.url} className={styles.card}>
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              width={100}
              height={100}
              className={styles.appIcon}
            />
            <div className={styles.appContent}>
              <h3 className={styles.appName}>{app.name}</h3>
              <p className={styles.appDescription}>{app.description}</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
