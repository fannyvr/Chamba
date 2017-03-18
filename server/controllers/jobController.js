import Job from '../models/job';

const job = Job({
  title: 'NEED COOK!',
  position: 'cook',
  salary: '10'
});

job.save(function(err){
  if(err) throw err;
  console.log('job created!')
});