import styles from "./SvgButton.module.css";

export default function SearchIcon() {
  return (
    <div className={styles.container}>
      {/* https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Asearch%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048 */}
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        width="40"
      >
        <path d="M33 34.958 22.208 24.167Q20.958 25.208 19.292 25.812Q17.625 26.417 15.792 26.417Q11.25 26.417 8.125 23.292Q5 20.167 5 15.708Q5 11.25 8.125 8.104Q11.25 4.958 15.75 4.958Q20.208 4.958 23.333 8.104Q26.458 11.25 26.458 15.708Q26.458 17.5 25.875 19.146Q25.292 20.792 24.167 22.208L35 32.958ZM15.75 23.625Q19.042 23.625 21.354 21.312Q23.667 19 23.667 15.708Q23.667 12.417 21.354 10.083Q19.042 7.75 15.75 7.75Q12.417 7.75 10.104 10.083Q7.792 12.417 7.792 15.708Q7.792 19 10.104 21.312Q12.417 23.625 15.75 23.625Z" />
      </svg>
    </div>
  );
}
