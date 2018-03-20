import * as React from 'react';
import * as marked from 'marked';
import './App.css';
import Writer from './components/Writer';
import Previewer from './components/Previewer';
import { AppState } from './shared/interfaces/AppState.interface';

class App extends React.Component {

  initialText = `
  Markdown Previewer
  =======
  
  What is markdown?
  -----------

  See this [link](https://lifehacker.com/5943320/what-is-markdown-and-why-is-it-better-for-my-to-do-lists-and-notes) 
  for more information.
   
  Some examples
  -----------
  ### Another deeper heading
   
  Paragraphs are separated
  by a blank line.
  
  Leave 2 spaces at the end of a line to do a  
  line break
  
  Text attributes *italic*, **bold**, 
  "monospace", ~~strikethrough~~ .
  
  Shopping list:
  
    * apples
    * oranges
    * pears
  
  Numbered list:
  
    1. apples
    2. oranges
    3. pears
  
  *[José Cabeda](https://cabeda.github.io)*`;
  state: AppState = {
    markdownText: marked(this.initialText),
    rawText: this.initialText,
  };

  handleRawText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let rawText = event.currentTarget.value;
    let markdown = marked(rawText);
    this.setState({ rawText: rawText, markdownText: markdown });
  }

  render() {
    return (
      <div className="App">
        <Writer rawText={this.state.rawText} onTextChange={this.handleRawText} />
        <Previewer text={this.state.markdownText} />
      </div>
    );
  }
}

export default App;
