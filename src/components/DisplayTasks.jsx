import React, { useContext, useState } from 'react';
import TaskCard from './shared/TaskCard';
import { Api } from './Context/ApiContext';
import { Link } from 'react-router-dom';
import { ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';

const DisplayTasks = () => {
    const { handleUpdate,
        tasks,
        isLoading,
        handleDelete,
        selectedTaskForUpdate,
        setSelectedTaskForUpdate,
        updatedData,
        setUpdatedData } = useContext(Api);

    const [isOpen, setIsOpen] = useState(false);

    const pendingTasks = tasks.filter(task => task.status === 'pending');
    const runningTasks = tasks.filter(task => task.status === 'running');
    const doneTasks = tasks.filter(task => task.status === 'done');
    const archiveTasks = tasks.filter(task => task.status === 'archive');

    if (isOpen) {
        document.getElementById('my_modal_4').showModal();
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

    const { register, handleSubmit, reset } = useForm();
    console.log(selectedTaskForUpdate);
    const updateStatus = task => {
        handleUpdate(task);
    }

    const onSubmit = (data) => {
        if (selectedTaskForUpdate) {
            handleUpdate({ ...selectedTaskForUpdate, description: data.description });
        }
        onCancel();
    }
    return (
        <div className='container mx-auto'>
            <ul className="steps w-full">
                <li className="step step-neutral">To Do</li>
                <li className="step step-info">Doing</li>
                <li className="step step-success">Done</li>
            </ul>

            <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col justify-center items-center gap-5">
                    {
                        isLoading ? <span className="loading loading-dots loading-lg"></span> :
                            pendingTasks.map((task) => <TaskCard task={task} handleModal={handleModal} updateStatus={updateStatus} />)
                    }
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    {
                        isLoading ? <span className="loading loading-dots loading-lg"></span> :
                            runningTasks.map((task) => <TaskCard task={task} handleModal={handleModal} updateStatus={updateStatus} />)
                    }
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    {
                        isLoading ? <span className="loading loading-dots loading-lg"></span> :
                            doneTasks.map((task) => <TaskCard task={task} handleModal={handleModal} updateStatus={updateStatus} />)
                    }
                </div>

                <div className='indicator absolute left-2 bottom-2'>
                    <span className='indicator-item badge badge-secondary'>{archiveTasks.length}</span>
                    <Link to={"/archive"}>
                        <ArchiveBoxArrowDownIcon />
                        Archive
                    </Link>
                </div>
            </div>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method='dialog' onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex flex-col mb-5">
                            <label htmlFor="description" className="mb-2">
                                Description
                            </label>
                            <input
                                className="w-full p-5 rounded-md"
                                type="text"
                                id="description"
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

export default DisplayTasks;