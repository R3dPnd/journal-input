import { ChangeEvent, DragEvent } from "react";

const EventsComponents: React.FC = () => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    };

    const onDragStart = (e: DragEvent<HTMLDivElement>) => {
        console.log(e);
    }

    return (
        <div>
            <input onChange={onChange}/>
            <div draggable onDragStart={onDragStart}> Drag Me!</div>
        </div>
    )
};

export default EventsComponents;