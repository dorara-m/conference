import "./pageHeader.scss";

export default function pageHeader(props) {
  return (
    <div className="pageHeader">
      <div className="container">
        <h1>{props.heading}</h1>
      </div>
    </div>
  );
}
