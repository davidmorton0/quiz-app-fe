import Question from './Question.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My quiz App</h1>
        <table>
          <tr>
            <th>
              <Question
                questionNumber="1"
                questionText="How many things are there?"
                answers={[1, 2, 3]}/>
            </th>
            <th>
              <Question
              questionNumber="2"
              questionText="What colour are they?"
              answers={["Blue", "Green", "Red"]}/>
            </th>
            <th>
              <Question
              questionNumber="3"
              questionText="Are they good?"
              answers={["Yes", "No"]}/>
            </th>
            <th>
              <Question
              questionNumber="4"
              questionText="Do they sound ok?"
              answers={["Yes", "No"]}/>
            </th>
            <th>
              <Question
              questionNumber="5"
              questionText="Do you like them?"
              answers={["Yes", "No"]}/>
            </th>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
