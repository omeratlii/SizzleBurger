function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h5 style={{ marginTop: "0px", fontWeight: "normal" }}>{content}</h5>
      <p>
        <i style={{ color: "#4C48C7" }}>{price} ₺</i>
      </p>
    </div>
  );
}

export default MenuItem;
