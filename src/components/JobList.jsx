import { useSelector } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectAllPositions } from "store/positions/position-selector";

const JobList = () => {
    const positions = useSelector(selectAllPositions);

    return (
        <div className="job-list">
            {positions.map((item) => (
                <JobPosition key={item.id} {...item} />
            ))}
        </div>
    );
};

export { JobList };
