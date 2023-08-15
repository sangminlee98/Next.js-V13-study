export default function Introduction() {
  const ARTICLE_CLASS = "flex flex-col justify-center items-center";
  const TITLE_CLASS = "text-xl font-bold";
  return (
    <div className="flex flex-col w-full justify-center items-center mt-8">
      <section className="flex flex-col gap-4 items-center justify-center w-11/12 px-4 py-12 bg-gray-100 shadow-lg">
        <article className={ARTICLE_CLASS}>
          <h1 className={TITLE_CLASS}>Who Am I?</h1>
          <p>개발을 사랑하는 풀스택 개발자</p>
          <p>사람과 디자인을 담는 웹앱을 만들고 있음</p>
        </article>
        <article className={ARTICLE_CLASS}>
          <h1 className={TITLE_CLASS}>Career</h1>
          <p>구글러 (-Now)</p>
          <p>메이스북 (-2019)</p>
          <p>삼준전자 (-2015)</p>
        </article>
        <article className={ARTICLE_CLASS}>
          <h1 className={TITLE_CLASS}>Skills</h1>
          <p>React, Vue, Node</p>
          <p>Git,Clean Code</p>
          <p>VS Code, IntelliJ, MongoDB</p>
        </article>
      </section>
    </div>
  );
}
