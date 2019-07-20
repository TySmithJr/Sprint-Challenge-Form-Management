import React from "react";
import { withFormik, Form, Field,} from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login({touched, errors, values}) {
    return (
        <Form>
            <h1>Login</h1>
            <div>
                <Field type="text" name="username" placeholder="enter username" value={values.username} />
                {touched.name && errors.name && <p>{errors.name}</p>}
             </div>

             <div>
                <Field type="password" name="password" placeholder="enter password" value={values.password}/>
                {touched.password && errors.password && <p>{errors.password}</p>}
            </div>

            <div>
                <button type="submit">submit</button>
            </div>
        </Form>

    );
}

const formikRegForm = withFormik({
    mapPropsToValues({username,password,}) {
        return {
            username: username || "",
            password: password ||""
        };
    }, 

    handleSubmit(values, formikBag) {
        axios 
        .post("http://localhost:5000/api/login", values)
        .then(res =>{
          
            localStorage.setItem("token", res.data.token);
            alert("User created successfully", res.data.username)
            console.log(res.data);
            formikBag.props.history.push("/Data")
        }) 
        .catch(err => {
            console.log(err);
        })
    },


    validationSchema: Yup.object().shape({
        username: Yup.string()
         .min(2,"username must have 2 charachters")
         .required("name is required"),
        password: Yup.string()
         .min(8,"password must be 8 charachters")
         .required("password is required"),
    })

})(Login);



export default formikRegForm;

    


