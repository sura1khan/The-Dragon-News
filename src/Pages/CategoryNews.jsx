
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();

    console.log(id,data);
    
    return (
        <div>
            CategoryNews - {id}
        </div>
    );
};

export default CategoryNews;