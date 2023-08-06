import Section from "../components/Section";
import { information } from "../Data";
import { useParams } from "react-router-dom";
const Donate = () => {
  const { title } = useParams();
  const hos = information.find((inf) => inf.hospitalName === title);
  return (
    <div className="container">
      {information.map((info) => (
        <Section infor={info} sethos={hos} key={info.id} />
      ))}
    </div>
  );
};
export default Donate;
