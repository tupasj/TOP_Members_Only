import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrorMessageText } from "./ErrorMessageText";
import { AuthContext } from "../../context/AuthContext";

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
  const { setAuthUser } = useContext(AuthContext);
  const [notificationText, setNotificationText] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format.")
      .required("This field is required."),
    password: Yup.string()
      .required("This field is required.")
      .min(8, "Passwords should be a minimum of 8 characters.")
      .max(100, "Please enter a password of 100 characters or less."),
  });

  const onSubmit = async (values) => {
    const loginUser = async (values) => {
      try {
        const loginResponse = await axios.post(
          "https://top-members-only-api.up.railway.app/user/login",
          {
            email: values.email,
            password: values.password,
          },
          { withCredentials: true, credentials: "include" }
        );
        setAuthUser(loginResponse.data);
        setNotificationText("Log in successful!");
      } catch (error) {
        console.log("error: ", error.response.data.message);
        setNotificationText(`Error: ${error.response.data.message}`);
      }
    };
    loginUser(values);
  };

  let validationActive = false;
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={validationActive}
        validateOnChange={validationActive}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <FormWrapper>
            <NotificationTextContainer>
              {notificationText}
            </NotificationTextContainer>
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
    </>
  );
};

export { LoginForm };
