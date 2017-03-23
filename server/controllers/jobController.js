import Job from '../models/job';
import parse from 'co-body'

export function* job(){
  const data = yield parse(this);
  const job = new Job(data);

  job.save(function(err){
    if(err) throw err;
    console.log('job created!')
  });
  
  this.status = 200;
}

export function* getJobs(){
  this.body =  yield Job.find({}).exec(); 
  this.status = 200
};