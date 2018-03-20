import * as React from 'react';
import { WriterProps } from '../shared/interfaces/WriterProps.interface';

class Writer extends React.Component<WriterProps> {

    constructor(props: WriterProps) {
        super(props);

    }

    render() {
        return (
            <textarea
                placeholder="Write text here"
                onChange={e => this.props.onTextChange(e)}
                className="container writer"
            >
                {this.props.rawText}
            </textarea>
        );
    }
}

export default Writer;
