export default function ResultsTable({ results }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Math</th>
          <th>Science</th>
          <th>Arabic</th>
          <th>English</th>
          <th>Overall</th>
          <th>Percent</th>
        </tr>
      </thead>

      <tbody>
        {results.map((result, i) => {
          const { name, math, science, arabic, english, overall, percent } =
            result;

          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td className="no-center">{name}</td>
              <td>{math}</td>
              <td>{science}</td>
              <td>{arabic}</td>
              <td>{english}</td>
              <td>{overall}</td>
              <td>{percent}</td>
            </tr>
          );
        })}
      </tbody>

      <tfoot></tfoot>
    </table>
  );
}
