import MyCareer from "./MyCareer";
import AboutMe from "./AboutMe";

const AboutMeCareerPage = () => {


      return (

            <div className="bg-[#1e1e1e] pt-4">


                  <div className="text-zinc-300">
                        <AboutMe />
                        <hr className='m-5 w-[60%] mx-auto'/>
                  </div>

                  <div>
                        <MyCareer/>
                  </div>
            </div>
      )
}

export default AboutMeCareerPage;