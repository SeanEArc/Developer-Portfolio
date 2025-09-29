import Professional_Photo from '../assets/Professional-Photo.jpeg'

const AboutMe = () => {

      
      return (


            <div className="pr-4 pl-4 w-[65%] mx-auto">

                  

                  <h2 className="text-4xl font-bold m-2"> About Me </h2>

                  <hr className='m-2 w-[75%] mx-auto'/>


                  <div className="grid grid-cols-[60%_40%]">

                        <div>

                        <h3 className="text-2xl font-semibold m-2 pt-5"> Summary: </h3>

                        <p className="mb-4">
                              I’m a full-stack developer who acquired my technical skills through college, coding bootcamps, YouTube, and LaunchCode - a nonprofit coding bootcamp.
                        </p>

                        <p className="mb-4">
                        
                              I enjoy learning new technologies, applying them in real-world scenarios, and building projects that anyone can use. My current full-stack stack includes Java with Spring Boot, JavaScript with ReactJS and TailwindCSS, and PostgreSQL or MySQL for data persistence.
                        </p>

                        <p className="mb-4">

                              I thrive in collaborative environments because they give me opportunities to learn more, share ideas, and challenge myself to improve on area's I am not familiar with.
                        </p>

                        </div>

                        <img 
                        src={Professional_Photo}
                        alt="Photo of me"
                        className='my-auto mx-auto ml-8 md:w-[50%] sm:10 border shadow rounded-full'
                        />

                  </div>


                  <p className="mb-4 mx-auto w-[80%]">

                        Additionally, I am currently in college to aquire a degree in Software Development and I enjoy playing indoor volleyball in my freetime. 
                  </p>

                  
                              
            </div>
      );
};

export default AboutMe;