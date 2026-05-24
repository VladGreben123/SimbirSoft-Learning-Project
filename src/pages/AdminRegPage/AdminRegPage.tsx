import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import styles from "./AdminRegPage.module.css";
import Logo from "../../assets/Icons/logoIcon.svg?react";
import Show from "../../assets/Icons/show.svg?react";
import Hide from "../../assets/Icons/hide.svg?react";

function AdminRegPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value.trim());
      if (emailError) setEmailError(null);
    },
    [emailError],
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value.trim());
    },
    [],
  );

  const handlePasswordRepeatChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordRepeat(e.target.value.trim());
    },
    [],
  );

  const validateEmail = (value: string): string | null => {
    if (!value) return "Введите email";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Некорректный email";
    return null;
  };

  const handleBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateEmail(email);
    setEmailError(error);
    if (error) return;
    if (password === passwordRepeat)
      navigate("/admin/panel");
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.logo}>
        <Logo />
        <h1 className={styles.logoText}>Need for drive</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Регистрация</div>
          <div className={styles.authInputs}>
            <form onSubmit={handleSubmit} className={styles.authForm}>
              <div className={styles.authEmail}>
                <label htmlFor="email" className={styles.authLabel}>
                  Почта
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  maxLength={150}
                  className={styles.input}
                  onChange={handleEmailChange}
                  onBlur={handleBlur}
                />
                {emailError && (
                  <span className={styles.error}>{emailError}</span>
                )}
              </div>
              <div className={styles.authPassword}>
                <label htmlFor="password" className={styles.authLabel}>
                  Пароль
                </label>
                <div className={styles.password}>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    maxLength={150}
                    className={styles.inputPassword}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className={styles.togglePassword}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <Hide className={styles.togglePasswordIcon} />
                    ) : (
                      <Show className={styles.togglePasswordIcon} />
                    )}
                  </button>
                </div>
              </div>
              <div className={styles.authPassword}>
                <label htmlFor="passwordRepeat" className={styles.authLabel}>
                  Повторите пароль
                </label>
                <div className={styles.password}>
                  <input
                    id="passwordRepeat"
                    type={showPasswordRepeat ? "text" : "password"}
                    value={passwordRepeat}
                    maxLength={150}
                    className={styles.inputPassword}
                    onChange={handlePasswordRepeatChange}
                  />
                  <button
                    type="button"
                    className={styles.togglePassword}
                    onClick={() => setShowPasswordRepeat((prev) => !prev)}
                    aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                  >
                    {showPasswordRepeat? (
                      <Hide className={styles.togglePasswordIcon} />
                    ) : (
                      <Show className={styles.togglePasswordIcon} />
                    )}
                  </button>
                </div>
              </div>
              <div className={styles.authButtons}>
                <Link to="/admin/login" className={styles.request}>
                  Войти
                </Link>
                <button
                  type="submit"
                  className={styles.buttonEnter}
                  disabled={!email || !password}
                >
                  Запросить доступ
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminRegPage;
