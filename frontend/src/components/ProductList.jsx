export default function ProductList({ products }) {
  return (
    <ul>
      {products.map((p, i) => (
        <li key={i}>
          <b>{p.productName}</b> – ₹{p.price} <br />
          Shop: {p.shopId?.shopName}
        </li>
      ))}
    </ul>
  );
}
