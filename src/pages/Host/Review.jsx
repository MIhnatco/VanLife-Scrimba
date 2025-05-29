import reviewGraph from "../../assets/images/reviews-graph.png";

import { FaStar } from "react-icons/fa";

function Review() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <section className="text-[#4d4d4d] font-medium text-xl mt-8 p-4">
      <div className="flex items-center mb-8">
        <h1 className="font-bold text-3xl mr-5">Your reviews</h1>
        <p>
          Last <span className="underline font-bold">30 days</span>
        </p>
      </div>

      <img
        src={reviewGraph}
        className="my-8 max-w-[500px]"
        alt="Review graph"
      />

      <h2 className="font-2xl font-bold my-4">
        Reviews ({reviewsData.length})
      </h2>
      {reviewsData.map((review) => (
        <div key={review.id} className="bg-white p-4 rounded-lg shadow-md my-4">
          <div className="flex flex-col">
            <div className="flex space-x-1">
              {[...Array(review.rating)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className="text-[#ff8c38]"
                  title={`${review.rating}-star rating`}
                />
              ))}
            </div>
            <div className="flex my-4">
              <p className="font-bold mr-4">{review.name}</p>
              <p>{review.date}</p>
            </div>
            <p className="font-medium">{review.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Review;
