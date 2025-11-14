"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {
  FaBug,
  FaUserPlus,
  FaLightbulb,
  FaDatabase,
  FaLock,
  FaChevronDown,
  FaQuestionCircle,
} from "react-icons/fa";

const FAQPage = () => {
  return (
    <div className="min-h-dvh py-20 px-6">
      <header className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <FaQuestionCircle className="text-5xl text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Everything you need to know about using{" "}
          <span className="text-blue-600 font-semibold">Debugged</span> — from
          logging your first error to managing your developer profile.
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-6">
        <Accordion
          sx={{
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<FaChevronDown className="text-gray-600" />}
            aria-controls="faq1-content"
            id="faq1-header"
          >
            <div className="flex items-center gap-3">
              <FaBug className="text-blue-600 text-xl" />
              <Typography className="font-semibold text-gray-800">
                What is Debugged and who is it for?
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600 leading-relaxed">
              Debugged is a collaborative hub for developers to log their
              coding errors, share how they fixed them, and explore
              community-tested solutions. Whether you’re learning to debug
              your first “undefined” error or managing full-scale projects,
              Debugged is built for you.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<FaChevronDown className="text-gray-600" />}
            aria-controls="faq2-content"
            id="faq2-header"
          >
            <div className="flex items-center gap-3">
              <FaUserPlus className="text-green-500 text-xl" />
              <Typography className="font-semibold text-gray-800">
                Do I need to create an account to use Debugged?
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600 leading-relaxed">
              You can browse public error logs and fixes without signing in.
              However, you’ll need an account to post your own logs, contribute
              solutions, or comment on others’ posts. Creating an account also
              lets you track your contributions and build your developer
              profile.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<FaChevronDown className="text-gray-600" />}
            aria-controls="faq3-content"
            id="faq3-header"
          >
            <div className="flex items-center gap-3">
              <FaLightbulb className="text-yellow-400 text-xl" />
              <Typography className="font-semibold text-gray-800">
                What kind of errors can I log on Debugged?
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600 leading-relaxed">
              You can log virtually any kind of development error — from syntax
              errors and API bugs to database connection issues or unexpected
              runtime behavior. Each log includes the error message, cause, and
              the steps you took to fix it, making it a valuable resource for
              others facing the same problem.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<FaChevronDown className="text-gray-600" />}
            aria-controls="faq4-content"
            id="faq4-header"
          >
            <div className="flex items-center gap-3">
              <FaDatabase className="text-purple-500 text-xl" />
              <Typography className="font-semibold text-gray-800">
                How are errors and fixes stored in Debugged?
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600 leading-relaxed">
              All logs and fixes are securely stored in Firestore, our real-time
              cloud database. Each entry is categorized by language, error type,
              and environment — so it’s easy for other developers to search,
              filter, and reference your solution later on.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<FaChevronDown className="text-gray-600" />}
            aria-controls="faq5-content"
            id="faq5-header"
          >
            <div className="flex items-center gap-3">
              <FaLock className="text-red-500 text-xl" />
              <Typography className="font-semibold text-gray-800">
                Is my information secure on Debugged?
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600 leading-relaxed">
              Absolutely. We take privacy seriously. Your account details and
              personal data are stored securely, and only the information you
              choose to make public — such as your username and shared fixes —
              are visible to others. Debugged complies with standard security
              protocols for safe authentication and data handling.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
