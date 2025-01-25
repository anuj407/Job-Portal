import { assets } from "../assets/assets"

function AppDownload() {
  return (
    <div className="h-[30rem] sm:h-[45rem] flex justify-center items-center">
        <div className="w-4/5 h-2/3 bg-[#F8F4FF] flex justify-center rounded-md">
            <div className=" sm:w-1/2 flex flex-col justify-center gap-6">
                <h1 className="max-sm:text-center text-3xl font-bold">Download The Mobile App For Better Exprience</h1>
                <div className=" flex gap-4 max-sm:px-3">
                    <a className="" href="">
                        <img className="w-full" src={assets.play_store} alt="" />
                    </a>
                    <a className="" href="">
                        <img className="w-full" src={assets.app_store} alt="" />
                    </a>
                </div>
            </div>
            <img className="max-sm:hidden w-1/2 lg:w-1/4 h-3/4 object-fill self-end" src={assets.app_main_img} alt="" />
        </div>
    </div>
  )
}

export default AppDownload