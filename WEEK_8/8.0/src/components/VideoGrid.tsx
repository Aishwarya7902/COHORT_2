import { VideoCard } from "./VideoCard"
const VIDEOS = [
    {
        title: "I built VazirX in 6 hours",
        author: "Aishwarya Gupta",
        views: "200k",
        timestamp: "1 day ago",
        image: "photo.jpg",
        thumbImage: "thumb.jpeg"
    },
    {
        title: "I built BagPack in 6 hours",
        author: "Aishwarya Gupta",
        views: "200k",
        timestamp: "1 day ago",
        image: "photo.jpg",
        thumbImage: "thumb.jpeg"
    },
    {
        title: "I built UpStox in 6 hours",
        author: "Aishwarya Gupta",
        views: "200k",
        timestamp: "1 day ago",
        image: "photo.jpg",
        thumbImage: "thumb.jpeg"
    },
    {
        title: "I built UpStox in 6 hours",
        author: "Aishwarya Gupta",
        views: "200k",
        timestamp: "1 day ago",
        image: "photo.jpg",
        thumbImage: "thumb.jpeg"
    },
    {
        title: "I built UpStox in 6 hours",
        author: "Aishwarya Gupta",
        views: "200k",
        timestamp: "1 day ago",
        image: "photo.jpg",
        thumbImage: "thumb.jpeg"
    },
    {
        title: "I built UpStox in 6 hours",
        author: "Aishwarya Gupta",
        views: "200k",
        timestamp: "1 day ago",
        image: "photo.jpg",
        thumbImage: "thumb.jpeg"
    }
]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            VIDEOS.map(video => <div>
                <VideoCard 
                    title={video.title}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp}
                    image={video.image}
                    thumbImage={video.thumbImage}


                ></VideoCard>
            </div>)
        }
    </div>
}