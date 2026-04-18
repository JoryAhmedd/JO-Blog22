"use client";

import ResultsTable from "./ResultsTable";

const Results = ({ grade, results }) => {
  console.log(results);

  return (
    <div>
      <h2 className="title">Grade {grade} Results</h2>

      <ResultsTable results={results} />
    </div>
  );
};
export default Results;
