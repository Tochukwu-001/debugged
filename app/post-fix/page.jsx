"use client";
import React from "react";
import { Field, Form, Formik, ErrorMessages } from "formik";
import { FaPaperPlane } from "react-icons/fa";

const page = () => {

    const initialValues = {
        error: "",
        fix: "",
        category: ""
    };

    const validationSchema = Yup.object({
        error: Yup.string().required("This is a required field"),
        error: yup.string().required("This is a required field"),
        category: yup.string().required("This is a required field")
    })

    const handleSubmit = async()

    return (
        <main className="min-h-dvh">
            <section>
                <div className="border h-50 bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
                    <div className="h-50 bg-black/70 text-white flex flex-col items-center justify-center gap-3 p-3">
                        <h1 className="text-3xl font-semibold text-center">Got an issue? Post it here</h1>
                        <h1 className="text-3xl font-semibold text-center">Got a fix? Share it here</h1>
                    </div>
                </div>
                <div className="w-1/2 mx-auto">
                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values)=>{
                            console.log(values);
                        }}
                        >
                            
                        <Form className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <Field className="border  border-gray-300 outline-none p-2
              rounded-md" placeholder="category..."
                                name="error"
                                as="textarea" rows ="5"
                            />
                            <ErrorMessage name="error"
                                component={"p"}
                                className="text-xs text-red-600"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <Field className="border  border-gray-300 outline-none p-2
              rounded-md" placeholder="Error Messges" as="textarea" rows ="5" name="fix"/>
                            <ErrorMessage name="fix"
                                component={"p"}
                                className="text-xs text-red-600"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <Field className="border  border-gray-300 outline-none p-2
              rounded-md" placeholder="Error Messges..."  as="textarea" rows ="5"/>
                            <ErrorMessage name="category"
                                component={"p"}
                                className="text-xs text-red-600" />
                        </div>
                            <button type="submit" className="outline-none bg-blue-600">
                                <FaPaperPlane />
                                <span>Post</span>
                            </button>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>
    );
};

export default page;