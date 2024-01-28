"use client"
import BaseOutlet from "@/outlets/BaseOutlet";
import TopicCard from "@/components/TopicCard";

const topics = [
  {
    name: "Cells",
    url: "cells",
    imageUrl: "https://www.fast.ai/images/enlightenment.jpeg",
    description: "test description"
  },
  {
    name: "Genetics",
    url: "genetics",
    imageUrl: "https://www.fast.ai/images/enlightenment.jpeg",
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
            <a href={`learn/${topic.url}`} className="flex flex-1 flex-col overflow-hidden">
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
