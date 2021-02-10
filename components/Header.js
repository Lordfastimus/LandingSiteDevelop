import Link from "next/link";
import styles from "styles/Header.module.css";

const navItems = [
  {
    url: "/#home",
    text: "Главная",
  },
  {
    url: "/#products",
    text: "Продукты",
  },
  {
    url: "/#services",
    text: "Услуги",
  },
  {
    url: "/#price",
    text: "Цены",
  },
  // {
  //   url: "/#portfolio",
  //   text: "Портфолио",
  // },
  // {
  //   url: "/#about",
  //   text: "О нас",
  // },
  {
    url: "/#contacts",
    text: "Контакты",
  },
];

function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <Link href={"/"}>
          <a>
            <img src="/logo.png" alt="Лого" />
          </a>
        </Link>
        <nav className={styles.navContainer}>
          {navItems.map((navItem, index) => {
            return (
              <div className={styles.navItem} key={index}>
                <Link href={navItem.url}>
                  <a>{navItem.text}</a>
                </Link>
              </div>
            );
          })}
        </nav>
        <Link href="mailto: abc@example.com">
          <a>Написать нам на почту</a>
        </Link>
      </div>
    </>
  );
}

export default Header;
