import React from 'react';
import Header from '../../layout/header';
import { Button, Container, Row, Col, Form, Table } from 'react-bootstrap';
import Api from '../../helper/api';

class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            entries: []
        };

        // This binding is necessary to make `this` work in the callback
        this.addEntry = this.addEntry.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addEntry() {
        if (!this.state.address) {
            alert('Input Token Address');
            return;
        }

        Api.addEntry({address: this.state.address}).then(res => {
            this.loadEntries();
        })
    }

    handleChange(event) {
        this.setState({address: event.target.value});
    }

    componentDidMount() {
        console.log('component mount');
        this.loadEntries();
    }

    loadEntries() {
        Api.getEntries().then(res => {
            this.setState({entries: res.data});
        })
    }

    render() {

        let entriesEls = this.state.entries.map((entry, index) => {
            return (
                <tr key={entry.id}>
                    <td style={{width: '10%'}}>{index + 1}</td>
                    <td style={{width: '90%'}}>{entry.address}</td>
                </tr>
            )
        })

        return (
            <div>
                <Header />
                <Container>
                    <div className="pt-3">
                        <Row>
                            <Col sm="10" className="mt-2">
                                <Form.Control type="text" placeholder="Enter Token Address"  value={this.state.address} onChange={this.handleChange} />
                            </Col>
                            <Col sm="2" className="mt-2 d-grid gap-2">
                                <Button onClick={this.addEntry}>Add Entry</Button>
                            </Col>
                        </Row>
                    </div>

                    <div className="mt-2">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entriesEls}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Entry;