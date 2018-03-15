import * as React from 'react';
import './App.css';

const south = [
        '1 Virginia',
    '16 UMBC',
    '8 Creighton'
];

class App extends React.Component {
  render() {
    return (
        <>
        <div id="top-controls">
            <span className="app-title">mel</span>
        </div>
          <div className="App" id="main-part">
              <div className="bracket-container">
                  <div className="round-name">Round 1</div>
                  {south.map((team: string, idx) => {
                      const [placing, teamName] = team.split('0');
                      return (
                          <div className="bracket-pair" key={`team${idx}`}>
                              <div className="bracket">
                                  {placing}{teamName}
                              </div>
                              <div className="bracket-bottom">
                                  {teamName}
                              </div>
                          </div>
                      );
                  })}
              </div>
              <div className="bracket-container right">
                  <div className="round-name">Round 1</div>
                  <div className="bracket-pair">
                      <div className="bracket">
                          Virgina Tech
                      </div>
                      <div className="bracket-bottom">
                          Virgina Tech
                      </div>
                  </div>
                  <div className="bracket-pair">
                      <div className="bracket">
                          Virgina Tech
                      </div>
                      <div className="bracket-bottom">
                          Virgina Tech
                      </div>
                  </div>
                  <div className="bracket-pair">
                      <div className="bracket">
                          Virgina Tech
                      </div>
                      <div className="bracket-bottom">
                          Virgina Tech
                      </div>
                  </div>
                  <div className="bracket-pair">
                      <div className="bracket">
                          Virgina Tech
                      </div>
                      <div className="bracket-bottom">
                          Virgina Tech
                      </div>
                  </div>
                  <div className="bracket-pair">
                      <div className="bracket">
                          Virgina Tech
                      </div>
                      <div className="bracket-bottom">
                          Virgina Tech
                      </div>
                  </div>
                  <div className="bracket-pair">
                      <div className="bracket">
                          Virgina Tech
                      </div>
                      <div className="bracket-bottom">
                          Virgina Tech
                      </div>
                  </div>
                  <div className="bracket-pair">
                      <div className="bracket">
                          Virgina Tech
                      </div>
                      <div className="bracket-bottom">
                          Virgina Tech
                      </div>
                  </div>
              </div>
              {null}
          </div>
        </>
    );
  }
}

export default App;
