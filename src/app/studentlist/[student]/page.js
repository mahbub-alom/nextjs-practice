"use client"
export default function Student({params}) {
    const {student}=params;
  return (
    <div>
      <h1>Student Details</h1>
      <h4>Student Name: {student}</h4>
    </div>
  );
}
