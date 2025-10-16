export default function StudentCard({ name, Component, description }) {
  return (
    <div style={{border: '1px solid #ddd', borderRadius: 12, padding: 16, marginBottom: 12}}>
      <h3 style={{margin: 0}}>{name}</h3>
      {description && <p style={{marginTop: 8}}>{description}</p>}
      <div style={{background: '#fafafa', padding: 12, borderRadius: 8}}>
        <Component />
      </div>
    </div>
  );
}
