import { Col, Grid, Row } from "antd";
import styles from "./HomeAbout.module.scss";
import home_about from "@/assets/images/home-about.png";
import home_full from "@/assets/images/hero_image_2.jpeg";
import Image from "next/image";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { useRouter } from "next/router";
import CountdownEffect from "@/components/common/home/countdown-effect/CountdownEffect";

const { useBreakpoint } = Grid;

const HomeAbout = () => {
  const screens = useBreakpoint();
  const router = useRouter();

  const goToAboutUs = () => {
    router.push("about-us");
  };

  // 👉 Dynamic years of experience calculation
  const foundingYear = 1991;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - foundingYear + 1;

  return (
    <div className={styles.homeAboutWrapper}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <div className={styles.homeAboutImageWrapper}>
            {screens.md ? (
              <Image src={home_about} alt="Landing Page's About Us" />
            ) : (
              <Image src={home_full} alt="Landing Page's About Us" />
            )}
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={styles.sinceText}>
            <div className={styles.divider} />
            <p> Who We Are</p>
          </div>
          <p className={styles.title}>
            Sylhet’s Leading Consulting Firm Since {foundingYear}
          </p>
          <p className={styles.subtitle}>
            Engineering Planning Engineering Consultancy  Team (EPCT) is a leading and highly reputed multidisciplinary firm in Sylhet, Bangladesh. With a legacy spanning over three decades, we are dedicated to designing Passion, Trust & Innovation. Our team of seasoned experts collaborates with diverse clients, from government entities to private developers, turning their visionary ideas into impactful and sustainable realities. We believe great design can transform lives, and our unwavering commitment is to always seek improvements, never settling for the status quo.
          </p>
          <div className={styles.bulletPoints}>
            <ul className={styles.bulletList}>
              <li>Design Expertise</li>
              <li>Project Management</li>
              <li>Client Collaboration</li>
              <li>Technical Skills</li>
              <li>Diverse Portfolio</li>
              <li>Regulatory Knowledge</li>
            </ul>
          </div>

          <CoreButton text="About Us" type="secondary" onClick={goToAboutUs} />
        </Col>
      </Row>

      <div className={styles.statsSection}>
        <div className={styles.singleCard}>
          <CountdownEffect value={yearsOfExperience} />
          <p className={styles.text}>Years of Experience</p>
        </div>
        <div className={styles.singleCard}>
          <CountdownEffect value={500} />
          <p className={styles.text}>Projects Completed</p>
        </div>
        <div className={styles.singleCard}>
          <CountdownEffect value={200} />
          <p className={styles.text}>Client Served</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
