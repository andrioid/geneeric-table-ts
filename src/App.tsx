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
            address: "Hacker Avenue 2A",
            zip: 9230,
            favouritePet: { type: "dog", name: "doggie" },
          },
          {
            id: 321,
            name: "Acid Burn",
            role: "Hacker",
            address: "Hacker Avenue 2A",
            zip: 9230,
            favouritePet: { type: "cat", name: "meowser" },
          },
          {
            id: 223,
            name: "Cereal Killer",
            role: "Corn Flakes Expert",
            address: "Hacker Avenue 3C",
            zip: 9230,
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
              breakpoint: "lg",
              collapseOn: "name",
            },
          },
          address: {
            label: "Address",
          },
          zip: {
            label: "Zip Code",
            collapse: {
              collapseOn: "address",
              breakpoint: "xl",
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
