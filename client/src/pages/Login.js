import React,{useState,useEffect} from 'react'
import { Form, Input,message } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';


export const Login = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);

     // submit
     const submitHandler = async(values) => {
      // console.log(values)
      try {
            setLoading(true)
            const {data} = await axios.post("/users/login",values)           
            setLoading(false)
            message.success('Login Sucessfull');
            localStorage.setItem("user",JSON.stringify({...data.user,password:""}))
            
            navigate('/')           
        } catch (error) {
            setLoading(false)
            message.error("Something went wrong")
            
        }
    }

    //prevent for login user 
    useEffect(() => {
      if (localStorage.getItem("user")) {
        navigate("/");
      }
    }, [navigate]);

  return (
    <>
    {/* <div className=' register-page'> */}
<div className=' register-page'>
  {loading && <Spinner/>}
       <Form layout='vertical'  onFinish={submitHandler}> 
       <h1>Register Form</h1>
          
            <Form.Item label="Email" name="email">
                <Input type='email'/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type='password'/>
            </Form.Item>

            <div className='d-flex justify-content-between'>
                <Link to="register">Not a User ? Click Here to Register</Link>
            </div>

            <button className='btn btn-primary'>Register</button>
       </Form>
    </div>
    </>
  )
}


export default Login