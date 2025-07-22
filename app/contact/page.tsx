import Image from "next/image";
import { SquareArrowOutUpRightIcon, Mail } from "lucide-react"

export default function Home() {
    return (
          <div className="flex flex-col w-full">
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
                      <Mail className="h-4 w-4 text-zinc-500 mr-1" />
                      <p className="text-zinc-500">cristian.popovici54@gmail.com</p>
                  </div>
              </section>
              <section className="w-full h-full max-w-screen flex flex-col mt-10">
                  <h1 className="text-white font-bold text-2xl pb-3">Contact</h1>
                  <div className="bg-zinc-800 w-full h-fit rounded-xl p-4 mb-4 flex flex-col gap-1">
                    <div>
                        <label className="text-white font-bold pb-3">Name</label>
                        <br />
                        <input className="bg-zinc-700 p-1 rounded w-full" type="text" name="" id="" />
                    </div>
                    <div>
                        <label className="text-white font-bold pb-3">Email</label>
                        <br />
                        <input className="bg-zinc-700 p-1 rounded w-full" type="email" name="" id="" />
                    </div>
                    <div>
                        <label className="text-white font-bold pb-3">Content</label>
                        <br />
                        <input className="bg-zinc-700 p-1 rounded w-full" type="text" name="" id="" />
                    </div>
                    <div className="justify-center">
                        <button className="w-full text-white font-bold bg-rose-700 mt-6 p-1 rounded hover:bg-rose-800">Send</button>
                    </div>
                  </div>
              </section>
          </div>
    )
}