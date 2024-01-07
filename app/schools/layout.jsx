import { Children } from "react";

export const metadata = {
  title: "Schools",
  description: "schools Page",
};

const layout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default layout