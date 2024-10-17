import Image from "next/image";

const posts = [
  {title: "What is Islamic Monotheism", excerpt: " Ibn Abi'l Izz Al-Hanafi"},
  {title: "What is Islamic Ettiquete", excerpt: " ZAD Academy"},
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-8 col-span-1">
          <div className="lg:sticky relative top-8">

          </div>
        </div>

       
      </div>
    </div>
  );
}
