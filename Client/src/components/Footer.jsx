import { assets } from "../assets/assets"

function Footer() {
  return (
   
        <div className="max-w-6xl mx-auto flex justify-between pb-4">
            <div className="w-2/3 flex items-center gap-3">
                <img src={assets.company_icon} alt="" />
                <h2 className="text-xl font-semibold">Insider<span className="text-lg font-normal">jobs</span></h2>
                <span className="text-xl">|</span>
                <p>Copyright @GreatStack.dev | All right reserved.</p>
            </div>
            <div className="flex">
                <a href="">
                    <img src={assets.facebook_icon} alt="" />
                </a>
                <a href="">
                    <img src={assets.twitter_icon} alt="" />
                </a>
                <a href="">
                    <img src={assets.instagram_icon} alt="" />
                </a>
            </div>
        </div>
  
  )
}

export default Footer