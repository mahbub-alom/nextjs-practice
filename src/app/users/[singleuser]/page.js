import getUsers from "../../../../services/getusrs";

export default async function Page(props){
    const getUserList = getUsers();
    const users = await getUserList;
    const currentid=props.params.singleuser;
    const userData=users[currentid-1]
    return(
        <div>
            <h1>Name: {userData.name}</h1>
            <h1>User E-mail: {userData.email}</h1>
        </div>
    )

}