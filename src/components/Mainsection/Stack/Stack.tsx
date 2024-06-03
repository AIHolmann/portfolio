import styles from "./stack.module.css";

const Stack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <p>I constantly try to improve</p>
        <h2>My tech stack</h2>
      </div>
      <div className={styles.listcontainer}>
        <ul>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>PostgreSQL</li>
        </ul>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
        <ul>
          <li>GIT</li>
          <li>Tailwind</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
          <li>Prisma</li>
        </ul>
      </div>
    </div>
  );
};
export default Stack;
