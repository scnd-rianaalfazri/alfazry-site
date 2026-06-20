export default function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/20">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-cyan-500/20">
            {headers.map((header, index) => (
              <th
                key={index}
                className="
                  border border-white/20
                  p-2 md:p-3
                  text-left
                  text-sm md:text-base
                  whitespace-nowrap
                "
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-white/5 transition"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="
                    border border-white/20
                    p-2 md:p-3
                    text-sm md:text-base
                  "
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