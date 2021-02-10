import Link from "next/link";
import styles from "styles/Header.module.css";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

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

function DesctopNav() {
  return (
    <nav className={styles.desktopNav}>
      {navItems.map((navItem, index) => {
        return (
          <div className={styles.navItem} key={index}>
            <Link href={navItem.url}>
              <Button color="inherit" size="large">
                {navItem.text}
              </Button>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

function Header() {
  return (
    <AppBar position="fixed" style={{ padding: "10px" }}>
      <div className={styles.headerContainer}>
        <Link href={"/"}>
          <a>
            <img src="/logo.png" alt="Лого" />
          </a>
        </Link>
        <DesctopNav />
        <Link href="mailto: abc@example.com">
          <Button size="large" color="inherit">
            Написать нам на почту
          </Button>
        </Link>
      </div>
    </AppBar>
  );
}

export default Header;
