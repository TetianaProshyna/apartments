import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <svg
      className={styles.headerLogo}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 297 297"
      width="50"
      height="50"
    >
      <path
        className={styles.headerLock}
        d="M294.321 129.816L154.065 3.445a8.102 8.102 0 00-10.838-.006L2.684 129.81a8.1 8.1 0 005.417 14.125h23.944L143.17 45.007a8.1 8.1 0 0110.947.001l111.117 98.927h23.664a8.1 8.1 0 005.423-14.119z"
      />
      <path
        className={styles.headerLock}
        d="M172.971 149.57c0-13.4-10.902-24.303-24.303-24.303-13.399 0-24.302 10.902-24.302 24.303v11.897h48.604V149.57zM107.659 245.007h82.019v-65.313h-82.019v65.313zm41.01-52.148c6.98 0 12.658 5.678 12.658 12.657 0 3.4-1.354 6.486-3.545 8.764v11.994a9.113 9.113 0 11-18.226 0v-11.996a12.61 12.61 0 01-3.543-8.762c-.001-6.98 5.677-12.657 12.656-12.657z"
      />
      <path d="M42.077 156.72v130.816a8.102 8.102 0 008.101 8.101h196.928a8.102 8.102 0 008.101-8.101V156.72L148.644 61.968 42.077 156.72zm149.121-7.15v11.897h7.594a9.112 9.112 0 019.113 9.113v83.539a9.112 9.112 0 01-9.113 9.113H98.546a9.113 9.113 0 01-9.113-9.113V170.58a9.113 9.113 0 019.113-9.113h7.595V149.57c0-23.451 19.078-42.529 42.528-42.529 23.451 0 42.529 19.078 42.529 42.529z" />
    </svg>
  );
};
export default Logo;
