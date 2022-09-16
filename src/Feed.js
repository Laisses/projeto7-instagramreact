import { Stories } from "./Stories";
import { Posts } from "./Posts";

export const Feed = () => {
    return (
        <div className="feed">
            <Stories />
            <Posts />
        </div>
    );
};