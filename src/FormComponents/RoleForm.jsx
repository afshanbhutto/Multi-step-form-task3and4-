import React, { useState } from "react";

const roles = [
  'Frontend Next.js',
  'Backend',
  'React Native',
  'Video Editing',
  'UI/UX Design',
  'Data Science',
  'Project Management',
  'DevOps',
  'Quality Assurance',
  'Marketing',
];

const RoleForm = ({ formValues, onChange }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { role } = formValues;
    const errors = {};

    if (!role) {
      errors.role = "Role is required";
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
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">Role Info</h1>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <select
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
              errors.role ? "border-red-500" : ""
            }`}
            id="role"
            name="role"
            onChange={onChange}
            value={formValues.role}
          >
            <option value="">Select a role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className="text-red-500 text-xs italic">{errors.role}</p>
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

export default RoleForm;
