import styles from "styles/Banners.module.css";

function MainBanner({ anchor }) {
  return (
    <>
      <section className={styles.MainBanner} name={anchor}>
        <div className="smallContentContainer">
          <h1>Создаем сайты для вас</h1>
          <p>Качественно, быстро и красиво</p>
          <button>Хочу сайт</button>
        </div>
      </section>
    </>
  );
}

export default MainBanner;
