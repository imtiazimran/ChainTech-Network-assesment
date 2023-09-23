import React, { useContext } from 'react';
import TaskCard from './shared/TaskCard';
import { Api } from './Context/ApiContext';
import { Link } from 'react-router-dom';
import { ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline';

const DisplayTasks = () => {

    const { tasks, isLoading } = useContext(Api)


    const pendingTasks = tasks.filter(task => task.status === 'pending');
    const runningTasks = tasks.filter(task => task.status === 'running');
    const doneTasks = tasks.filter(task => task.status === 'done');
    const archiveTasks = tasks.filter(task => task.status === 'archive');
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
                            pendingTasks.map((task) => <TaskCard task={task} />)
                    }
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    {
                        isLoading ? <span className="loading loading-dots loading-lg"></span> :
                            runningTasks.map((task) => <TaskCard task={task} />)
                    }
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    {
                        isLoading ? <span className="loading loading-dots loading-lg"></span> :
                            doneTasks.map((task) => <TaskCard task={task} />)
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
        </div>
    );
};

export default DisplayTasks;