import { useState } from "react"
import { Link } from "react-router-dom"
import estilos from "../../styles/estilos"



function Small() {
    const imge = "https://images.unsplash.com/photo-1678971916523-0fe8cd6fc252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"

    const [value, setValue] = useState(false)

    return (
        <div>
            {/* NavBar P-1 */}
            {/*  */}
            <nav className={`${estilos} bg-black text-white`}>


                {/* desktop */}
                <div className={`flex justify-between items-center px-2`}>
                    <div>logo</div>
                    {/* primary */}
                    <div className={`hidden sm:flex sm:justify-center sm:items-center `}>
                        <Link className={`block p-4 hover:text-black hover:bg-sky-700`} to={""}>Search</Link>
                        <Link className={`block p-4 hover:text-black hover:bg-sky-700`} to={""}>sing up</Link>
                        <Link className={`block p-4 hover:text-black hover:bg-sky-700`} to={""}>footer</Link>
                    </div>
                    {/* primary */}


                    {/* secondary mini*/}

                    <div className={`block sm:hidden`}>
                        <div className="">
                            <button className={`block p-4 hover:text-black hover:bg-sky-700 `} onClick={() => { setValue(value ? false : true) }}>More</button>
                            <div className={`${value ? "absolute" : "hidden"}  hover:block  sm:hidden  bg-black  `}>
                                <Link className={`block p-4  hover:text-black hover:bg-sky-700`} to={""}>Search</Link>
                                <Link className={`block p-4 hover:text-black hover:bg-sky-700`} to={""}>sing up</Link>
                                <Link className={`block p-4  hover:text-black hover:bg-sky-700`} to={""}>footer</Link>
                            </div>
                        </div>
                    </div>

                    {/* secondary mini */}
                </div>

            </nav>

            <main>
                {/* Cards Animation */}
                <section className={`flex w-full p-10 m-10`}>
                    <div className="ml-[-50px]  w-[300px] bg-white border border-gray-200 rounded-lg shadow hover:rotate-3 hover:translate-y-[-1rem] hover:mr-[80px]">
                        <a href="#">
                            <img className="rounded-t-lg" src={imge} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="ml-[-50px]  w-[300px] bg-white border border-gray-200 rounded-lg shadow hover:rotate-3 hover:translate-y-[-1rem] hover:mr-[80px]">
                        <a href="#">
                            <img className="rounded-t-lg" src={imge} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="ml-[-50px]  w-[300px] bg-white border border-gray-200 rounded-lg shadow hover:rotate-3 hover:translate-y-[-1rem] hover:mr-[80px]">
                        <a href="#">
                            <img className="rounded-t-lg" src={imge} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    


                </section>

            </main>




            {/* NavBar P-1 */}
        </div >
    )
}

export default Small