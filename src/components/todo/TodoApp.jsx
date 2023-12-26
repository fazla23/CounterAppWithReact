import './TodoApp.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LogoutComponent'
import ListTodoComponent from './ListTodosComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import AuthProvider, { useAuth } from './security/AuthContext'

function Authenticated({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated)
        return children
    else
        return <Navigate to="/"></Navigate>
}

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                        <Routes>
                            <Route path='/' element={<LoginComponent/>}></Route>
                            <Route path='/login' element={<LoginComponent/>}></Route>
                            <Route path='/welcome/:username' element={
                                <Authenticated>
                                    <WelcomeComponent/>
                                </Authenticated>
                                }>
                            </Route>
                            <Route path='/todos' element={
                                <Authenticated>
                                    <ListTodoComponent />
                                </Authenticated>
                                }>
                            </Route>
                            <Route path='/logout' element={<LogoutComponent />}></Route>
                            <Route path='*' element={<ErrorComponent/>}></Route>
                        </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}