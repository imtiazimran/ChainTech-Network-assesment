import { ArrowRightIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useContext, useState } from 'react';
import { Api } from '../Context/ApiContext';

import { useForm } from 'react-hook-form';

const TaskCard = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleUpdate,
    handleDelete,
    selectedTaskForUpdate,
    setSelectedTaskForUpdate,
    updatedData,
    setUpdatedData } = useContext(Api);

  const { register, handleSubmit, reset } = useForm();
  console.log(selectedTaskForUpdate);
  const updateStatus = task => {
    handleUpdate(task);
  }

  const onSubmit = () => {
    if (selectedTaskForUpdate) {
      handleUpdate({ ...selectedTaskForUpdate, description: updatedData });
    }
    onCancel();
  }

  const handleChange = e => {
    setUpdatedData(e.target.value);
    console.log(e.target.value);
  }

  const onCancel = () => {
    setSelectedTaskForUpdate(null);
    reset();
    setIsOpen(false);
    document.getElementById('my_modal_4').close();
  };

  const handleModal = (task) => {
    setIsOpen(true);
    setSelectedTaskForUpdate(task);
    setUpdatedData(task?.description); // Set initial value for the updatedData state.
  }

  if (isOpen) {
    document.getElementById('my_modal_4').showModal();
  }

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

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method='dialog' onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col mb-5">
              <label htmlFor="title" className="mb-2">
                Description
              </label>
              <input
                className="w-full p-5 rounded-md"
                type="text"
                id="description"
                // value={updatedData} // Use value to reflect changes.
                onChange={handleChange}
                {...register('description')}
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={onCancel}
                type="button"
                className="btn btn-sm"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                Submit
              </button>
            </div>
          </form>
          <button onClick={onCancel} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
      </dialog>
    </div>
  );
};

export default TaskCard;
