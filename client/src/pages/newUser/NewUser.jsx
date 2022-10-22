import "./newUser.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  age: Yup.number()
    .min(18, "Age must be between 18 and 60")
    .max(60, "Age must be between 18 and 60")
    .required("Age is required"),
});

export default function NewUser() {

  const createUser = async (vals) => {
  
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json" 
       }
       
       let bodyContent = JSON.stringify({
         "name":vals.name,
         "email":vals.email,
         "cellno":vals.cell,
         "age":vals.age
       });
       
       let reqOptions = {
         url: "http://127.0.0.1:8081/users/AddUser",
         method: "POST",
         headers: headersList,
         data: bodyContent,
       }
  
      await axios.request(reqOptions).then(()=>{
        alert('User created Successfully')
        // redirect
        window.location.href = '/users'
      }).catch((err)=>alert(err.response.status + " User Already Exists"));
  }  

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <Formik
              initialValues={{ name:"", email: "", age: "", cell:"" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log(values);
                createUser(values)
              }}
            >
              {({ touched, errors, isSubmitting, values }) =>(
                  <div>
                    <div className="row mb-5">
                    </div>
                    <Form>
                      <div className="newUserItem">
                        <label>Name</label>
                        <Field type="text" placeholder="john" name="name"/>
                      </div>

                      <div className="newUserItem">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />

                        <div style={{color:'red'}}>
                          <ErrorMessage
                            component="div"
                            name="email"
                            color="red"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
  
                      <div className="newUserItem">
                        <label htmlFor="age" className="mt-3">
                          Age
                        </label>
                        <Field
                          type="number"
                          name="age"
                          placeholder="Enter Age"
                          className={`mt-2 form-control
                          ${
                            touched.age && errors.age
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <div style={{color:'red'}}>
                          <ErrorMessage
                            component="div"
                            name="age"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      <div className="newUserItem">
                        <label>Cell no.</label>
                        <Field type="text" placeholder="+1 247 588 966" name="cell"/>
                      </div>
  
                      <button
                        type="submit"
                        className="newUserButton"
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
              )
              }
            </Formik>
    </div>
  );
}
