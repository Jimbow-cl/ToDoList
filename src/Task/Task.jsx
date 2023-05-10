

function Task(props) {

    return (
        <div className="task">
            <p>Tâche :</p>
            <p>{props.item}</p>

        </div>)
}

export default Task