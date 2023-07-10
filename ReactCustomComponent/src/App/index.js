import * as React from "react";
import Button from "../Button";
import Container from "../Container";
import Divider from "../Divider";
import Form from "../Form";
import Input from "../Input";
import Text from "../Text";
import Title from "../Title";

const App = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    errors: false
  });
  const { email, errors, password } = state;

  const handleChange = React.useCallback(({ target: { name, value } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = !email || !password;
    setState((prevState) => ({
      ...prevState,
      errors
    }));

    if (!errors) alert(JSON.stringify({ email, password }, null, 4));
  };

  return (
    <Container>
      <Form background="#222B36" borderRadius="10px" onSubmit={handleSubmit}>
        <Title centered fontSize="34px" padding="15px 0 30px 0">
          Welcome back!
        </Title>
        <Input
          required
          icon="email"
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={email}
          errors={errors}
          onChange={handleChange}
        />
        <Input
          required
          icon="password"
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={password}
          errors={errors}
          onChange={handleChange}
        />
        <Button type="submit" margin="20px 0 20px 0">
          Log in
        </Button>
        <Divider margin="0 0 20px 0" />
        <Text>Create new account</Text>
        <Text>Forgot password</Text>
      </Form>
    </Container>
  );
};

export default App;
