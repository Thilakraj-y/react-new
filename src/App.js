import './App.css';

function App() {
  return (
    <div className="App">
      <div className="full">
          <table>
            <tr>
              <th><label>Name</label></th>
              <th><input type="text"></input></th>
            
              <th><label>D.O.B</label></th>
              <th><input type="text"></input></th>
            </tr>
            <tr>
              <th><label>Number</label></th>
              <th><input type="text"></input></th>
          
              <th><label>E-mail</label></th>
              <th><input type="text"></input></th>
            </tr>
            <tr>
              <th><label>Qualification</label></th>                                                                
              <th><input type="select                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       "></input></th>
            
              <th><label>Department</label></th>
              <th><input type="text"></input></th>
            </tr>
            
            <tr>
              <th><label>Graduation-Year</label></th>
              <th><input type="text"></input></th>
            
              <th><label>Gender</label></th>
              <th>
                <input type="radio" name="gender"></input><label>Male</label>
                <input type="radio" name="gender"></input><label>Fe-Male</label>
              </th>
            </tr>
            <tr>
                <th><label>Any work Experience</label></th>
                <th>
                  <input type="radio" name="exp"></input><label>Yes</label>
                  <input type="radio" name="exp"></input><label>No</label>
                </th>
              </tr>
            </table>
            <div className="rach">
                <label>Technology Known</label>
                <input type="checkbox" className="radio" name="html"></input><label>Html</label>
                <input type="checkbox" className="radio" name="java"></input><label>JavaScript</label>
                <input type="checkbox" className="radio" name="css"></input><label>Css</label>
            </div>
            <div className="rach">
                <label>Job you looking for</label>
                <input type="radio" className="radio" name="role"></input><label>Developer</label>
                <input type="radio" className="radio" name="role"></input><label>Tester</label>
                <input type="radio" className="radio" name="role"></input><label>Devops</label>

            </div>
            
        
          <div className="but">
            <button>sumbit</button>
            <button>reset</button>

          </div>
      </div>
    </div>
  );
}

export default App;
