import { useState } from "react";

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { addUser } from "../service/api.js";

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`;

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
// Jaha pe "key" bhi ek variable hai aur "value" bhi variable hai toh fir key ko square bracket me daalna padta hai => [e.target.name]

    const addUserDetails = async () => {
      const response = await addUser(user);
      console.log(response.data);
    }
  return (
    <Container>
    <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" placeholder='Name' value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" placeholder='Username' value={username} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" placeholder='Email' value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" placeholder='Phone' value={phone} />
      </FormControl>
      <FormControl>
        <Button href="/all" variant="contained" onClick={() => addUserDetails()}>ADD USER</Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
