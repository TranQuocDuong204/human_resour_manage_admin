import React from "react";

interface IPropCardModal {
    nameDepartment: string
    newManager: string
}
const CardInfoDepartmentModal = ({nameDepartment, newManager}: IPropCardModal) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
      <header className="mb-4 border-b border-gray-200 pb-2 dark:border-gray-700">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
          Department Information
        </h4>
      </header>
      <div className="space-y-2">
        <p className="text-base">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Name Department: 
          </span>
          <span className="ml-2 text-gray-900 dark:text-white">{nameDepartment}</span>
        </p>
        <p className="text-base">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            New Manager:
          </span>
          <span className="ml-2 italic text-gray-500 dark:text-gray-400">
         {newManager ? newManager: "Not Assigned"}   
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardInfoDepartmentModal;
