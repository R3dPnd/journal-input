import { useState, useRef, useEffect } from "react";

interface User {
    name: string;
    age: number;
}


interface Props {
    users: User[];
}

function UserSearch(props: Props) {
    const [searchText, setSearchText] = useState('');
    const [foundUsers, setFoundUsers] = useState<User | undefined>(undefined);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    })

    let search = () => {
        setFoundUsers( 
            props.users.find(user => 
                {
                    return user.name.includes(searchText);
                }
            )
        );
    }

    return (
        <div>
            User Search:
            <input ref={inputRef} value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
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