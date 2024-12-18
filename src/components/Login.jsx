import React from 'react'
import Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Login() {
  return (
    <div className='container mt-5'>
      <Form className=''>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' autoComplete='email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' autoComplete='current-password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Remember me' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form> 
    </div>
  )
}

export default Login
