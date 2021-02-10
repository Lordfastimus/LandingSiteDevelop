import BasicPage from "components/BasicPage";
import MainBanner from "components/banners/MainBanner";

export default function Home() {
  return (
    <BasicPage title="Создание сайтов LandingPage Сайт визитка">
      <MainBanner ancor="home" />
      {/* <ProductsBanner ancor="products" /> */}
      <section>
        <h2>Типы сайтов</h2>
        <section>
          Сайты по готовым дизайнам 10т - 20т. Лендинг по вашим пожаланиям от
          30т Веб проекты любой сложности
        </section>
      </section>
      <section>
        <h1>Услуги seo, хостинг</h1>
      </section>
      <section>
        <h1>контакты</h1>
      </section>
    </BasicPage>
  );
}
