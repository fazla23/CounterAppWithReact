import { useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext'

function LoginComponent(){

    const [username, setUsername] = useState("fazla")
    const [password,setPassword] = useState("")
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(authContext.login(username,password))
        {
            navigate(`/welcome/${username}`)

        }else{
            setShowErrorMessage(true);
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
            {/* <ShowSuccessMessageComponent/> */}
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

export default LoginComponent