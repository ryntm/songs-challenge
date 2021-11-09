export default function Navbtns({ buttons }) {

    console.log('hi')

    console.log(buttons)
    return (
        <div className="buttonx">
            <button className="btn btn-primary">{buttons}</button>
        </div>
    );
}