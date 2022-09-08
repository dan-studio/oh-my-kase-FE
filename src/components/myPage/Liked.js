import { useQuery } from "react-query";
import { myPageAPI } from "../../shared/api";
import { v4 } from "uuid";
import LikedItem from "./LikedItem";

const Like = () => {
  const { data } = useQuery("myLiked", myPageAPI.getMyLiked, {
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  const myLiked = data?.data.data;

  return (
    <div>
      {myLiked?.map((item) => {
        return <LikedItem key={v4()} item={item} />;
      })}
    </div>
  );
};

export default Like;
