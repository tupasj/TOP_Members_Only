import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrorMessageText } from "./ErrorMessageText";

const FormWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

const FormControl = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
`;

const SignupButton = styled.button`
  padding: 4px;
  width: 150px;
  border-radius: 4px;
`;

const NotificationTextContainer = styled.div``;

const SignupForm = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("This field is required.")
      .min(2, "Name should be a minimum of 2 characters.")
      .max(50, "Please enter a name of 50 characters or less"),
    email: Yup.string()
      .email("Invalid email format.")
      .required("This field is required."),
    password: Yup.string()
      .required("This field is required.")
      .min(8, "Passwords should be a minimum of 8 characters.")
      .max(100, "Please enter a password of 100 characters or less."),
    passwordConfirmation: Yup.string()
      .required("This field is required.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });

  const onSubmit = async (values) => {
    const createUser = async (values) => {
      console.log("email: ", values.email);
      console.log("name: ", values.name);
      console.log("password: ", values.password);
      await axios.post("http://localhost:4000/user/register", {
        email: values.email,
        name: values.name,
        password: values.password,
      });
    };
    createUser(values);
  };

  const successfulSignup = () => {
    setSignedUp(true);
    setNotificationText("Signup successful!");
  };

  let validationActive = false;
  return (
    <>
      {!signedUp && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={validationActive}
          validateOnChange={validationActive}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
            successfulSignup();
          }}
        >
          <Form>
            <FormWrapper>
              <NotificationTextContainer>
                {notificationText}
              </NotificationTextContainer>
              <FormControl>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </FormControl>
              <ErrorMessage name="name" component={ErrorMessageText} />
              <FormControl>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </FormControl>
              <ErrorMessage name="email" component={ErrorMessageText} />
              <FormControl>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </FormControl>
              <ErrorMessage name="password" component={ErrorMessageText} />
              <FormControl>
                <label htmlFor="passwordConfirmation">Confirm password</label>
                <Field
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  placeholder="Confirm password"
                />
              </FormControl>
              <ErrorMessage
                name="passwordConfirmation"
                component={ErrorMessageText}
              />
              <div className="password-message hidden text-red"></div>
              <SignupButton
                type="submit"
                onClick={() => (validationActive = true)}
              >
                Sign Up
              </SignupButton>
            </FormWrapper>
          </Form>
        </Formik>
      )}
    </>
  );
};

export { SignupForm };
