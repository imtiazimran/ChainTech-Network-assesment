import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './shared/Modal';
import { Api } from './Context/ApiContext';

const AddTasks = ({ isOpen, setIsOpen }) => {

    const { handlePost } = useContext(Api)
    const { register, handleSubmit, reset } = useForm();

    if (isOpen) {
        document.getElementById('my_modal_3').showModal()
    }

    const onCancel = () => {
        reset();
        setIsOpen(false)
        document.getElementById('my_modal_3').close()
    };

    const onSubmit = (data) => {
        handlePost({ ...data, status: "pending" })
        onCancel()
    }

    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} onCancel={onCancel} >
                <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                            Title
                        </label>
                        <input
                            className="w-full rounded-md p-2"
                            type="text"
                            id="title"
                            {...register('title')}
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                            Description
                        </label>
                        <textarea
                            className="w-full rounded-md"
                            type="text"
                            id="description"
                            {...register('description')}
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                            Deadline
                        </label>
                        <input
                            className="w-full rounded-md"
                            type="date"
                            id="date"
                            {...register('date')}
                        />
                    </div>
                    <div className="flex gap-3 justify-end">
                        <button
                            onClick={() => onCancel()}
                            type="button"
                            className="btn btn-sm"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary btn-sm">
                            submit
                        </button>
                    </div>
                </form>
            </Modal>

        </div>
    );
};

export default AddTasks;