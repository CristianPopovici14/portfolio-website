import Image from "next/image";
import { SquareArrowOutUpRightIcon } from "lucide-react"

export default function Home() {
    return (
          <div className="flex flex-col">
              <section className="w-full h-full max-w-screen flex flex-col mt-10">
                  <h1 className="text-white font-bold text-2xl pb-3">Portfolio</h1>
                  <div className="bg-zinc-800 w-full h-fit rounded-xl p-4 mb-4">
                      <Image src="/QuarkBrowser.png" width={500} height={500} className="w-full rounded-md" alt="Quark Browser image"/>
                      <h3 className="text-white font-bold text-xl pb-3">Quark Browser</h3>
                      <a href="" className="text-white font-bold flex items-center hover:text-zinc-200 w-fit">GitHub <SquareArrowOutUpRightIcon className="ml-1 h-3 w-3" /></a>
                      <p className="text-white mt-1">
                          A browser made with <strong>HTML</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong> and <strong>Electron</strong>.
                      </p>
                  </div>
                  <div className="bg-zinc-800 w-full h-fit rounded-xl p-4 mb-4">
                      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-global.website-files.com%2F5f15081919fdf673994ab5fd%2F656e730a5d1a92c7fd4e455d_Arc-Screenshot.webp&f=1&nofb=1&ipt=426b0a5d87be55180d0027559aeed383f8a74572e4162d47924f572b16777fa0" alt="Hello" className="w-max rounded-md" />
                      <h3 className="text-white font-bold text-xl pb-3">Quark Office</h3>
                      <a href="" className="text-white font-bold flex items-center hover:text-zinc-200 w-fit">GitHub <SquareArrowOutUpRightIcon className="ml-1 h-3 w-3" /></a>
                      <p className="text-white mt-1">
                          An office made with <strong>Next.js</strong>, <strong>React</strong>, <strong>Typescript</strong> and <strong>Shadcn/ui</strong>.
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