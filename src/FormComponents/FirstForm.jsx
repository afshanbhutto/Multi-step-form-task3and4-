import React, { useState } from "react";

const FirstForm = ({ formValues, onChange }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { firstName, lastName } = formValues;
    const errors = {};

    if (!firstName) {
      errors.firstName = "First Name is required";
    }

    if (!lastName) {
      errors.lastName = "Last Name is required";
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
        className="bg-white shadow-md px-24 pt-16 pb-10 mb-8 rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Person Info</h1>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.firstName ? "border-red-500" : ""
            }`}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={onChange}
            value={formValues.firstName}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">{errors.firstName}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.lastName ? "border-red-500" : ""
            }`}
            id="lastName"
            name="lastName"
            onChange={onChange}
            value={formValues.lastName}
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs">&copy;Afshan</p>
    </div>
  );
};

export default FirstForm;
