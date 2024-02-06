import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CharCreate = () => {
    const [selectedFile, setSelectedFile] = useState();

    const backStory = (e) => {
        setSelectedFile(e.target.files[0]);
    }
    const storyUpload = () => {
        if (!selectedFile) {
            console.log('No file selected');
            return;
        }
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    return (
        <main>
        <Row>
            <Form.Label column="lg" lg={2}>
                Character name
            </Form.Label>
            <Col>
                <Form.Control size="lg" type="text" placeholder="Character name" />
            </Col>
        </Row>
        <br />
        <Row>
            <Form.Label column="lg" lg={2}>
                Class
            </Form.Label>
            <Col>
                <Form.Control size="lg" type="text" placeholder="Class" />
            </Col>
        </Row>
        <br />
        <h4>Background</h4>
        <br />
        <input  type="file" onChange={backStory} />
        <br />
        <h4>Character Sheet</h4>
        
        {/* <Button variant="primary" onClick={storyUpload}>Create Character</Button>{' '} */}
    </main>
    )
}

export default CharCreate