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
                <img
                  src={`/photos/img${(index + 1)
                    .toString()
                    .padStart(2, "0")}.jpg`}
                  alt=""
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
