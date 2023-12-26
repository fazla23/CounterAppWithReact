
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'

export default function WelcomeComponent(){
    // userParams return an object with key value pair
    // const params = useParams()
    const {username} = useParams() // deconstructed the params and fetched username from the object. username 
                                    // is passed to the component through the route parameter

    return (
        <div>
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Manage your todos <Link to='/todos'>Go here</Link>
            </div>
        </div>
    )
}