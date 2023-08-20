import BlogTag from "./BlogTag";

export default function Article() {
  return (
    <div>
      <div className="flex flex-col gap-5 my-5">
        <h1 className="text-4xl">Article title</h1>
        <div className="flex gap-2">
          <BlogTag>Web</BlogTag>
          <BlogTag>Typescript</BlogTag>
        </div>
      </div>
      <div className="prose prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          iusto culpa ab quidem voluptas quam natus excepturi deserunt voluptate
          voluptatem architecto exercitationem porro? Sapiente itaque odio
          velit, minima obcaecati excepturi!
        </p>
      </div>
    </div>
  );
}
