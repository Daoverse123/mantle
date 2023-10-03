const Sidebar = () => {
  return (
    <aside className="text-white min-w-[298px] mt-[60px] mb-[100px] max-[670px]:hidden">
      <div className="flex w-full flex-col">
        <Selector
          title="Sort by"
          options={[
            "All",
            "Alphabetical Order",
            "XP : High to Low",
            "XP : Low to High",
          ]}
        />
        <Selector
          title="Sort by"
          options={[
            "All",
            "Alphabetical Order",
            "XP : High to Low",
            "XP : Low to High",
          ]}
        />
        <Selector title="Type" options={["All", "Task", "Quiz"]} />
        <Selector
          title="Completion"
          options={["All", "Completed", "Unattempted"]}
        />
      </div>
    </aside>
  );
};

const Selector = ({ title, options }: { title: string; options: string[] }) => {
  return (
    <div className="flex flex-col w-full">
      <span className="flex w-full justify-between">
        <h3 className="text-[20px]">{title}</h3>
        <p>Reset</p>
      </span>
      <span className="flex flex-col gap-2 mt-3 border-b-[1px] border-[#CACDD5] pb-4 mb-3">
        {options.map((ele, idx) => {
          return (
            <span key={ele + idx} className="flex w-full justify-between">
              <h4>{ele}</h4>
              <span className="flex w-4 h-4 border border-white rounded-sm"></span>
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default Sidebar;
