import styles from "./Cross.module.css";

const Cross = ({ ...props }) => {
  return (
    <button className={styles.cross} {...props}>
      <svg
        width="37"
        height="37"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.25 1L38.25 38.5" stroke="url(#grad1)" stroke-width="2" />
        <path d="M1 38.25L38.5 1.25" stroke="url(#grad2)" stroke-width="2" />
        <defs>
          <linearGradient
            id="grad1"
            x1="19.75"
            y1="1"
            x2="19.75"
            y2="38.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF7700" />
            <stop offset="1" stop-color="#FF524B" />
          </linearGradient>
          <linearGradient
            id="grad2"
            x1="1"
            y1="19.75"
            x2="38.5"
            y2="19.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF7700" />
            <stop offset="1" stop-color="#FF524B" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default Cross;
