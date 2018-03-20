import * as React from 'react';
import { PreviewerProps } from '../shared/interfaces/PreviewerProps.interface';

class Previewer extends React.Component<PreviewerProps> {

    render() {
        return (
            <div className="container markdown" dangerouslySetInnerHTML={{ __html: this.props.text }} />
        );
    }
}

export default Previewer;