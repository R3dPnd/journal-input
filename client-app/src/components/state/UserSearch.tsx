import { useState } from "react";

export interface User {
    name: string;
    age: number;
}

const users: User[] = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 24},
    {name: 'Michael', age: 25}
]

const UserSearch: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [foundUsers, setFoundUsers] = useState<User | undefined>(undefined);

    let search = () => {
        setFoundUsers( 
            users.find(user => 
                {
                    return user.name.includes(searchText);
                }
            )
        );
    }

    return (
        <div>
            User Search:
            <input value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
            <button onClick={search}>Search</button>
            {
                foundUsers
                ? <div>
                    <h4>User Found</h4>
                    <p>Name: {foundUsers.name}</p>
                    <p>Age: {foundUsers.age}</p>
                </div>
                : <h3>User Not Found</h3>
            }
        </div>
    )
};

export default UserSearch;