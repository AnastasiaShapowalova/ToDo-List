import { Radio } from 'antd';

const TasksList = ({ todos }) => {
  return (
    <div>
      {todos.map((item, index) => (
        <div key={index} id={Math.floor(Math.random() * 10000)} style={{width: '1000px'}}>
					
						<Radio/>
						<span className='todo-row'>
          	{item}
					</span>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
