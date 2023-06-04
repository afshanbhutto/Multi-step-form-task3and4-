import React, { useState } from "react";

const EmailForm = ({ formValues, onChange }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { email } = formValues;
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
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
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Email Info</h1>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.email ? "border-red-500" : ""
            }`}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={onChange}
            value={formValues.email}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>

        <div className="flex justify-center">
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

export default EmailForm;
