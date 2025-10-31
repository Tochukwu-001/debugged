"use client";
import React from "react";
import { Field, Form, Formik } from "formik";
import { FaPaperPlane } from "react-icons/fa";

const page = () => {
  return (
    <main className="min-h-dvh">
      <section>
        <div className="border h-50 bg-[url('/bg.jpg')] bg-norepeat bg-center bg-cover">
          <div className="h-50 bg-black/70 text-white flex flex-col items-center justify-center gap-3 p-3">
            <h1 className="text-3xl font-semibold text-center">Got an issue? Post it here</h1>
            <h1 className="text-3xl font-semibold text-center">Got a fix? Share it here</h1>
          </div>
        </div>
        <div>
          <Formik>
            <Form>
              <Field />
              <Field />
              <Field />

              <button>
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
