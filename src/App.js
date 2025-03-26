import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";

function App() {
    return (
        <>
            <TheHeader />
            <div className="container">
                <FilterPanel />
                <JobList />
            </div>
        </>
    );
}

export default App;
