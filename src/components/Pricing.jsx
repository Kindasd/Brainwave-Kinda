import { smallSphere, stars } from "../assets"
import Heading from "./Heading"
import PricingList from "./PricingList"
import Section from "./Section"
import {LeftLine, RightLine} from "./design/Pricing"

const Pricing = () => {
  return (
    <Section className="overflow-hidden " id="pricing">
      <div className="container relative z-2 ">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex ">
           <img 
           src={smallSphere}
           className="relative z-1 "
           width={255}
           height={255}
           alt="Sphere"
           />
           <div className="absolute  top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img 
            src={stars}
            width={950}
            height={400}
            className="w-full"
            alt="Stars"
            />

           </div>
        </div>
        {/* <h5 className=" max-w-[50rem] mx-auto mb-8 lg:mb-8 md:text-center body-2 mt-4 text-n-4 " > [ GET STARTED WITH BRAINWAVE ]</h5>
      <div className=" h2  mb-14  ml-40">Pay once, use forever</div> 
         */}
        <Heading
         tag=" GET STARTED WITH BRAINWAVE"
         title="Pay once, use forever" 
         />
        
         <div className="relative">
           <PricingList />
           <LeftLine />
           <RightLine />
         </div>

         <div className="flex justify-center mt-10 ">
             <a className="text-xs font-code font-bold tracking-wider uppercase border-b " href="/pricing">
              See the full details
             </a>
         </div>

      </div>
    </Section>
  )
}

export default Pricing
