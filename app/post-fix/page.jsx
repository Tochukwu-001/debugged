"use client";
import React from "react";
import { Field, Form, Formik,  ErrorMessage } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import * as Yup from "yup";

const page = () => {
  const initialValues = {
    error: "",
    fix: "",
    category: "",
  };

  const validationSchema = Yup.object({
    error: Yup.string().required("This is a required field"),
    fix: Yup.string().required("This is a required field"),
    category: Yup.string().required("This is a required field"),
  });

  return (
    <main className="min-h-dvh">
      <section className="space-y-10">
        <div className="border h-50 bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="h-50 bg-black/70 text-white flex flex-col items-center justify-center gap-3 p-3">
            <h1 className="text-3xl font-semibold text-center">
              Got an issue? Post it here.
            </h1>
            <h1 className="text-3xl font-semibold text-center">
              Got a fix? Share it here.
            </h1>
          </div>
        </div>
        <div className="lg:w-1/3 mx-auto max-lg:p-3">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className="flex flex-col gap-3">
              <Field
                className="border border-gray-300 outline-none p-2 rounded-md"
                placeholder="Error Message..."
                as="textarea"
                rows="5"
                name="error"
              />
              <Field
                className="border border-gray-300 outline-none p-2 rounded-md"
                placeholder="Possible fix..."
                as="textarea"
                rows="5"
                name="fix"
              />
              <Field
                className="p-2 rounded-md border border-gray-300 outline-none"
                placeholder="Category..."
                name="category"
              />

              <button
                type="submit"
                className="outline-none bg-blue-600 text-white p-2 rounded-md flex items-center gap-3 justify-center hover:bg-blue-700 transition-colors duration-200"
              >
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
