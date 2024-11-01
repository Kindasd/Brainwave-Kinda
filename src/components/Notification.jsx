import { notification1 } from "../assets"
import { notificationImages } from "../constans/index.js"

const Notification = (className) => {
  return (
    <div className="hidden md:block">
    <div className={`${className || ""} flex items-center p-4 pr-6 bg-n-9/40 absolute -right-[2.5rem] backdrop-blur border border-n-1/10 rounded-3xl gap-5 lg:w-80 ms-auto mt-56 md:w[25rem]`}>
      <img 
      src={notification1}
      width={62}
      height={62}
      alt="image"
      className="rounded-xl "
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base"> Code generation</h6>
           <div className="flex items-center justify-between">
            <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
                  <li key={index} className="flex w-6 h-6 border-2 border-n-12  rounded-full overflow-hidden">
                    <img 
                    src={item}
                    className="w-full"
                    width={20}
                    height={20}
                    alt={item}
                    />
                  </li>
                ))}
            </ul>
             
            <div className="body-2 text-n-13 ">
                 1m ago
               </div>
           </div>
      </div>
    </div>
    </div>
  )
}

export default Notification

