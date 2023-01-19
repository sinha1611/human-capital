import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

function index() {
  return (
    <div className={styles.naviagtion}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>BriBooks</div>
        <div className={styles.btnWrapper}>
          <button className={styles.clickButton}>
            <Image src="" alt="" width={20} height={20} className="me-1" />
            Change Theme
          </button>
          <button className={styles.dropDownButton}>
            <Image
              src="/dummy.png"
              alt=""
              width={25}
              height={25}
              className={styles.dummyImage}
            />
            Noah Behl
            <Image
              src="/dropdown.png"
              alt=""
              width={15}
              height={15}
              className="ms-3 me-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
