import { Content } from './Content'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Test App&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div className={styles.content}>
          <Content />
        </div>
      </div>
    </main>
  )
}
