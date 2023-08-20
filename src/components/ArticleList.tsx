import Preview from "./Preview";

export default function ArticleList() {
  return (
    <div>
      <h1 className="text-4xl font-black">Blog</h1>

      <div className="flex flex-col gap-5 my-5 items-center">
        <Preview>
          <h1>Article title goes here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            iusto culpa ab quidem voluptas quam natus excepturi deserunt
            voluptate voluptatem architecto exercitationem porro? Sapiente
            itaque odio velit, minima obcaecati excepturi!
          </p>
        </Preview>
        <Preview>
          <h1>Article title goes here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            iusto culpa ab quidem voluptas quam natus excepturi deserunt
            voluptate voluptatem architecto exercitationem porro? Sapiente
            itaque odio velit, minima obcaecati excepturi!
          </p>
        </Preview>
        <Preview>
          <h1>Article title goes here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            iusto culpa ab quidem voluptas quam natus excepturi deserunt
            voluptate voluptatem architecto exercitationem porro? Sapiente
            itaque odio velit, minima obcaecati excepturi!
          </p>
        </Preview>
        <Preview>
          <h1>Article title goes here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            iusto culpa ab quidem voluptas quam natus excepturi deserunt
            voluptate voluptatem architecto exercitationem porro? Sapiente
            itaque odio velit, minima obcaecati excepturi!
          </p>
        </Preview>
      </div>
    </div>
  );
}
