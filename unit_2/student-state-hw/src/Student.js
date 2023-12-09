import Score from './Score';


function Student(props) {
    return(
        <div>
           <h2>Name: {props.student.name}</h2>
            <p>Bio: {props.student.bio}</p> 

            {props.student.scores.map(score => {
                return (
                    <div>
                    <Score score={score}/>
                   </div>
                )
            })}
      
           

        </div>
    )

}

export default Student;