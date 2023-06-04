import React, { useState } from "react";

const ThirdForm = ({ onChange, formValues }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { qualification, yearOfCompletion, university, experience, terms } =
      formValues;
    const errors = {};

    if (!qualification) {
      errors.qualification = "Qualification is required";
    }

    if (!yearOfCompletion) {
      errors.yearOfCompletion = "Year of Completion is required";
    }

    if (!university) {
      errors.university = "University is required";
    }

    if (!experience) {
      errors.experience = "Experience is required";
    }

    if (!terms) {
      errors.terms = "You must accept the terms and conditions";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log("Form values:", formValues);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <form
        className="bg-white shadow-md rounded px-24 pt-16 pb-10 mb-8"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">
            Education Info
          </h1>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="qualification"
          >
            Qualification
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.qualification ? "border-red-500" : ""
            }`}
            id="qualification"
            name="qualification"
            onChange={onChange}
            type="text"
            placeholder="Qualification"
          />
          {errors.qualification && (
            <p className="text-red-500 text-xs italic">
              {errors.qualification}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="yearOfCompletion"
          >
            Year of Completion
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.yearOfCompletion ? "border-red-500" : ""
            }`}
            id="yearOfCompletion"
            name="yearOfCompletion"
            onChange={onChange}
            type="text"
            placeholder="Year of Completion"
          />
          {errors.yearOfCompletion && (
            <p className="text-red-500 text-xs italic">
              {errors.yearOfCompletion}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="university"
          >
            University
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.university ? "border-red-500" : ""
            }`}
            id="university"
            name="university"
            onChange={onChange}
            type="text"
            placeholder="University"
          />
          {errors.university && (
            <p className="text-red-500 text-xs italic">{errors.university}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experience"
          >
            Experience
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.experience ? "border-red-500" : ""
            }`}
            id="experience"
            name="experience"
            onChange={onChange}
            type="text"
            placeholder="Experience"
          />
          {errors.experience && (
            <p className="text-red-500 text-xs italic">{errors.experience}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cv"
          >
            Upload CV
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cv"
            name="cv"
            onChange={onChange}
            type="file"
          />
        </div>

        <div className="flex justify-items-center content-center items-center">
          <label
            className="block text-gray-700 px-2 text-sm font-bold mb-2"
            htmlFor="terms"
          >
            Terms
          </label>
          <input
            name="terms"
            checked={formValues.terms}
            onChange={onChange}
            className={`shadow cursor-pointer border rounded ${
              errors.terms ? "border-red-500" : ""
            }`}
            type="checkbox"
          />
        </div>
        {errors.terms && (
          <p className="text-red-500 text-xs italic">{errors.terms}</p>
        )}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs">&copy;afshan</p>
    </div>
  );
};

export default ThirdForm;
