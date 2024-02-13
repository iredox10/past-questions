import Question from "@/app/components/Question";
import React from "react";

const page = () => {
  return(
  <div>
    <div>
      <p>
        Course Name : <span>Statistic for Computing I</span>
      </p>
      <p>
        Course Code: <span>423</span>
      </p>
      <p>Instrunctions: Answer Any Five (5) Questions</p>
      <p>
        Time <span>2:00 HRS</span>
      </p>
    </div>

    <div>
      <Question />
    </div>
  </div>;
  )};

export default page;
