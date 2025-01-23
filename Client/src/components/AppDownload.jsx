import { assets } from "../assets/assets"

function AppDownload() {
  return (
    <div className=" h-[45rem] flex justify-center items-center">
        <div className="w-4/5 h-2/3 bg-[#F8F4FF] flex justify-center rounded-md">
            <div className="w-1/2 flex flex-col justify-center gap-6">
                <h1 className="text-3xl font-bold">Download The Mobile App For Better Exprience</h1>
                <div className=" flex gap-4">
                    <a href="">
                        <img src={assets.play_store} alt="" />
                    </a>
                    <a href="">
                        <img src={assets.app_store} alt="" />
                    </a>
                </div>
            </div>
            <img className="w-1/4 h-3/4 object-cover self-end" src={assets.app_main_img} alt="" />
        </div>
    </div>
  )
}

export default AppDownload