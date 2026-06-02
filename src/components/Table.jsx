export default function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-white/20">
        <thead>
          <tr className="bg-cyan-500/20">
            {headers.map((header, index) => (
              <th
                key={index}
                className="border border-white/20 p-3 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-white/20 p-3"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}