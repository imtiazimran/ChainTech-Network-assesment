import { ArrowRightIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const TaskCard = ({ task, handleModal, updateStatus }) => {
  
  let updatedStatus;

  if (task?.status === 'pending') {
    updatedStatus = 'running';
  } else if (task?.status === 'running') {
    updatedStatus = 'done';
  } else {
    updatedStatus = 'archive';
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1 className='text-xl' >
        {task?.title}
      </h1>
      <p className="mb-3 w-fit">{task?.description}</p>
      <div className="flex flex-col md:flex-row justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">

          <button onClick={() => handleModal(task)} title="Update Details">
            <PencilSquareIcon className="h-5 w-5 text-sky-500" />
          </button>

          <button onClick={() => handleDelete(task)} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() => updateStatus({ ...task, status: updatedStatus })}
            title="Update Status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
