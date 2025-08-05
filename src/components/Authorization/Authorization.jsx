import React from 'react';



import { useNavigate } from 'react-router-dom';
import './authorization.scss'
import { Button } from '../../ui/Button/Button';
export default function Authorization() {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = React.useState(false)


  // const onSubmit = (e) => {
  //   const formData = new FormData(e.target);
  //   const formProps = Object.fromEntries(formData);
  //   console.log(formProps);
  // };
  const isValidaton = (e) => {
    e.preventDefault()
    if (login === '' || password === '') {
      alert('Заполните логин и пароль');
      
    }else if (login == 'sadri' && password == 'qwerty123') {
        navigate('/auth/admin');
        setIsAuth(true)

    }else{
      alert('Неправильный логин или пароль')
    }
  

  };


  return (
    <section className='authorization' >
      <div className='authorization__wrapper'>
        <h1>Log In</h1>
        <form action="">
          <input
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
            required
            value={login}
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            value={password}
          />

          <div
          style={{display: "flex", justifyContent: "center"}}
            onClick={isValidaton}
          >
            <Button className={'authorization__btn'}>LOGIN</Button>
          </div>
        </form>
      </div>
   
    </section>
  );
}