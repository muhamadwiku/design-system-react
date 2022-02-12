import React from "react";
// import { IMAGES } from "../../../../config";
import styles from './styles.module.css';
import { content, contents } from './constant/constant';




export default function BeanJoeDestination() {
  return (
    <section>
      {
        contents.map((i, idx) => {
          return (
            <div className={styles.container} key={idx}>
              <article className={styles[`${i.articleStyle}`]}>
                <h1>{i.title}</h1>
                <div>
                  <span>{content.text}</span>
                </div>
              </article>
              <figure className={styles[`${i.decorStyle}`]}>
                <img alt="rectangel" src={i.decImage} />
              </figure>
              <img alt="mountain merapi" src={i.image} />
            </div>
          );
        })
      }
    </section>
  );
}
