import {useState} from 'react';

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]); // Add type annotation for 'guests' state

    return (
        <div>
            <h3>Guest List</h3>

            <ul>
                {guests.map(guest => (
                    <li key={guest}>{guest}</li>
                ))}
            </ul>

            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={(e) =>  {
                setGuests([...guests, name]);
                setName("");
            }}>Add Guest</button>
        </div>
    )
}

export default GuestList;