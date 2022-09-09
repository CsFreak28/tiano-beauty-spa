import Styles from "./sixth.module.scss";
const SixthSection = () => {
  return (
    <div className={Styles.container}>
      <p className={Styles.chapter}>chapter III</p>
      <div className={Styles.liTag}>
        <li></li>
      </div>
      <p className={Styles.founderName}>Samuel Oliver Wesly</p>
      <div className={Styles.founderDetails}>
        <p>
          The founding director of <br />
          <span>tiano</span> beauty spa.
        </p>
        <div className={Styles.founderImage}></div>
        <p>
          The founding director of tiano beauty spa, Samuel Oliver Wesly, has
          many <br />
          years of experience in the beauty and cosmetics field. Having
          graduated <br /> from physio-therapy at Copenhagen University, Samuel
          has the skillset and <br /> knowledge to run a successful beauty spa
          in Nigeria.
        </p>
      </div>
    </div>
  );
};
export default SixthSection;
