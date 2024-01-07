import Search from '../components/Search'
import SchoolCard from "../components/SchoolCard";
import SideBarCard from "../components/SideBarCard";
import bukLogo from '@/public/BUK.jpg'
import Image from 'next/image';
const page = () => {
  return (
    <div>
      <div>
        <Search placeholder={"search school"} />
      </div>
      <div className="flex gap-5 my-8">
        <div>
          <h1>Exams Available</h1>
          <SideBarCard image={bukLogo} name={"waec"} />
          <SideBarCard image={bukLogo} name={"waec"} />
          <SideBarCard image={bukLogo} name={"waec"} />
          <SideBarCard image={bukLogo} name={"waec"} />
        </div>
        <div className="grid gap-5 grid-cols-3">
          <SchoolCard
            name={"Bayero University Kano (Buk)"}
            logo={bukLogo}
            desc={"lorem text"}
            alt={"buk logo"}
            href="/schools/buk"
          />
          <SchoolCard
            name={"Bayero University Kano (Buk)"}
            logo={bukLogo}
            desc={"lorem text"}
            alt={"buk logo"}
            href="/school/buk"
          />
          <SchoolCard
            name={"Bayero University Kano (Buk)"}
            logo={bukLogo}
            desc={"lorem text"}
            alt={"buk logo"}
            href="/school/buk"
          />
          <SchoolCard
            name={"Bayero University Kano (Buk)"}
            logo={bukLogo}
            desc={"lorem text"}
            alt={"buk logo"}
            href="/school/buk"
          />
          <SchoolCard
            name={"Bayero University Kano (Buk)"}
            logo={bukLogo}
            desc={"lorem text"}
            alt={"buk logo"}
            href="/school/buk"
          />
          <SchoolCard
            name={"Bayero University Kano (Buk)"}
            logo={bukLogo}
            desc={"lorem text"}
            alt={"buk logo"}
            href="/school/buk"
          />
          <SchoolCard
            name={"Bayero University Kano (Buk)"}
            logo={bukLogo}
            desc={"lorem text"}
            alt={"buk logo"}
            href="/school/buk"
          />
          <SchoolCard
            name={"Bayero University Kano (Buk)"}
            logo={bukLogo}
            desc={"lorem text"}
            alt={"buk logo"}
            href="/school/buk"
          />
        </div>
      </div>
    </div>
  );
}

export default page