import "bulma/css/bulma.css";

function GradeScale(){

    const grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D"]

    const scales = grades.map((item, idx) =>
    
    <tr>
    <td>
        <strong>{item}</strong>
    </td>
    <td>
        
    <input style={{width:"40px"}} type='number'></input>
        
        %
    </td>
    <td>
    <strong>  &le; T &ge;</strong>
    </td>
    <td>
        
    <input style={{width:"40px"}} type='number'></input>
        
        %
    </td>

</tr>
    )


    return (
        <div classname="mt-6">
    <table class="table is-narrow">
        <thead>
          <tr>
            <th>Letter Grade</th>
            <th>Total Mark (T)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <strong>A+</strong>
                </td>
                <td>

                </td>
                <td>
                <strong> T &ge;</strong>
                </td>
                <td>
                    
                    <input style={{width:"40px"}} type='number'></input>
                    
                    %
                </td>
        
            </tr>
            {scales}
            <tr>
                <td>
                    <strong>F</strong>
                </td>
                <td>
                    
                
                </td>
                <td>
                <strong>   T &lt;</strong>
                </td>
                <td>
                    
                <input style={{width:"40px"}} type='number'></input>
                    
                    %
                </td>
        
            </tr>
        </tbody>
      </table>
     
    </div>
    );
}

export default GradeScale;