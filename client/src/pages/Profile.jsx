import React from 'react'
import Button from 'react-bootstrap/Button';

const Profile = () => {
    return (
        <main>
            <h1>My Characters</h1>
            <Button variant="primary" href="/create">Create Character</Button>{' '}
        </main>
    )
}

export default Profile