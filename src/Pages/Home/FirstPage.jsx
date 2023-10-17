import { NavHeader } from '../../Components/Navbar/NavHeader'
const FirstPage = () => {

  
  return (
    <>
     <NavHeader />
     <br/>
     <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 p-4">
        <h2  style={{lineHeight:1.1}} className="  ml-5 lg:mt-10 text-primary-text text-left text-3xl md:text-7xl font-bold mb-2 ">
          Let&apos;s Educate and Empower, make the next Generation with teaching
        </h2>
        <p className="ml-5 text-primary-text text-left text-sm md:text-md mb-4 lg:mt-8">
          This platform offers you the best student management for teaching centers and job opportunities for teachers
        </p>
      </div>
      <div className="md:w-1/2 p-4 lg:mt-14">
        <img className="w-full" src="src/assets/images/web-development-concept_107173-16744.jpg" alt="dashboard image"/>
      </div>
    </div>
    </>
  )
}

export default FirstPage