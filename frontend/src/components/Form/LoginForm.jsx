import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrorMessageText } from "./ErrorMessageText";
import styled from "styled-components";

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

const LoginButton = styled.button`
  padding: 4px;
  width: 150px;
  border-radius: 4px;
`;

const NotificationTextContainer = styled.div``;

const LoginForm = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
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
  });

  const onSubmit = async (values) => {
    
  };

  const successfulSignup = () => {
    setloggedIn(true);
    setNotificationText("Signup successful!");
  };

  let validationActive = false;
  return (
    <>
      {!loggedIn && (
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
                  className="form-input"
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
                  className="form-input"
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
                  className="form-input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </FormControl>
              <ErrorMessage name="password" component={ErrorMessageText} />
              <div className="password-message hidden text-red"></div>
              <LoginButton
                type="submit"
                onClick={() => (validationActive = true)}
              >
                Log In
              </LoginButton>
            </FormWrapper>
          </Form>
        </Formik>
      )}
    </>
  );
};

export { LoginForm };