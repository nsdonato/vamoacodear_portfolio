import "./ProjectItem.css"


const ProjectItem = ({classN,src,alt}) => {
    return(
        <div className={`portfolio_flex_item ${classN}`}>
                   <img src={src} alt={alt} />
                </div>
    )
}

export default ProjectItem