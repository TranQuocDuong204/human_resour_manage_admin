import React from "react";

interface IPropSelectEmployeeModal {
  employees: any[];
  setNewManager: React.Dispatch<React.SetStateAction<string>>;
  setIdEmployee: React.Dispatch<React.SetStateAction<string>>;
  newManager: string;
}
const SelectEmployeeModal = ({
  employees,
  setNewManager,
  setIdEmployee,
  newManager,
}: IPropSelectEmployeeModal) => {
  const [resultsSearch, setResultsSearch] = React.useState<any[]>([]);
  const handleGetValueInputModalAssignManager = (e: any) => {
    const dataSearch = employees.filter((item: any) =>
      item.employee_name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setResultsSearch(dataSearch);
  };

  const employeesToRender =
    resultsSearch.length > 0 ? resultsSearch : employees;

  const getIdEmployee = (id: string, name: string) => {
    setNewManager(name);
    setIdEmployee(id);
  };
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
        Select Manager
      </h4>
      <input
        onChange={handleGetValueInputModalAssignManager}
        type="text"
        placeholder="Search employees"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />

      <ul className="space-y-4 max-h-48 overflow-y-auto">
        {employeesToRender?.map((employee, index) => (
          <li
            key={employee.id}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >
            <img
              src={
                employee?.avatar
                  ? employee?.avatar
                  : "https://github.com/shadcn.png"
              }
              alt={employee.employee_name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{employee.employee_name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Role: {employee.role}
              </p>
            </div>
            <button
              onClick={() => getIdEmployee(employee.id, employee.employee_name)}
              className={`ml-auto  text-white px-4 py-2 ${
                newManager === employee.employee_name
                  ? "bg-red-500 rounded-md hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                  : "bg-blue-500 rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              } `}
            >
              Select as Manager
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectEmployeeModal;
