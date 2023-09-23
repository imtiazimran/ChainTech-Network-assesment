
import React, { useContext } from 'react';
import TaskCard from './shared/TaskCard';
import { Api } from './Context/ApiContext';

const ArchiveTasks = () => {

    const { tasks, isLoading } = useContext(Api)

    const archiveTasks = tasks.filter(task => task.status === 'archive');

    return (
        <div className='container mx-auto'>

            <div className="flex gap-5">
                {
                    isLoading ? <span className="loading loading-dots loading-lg"></span> :
                        archiveTasks.map((task) => <TaskCard task={task} />)
                }
            </div>
        </div>
    );
};

export default ArchiveTasks;