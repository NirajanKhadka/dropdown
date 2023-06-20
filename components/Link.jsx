import { useState } from "react"

const Link = ({links}) => {
    // console.log(links)
    const [isExpanded,setIsExpanded] = useState(false)
    const [whichExpanded,setWhichExpanded] = useState(false)
    return <>
        {links.map( e => {
            // console.log(e)
            return <div className="w-full">
                {/* titles and arrow */}
                <div className="w-full h-fit flex items-center">
                    <p className="text-lg text-gray-500 font-semibold ">{e.title}</p>
                    {isExpanded && whichExpanded == e.title ? <button  id="imageExpanded" onClick={() => {
                            setIsExpanded(!isExpanded) 
                            setWhichExpanded(e.title)
                        } }/> 
                        : 
                        <button id="imageCollapsed" onClick={() => {
                            setIsExpanded(!isExpanded) 
                            setWhichExpanded(e.title)
                        } }/>}
                </div>

                {/* Sublinks container*/}
                { (isExpanded && whichExpanded == e.title)  && <div className={` pl-4  flex flex-none flex-col`}>
                    {
                        
                        e.sublinks.map(q => {
                            // individual link
                            return <div className=" h-8 flex gap-1  items-center">
                                        {q?.icon && <div className="w-6 h-6  flex justify-center items-center"><img src={q.icon} className="w-full h-full"></img></div>} 
                                        {/* {q?.icon && <div className={`w-8 h-8 mr-4 bg-[url('${q.icon}')] bg-no-repeat bg-cover`}></div>}  */}
                                        <div className="text-lg  text-gray-500 font-semibold mx-2">{q.title}</div>
                                    </div>
                        })
                    }

                </div> }
            </div>
        })}
    </>
}

export default Link