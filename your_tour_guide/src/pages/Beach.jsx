import places from "../api/place";

const Beach = () => {
  const beaches = places.filter(p => p.category === "beach")

  return (
    <div>
      {beaches.map(b => (
        <div key={b.id}>
          <img src={b.image} width="300" />
          <h3>{b.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Beach
