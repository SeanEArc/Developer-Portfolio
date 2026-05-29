

const MyProjects = () => {

      return (

            <div>
                  <h2 className="text-3xl font-bold pt-3 mt-3 text-text-primary">My Projects</h2>

                  <hr className="m-5 w-[60%] mx-auto border-accent/20" />

                  <button className="mt-5" onClick={() => setCalorieCounterModalOpen(true)}>
                  <img
                        src={calorieCalculatorSS}
                        alt="Calorie Calculator Link"
                        className="rounded-xl shadow-lg hover:opacity-80 hover:cursor-pointer hover:ring-2 hover:ring-accent transition-all duration-300 w-[500px] h-auto mx-auto"
                  />
                  </button>
            </div>

      );
};


export default MyProjects;