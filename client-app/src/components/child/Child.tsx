import GuestList from "../state/GuestList";

interface Props {
    name: string;
    func: () => void;
}

export default function Child(props: Props) {
    return(
        <div>
            <h1>Child Component</h1>
            <GuestList/>
        </div>
    )
}