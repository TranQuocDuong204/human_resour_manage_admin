const TotalItem = ({item, index}: any) => {
    return (
        <article
        key={index}
        className="p-4 bg-white dark:bg-black dark:border-2 dark:border-[#2D3748] rounded-md shadow-md cursor-pointer"
      >

        <div className=" flex items-center gap-3 flex-wrap">
          <div className="p-2 bg-[#FFD700] border-indigo-300 rounded-xl dark:border-[white] ">
            <span className="  text-xl text-[white]">{item.icon}</span>
          </div>
          <h3 className=" text-base font-medium text-[#A0AEC0] dark:text-white">
            {item.name}
          </h3>
        </div>
        <div className="text-gray-700 flex items-center justify-between  flex-wrap py-3 ">
          <span className=" text-2xl font-bold dark:text-white">
            {item.total}
          </span>
          <div className=" flex items-center gap-1 p-2  rounded-lg">
            <p className="text-[#48BB78] font-bold ">{item.label}</p>
          </div>
        </div>
        <hr />
        <div className=" text-gray-500 mt-3 dark:text-white">
          <p>{item.date}</p>
        </div>
      </article>
    )
}

export default TotalItem