import { useSelector, useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "store/positions/position-selector";
import { selectFilters } from "store/filters/filter-selector";

import { addFitler } from "store/filters/filter-actions";

const JobList = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);
    const positions = useSelector((state) =>
        selectVisiblePositions(state, currentFilters)
    );

    const handleAddFilter = (filter) => {
        dispatch(addFitler(filter));
    };

    return (
        <div className="job-list">
            {positions.map((item) => (
                <JobPosition
                    key={item.id}
                    handleAddFilter={handleAddFilter}
                    {...item}
                />
            ))}
        </div>
    );
};

export { JobList };
