


export default function Cart (props) {
    return (
        <div>
            <div key={props.id} className="p-10">

                <img src={props.img} alt="dgfdfsg" />
                <h1>{props.name}</h1>
                <h2>{props.rating}</h2>
                <h1>{props.experience}</h1>

            </div>
        </div>
    )
}