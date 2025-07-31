"use client";

import { deleteClass, deleteExam, deleteStudent, deleteSubject, deleteTeacher } from "@/lib/actions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { FormContainerprops } from "./FormContainer";

const deleteActionMap = {
  subject: deleteSubject,
  class: deleteClass,
  teacher: deleteTeacher,
  student: deleteStudent,
  parent: deleteSubject,
  lesson: deleteSubject,
  exam: deleteExam,
  assignment: deleteSubject,
  result: deleteSubject,
  attendance: deleteSubject,
  event: deleteSubject,
  announcement: deleteSubject,
};

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});

const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const ParentForm = dynamic(() => import("./forms/ParentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ClassForm = dynamic(() => import("./forms/ClassForm"), {
  loading: () => <h1>Loading...</h1>,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Loading...</h1>,
});
const LessonForm = dynamic(() => import("./forms/LessonForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ExamForm = dynamic(() => import("./forms/ExamForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ResultForm = dynamic(() => import("./forms/ResultForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AttendenceForm = dynamic(() => import("./forms/AttendenceForm"), {
  loading: () => <h1>Loading...</h1>,
});
const EventForm = dynamic(() => import("./forms/EventForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
  loading: () => <h1>Loading...</h1>,
});

type FormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: "create" | "update";
  data?: any;
  relatedData?: any
};

const forms: {
  [key: string]: (props: FormProps) => JSX.Element;
} = {
  teacher: ({ setOpen, type, data ,relatedData}) => <TeacherForm type={type} data={data} setOpen={setOpen} relatedData={relatedData} />,
  student: ({ setOpen, type, data,relatedData }) => <StudentForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  //parent: ({ setOpen, type, data }) => <ParentForm type={type} data={data} setOpen={setOpen} />,
  subject: ({ setOpen, type, data,relatedData }) => <SubjectForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
   class: ({ setOpen, type, data,relatedData }) => <ClassForm type={type} data={data} setOpen={setOpen} relatedData={relatedData} />,
  //lesson: ({ setOpen, type, data }) => <LessonForm type={type} data={data} setOpen={setOpen} />,
  exam: ({ setOpen, type, data,relatedData }) => <ExamForm type={type} data={data} setOpen={setOpen} relatedData={relatedData} />,
  //assignment: ({ setOpen, type, data }) => <AssignmentForm type={type} data={data} setOpen={setOpen} />,
  //result: ({ setOpen, type, data }) => <ResultForm type={type} data={data} setOpen={setOpen} />,
  //attendance: ({ setOpen, type, data }) => <AttendenceForm type={type} data={data} setOpen={setOpen} />,
  //event: ({ setOpen, type, data }) => <EventForm type={type} data={data} setOpen={setOpen} />,
  // announcement: ({ setOpen, type, data }) => <AnnouncementForm type={type} data={data} setOpen={setOpen} />
};

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData
}:FormContainerprops & {relatedData?:any}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-yellow-200"
      : type === "update"
      ? "bg-purple-200"
      : "bg-blue-200";

  const [open, setOpen] = useState(false);

const Form = () => {
  const [state, formAction] = useFormState(deleteActionMap[table], {
    success: false,
    error: false,
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`${table} has been deleted!`);
      setOpen(false);
      router.refresh();
    }
  }, [router,state, type, setOpen, relatedData]);

  if (type === "delete" && id) {
    return (
      <form action={formAction} className="p-4 flex flex-col gap-4">
        <input type="hidden" name="id" value={String(id)} />
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    );
  }

  if ((type === "create" || type === "update") && forms[table]) {
    return forms[table]({ setOpen, type, data, relatedData });
  }

  return <p className="text-center text-red-600">Form not found for {table}</p>;
};

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
