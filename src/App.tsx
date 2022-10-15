import { useState } from "react";
import "./App.css";
import { StackedTable } from "./stacked-table";

function App() {
  return (
    <div className="App">
      <StackedTable
        data={[
          {
            id: 123,
            name: "Zero Cool",
            role: "Hacker",
            favouritePet: { type: "dog", name: "doggie" },
          },
          {
            id: 321,
            name: "Acid Burn",
            role: "Hacker",
            favouritePet: { type: "cat", name: "meowser" },
          },
        ]}
        dataFields={{
          id: {
            label: "ID",
            collapse: {
              breakpoint: "sm",
            },
            //renderField: ({ value, row }) => <span>id cell</span>,
          },
          name: {
            label: "Name",
          },
          role: {
            label: "Role",
            collapse: {
              breakpoint: "md",
              collapseOn: "name",
            },
          },
          favouritePet: {
            label: "Pet",
            renderField: ({ value, config }) => (
              <p>
                {value.name}: {value.type}
              </p>
            ),
          },
        }}
        extraFields={{
          hmm: {
            label: "Actions",
            renderField: ({ row }) => (
              <a href={`#edit:${row.id}`}>Edit {row.id}</a>
            ),
          },
        }}
      />
    </div>
  );
}

export default App;
