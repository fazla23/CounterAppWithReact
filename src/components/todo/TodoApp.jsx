import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='/todo' element={<ListTodoComponent />}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState("fazla")
    const [password,setPassword] = useState("")
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(username==='fazla' && password==='12345')
        {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`)
        }else{
            setShowErrorMessage(true);
            setShowSuccessMessage(false);
        }
    }

    function ShowSuccessMessageComponent(){
        if(showSuccessMessage){
            return <div className='successMessage'>Authenticated Successfully</div>
        }
        return null
    }

    function ShowErrorMessageComponent(){
        if(showErrorMessage){
            return <div className='errorMessage'> Authentication failed.  Check your credentials</div>
        }
        return null
    }

    return (
        <div className="Login">
            <h1>Please Login</h1>
            {/* these are alternatives to the components below */}
            {/* {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
            {showErrorMessage && <div className='errorMessage'> Authentication failed.  Check your credentials</div>} */}
            <ShowSuccessMessageComponent/>
            <ShowErrorMessageComponent/>
            <div className="LoginForm">
                <div>
                    <label htmlFor="">User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent(){
    // userParams return an object with key value pair
    // const params = useParams()
    const {username} = useParams() // deconstructed the params and fetched username from the object. username 
                                    // is passed to the component through the route parameter

    return (
        <div>
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Manage your todos <Link to='/todo'>Go here</Link>
            </div>
        </div>
    )
}

function ErrorComponent(){
    return (
        <div className="ErrorComponent">
            <h1>404 Not Found</h1>
            <div>
                PLease Contact the administrator.
            </div>
        </div>
    )
}

function ListTodoComponent(){

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [{id:1, description:'Learn AWS', done:false, targetDate:targetDate},
                    {id:2, description:'Learn Full stack',done:false, targetDate:targetDate},
                    {id:3, description:'Learn DevOps', done:false, targetDate:targetDate}
                    ]

    return (
        <div className="ListTodoComponent">
            <h1>Things You want to do</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}