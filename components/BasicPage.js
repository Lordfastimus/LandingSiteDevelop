import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "styles/BasicPage.module.css";

function BasicPage(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <Header />
        </header>
        <main className={styles.pageMain}>{props.children}</main>
        <footer className={styles.pageFooter}>
          <div className={styles.container}>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
}

export default BasicPage;
