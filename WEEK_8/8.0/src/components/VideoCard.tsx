
export function VideoCard(props:any) {
    return <div>
        <img src="/photo.jpg" className={"rounded-xl"}></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1 pl-2">
                <img className={"rounded-full w-20 h-20"} src="/photo.jpg"></img>
            </div>
            <div className="col-span-11 pl-2">
                <div>{props.title}</div>
                <div className="col-span-11  text-gray-400 text-base">
                    {props.author}
                </div>

                <div className="col-span-11  text-gray-400 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>

    </div>
}