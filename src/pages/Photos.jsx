import PageHeader from "../components/pageHeader/pageHeader";
import ImageGallery from "../components/imageGallery/imageGallery";

export default function Photos() {
  return (
    // なぜか/photos/と末尾にスラッシュがついてしまいpathnameが一致しない。。
    <div className="Photos">
      <PageHeader heading="Photos" />
      <ImageGallery />
    </div>
  );
}
