import { useState } from "react";
import {
  Container,
  FormContent,
  Button,
  Message,
  Input,
  TextArea,
  FieldSet,
} from "./styles";

export default function Form() {
  const initalState = {
    name: "",
    email: "",
    message: "",
    gender: "",
  };

  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
    setSuccess("Thanks for contacting us!")
    setState(initalState)
  };

  const handleInput = (e) => {
    setSuccess("");
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <Container>
        <FormContent onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <FieldSet>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={state.gender === "female"}
                onChange={handleInput}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={state.gender === "male"}
                onChange={handleInput}
              />
              Male
            </label>
          </FieldSet>
          <label htmlFor="message">Message</label>
          <TextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {success && (
            <Message>
              <p>{success}</p>
            </Message>
          )}
          {error && (
            <Message>
              <p>{error}</p>
            </Message>
          )}
          <Button type="submit">Send Message</Button>
        </FormContent>
      </Container>
    </>
  );
}
