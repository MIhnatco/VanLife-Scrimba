import graph from "../../assets/images/income-graph.png";

function Income() {
  const transactionsData = [
    {
      amount: 720,
      date: "Jan 3, 23",
      id: "1",
    },
    {
      amount: 560,
      date: "Dec 12, 22",
      id: "2",
    },
    {
      amount: 980,
      date: "Dec 3, 22",
      id: "3",
    },
  ];
  return (
    <section className="pl-4.5 pr-4.5 text-[#161616] text-xl">
      <h1 className="text-3xl font-bold my-4">Income</h1>
      <p className="text-[#4d4d4d] my-2">
        Last <span className="underline font-bold">30 days</span>
      </p>
      <h2 className="text-3xl text-[#161616] font-black">$2 260</h2>

      <img src={graph} className="my-8 max-w-[500px]" alt="Income graph" />

      <div className="border-t border-gray-300 my-6">
        <h3 className="text-2xl font-bold my-4">Your transactions (3)</h3>
        <p>
          Last <span className="underline font-bold">30 days</span>
        </p>
      </div>

      <div className="my-8">
        {transactionsData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white mb-7 p-[35px_29px] rounded shadow-md transition-transform duration-300 hover:-translate-y-3 hover:cursor-pointer"
          >
            <h3 className="text-2xl font-black">💰 ${item.amount}</h3>
            <p className="font-medium text-[#4d4d4d]">📅 {item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Income;
