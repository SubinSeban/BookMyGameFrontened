
import { Carousel, Typography} from "@material-tailwind/react";
import CarouselIMG1 from "../Assets/vikram-tkv-JO19K0HDDXI-unsplash.jpg"
import CarouselIMG2 from "../Assets/leah-hetteberg-IoJFOvbqF3c-unsplash.jpg" 
import { useEffect } from "react";
export function CarouselWithContent() {
  return (

    
    <Carousel className="rounded-xl  h-screen ">
      <div className="relative h-5/6 w-full ">
        <img
          src={CarouselIMG1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
          <div className="w-3/4 text-center md:w-2/4">
            {/* <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Playing
            </Typography> */}
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Discover joy in every jump, laughter in every swing
            </Typography>
            {/* <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative h-5/6 w-full">
        <img
          src={CarouselIMG2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/20">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            {/* <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Playing
            </Typography> */}
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              play is the key to a happy heart.Dive into the fun!
            </Typography>
            {/* <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative h-5/6 w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/30">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            {/* <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
               The Beauty of Playing
            </Typography> */}
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
            Little moments,big memories-let the playground adventour begin!
            </Typography>
            {/* <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </Carousel>
  );
}