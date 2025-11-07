"use client";
import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { FiLoader } from "react-icons/fi";

const PostFixClient = ({ session }) => {
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

  const handleSubmit = async (values) => {
    console.log("Form Submitted", values);
  };

  const [loading, setLoading] = useState(false);

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
            onSubmit={async (values, {resetForm}) => {
              try {
                setLoading(true)
                const postObject = {
                  name: session.user.name,
                  img: session.user.image,
                  timestamp: new Date().toLocaleDateString(),
                  ...values
                }
                // console.log(postObject);
                const docRef = await addDoc(collection(db, "fixlog"), postObject)
                console.log("Document written with ID: ", docRef.id);
                resetForm();
              } catch (error) {
                console.error("An error occurred", error)
                alert("An error occurred. Try again later.")
              } finally {
                setLoading(false)
              }
            }}
          >
            <Form className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <Field
                  className="border border-gray-300 outline-none p-2 rounded-md"
                  placeholder="Error Message..."
                  as="textarea"
                  rows="5"
                  name="error"
                />
                <ErrorMessage
                  name="error"
                  component={"p"}
                  className="text-xs text-red-600"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Field
                  className="border border-gray-300 outline-none p-2 rounded-md"
                  placeholder="Possible fix..."
                  as="textarea"
                  rows="5"
                  name="fix"
                />
                <ErrorMessage
                  name="fix"
                  component={"p"}
                  className="text-xs text-red-600"
                />
              </div>

              <div className="flex flex-col gap-1">
                <Field
                  className="p-2 rounded-md border border-gray-300 outline-none"
                  placeholder="Category..."
                  name="category"
                />
                <ErrorMessage
                  name="category"
                  component={"p"}
                  className="text-xs text-red-600"
                />
              </div>

              <button
                type="submit"
                className="outline-none bg-blue-600 text-white p-2 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                {
                  loading ? <FiLoader className="text-xl animate-spin" /> :
                    <span className="flex items-center gap-3 justify-center">
                      <FaPaperPlane />
                      <span>Post</span>
                    </span>
                }
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
};

export default PostFixClient;
