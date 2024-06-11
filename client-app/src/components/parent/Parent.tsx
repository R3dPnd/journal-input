import Child from "../child/Child";
import UserSearch from "../classes/UserSearch/UserSearch";
import EventsComponents from "../events/EventsComponents";
import { User } from "../state/UserSearch";

const users: User[] = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 24},
    {name: 'Michael', age: 25}
]

export default function Parent() {
    return(
        <div>
            <h1>Parent Component</h1>
            <EventsComponents/>
            <UserSearch users={users}/>
            <Child name="Child" func={() => console.log("Hello from Child")} />
        </div>
    )
}