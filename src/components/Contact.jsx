import React,{ useRef} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

const Contact = () => {
    const ref = useRef(false);
  return (
    <div className="flex justify-center">
      
      <Formik
        initialValues={{ name: "", email: "", enquiryType:"" ,message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          message: Yup.string().required("Required"),
          enquiryType: Yup.string().required("Required"),
        })}
        onSubmit={(values,{setSubmitting}) => {
            if(ref.current==false){
                
                toast.success(<div><h3 className='font-bold'>All good!</h3>
                    <br/>
                    <p>thanks for your submissions {values.fullName}, we will get back to you shortly</p>
                </div>, {
                    position: toast.POSITION.TOP_CENTER
                    
                });
                ref.current = true;
            }
                else{
                    
                toast.error(<div><h3 className='font-bold'>Oops!!</h3>
                    <br/>
                    <p>Something went wrong</p>
                </div>, {
                    position: toast.POSITION.TOP_CENTER
                })
                ref.current = false;
            }
           
          }}
      >
        {({ isSubmitting, errors, touched }) => (
            
          <Form className="flex flex-col"> 
            <h1>Contact Form</h1>
            <label htmlFor="name">Name</label>
            <Field className={`bg-gray-800 bg-opacity-60 border ${errors.name && touched.name? "border-red-500":"border-gray-300"} text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} type="text" name="name" />
             <div className="text-red-600"> <ErrorMessage name="name" /></div>

            <label htmlFor="email">Email Address</label>
            <Field className={`bg-gray-800 bg-opacity-60 border ${errors.email && touched.email? "border-red-500":"border-gray-300"} text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} type="email" name="email" />
            <div className="text-red-600"> <ErrorMessage name="email" /></div>

            <label htmlFor="enquiryType">Type of enquiry</label>
            <Field
              as="select"
              name="enquiryType"
              className={`bg-gray-800 bg-opacity-60 border ${errors.enquiryType && touched.enquiryType? "border-red-500":"border-gray-300"} text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            >
              <option value="">Select a topic</option>
              <option value="sales">Sales</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </Field>
            <div className="text-red-600"> <ErrorMessage name="enquiryType" /></div>

            <label htmlFor="message">Message</label>
            <Field className={`bg-gray-800 bg-opacity-60 border ${errors.message && touched.message? "border-red-500":"border-gray-300"} text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} as="textarea" name="message" />
            <div className="text-red-600"> <ErrorMessage name="message" /></div>

            <div className='p-4 flex justify-center'><button className='bg-blue-950'  type="submit" >Submit</button></div>
                
          </Form>
          
        )}
      </Formik>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
    </div>
  );
};

export default Contact;
