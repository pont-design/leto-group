export default function productCrad() {
  const downloadArrow = (
    <svg
      className="catalog-page__download-arrow"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
    </svg>
  );

  return (
    <section className="catalog-page">
      <div className="catalog-page__heading">
        <h1>Продукция</h1>
        <a className="catalog-page__download-link">
          {downloadArrow} Скачать каталог
        </a>
      </div>
    </section>
  );
}
