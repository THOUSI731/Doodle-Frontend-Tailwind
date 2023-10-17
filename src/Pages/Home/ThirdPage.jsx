import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

const ThirdPage = () => {
  return (
    <>
      <h1 className="text-center text-primary-text text-3xl sm:text-5xl mt-10">
        Our Features
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
      <Card className="mt-20 hover:shadow-2xl hover:shadow-primary-hov-purple">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Teachers
        </Typography>
        <Typography className='text text-xs md:text-base'>
          You can easily find your jobs you can showcase your talent in teaching 
        </Typography>
      </CardBody>
    </Card>
      <Card className="mt-20 hover:shadow-2xl hover:shadow-primary-hov-purple">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Institutes
        </Typography>
        <Typography className='text text-xs md:text-base'>
          You can manage your students,schedule classrooms with teachers, chat with students,hire teachers,analyze your income and expense
        </Typography>
      </CardBody>
    </Card>
      <Card className="mt-20 hover:shadow-2xl hover:shadow-primary-hov-purple">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Students
        </Typography>
        <Typography className='text text-xs md:text-base'>
          We are providing a better classrooms that you can clear doubts easily with your teacher
        </Typography>
      </CardBody>
    </Card>
      <Card className="mt-20 hover:shadow-2xl hover:shadow-primary-hov-purple">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Dashboard
        </Typography>
        <Typography className='text text-xs md:text-base'>
          We are highly focusing on your need,we are ready for you to help 
        </Typography>
      </CardBody>
    </Card>
     </div>
    </>
  );
};

export default ThirdPage;
