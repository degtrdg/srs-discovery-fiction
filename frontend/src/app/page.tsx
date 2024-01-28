"use client"
import BaseOutlet from "@/outlets/BaseOutlet";
import TopicCard from "@/components/TopicCard";

const topics = [
  {
    name: "Biology",
    url: "biology",
    imageUrl: "https://iiif.elifesciences.org/journal-cms/subjects%2F2021-11%2Felife-sciences-cell-biology-illustration.jpg/57,0,6903,2082/1114,336/0/default.jpg",
    description: "test description"
  },
  {
    name: "Computer Science",
    url: "cs",
    imageUrl: "https://www.apporto.com/wp-content/uploads/2023/08/Future-of-Computer-Labs.png",
    description: "test description"
  },

]

export default function Home() {
  return (
    <BaseOutlet className="px-12 py-10">
      <h1 className="text-3xl font-bold text-center">Learn a topic!</h1>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {topics.map((topic) => (
          <li
            key={topic.name}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <a href={`graph/${topic.url}`} className="flex flex-1 flex-col overflow-hidden">
              {
                topic ? (
                  <img className="mx-auto w-max rounded object-cover object-center" src={topic?.imageUrl} alt="" />
                ) : ""
              }
              <div className="flex flex-col gap-0.5 py-3">
                <h2 className=" text-lg font-medium text-slate-900 font-bold">{topic.name}</h2>
              </div>
            </a>
          </li>
        ))}
      </ul>

    </BaseOutlet>
  );
}
