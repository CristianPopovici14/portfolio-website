import Image from "next/image";
import { MapPin } from "lucide-react"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { SquareArrowOutUpRightIcon } from "lucide-react"

export default function Home() {
    return (
          <div className="flex flex-col">
              <section className="w-full p-3 border border-zinc-800 rounded-md">
                  <div className="w-full h-full flex flex-row items-center">
                      <div className="w-full">
                          <h1 className="text-white font-bold text-2xl">Cristian Popovici</h1>
                      </div>
                      <a href="" className="p-2 ml-3 border border-zinc-800 rounded">
                          <img className="w-6 h-5 invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" />
                      </a>
                      <a href="" className="p-2 ml-3 text-sm text-white border border-zinc-800 rounded">
                                  CV
                              </a>
                  </div>
                  <div className="flex flex-row mt-1 items-center">
                      <MapPin className="h-4 w-4 text-zinc-500 mr-1" />
                      <p className="text-zinc-500">Portugal</p>
                  </div>
                  <p className="text-white mt-1">
                      I'm a 17 year old Software Developer. I have been programing since 2020.
                  </p>
              </section>
              <section className="w-full h-full max-w-screen flex flex-col mt-10">
                  <h1 className="text-white font-bold text-2xl pb-3">My Stack</h1>
                  <InfiniteMovingCards items={languages} direction="right" speed="normal" />
                  <InfiniteMovingCards items={tools} direction="right" speed="slow" />
                  {/* <a href="" className="text-zinc-600 flex items-center hover:text-zinc-500 w-fit">View all <SquareArrowOutUpRightIcon className="ml-1 h-3 w-3 text-xl" /></a> */}
              </section>
              <section className="w-full h-full max-w-screen flex flex-col mt-10">
                  <h1 className="text-white font-bold text-2xl pb-3">Portfolio</h1>
                  <div className="bg-zinc-800 w-full h-fit rounded-xl p-4 mb-4">
                      <Image src="/QuarkBrowser.png" width={500} height={500} className="w-full rounded-md" alt="olaNotes image"/>
                      <h3 className="text-white font-bold text-xl pb-3">Quark Browser</h3>
                      <a href="https://github.com/CristianPopovici14/quark-browser" className="text-white font-bold flex items-center hover:text-zinc-200 w-fit">GitHub <SquareArrowOutUpRightIcon className="ml-1 h-3 w-3" /></a>
                      <p className="text-white mt-1">
                          A browser made with <strong>HTML</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong> and <strong>Electron</strong>.
                      </p>
                  </div>
                  <div className="bg-zinc-800 w-full h-fit rounded-xl p-4 mb-4">
                      <Image src="/mywebsite.png" width={500} height={500} className="w-full rounded-md" alt="olaNotes image"/>
                      <h3 className="text-white font-bold text-xl pb-3">This Website</h3>
                      <a href="https://github.com/CristianPopovici14/portfolio-website" className="text-white font-bold flex items-center hover:text-zinc-200 w-fit">GitHub <SquareArrowOutUpRightIcon className="ml-1 h-3 w-3" /></a>
                      <p className="text-white mt-1">
                          A portfolio website made with <strong>NextJS</strong>, <strong>React</strong>, <strong>Typescript</strong> and <strong>Shadcn/ui</strong>.
                      </p>
                  </div>
                  <div className="bg-zinc-800 w-full h-fit rounded-xl p-4">
                      <Image src="/olaNotes.png" width={500} height={500} className="w-full rounded-md" alt="olaNotes image"/>
                      <h3 className="text-white font-bold text-xl pb-3">olaNotes</h3>
                      <a href="" className="text-white font-bold flex items-center hover:text-zinc-200 w-fit">GitHub <SquareArrowOutUpRightIcon className="ml-1 h-3 w-3" /></a>
                      <p className="text-white mt-1">
                          A note taking app made with <strong>React</strong>, <strong>Typescript</strong>, <strong>Firebase</strong> and <strong>Shadcn/ui</strong>.
                      </p>
                  </div>
              </section>
          </div>
    )
}



const languages = [
  {
    name: "HTML",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "React",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Python",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Javascript",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Typescript",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
];

const tools = [
  {
    name: "Firebase",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    name: "NextJS",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vite",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "GitHub",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Supabase",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "Electron",
    urlIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
  },
];
