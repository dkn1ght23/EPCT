import { Col, Row } from "antd";
import img from "../about-us.png";
import Image from "next/image";
import styles from "./FounderSection.module.scss";
// import ProfileTwitter from "@/components/common/svg/ProfileTwitter";
import ProfileFacebook from "@/components/common/svg/ProfileFacebook";
// import ProfileLinkedin from "@/components/common/svg/ProfileLinkedin";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }, // Delayed by 0.5s
  },
};

const FounderSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.p className={styles.founderTitle} variants={textVariants}>
        Our Founder
      </motion.p>
      <div className={styles.founderDetails}>
        <Row gutter={[30, 24]} justify="center">
          <Col xs={24} lg={12}>
            <div className={styles.founderImageSection}>
              <div className={styles.founderImageWrapper}>
                <Image src={img} alt="About us image" className={styles.img} />
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.founderDetails}>
              <motion.p
                className={styles.title}
                variants={descriptionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
              I believe in crafting solutions that redefine industry standards by delivering brilliant and financially sound designs. My commitment is to build on unwavering trust and integrity with every client, ensuring our work is a positive force for both the environment and the community it serves. Ultimately, I strive to create spaces that not only function beautifully but also enrich the lives of those who inhabit them.
              </motion.p>

              <div>
                <motion.p className={styles.name} variants={textVariants}>
                Mohiuddin Ahmed
                </motion.p>
                <motion.p className={styles.position} variants={textVariants}>
                Founder & Proprietor
                </motion.p>
                <motion.p className={styles.position} variants={textVariants}>
                BSc Engg. (BUET) MSc Engg. (UK)
                </motion.p>
                <motion.p className={styles.position} variants={textVariants}>
                Fellow: FIEB/2038
                </motion.p>
                <motion.p className={styles.position} variants={textVariants}>
                Member: I.E.I, I.R.C, I.C.I
                </motion.p>
              </div>

              <div className={styles.founderSocial}>
              
              <Link
              href="https://www.facebook.com/share/165M6Mw4vw/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
              >
                <ProfileFacebook />
                </Link>


                {/* <ProfileTwitter />
                <ProfileLinkedin /> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default FounderSection;
