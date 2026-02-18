type Props = {
  data?: any[];
};

const DataGrid = ({ data = [] }: Props) => {
  if (!data.length) return <p>No data available</p>;

  return (
    <table className="min-w-full border">
      <thead className="bg-gray-200">
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="px-4 py-2 text-left">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            {Object.values(row).map((val, idx) => (
              <td key={idx} className="px-4 py-2">{val as string}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;