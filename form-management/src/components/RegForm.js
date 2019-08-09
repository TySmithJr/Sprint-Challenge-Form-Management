import React from 'react';
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

function RegForm({touched,errors,values}) {
    return (
        <Form>
            <div>
                <Field type="text" name="username" placeholder="enter username" value={values.username}/>
                {touched.name && errors.name && <p>{errors.name}</p>}
            </div>

            <div>
                <Field type="text" name="password" placeholder="enter password" value={values.password}/>
                {touched.password && errors.password && <p>{errors.password}</p>}
            </div>

            <div>
                <button type="submit">submit</button>
            </div>


        </Form>
    );
};

export default RegForm;