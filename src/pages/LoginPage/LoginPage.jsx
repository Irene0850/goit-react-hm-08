import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <div className={css.loginBox}>
            <p className={css.loginPage}>Please, log in</p>
            <LoginForm/>
        </div>
    )
}