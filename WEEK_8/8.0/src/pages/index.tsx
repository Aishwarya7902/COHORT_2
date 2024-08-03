import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
   <div >
     <VideoCard 
     title={"I built VazirX in 6 hours"}
     author={"Aishwarya Gupta"}
     views={"200k"}
     timestamp={"1 day ago"}
     image={"photo.jpg"}
     thumbImage={"thumb.jpeg"}


     ></VideoCard>
     
   </div>
  )
}
