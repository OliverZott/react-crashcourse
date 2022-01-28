import React from "react";

interface IProps {
    people: {
        name: string,
        url: string,
        age: number,
        note?: string,
    }[]
}

// pass props to function-component and destruct in function-argument
const List: React.FC<IProps> = ({ people }) => {
    return (
        <div>
            I am a list
        </div>
    )
}

const List2 = (props: IProps) => {
    return (
        <div>
            I am a list
        </div>
    )
}

export default List;