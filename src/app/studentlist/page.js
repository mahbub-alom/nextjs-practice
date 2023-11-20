import Link from "next/link";

export default function StudentList() {
  const myfamily = ["Mosharif", "Fervez", "Mahbub", "Towsif", "Foysal"];
// const myfamily = [
//   { name: 'John Doe', age: 18, grade: 'A' },
//   { name: 'Jane Smith', age: 20, grade: 'B' },
//   { name: 'Bob Johnson', age: 19, grade: 'C' },
//   { name: 'Alice Williams', age: 21, grade: 'A-' },
//   { name: 'Charlie Brown', age: 22, grade: 'B+' },
//   { name: 'Eva Davis', age: 20, grade: 'C-' },
//   { name: 'Frank Miller', age: 19, grade: 'A' },
//   { name: 'Grace Taylor', age: 21, grade: 'B-' },
//   { name: 'Henry Turner', age: 18, grade: 'C+' },
//   { name: 'Isabel Martinez', age: 20, grade: 'A+' },
// ];
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {myfamily.map((user) => {
            return (<li key={user}>
            <Link href={"/studentlist/" + user}>{user}</Link>
          </li>)
        })}
      </ul>
    </div>
  );
}
