import "./ProjectItem.css"


const ProjectItem = ({classN,src,alt}) => {
    return(
        <div className={classN}>
                   <img src={src} alt={alt} />
                </div>
    )
}

export default ProjectItem