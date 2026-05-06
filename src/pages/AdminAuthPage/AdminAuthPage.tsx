import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import styles from "./AdminAuthPage.module.css";
import Logo from "../../assets/Icons/logoIcon.svg?react";

function AdminAuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (emailError) setEmailError(null);
    },
    [emailError],
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
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
    if (email === "admin@admin.com" && password === "admin")
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
          <div className={styles.cardHeader}>Вход</div>
          <div className={styles.authInputs}>
            <form onSubmit={handleSubmit} className={styles.authForm}>
              <div className={styles.authEmail}>
                <label htmlFor="email" className={styles.authLabel}>
                  Почта
                </label>
                <input
                  id="email"
                  type="email"
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
                <input
                  id="password"
                  type="password"
                  className={styles.input}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className={styles.authButtons}>
                <a href="#" className={styles.request}>
                  Запросить доступ
                </a>
                <button
                  type="submit"
                  className={styles.buttonEnter}
                  disabled={!email || !password}
                >
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminAuthPage;
