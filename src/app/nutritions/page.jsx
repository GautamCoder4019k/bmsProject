"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
const IntroPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://indnutrientsapi.tech/food?type=vegetarian")

      .then((response) => {
        const data = response.data.item;
        if (data) {
          const limitedData = data.slice(0, 20);
          console.log(limitedData);
          setData(limitedData);
          console.log(limitedData[0].food_nutrition[0].nutrient_name);
        } else {
          console.error("API response data is undefined or empty.");
        }
      });
  }, []);
  return (
    <>
      <div className={styles.big}>
        {data.map((item) => {
          return (
            <div className={styles.container} key={item._id}>
              <div className={styles.heading}>{item.food_name}</div>
              <span>_______________</span>
              <div>
                <ul className={styles.box}>
                  <li className={styles.list}>
                    {item.food_nutrition[0].nutrient_name} -{" "}
                    {item.food_nutrition[0].value}g
                  </li>
                  <li className={styles.list}>
                    {item.food_nutrition[1].nutrient_name}-{" "}
                    {item.food_nutrition[0].value}g
                  </li>
                  <li className={styles.list}>
                    {item.food_nutrition[2].nutrient_name} -{" "}
                    {item.food_nutrition[0].value}g
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        

        <button className={styles.btn}>Prev</button>
       
        <button className={styles.btn2}>Next</button>
      </div>
    </>
  );
};

export default IntroPage;
