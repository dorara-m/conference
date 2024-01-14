import PageHeader from "../components/pageHeader/pageHeader";
import ImageGallery from "../components/imageGallery/imageGallery";

export default function Photos() {
  return (
    <div className="Photos">
      <PageHeader heading="Photos" />
      <ImageGallery />
    </div>
  );
}
