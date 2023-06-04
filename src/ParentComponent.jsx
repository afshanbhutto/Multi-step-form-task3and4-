import React, { useState } from "react";
import EmailForm from "./FormComponents/EmailForm";
import RoleForm from "./FormComponents/RoleForm";
import FirstForm from "./FormComponents/FirstForm";
import SecondForm from "./FormComponents/SecondForm";
import ThirdForm from "./FormComponents/ThirdForm";

const ParentComponent = () => {
  const formList = ["EmailForm","RoleForm" ,"FirstForm", "SecondForm", "ThirdForm"];

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const initialValues = {
    email:"",
    name: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    username: "",
    city: "1",
    address: "",
    zip: "",
    terms: "",
    cv:"",
  };
  
  

  
  const [values, setValues] = useState(initialValues);



  const handleForms = () => {
    switch (page) {
      
      case 0: {
        return <EmailForm formValues={values} onChange={onChange}></EmailForm>;
      }
      
      case 1: {
        return <RoleForm formValues={values} onChange={onChange}></RoleForm>;
      }


      case 2: {
        return (
          <div>
            <FirstForm formValues={values} onChange={onChange}></FirstForm>
          </div>
        );
      }
      case 3: {
        return (
          <SecondForm
            formValues={values}
            onChange={onChange}
            option={states}
          ></SecondForm>
        );
      }
      case 4 :{
        return <ThirdForm formValues={values} onChange={onChange}></ThirdForm>;
      }

    
      default:
        return null;
    }
  };

  const states = [
    { id: "0", name: "Sindh" },
    { id: "1", name: "Punjab" },
    { id: "2", name: "KPK" },
    { id: "3", name: "balochistan" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setTimeout(() => {
      console.log("form", values);
    }, 2000);
    return response;
  };

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case "Email Info": {
        return setPage(0);
      }
      case "Role Info": {
        return setPage(1);
      }
     

      case "Person Info": {
        return setPage(2);
      }
      case "Address": {
        return setPage(3);
      }
      case "Educ Info": {
        return setPage(4);
      }
     

      default:
        setPage(0);
    }
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="grid gap-4 place-content-center items-center h-screen place-items-center ">
      <ul className="flex justify-between w-full">
        <li
          onClick={setForm}
          className={
            page === 0 ? "bg-blue-300 w-2/6 rounded-lg  " : "bg: transparent"
          }
        >
          <div className="flex items-center ">
            <span className="stepper-head-icon">
              {" "}
              <svg
                className="h-8 w-8 text-blue-200"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
                <path
                  d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(45 12 12)"
                />{" "}
                <path
                  d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(-45 12 12)"
                />
              </svg>
            </span>
         

            <span
              className={
                page === 0
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-blue-300 cursor-pointer"
              }
            >
              Email Info
            </span>


            <span
              className={
                page === 1
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-blue-300 cursor-pointer"
              }
            >
              Role Info
            </span>




            <span
              className={
                page === 2
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-blue-300 cursor-pointer"
              }
            >
              Person Info
            </span>

          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 1 ? "bg-blue-300  w-2/6 rounded-lg" : "bg: transparent "
          }
        >
          <div className="flex items-center">
            <span className="stepper-head-icon">
              {" "}
              <svg
                className="h-8 w-8 text-blue-200"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
                <path
                  d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(45 12 12)"
                />{" "}
                <path
                  d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(-45 12 12)"
                />
              </svg>
            </span>

          

            <span
              className={
                page === 3
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-blue-300 cursor-pointer"
              }
            >
              Address {" "}
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 3 ? "bg-blue-300 w-2/6 rounded-lg" : "bg: transparent"
          }
        >
          <div className="flex items-center">
            <span className="stepper-head-icon">
              {" "}
              <svg
                className="h-8 w-8 text-blue-200"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
                <path
                  d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(45 12 12)"
                />{" "}
                <path
                  d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                  transform="rotate(-45 12 12)"
                />
              </svg>
            </span>
            <span
              className={
                page === 4
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-blue-300 cursor-pointer"
              }
            >
              {" "}
              Educ Info{" "}
            </span>
          </div>
        </li>
      </ul>
      <div className="flex-1">{handleForms()}</div>
      <div className="grid grid-cols-2 gap-4 place-content-center items-center">
        <button
          onClick={handlePrev}
          className="bg-blue-200  hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 "
          disabled={page === 0}
        >
          Prev
        </button>
        {page === 4 ? (
          <button
            onClick={handleSubmit}
            className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
          >
            Next
          </button>
      )}

      
      </div>
    </div>
  );
};

export default ParentComponent;
