import { db } from "~/server/db";
import { posts } from "~/server/db/schema";


export default async function main() {
  const data = await db.query.posts.findMany({
    columns: {
      content: true,
      title: true,
    },
  })
 
      return (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((data,index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.content}</p>
            <div className="justify-end card-actions">
            </div>
          </div>
        </div>
      ))}
    </div>
      );
    }
