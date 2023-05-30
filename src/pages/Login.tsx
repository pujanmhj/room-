import { Button, Grid, Group, Paper, PasswordInput, TextInput } from '@mantine/core'
import React from 'react'

const Login = () => {
  return (
    <Grid m={'lg'} >
      <Grid.Col offset={4} span={4}  >
        <Paper className=''shadow='lg' p={'lg'}  radius={20} >
          <TextInput   px={'lg'} py={'md'} label="Username" placeholder='Enter username' />
          <PasswordInput px={'lg'} py={'md'} label="Password" placeholder='Enter password' />
        <Group position='center'>
        <Button  fullWidth m={'md'}>Submit</Button>
        </Group>
        </Paper>
      </Grid.Col>
    </Grid>

  )
}

export default Login