import Job from '../models/job';

export const job = async ( ctx, next ) => {
  const data = ctx.request.body;
  const job = new Job( data );

  try{
    job.save();
    ctx.body = 'Job has been Posted!';
    ctx.status = 200;
  }catch( err ){
    err => ctx.status = 500;
  }
};

export const getJobs = async ( ctx, next ) => {
  try{
    ctx.body =  await Job.find( {} ).exec(); 
    ctx.status = 200;
  }catch( err ){
    err => ctx.status = 500;
  }
};