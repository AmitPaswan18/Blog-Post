import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full  rounded-xl flex flex-col  p-4">
        <div className="w-full   justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="lg:rounded-xl text-white rounded-lg "
          />
        </div>
        <h2 className="text-white text-sm lg:font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
