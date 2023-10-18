import logo from '../assets/investment-calculator-logo.png';

import styles from './MainHeader.module.css'
const MainHeader = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default MainHeader;
