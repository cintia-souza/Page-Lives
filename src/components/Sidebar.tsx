import { gql, useQuery } from "@apollo/client";
// import { ArrowRight } from "phosphor-react";
import { useState } from "react";
import {Lesson} from "./Lesson";

const GET_LESSONS_QUERY = gql`
    query MyQuery {
        lessons(orderBy: availableAt_ASC) {
        id
        lessonType
        availableAt
        title
        slug
  }
}
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: string;
        lessonType: 'live' | 'class'
    }[]
}



export function Sidebar () {

    const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);


    // const [opend, setOpend] = useState(true);

    // const handleOnClick = () => {
    //     setOpend(!opend) 
    // }
    

    return (
      
        <aside className="w-[348px] bg-white p-6 border-l border-gray-100 z-50">
        {/* <ArrowRight size={32} weight="bold" onClick={handleOnClick} /> */}
        <span className="font-bold text-2xl pb-6 mb-6 border-b text-pink-500 block text-center">
            Lives
        </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson 
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>

        </aside>


    )
};