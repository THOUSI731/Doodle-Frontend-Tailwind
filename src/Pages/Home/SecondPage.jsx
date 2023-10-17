const SecondPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen bg-secondary-bg">
        <div className="w-full md:w-1/2 p-8 lg:mt-5">
          <img src="src/assets/images/SecondImg.png" alt="dashboard image" className="mt-20 md:mt-50 mx-auto" />
        </div>
        <div  className="w-full md:w-1/2 p-8 md:mt-12">
          <h1 style={{lineHeight:1.5}} className="text-primary-text text-left text-3xl md:text-5xl md:mt-36 font-bold mb-2">
            Lets learn together, teach together, make the future brighter
          </h1>
        </div>
      </div>
    </>
  )
}

export default SecondPage