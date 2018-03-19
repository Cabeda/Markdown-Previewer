import * as React from 'react';
import * as marked from 'marked';
import './App.css';

interface WriterProps {
  rawText: string;
  onTextChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

interface PreviewerProps {
  text: string;
}

interface AppState {
  rawText: string;
  markdownText: string;
}

class Writer extends React.Component<WriterProps> {

  constructor(props: WriterProps) {
    super(props);

  }

  render() {
    return (
      <textarea onChange={e => this.props.onTextChange(e)} className="container writer">
        {this.props.rawText}
      </textarea>
    );
  }
}

class Previewer extends React.Component<PreviewerProps> {

  render() {
    return (
        <div className="container markdown" dangerouslySetInnerHTML={{ __html: this.props.text }}/>
      );
  }
}

class App extends React.Component {

  initialText = '#Title';
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
