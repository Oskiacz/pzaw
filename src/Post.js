import './Post.css'

function Post(props) {
    return(
        <div className='element'>
            <p> {props.title} </p>
            <img src={props.icon} alt="icon"></img>
            <p>{props.body.substring(0, 50)}...</p>
        </div>
    )
}

export default Post;