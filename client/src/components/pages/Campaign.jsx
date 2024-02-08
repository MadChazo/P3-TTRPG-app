import React from 'react'
import Button from 'react-bootstrap/Button';

const Campaign = () => {
    return (
        <main>
             <h1>Select An Campaign</h1>
            <Button variant="primary" href="/CreateCampaign">Create Campaign</Button>{' '}
        </main>
    )
}

export default Campaign