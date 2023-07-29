import Section from "../components/Section";
import { information } from "../Data";
const Donate = () => {
  return (
    <div className="container">
      {information.map((info) => (
        <Section infor={info} key={info.id} />
      ))}
    </div>
  );
};
export default Donate;
