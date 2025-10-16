import StudentCard from './components/StudentCard.jsx';
import { STUDENT_COMPONENTS } from './students';

export default function App() {
  return (
    <div style={{maxWidth: 900, margin: '24px auto', fontFamily: 'system-ui, Arial'}}>
      <h1>Taller React + GitHub + Netlify (CI/CD)</h1>
      <p>Cada tarjeta es un componente creado por un estudiante e integrado a main.</p>
      <hr style={{margin: '16px 0'}} />
      {STUDENT_COMPONENTS.length === 0 && (
        <p>Aún no hay componentes. Agrega el tuyo en <code>src/students/</code> y regístralo en <code>src/students/index.js</code>.</p>
      )}
      {STUDENT_COMPONENTS.map(({ name, description, component: Cmp }, i) => (
        <StudentCard key={i} name={name} description={description} Component={Cmp} />
      ))}
    </div>
  );
}
