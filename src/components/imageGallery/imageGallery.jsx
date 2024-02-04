import styles from "./imageGallery.module.scss";

export default function imageGallery() {
  const numOfImages = 16;
  // 画像の配列を生成
  const imageArray = Array.from(
    { length: numOfImages },
    (_, index) => index + 1
  );

  return (
    <div className={styles.imageGallery}>
      <div className="container">
        <ul>
          {imageArray.map((photos, index) => {
            return (
              <li key={index}>
                <div className={styles.imgWrap}>
                  <img
                    src={`/photos/img${(index + 1)
                      .toString()
                      .padStart(2, "0")}.jpg`}
                    alt=""
                  />
                </div>
                {index === 0 && (
                  <a href="#caption" className={styles.captionMark}>
                    *
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        <p id="caption" className={styles.caption + " paragraph -caption"}>
          Primošten (Croatia), October 3, 2011
          <br />
          Others: Alan's home, November 19, 2013
        </p>
      </div>
    </div>
  );
}
