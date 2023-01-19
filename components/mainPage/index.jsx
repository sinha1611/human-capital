import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import EmojiPicker from 'emoji-picker-react';

function index(props) {
  const [newPage, setNewPage] = useState(["/image_2.jpg"]);
  const [currIndex, setCurrIndex] = useState("0");
  const [imageArr, setImageArr] = useState(["/image_1.png",])
  const [emoji, setEmoji] = useState(false)

  const imgArr = [
    "/image_4.jpg",
    "/image_5.jpg",
    "/image_6.jpg",
    "/image_7.jpg",
    "/image_8.jpg",
    "/image_10.jpg",
    "/image_11.jpg",
    "/image_12.jpg",
    "/image_13.jpg",
    "/image_14.jpeg",
  ];

  useEffect(()=>{
    setImageArr([...imageArr, ...imgArr])
  }, [])
  useEffect(()=>{
    if(imageArr.length == currIndex) setCurrIndex(currIndex - 1)
  }, [imageArr.length])
  
 const hanadleAdd = () =>{
    if(imageArr.length > 1 )
    {setImageArr(imageArr.filter((item)=> item !== imageArr[currIndex]));
    setNewPage([...newPage, imageArr[currIndex]])}
 }
  return (
    <div className={styles.mainContainer}>
      <div className="container">
        <div className="row">
          <div className="col-1" onClick={()=>setEmoji(false)}>
            {newPage?.map((item, index) => (
              <div className={styles.sideImage}>
                <img
                  key={index}
                  src={item}
                  alt="img"
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          <div className="col-8">
            <div className={styles.mainImage}>
              <img
                key={index}
                src={imageArr[currIndex]}
                alt="img"
                className={styles.imageMain}
                onClick={()=>setEmoji(false)}
              />
            <div className={styles.emoji}>
              {!emoji && <div className={styles.inputName} onClick={()=>setEmoji(true)}>Start Typing Here</div>}
              {emoji && <EmojiPicker height="400px"/>}
            </div>
            </div>
            <div className={styles.footerButtons} onClick={()=>setEmoji(false)}>
              <button className={styles.dropDownButton}>
                <Image
                  src="/dummy.png"
                  alt=""
                  width={25}
                  height={25}
                  className={styles.dummyImage}
                />
                Help Me
              </button>
              <button className={styles.dropDownButton}>
                <Image
                  src="/dummy.png"
                  alt=""
                  width={25}
                  height={25}
                  className={styles.dummyImage}
                />
                Book Review
              </button>
              <button className={styles.dropDownButton} onClick={()=> hanadleAdd()}>
                <div className={styles.plus}><span>+</span></div>
                Add New Page
              </button>
            </div>
          </div>
          <div className="col-3" onClick={()=>setEmoji(false)}>
            <div className={styles.imageOption}>
              <div className={styles.box}>
                <span>Change Background</span>
                <div className={styles.search}>
                  <img src="/search.jpg" alt="" />
                </div>
              </div>
              <div className={styles.dropdown}>
                <span>Imagination</span>
                <div className={styles.dropIcon}>
                  {/* <img src="/whiteDrop.png" alt="" /> */}
                </div>
              </div>
              <div className={styles.gridContainer}>
                {imageArr.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt="img"
                    className={currIndex === index ? `${styles.image} ${styles.active} `: `${styles.image}`}
                    onClick={()=>setCurrIndex(index)}
                  />
                ))}
              </div>
              <div className={styles.footer}>
                <span>Upload A Custom Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
