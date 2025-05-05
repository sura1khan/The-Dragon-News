import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,} = news;

  return (
    <div className="card bg-base-200 shadow-md ">

      <div className="flex items-center justify-between p-4 ">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={author?.img} alt={author?.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-sm">{author?.name}</p>
            <p className="text-xs text-gray-500">{format(new Date(author?.published_date), 'yyyy-MM-dd')}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <img src={thumbnail_url} alt={title} className="rounded-lg mb-3" />
        <p className="text-sm text-gray-700">
          {details.length > 200 ? details.slice(0, 200) + '...' : details}
          <span className="text-blue-500 cursor-pointer ml-1">Read More</span>
        </p>
      </div>


      <div className="flex items-center justify-between px-4 py-2 border-t text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <AiFillStar key={i} />
          ))}
          <span className="text-gray-600 ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
