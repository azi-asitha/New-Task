function StudentList(){
    const students =["Asitha","Viji","Jeeva","Yuke","Charuu","viknesh"];

    return(
        <div>
            <h1>Student List</h1>

               <ul>
                {students.map((student,index)=>(
                    <li key={index}>{student}</li>
                ))}
               </ul>
            <h3>Total Students:{students.length}</h3>
        </div>
    );
}
export default StudentList;