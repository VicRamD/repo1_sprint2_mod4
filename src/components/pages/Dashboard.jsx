import DashboardSelector from './DashboardSelector';

const Dashboard = () => {

  return (
    <div className='flex flex-col px-2'>
      <h1 className='text-4xl font-semibold px-4 py-2'>Darshboard</h1>
      <DashboardSelector/>
    </div>
    
  )
}

export default Dashboard