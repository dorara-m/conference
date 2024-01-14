import "./section.scss";

export default function Section(props) {
  return (
    <section className={(props.hasBg && "-bg") || (props.h3 && "-h3")}>
      {!props.h3 ? (
        <div className="container">
          <h2>{props.heading}</h2>
          {props.children}
        </div>
      ) : (
        <>
          <h3>{props.heading}</h3>
          {props.children}
        </>
      )}
    </section>
  );
}
