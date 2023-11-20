
export const metadata = {
    title: 'Skeleton Loading Products',
    description: 'Skeleton Loading NEXT.JS (13.4.4) Example',
}


async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function Page() {
  let users = await userList();
  console.log(users);
  return (
    <div>
      <h1>User List Here:</h1>
      {
        users.map((item)=>(
            <div key={item.id}>
                <h2>First Name: {item.firstName}</h2>
            </div>
        ))
      }
    </div>
  );
}
