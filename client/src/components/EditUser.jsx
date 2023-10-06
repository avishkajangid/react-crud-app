import { useState, useEffect } from "react";

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { editUser, getUsers } from "../service/api.js";

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

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
        //eslint-disable-next-line
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
        console.log(response.data);
    }

    const editUserDetails = async () => {
        const response = await editUser(id, user);
        console.log(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }
// Jaha pe "key" bhi ek variable hai aur "value" bhi variable hai toh fir key ko square bracket me daalna padta hai => [e.target.name]

  return (
    <Container>
    <Typography variant="h4">Edit User</Typography>
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
        <Button href="/all" variant="contained" onClick={() => editUserDetails()}>EDIT USER</Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
