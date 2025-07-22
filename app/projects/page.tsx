import Image from "next/image";
import { SquareArrowOutUpRightIcon } from "lucide-react"

export default function Home() {
    return (
          <div className="flex flex-col">
              <section className="w-full h-full max-w-screen flex flex-col mt-10">
                  <h1 className="text-white font-bold text-2xl pb-3">Portfolio</h1>
                  <div className="bg-zinc-800 w-full h-fit rounded-xl p-4 mb-4">
                      <Image src="/QuarkBrowser.png" width={500} height={500} className="w-full rounded-md" alt="olaNotes image"/>
                      <h3 className="text-white font-bold text-xl pb-3">Quark Browser</h3>
                      <a href="https://github.com/CristianPopovici14/quark-browser" target="_blank" className="text-white font-bold flex items-center hover:text-zinc-200 w-fit">GitHub <SquareArrowOutUpRightIcon className="ml-1 h-3 w-3" /></a>
                      <p className="text-white mt-1">
                          A browser made with <strong>HTML</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong> and <strong>Electron</strong>.
                      </p>
                  </div>
                  <div className="bg-zinc-800 w-full h-fit rounded-xl p-4 mb-4">
                      <Image src="/mywebsite.png" width={500} height={500} className="w-full rounded-md" alt="olaNotes image"/>
                      <h3 className="text-white font-bold text-xl pb-3">This Website</h3>
                      <a href="https://github.com/CristianPopovici14/portfolio-website" target="_blank" className="text-white font-bold flex items-center hover:text-zinc-200 w-fit">GitHub <SquareArrowOutUpRightIcon className="ml-1 h-3 w-3" /></a>
                      <p className="text-white mt-1">
                          A portfolio website made with <strong>NextJS</strong>, <strong>React</strong>, <strong>Typescript</strong> and <strong>Shadcn/ui</strong>.
                      </p>
                  </div>
                  <div className="bg-zinc-800 w-full h-fit rounded-xl p-4">
                      <Image src="/olaNotes.png" width={500} height={500} className="w-full rounded-md" alt="olaNotes image"/>
                      <h3 className="text-white font-bold text-xl pb-3">
                      <a href="https://noteflow-test.web.app/" target="_blank" className="text-white font-bold flex items-center hover:text-zinc-200 w-fit">olaNotes <SquareArrowOutUpRightIcon className="ml-1 h-3 w-3" /></a></h3>
                      <p className="text-white">
                          A note taking app SAAS made with <strong>React</strong>, <strong>Typescript</strong>, <strong>Firebase</strong> and <strong>Shadcn/ui</strong>.
                      </p>
                  </div>
              </section>
          </div>
    )
}