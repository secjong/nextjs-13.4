import getQueryClient from "@/components/@external/react-query/getQueryClient"
import { getPostsInternal } from "@/lib/internalApi";
import { GET } from "./api/route";
import { NextResponse } from "next/server";

export default async function RouteHandlerSamplePage() {

  const queryClient = getQueryClient();
  const response = await queryClient.fetchQuery({
    queryKey: ['getPosts'],
    queryFn: getPostsInternal
  });

  return (
    <div>
      Route Handler 페이지
      <div>
        <ul>
          {
            response.map((postItem, postIndex) => (
              <>
                <li key={postItem.id}>
                  <span>- title: {postItem.title}</span><br />
                  <span>- userId: {postItem.userId}</span><br />
                  <span>- body: {postItem.body}</span><br />
                </li>
                <hr />
              </>
            ))
          }
        </ul>
      </div>
    </div>
  )
}